"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { gsap } from "gsap";

interface InteractiveLogoProps {
    className?: string;
}

export default function InteractiveLogo({ className = "" }: InteractiveLogoProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const [isHovered, setIsHovered] = useState(false);

    // Mouse position state for the mask
    const mouseX = useRef(0);
    const mouseY = useRef(0);

    // Initial mask size - 0 means hidden
    const maskSize = useRef(0);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const handleMouseMove = (e: MouseEvent) => {
            const rect = container.getBoundingClientRect();
            mouseX.current = e.clientX - rect.left;
            mouseY.current = e.clientY - rect.top;
        };

        const handleMouseEnter = () => {
            setIsHovered(true);
            gsap.to(maskSize, {
                current: 250, // Size of the distortion area
                duration: 0.5,
                ease: "power2.out",
                onUpdate: updateMask
            });
        };

        const handleMouseLeave = () => {
            setIsHovered(false);
            gsap.to(maskSize, {
                current: 0,
                duration: 0.5,
                ease: "power2.out",
                onUpdate: updateMask
            });
        };

        const updateMask = () => {
            if (container) {
                // Update CSS variables for the mask
                container.style.setProperty('--mask-x', `${mouseX.current}px`);
                container.style.setProperty('--mask-y', `${mouseY.current}px`);
                container.style.setProperty('--mask-size', `${maskSize.current}px`);
            }
        };

        // Animation loop for smooth tracking
        let rafId: number;
        const tick = () => {
            if (isHovered) {
                updateMask();
            }
            rafId = requestAnimationFrame(tick);
        };
        tick();

        container.addEventListener("mousemove", handleMouseMove);
        container.addEventListener("mouseenter", handleMouseEnter);
        container.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            container.removeEventListener("mousemove", handleMouseMove);
            container.removeEventListener("mouseenter", handleMouseEnter);
            container.removeEventListener("mouseleave", handleMouseLeave);
            cancelAnimationFrame(rafId);
        };
    }, [isHovered]);

    return (
        <div
            ref={containerRef}
            className={`relative group aspect-[3/1] ${className}`}
            style={{
                // Initialize variables
                ['--mask-x' as any]: '50%',
                ['--mask-y' as any]: '50%',
                ['--mask-size' as any]: '0px'
            }}
        >
            {/* 1. Base CLEAN Logo (Bottom Layer) */}
            <div className="absolute inset-0 z-10">
                <Image
                    src="/logo.svg"
                    alt="Rayo Logo Base"
                    fill
                    className="object-contain"
                    priority
                />
            </div>

            {/* 2. Distorted Logo (Top Layer) - Masked */}
            <div
                className="absolute inset-0 z-20 pointer-events-none"
                style={{
                    filter: "url(#logo-distortion)",
                    maskImage: `radial-gradient(circle at var(--mask-x) var(--mask-y), black 0%, transparent var(--mask-size))`,
                    WebkitMaskImage: `radial-gradient(circle at var(--mask-x) var(--mask-y), black 0%, transparent var(--mask-size))`
                }}
            >
                <Image
                    src="/logo.svg"
                    alt="Rayo Logo Distorted"
                    fill
                    className="object-contain opacity-90" // Slightly lower opacity for blend
                    priority
                />
            </div>

            {/* SVG Filter Definition (Hidden) */}
            <svg className="absolute w-0 h-0 overflow-hidden" aria-hidden="true">
                <defs>
                    <filter id="logo-distortion">
                        <feTurbulence
                            type="turbulence"
                            baseFrequency="0.9"
                            numOctaves="3"
                            result="warp"
                        />
                        <feDisplacementMap
                            in="SourceGraphic"
                            in2="warp"
                            scale="150"
                            xChannelSelector="R"
                            yChannelSelector="G"
                        />
                    </filter>
                </defs>
            </svg>
        </div>
    );
}
