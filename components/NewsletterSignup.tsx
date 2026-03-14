"use client";

import { useState } from "react";

export default function NewsletterSignup() {
    const [email, setEmail] = useState("");
    const [consent, setConsent] = useState(false);
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!consent) return;
        setLoading(true);
        setError(false);
        try {
            const res = await fetch("/api/newsletter", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, consent: true }),
            });
            if (res.ok) { setSuccess(true); setEmail(""); }
            else setError(true);
        } catch { setError(true); }
        finally { setLoading(false); }
    };

    if (success) {
        return (
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
                <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-foreground/30 mb-3">Newsletter</p>
                    <p className="text-2xl md:text-3xl font-bold tracking-tight">Sei dentro.</p>
                </div>
                <p className="text-foreground/50 font-light text-sm max-w-xs">
                    Ogni 2 settimane nella tua inbox. Zero hype, solo sistemi che funzionano.
                </p>
            </div>
        );
    }

    return (
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-10">
            {/* Left: copy */}
            <div className="flex-1 max-w-sm">
                <p className="text-xs font-bold uppercase tracking-widest text-foreground/30 mb-4">Newsletter</p>
                <h3 className="text-2xl md:text-3xl font-bold tracking-tight leading-snug mb-3">
                    RAG, LLM, Agents.<br />Ogni 2 settimane.
                </h3>
                <p className="text-sm text-foreground/50 font-light">
                    Casi reali, architetture, errori da evitare. Solo contenuti che usi — niente hype, niente spam.
                </p>
            </div>

            {/* Right: form */}
            <form onSubmit={handleSubmit} className="flex-1 max-w-md w-full">
                <div className="flex gap-0 border border-foreground/15 rounded-full overflow-hidden focus-within:border-foreground/40 transition-colors mb-4">
                    <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="nome@azienda.com"
                        className="flex-1 bg-transparent px-6 py-4 text-sm font-light placeholder:text-foreground/30 focus:outline-none min-w-0"
                    />
                    <button
                        type="submit"
                        disabled={loading || !consent}
                        className="bg-foreground text-background text-sm font-bold px-7 py-4 hover:bg-foreground/85 transition-colors disabled:opacity-40 whitespace-nowrap rounded-full"
                    >
                        {loading ? "..." : "Iscriviti"}
                    </button>
                </div>

                {/* GDPR Consent — obbligatorio per legge */}
                <label className="flex items-start gap-3 cursor-pointer group px-1">
                    <div className="relative flex shrink-0 mt-0.5">
                        <input
                            type="checkbox"
                            checked={consent}
                            onChange={(e) => setConsent(e.target.checked)}
                            required
                            className="peer sr-only"
                        />
                        <div className="w-4 h-4 border border-foreground/30 rounded-sm flex items-center justify-center group-hover:border-foreground/60 peer-checked:border-primary peer-checked:bg-primary transition-colors">
                            {consent && (
                                <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 12 12" stroke="currentColor" strokeWidth={2.5}>
                                    <path d="M2 6l3 3 5-5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            )}
                        </div>
                    </div>
                    <span className="text-xs text-foreground/40 font-light leading-snug">
                        Acconsento a ricevere comunicazioni commerciali e informative via email da Rayo Consulting (newsletter).
                        Potrò disiscrivermi in qualsiasi momento con un click. I dati saranno trattati secondo la{" "}
                        <a href="/privacy-policy" className="underline hover:text-foreground/70 transition-colors">Privacy Policy</a>.
                        Il consenso è libero e revocabile.
                    </span>
                </label>

                {error && (
                    <p className="mt-3 text-xs text-red-500 font-light pl-1">Qualcosa è andato storto. Riprova.</p>
                )}
            </form>
        </div>
    );
}
