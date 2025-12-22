"use client";

import { useEffect, useState } from "react";
import Script from "next/script";

export default function Analytics() {
    const [consentGiven, setConsentGiven] = useState(false);

    useEffect(() => {
        const checkConsent = () => {
            const consent = localStorage.getItem("rayo-cookie-consent");
            if (consent === "accepted") {
                setConsentGiven(true);
            } else {
                setConsentGiven(false);
            }
        };

        // Check initially
        checkConsent();

        // Listen for updates from CookieBanner
        window.addEventListener("cookie-consent-updated", checkConsent);

        return () => {
            window.removeEventListener("cookie-consent-updated", checkConsent);
        };
    }, []);

    if (!consentGiven) return null;

    return (
        <>
            <Script
                strategy="afterInteractive"
                src={`https://www.googletagmanager.com/gtag/js?id=G-9T1HYCRWDK`}
            />
            <Script
                id="google-analytics"
                strategy="afterInteractive"
            >
                {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-9T1HYCRWDK');
        `}
            </Script>
        </>
    );
}
