import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        const { email } = await request.json();

        if (!email || !email.includes("@")) {
            return NextResponse.json({ error: "Email non valida" }, { status: 400 });
        }

        const apiKey = process.env.BREVO_API_KEY;
        const listId = Number(process.env.BREVO_LIST_ID);

        if (!apiKey || !listId) {
            console.error("BREVO_API_KEY o BREVO_LIST_ID mancanti");
            return NextResponse.json({ error: "Configurazione server mancante" }, { status: 500 });
        }

        const response = await fetch("https://api.brevo.com/v3/contacts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "api-key": apiKey,
            },
            body: JSON.stringify({
                email,
                listIds: [listId],
                updateEnabled: true, // aggiorna se il contatto esiste già
            }),
        });

        // 201 = contatto creato, 204 = già esistente e aggiornato
        if (response.status === 201 || response.status === 204) {
            return NextResponse.json({ ok: true });
        }

        const data = await response.json();
        console.error("Brevo error:", data);
        return NextResponse.json({ error: "Errore Brevo", details: data }, { status: 502 });
    } catch (error) {
        console.error("Newsletter route error:", error);
        return NextResponse.json({ error: "Errore server" }, { status: 500 });
    }
}
