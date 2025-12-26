import { InlineWidget } from "react-calendly";
import { useState, useEffect } from "react";

export default function CalendlyWidget() {
    const [consentGiven, setConsentGiven] = useState(false);

    useEffect(() => {
        const checkConsent = () => {
            const consent = localStorage.getItem("rayo-cookie-consent");
            setConsentGiven(consent === "accepted");
        };

        checkConsent();
        window.addEventListener("cookie-consent-updated", checkConsent);
        return () => window.removeEventListener("cookie-consent-updated", checkConsent);
    }, []);

    if (!consentGiven) {
        return (
            <div className="w-full h-64 mt-8 flex flex-col items-center justify-center bg-foreground/5 rounded-2xl border border-foreground/10 p-6 text-center">
                <p className="text-foreground/70 mb-4">
                    Per visualizzare il calendario e prenotare una chiamata, è necessario accettare i cookie funzionali di terze parti (Calendly).
                </p>
                <button
                    onClick={() => {
                        localStorage.setItem("rayo-cookie-consent", "accepted");
                        window.dispatchEvent(new Event("cookie-consent-updated"));
                    }}
                    className="px-6 py-2 bg-foreground text-background rounded-full text-sm font-bold hover:opacity-80 transition-opacity"
                >
                    Accetta Cookie e Visualizza Calendario
                </button>
            </div>
        );
    }

    return (
        <div className="w-full h-[700px] mt-8">
            <InlineWidget
                url="https://calendly.com/rayo-info/30min"
                styles={{
                    height: '100%',
                    width: '100%'
                }}
            />
        </div>
    );
}
