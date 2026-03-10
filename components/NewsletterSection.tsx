"use client";

import { useState } from "react";

export default function NewsletterSection() {
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [message, setMessage] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email.trim()) return;
        setStatus("loading");
        setMessage("");
        try {
            const res = await fetch("/api/newsletter", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email: email.trim() }),
            });
            const data = await res.json();
            if (res.ok && (data.ok ?? data.success ?? data.subscribed)) {
                if (typeof window !== "undefined" && typeof (window as unknown as { gtag?: (...a: unknown[]) => void }).gtag === "function") {
                    (window as unknown as { gtag: (...a: unknown[]) => void }).gtag("event", "newsletter_signup", { send_to: "G-9T1HYCRWDK", event_category: "newsletter", event_label: "home" });
                }
                window.location.href = "/thank-you-newsletter";
                return;
            } else {
                setStatus("error");
                setMessage(data.message || "Qualcosa è andato storto. Riprova più tardi.");
            }
        } catch {
            setStatus("error");
            setMessage("Errore di connessione. Riprova.");
        }
    };

    return (
        <section className="py-24 px-6 md:px-12 border-t border-foreground/10 bg-foreground/[0.02]">
            <div className="max-w-2xl mx-auto text-center">
                <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-4">Newsletter</h2>
                <h3 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">
                    Insights AI, una volta al mese.
                </h3>
                <p className="text-foreground/60 font-light mb-8">
                    RAG, LLM, costi e best practice. Niente spam, solo contenuti utili.
                </p>
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="la-tua@email.com"
                        required
                        disabled={status === "loading"}
                        className="flex-1 min-w-0 px-4 py-3 rounded-full border border-foreground/20 bg-background focus:border-primary focus:outline-none text-sm"
                    />
                    <button
                        type="submit"
                        disabled={status === "loading"}
                        className="px-6 py-3 bg-primary text-white font-bold rounded-full hover:bg-primary/90 transition-colors text-sm disabled:opacity-70 whitespace-nowrap"
                    >
                        {status === "loading" ? "Iscrizione..." : "Iscriviti"}
                    </button>
                </form>
                {message && (
                    <p className={`mt-4 text-sm ${status === "success" ? "text-primary" : "text-red-500"}`}>
                        {message}
                    </p>
                )}
                <p className="mt-6 text-xs text-foreground/40">
                    Iscrivendoti accetti la{" "}
                    <a href="/privacy-policy" className="underline hover:text-foreground/60">Privacy Policy</a>.
                    Puoi cancellarti in qualsiasi momento.
                </p>
            </div>
        </section>
    );
}
