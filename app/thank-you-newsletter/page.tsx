"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function ThankYouNewsletterPage() {
    useEffect(() => {
        if (typeof window !== "undefined" && typeof (window as unknown as { gtag?: (...a: unknown[]) => void }).gtag === "function") {
            (window as unknown as { gtag: (...a: unknown[]) => void }).gtag("event", "newsletter_signup", { send_to: "G-9T1HYCRWDK", event_category: "newsletter", event_label: "thank_you_page" });
        }
    }, []);

    return (
        <main className="min-h-screen pt-32 pb-24 px-6 md:px-12 flex flex-col items-center justify-center text-center max-w-xl mx-auto">
            <div className="w-20 h-20 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-8">
                <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                </svg>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">Sei iscritto.</h1>
            <p className="text-foreground/60 text-lg mb-8 leading-relaxed">
                Riceverai insights su RAG, LLM e AI enterprise circa una volta al mese. Niente spam.
            </p>
            <p className="text-sm text-foreground/40 mb-10">
                Nel frattempo: vuoi parlare con un ingegnere per un progetto?
            </p>
            <Link
                href="/contact"
                className="inline-flex px-8 py-4 bg-primary text-white font-bold rounded-full hover:bg-primary/90 transition-colors text-sm"
            >
                Prenota una call
            </Link>
        </main>
    );
}
