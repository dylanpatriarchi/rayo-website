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
    };

    const handleDecline = () => {
        localStorage.setItem("rayo-cookie-consent", "declined");
        setShow(false);
    };

    if (!show) return null;

    return (
        <div className="fixed bottom-0 left-0 w-full bg-background/95 backdrop-blur-md border-t border-foreground/10 p-6 md:p-8 z-[60] shadow-[0_-10px_40px_rgba(0,0,0,0.05)]">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="max-w-3xl">
                    <h4 className="font-bold mb-2">Rispetto della Privacy</h4>
                    <p className="text-sm font-light text-foreground/70">
                        Utilizziamo cookie tecnici per il funzionamento del sito e cookie analitici anonimizzati per migliorare l&apos;esperienza.
                        Non tracciamo dati sensibili senza il tuo consenso esplicito. Leggi la <a href="#" className="underline">Cookie Policy</a>.
                    </p>
                </div>
                <div className="flex gap-4 shrink-0">
                    <button onClick={handleDecline} className="px-6 py-2 text-sm font-medium border border-foreground/20 rounded-full hover:bg-foreground/5 transition-colors">
                        Solo Necessari
                    </button>
                    <button onClick={handleAccept} className="px-6 py-2 text-sm font-bold bg-foreground text-background rounded-full hover:bg-foreground/90 transition-colors">
                        Accetta Tutti
                    </button>
                </div>
            </div>
        </div>
    );
}
