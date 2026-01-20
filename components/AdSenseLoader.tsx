"use client";

import { useEffect } from "react";

const GOOGLE_ADS_CLIENT_ID = "ca-pub-4372911380864795";

export default function AdSenseLoader() {
    useEffect(() => {
        const loadAds = () => {
            const consent = localStorage.getItem("rayo-cookie-consent");
            if (consent === "accepted") {
                if (document.getElementById("google-ads-script")) return;

                const script = document.createElement("script");
                script.id = "google-ads-script";
                script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${GOOGLE_ADS_CLIENT_ID}`;
                script.crossOrigin = "anonymous";
                script.async = true;
                document.body.appendChild(script);
            }
        };

        // Check initially
        loadAds();

        // Listen for updates
        const handleConsentUpdate = () => loadAds();
        window.addEventListener("cookie-consent-updated", handleConsentUpdate);

        return () => {
            window.removeEventListener("cookie-consent-updated", handleConsentUpdate);
        };
    }, []);

    return null;
}
