"use client";

import { useState } from "react";

export default function NewsletterSignup() {
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        setError(false);
        try {
            const res = await fetch("/api/newsletter", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email }),
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
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-10">
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
                <div className="flex gap-0 border border-foreground/15 rounded-full overflow-hidden focus-within:border-foreground/40 transition-colors">
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
                        disabled={loading}
                        className="bg-foreground text-background text-sm font-bold px-7 py-4 hover:bg-foreground/85 transition-colors disabled:opacity-60 whitespace-nowrap rounded-full"
                    >
                        {loading ? "..." : "Iscriviti"}
                    </button>
                </div>
                {error && (
                    <p className="mt-3 text-xs text-red-500 font-light pl-4">Qualcosa è andato storto. Riprova.</p>
                )}
                <p className="mt-3 text-xs text-foreground/30 font-light pl-4">
                    Disiscriviti quando vuoi.{" "}
                    <a href="/privacy-policy" className="underline hover:text-foreground/50 transition-colors">Privacy Policy</a>.
                </p>
            </form>
        </div>
    );
}
