"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { animateTextReveal } from "@/utils/gsap-animations";

export default function Hero() {
    const titleRef = useRef<HTMLHeadingElement>(null);
    const subtitleRef = useRef<HTMLParagraphElement>(null);

    // useEffect(() => {
    //     animateTextReveal(titleRef.current, 0);
    //     animateTextReveal(subtitleRef.current, 0.2);
    // }, []);

    return (
        <section className="relative h-screen w-full overflow-hidden bg-background">
            {/* Abstract Background Elements (Central) - Static Logo Replacement */}
            <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none md:pointer-events-auto">
                <div className="w-[80%] max-w-3xl flex items-center justify-center opacity-90">
                    <Image
                        src="/logo.svg"
                        alt="Rayo Logo"
                        width={600}
                        height={200}
                        priority
                        className="w-full h-auto object-contain"
                    />
                </div>
            </div>

            {/* Grid Overlay for texture */}
            <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
                style={{ backgroundImage: 'radial-gradient(#1C1C1E 1px, transparent 1px)', backgroundSize: '32px 32px' }}>
            </div>

            {/* Title - Bottom Left (Responsive - Now consistent since Subtitle is hidden on mobile) */}
            <div className="absolute bottom-12 left-6 md:bottom-12 md:left-12 z-10 max-w-4xl text-left">
                <div className="overflow-visible pb-2 block">
                    <h1
                        ref={titleRef}
                        className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tighter leading-tight md:leading-[0.9] text-foreground"
                    >
                        L&apos;intelligenza <br className="hidden md:block" />
                        artificiale, <br />
                        <span className="text-primary">distillata.</span>
                    </h1>
                </div>
            </div>

            {/* Subtitle - Bottom Right (Hidden on Mobile) */}
            <div className="hidden md:block absolute bottom-12 right-12 z-10 max-w-sm md:max-w-md text-right">
                <div className="overflow-hidden">
                    <p
                        ref={subtitleRef}
                        className="text-lg md:text-xl font-light text-foreground/80 leading-relaxed"
                    >
                        Soluzioni AI verticali per aziende che esigono precisione ossessiva.
                        <br />
                        Trasformiamo il caos dei dati in architetture operative.
                    </p>
                </div>
            </div>
        </section>
    );
}
