"use client";

import { useEffect, useState } from "react";

interface GoogleAdUnitProps {
    slot: string;
    format?: string;
    responsive?: boolean;
    style?: React.CSSProperties;
}

export default function GoogleAdUnit({ slot, format = "auto", responsive = true, style }: GoogleAdUnitProps) {
    const [showAd, setShowAd] = useState(false);

    useEffect(() => {
        const checkConsent = () => {
            const consent = localStorage.getItem("rayo-cookie-consent");
            setShowAd(consent === "accepted");
        };

        checkConsent();

        const handleConsentUpdate = () => checkConsent();
        window.addEventListener("cookie-consent-updated", handleConsentUpdate);

        return () => {
            window.removeEventListener("cookie-consent-updated", handleConsentUpdate);
        };
    }, []);

    useEffect(() => {
        if (showAd) {
            // Use setTimeout to ensure the DOM is fully painted and has dimensions
            const timer = setTimeout(() => {
                try {
                    // @ts-ignore
                    (window.adsbygoogle = window.adsbygoogle || []).push({});
                } catch (e) {
                    console.error("AdSense error", e);
                }
            }, 100);

            return () => clearTimeout(timer);
        }
    }, [showAd]);

    if (!showAd) return null;

    return (
        <div className="w-full text-center my-8 min-h-[100px] bg-background/50 animate-in fade-in zoom-in duration-500">
            <ins
                className="adsbygoogle"
                style={{ display: "block", width: "100%", ...style }}
                data-ad-client="ca-pub-4372911380864795"
                data-ad-slot={slot}
                data-ad-format={format}
                data-full-width-responsive={responsive ? "true" : "false"}
            />
        </div>
    );
}
