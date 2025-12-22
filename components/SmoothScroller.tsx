"use client";

import { ReactLenis } from "lenis/react";
import { registerGSAP } from "@/utils/gsap-animations";
import { useEffect } from "react";

export default function SmoothScroller({ children }: { children: React.ReactNode }) {
    useEffect(() => {
        registerGSAP();
    }, []);

    return (
        <ReactLenis root options={{ lerp: 0.1, duration: 1.5 }}>
            {children}
        </ReactLenis>
    );
}
