"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";

export default function InteractiveLogo() {
    const turbulenceRef = useRef<SVGFETurbulenceElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Initial animation to settle the turbulence
        if (turbulenceRef.current) {
            gsap.to(turbulenceRef.current, {
                attr: { baseFrequency: 0 },
                duration: 1,
                ease: "power2.out"
            });
        }
    }, []);

    const handleMouseEnter = () => {
        if (!turbulenceRef.current) return;

        // Create a glitch/noise spike
        gsap.killTweensOf(turbulenceRef.current);
        const tl = gsap.timeline();

        tl.to(turbulenceRef.current, {
            attr: { baseFrequency: 0.2 }, // High frequency noise
            duration: 0.1,
            ease: "power1.in"
        }).to(turbulenceRef.current, {
            attr: { baseFrequency: 0.02 }, // Subtle distortion
            duration: 0.2,
            ease: "power1.out"
        });
    };

    const handleMouseLeave = () => {
        if (!turbulenceRef.current) return;

        // Return to calm
        gsap.to(turbulenceRef.current, {
            attr: { baseFrequency: 0 },
            duration: 0.5,
            ease: "power2.out"
        });
    };

    return (
        <div
            ref={containerRef}
            className="relative w-64 h-64 md:w-96 md:h-96 cursor-pointer"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {/* Filter Definition */}
            <svg className="hidden">
                <defs>
                    <filter id="logo-noise">
                        <feTurbulence
                            ref={turbulenceRef}
                            type="fractalNoise"
                            baseFrequency="0"
                            numOctaves="2"
                            result="noise"
                        />
                        <feDisplacementMap
                            in="SourceGraphic"
                            in2="noise"
                            scale="20"
                        />
                    </filter>
                </defs>
            </svg>

            {/* Logo with Filter Applied */}
            <div
                className="w-full h-full relative"
                style={{ filter: "url(#logo-noise)" }}
            >
                <Image
                    src="/logo.svg"
                    alt="Rayo Logo"
                    fill
                    className="object-contain"
                    priority
                />
            </div>
        </div>
    );
}
