"use client";

import { useState, useEffect } from "react";

export default function CookieBanner() {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem("rayo-cookie-consent");
        if (!consent) {
            setShow(true);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem("rayo-cookie-consent", "accepted");
        setShow(false);
        window.dispatchEvent(new Event("cookie-consent-updated"));
    };

    const handleDecline = () => {
        localStorage.setItem("rayo-cookie-consent", "declined");
        setShow(false);
        window.dispatchEvent(new Event("cookie-consent-updated"));
    };

    if (!show) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-background/20 backdrop-blur-[2px]" />
            <div className="relative w-full max-w-md bg-background/90 backdrop-blur-xl border border-foreground/10 rounded-2xl p-6 shadow-2xl">
                <div className="flex flex-col gap-4">
                    <div>
                        <h4 className="font-bold text-lg mb-2">Privacy & Cookies</h4>
                        <p className="text-sm font-light text-foreground/70 leading-relaxed">
                            Utilizziamo cookie tecnici e analitici anonimizzati per garantirti la migliore esperienza di navigazione.
                            Puoi gestire le tue preferenze o accettare tutti i cookie.
                            <a href="/cookie-policy" className="block mt-2 text-xs underline opacity-60 hover:opacity-100 transition-opacity">
                                Leggi la Cookie Policy
                            </a>
                        </p>
                    </div>
                    <div className="flex flex-col gap-2 pt-2">
                        <button
                            onClick={handleAccept}
                            className="w-full py-3 text-sm font-bold bg-foreground text-background rounded-xl hover:bg-foreground/90 transition-colors"
                        >
                            Accetta Tutti
                        </button>
                        <button
                            onClick={handleDecline}
                            className="w-full py-3 text-sm font-medium border border-foreground/10 text-foreground/60 rounded-xl hover:bg-foreground/5 hover:text-foreground transition-colors"
                        >
                            Solo Necessari
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
