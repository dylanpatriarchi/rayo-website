"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

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
            const response = await fetch("/api/newsletter", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email }),
            });

            if (response.ok) {
                setSuccess(true);
                setEmail("");
            } else {
                setError(true);
            }
        } catch {
            setError(true);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <p className="text-xs font-bold uppercase tracking-widest text-foreground/40 mb-4">
                Newsletter
            </p>
            <h3 className="text-xl font-bold tracking-tight mb-2">
                Aggiornamenti tecnici ogni 2 settimane.
            </h3>
            <p className="text-sm text-foreground/60 font-light mb-6">
                RAG, LLM, AI Agents. Solo contenuti utili, zero spam.
            </p>

            {success ? (
                <div className="flex items-center gap-3 text-foreground/80">
                    <svg
                        className="w-5 h-5 text-primary shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm font-medium">Iscritto. Grazie.</span>
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="flex items-end gap-3">
                    <div className="flex-1">
                        <label htmlFor="newsletter-email" className="sr-only">
                            Email
                        </label>
                        <input
                            id="newsletter-email"
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="nome@azienda.com"
                            className="w-full bg-transparent border-b border-foreground/20 py-3 focus:border-primary focus:outline-none transition-colors text-sm placeholder:text-foreground/30"
                        />
                    </div>
                    <button
                        type="submit"
                        disabled={loading}
                        className={cn(
                            "bg-foreground text-background text-sm font-bold px-6 py-3 rounded-full hover:bg-foreground/90 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 shrink-0",
                            loading && "opacity-70 cursor-wait"
                        )}
                    >
                        {loading ? "..." : "Iscriviti"}
                    </button>
                </form>
            )}

            {error && (
                <p className="mt-3 text-sm text-red-500 font-light">
                    Qualcosa è andato storto. Riprova.
                </p>
            )}

            <p className="mt-4 text-xs text-foreground/40 font-light leading-relaxed">
                Disiscriviti in qualsiasi momento. Dati trattati secondo la nostra{" "}
                <a href="/privacy-policy" className="underline hover:text-foreground/60 transition-colors">
                    Privacy Policy
                </a>
                .
            </p>
        </div>
    );
}
