import { NextResponse } from "next/server";

/**
 * Newsletter: integrazione diretta (senza n8n).
 *
 * 1) MAILCHIMP (consigliato, nessun proxy):
 *    - Account Mailchimp → Extras → API Keys → Crea chiave.
 *    - Audience (List) → Settings → Audience name and defaults → "Audience ID".
 *    - La chiave è tipo "xxxx-us19": la parte dopo il trattino è il datacenter (us19).
 *    - Imposta: MAILCHIMP_API_KEY=xxx  MAILCHIMP_AUDIENCE_ID=yyy
 *
 * 2) WEBHOOK (opzionale, per Brevo/ConvertKit/n8n):
 *    - NEWSLETTER_WEBHOOK_URL=https://...  → POST con { email, source, subscribed_at }
 *
 * Se entrambi sono impostati, viene usato solo Mailchimp. Se solo il webhook è impostato, si usa quello.
 */

const MAILCHIMP_API_KEY = process.env.MAILCHIMP_API_KEY;
const MAILCHIMP_AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID;
const NEWSLETTER_WEBHOOK_URL = process.env.NEWSLETTER_WEBHOOK_URL;

function getMailchimpDatacenter(apiKey: string): string | null {
    const idx = apiKey.lastIndexOf("-");
    if (idx === -1) return null;
    return apiKey.slice(idx + 1).trim() || null;
}

async function addToMailchimp(email: string): Promise<{ ok: boolean; message?: string }> {
    if (!MAILCHIMP_API_KEY || !MAILCHIMP_AUDIENCE_ID) return { ok: false, message: "Mailchimp non configurato" };
    const dc = getMailchimpDatacenter(MAILCHIMP_API_KEY);
    if (!dc) return { ok: false, message: "API key Mailchimp non valida (manca datacenter)" };

    const url = `https://${dc}.api.mailchimp.com/3.0/lists/${MAILCHIMP_AUDIENCE_ID}/members`;
    const auth = Buffer.from(`anystring:${MAILCHIMP_API_KEY}`).toString("base64");

    const res = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Basic ${auth}`,
        },
        body: JSON.stringify({
            email_address: email,
            status: "subscribed",
        }),
    });

    const data = await res.json().catch(() => ({}));

    if (res.status === 200) return { ok: true };
    if (res.status === 400 && data.title === "Member Exists") return { ok: true }; // già iscritto
    const msg = typeof data.detail === "string" ? data.detail : "Servizio temporaneamente non disponibile.";
    return { ok: false, message: msg };
}

async function sendToWebhook(email: string): Promise<{ ok: boolean; message?: string }> {
    if (!NEWSLETTER_WEBHOOK_URL) return { ok: false, message: "Webhook non configurato" };

    const res = await fetch(NEWSLETTER_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            email,
            source: "rayo-website",
            subscribed_at: new Date().toISOString(),
        }),
    });

    if (!res.ok) {
        const text = await res.text();
        console.error("Newsletter webhook error:", res.status, text);
        return { ok: false, message: "Servizio temporaneamente non disponibile." };
    }
    return { ok: true };
}

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const email = typeof body?.email === "string" ? body.email.trim() : "";

        if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            return NextResponse.json(
                { ok: false, message: "Email non valida." },
                { status: 400 }
            );
        }

        if (MAILCHIMP_API_KEY && MAILCHIMP_AUDIENCE_ID) {
            const result = await addToMailchimp(email);
            if (result.ok) return NextResponse.json({ ok: true, subscribed: true });
            return NextResponse.json(
                { ok: false, message: result.message || "Iscrizione non riuscita." },
                { status: 502 }
            );
        }

        if (NEWSLETTER_WEBHOOK_URL) {
            const result = await sendToWebhook(email);
            if (result.ok) return NextResponse.json({ ok: true, subscribed: true });
            return NextResponse.json(
                { ok: false, message: result.message || "Iscrizione non riuscita." },
                { status: 502 }
            );
        }

        console.warn("Newsletter: nessun backend configurato (Mailchimp o webhook).");
        return NextResponse.json({
            ok: true,
            message: "Iscrizione registrata. Configura MAILCHIMP_API_KEY e MAILCHIMP_AUDIENCE_ID per Mailchimp diretto (nessun n8n).",
        });
    } catch (error) {
        console.error("Newsletter API error:", error);
        return NextResponse.json(
            { ok: false, message: "Errore interno." },
            { status: 500 }
        );
    }
}
