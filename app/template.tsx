"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { usePathname } from "next/navigation";

export default function Template({ children }: { children: React.ReactNode }) {
    const containerRef = useRef<HTMLDivElement>(null);
    const pathname = usePathname();

    useEffect(() => {
        if (!containerRef.current) return;

        // Kill any existing animations on the container
        gsap.killTweensOf(containerRef.current);

        // Simple fade-in and slide-up animation
        gsap.fromTo(
            containerRef.current,
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }
        );
    }, [pathname]);

    return (
        <div ref={containerRef} className="opacity-0">
            {children}
        </div>
    );
}
