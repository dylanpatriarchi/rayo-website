"use client";

import { useEffect } from "react";

const GOOGLE_ADS_CLIENT_ID = "ca-pub-4372911380864795";

export default function AdSenseLoader() {
    useEffect(() => {
        // With Google CMP & Consent Mode, we can load the script immediately.
        // Google checks the consent signals internally before serving ads.
        if (document.getElementById("google-ads-script")) return;

        const script = document.createElement("script");
        script.id = "google-ads-script";
        script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${GOOGLE_ADS_CLIENT_ID}`;
        script.crossOrigin = "anonymous";
        script.async = true;
        document.body.appendChild(script);

        return () => {
            // Optional: cleanup if needed, though usually scripts persist
        };
    }, []);

    return null;
}
