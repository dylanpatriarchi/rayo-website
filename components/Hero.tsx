"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { animateTextReveal } from "@/utils/gsap-animations";

export default function Hero() {
    const titleRef = useRef<HTMLHeadingElement>(null);
    const subtitleRef = useRef<HTMLParagraphElement>(null);

    useEffect(() => {
        animateTextReveal(titleRef.current, 0);
        animateTextReveal(subtitleRef.current, 0.2);
    }, []);

    return (
        <section className="relative h-screen w-full flex flex-col justify-center px-6 md:px-12 pt-20 overflow-hidden bg-background">
            {/* Abstract Background Elements */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
                <div className="absolute top-[-20%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-gradient-to-b from-primary/5 to-transparent blur-[120px]" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-gradient-to-t from-primary/5 to-transparent blur-[100px]" />
            </div>

            {/* Grid Overlay for texture */}
            <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
                style={{ backgroundImage: 'radial-gradient(#1C1C1E 1px, transparent 1px)', backgroundSize: '32px 32px' }}>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto w-full">
                <div className="overflow-hidden">
                    <h1
                        ref={titleRef}
                        className="text-6xl md:text-8xl lg:text-[9rem] font-bold tracking-tighter leading-[0.9] text-foreground opacity-0 translate-y-full"
                    >
                        L&apos;intelligenza <br className="hidden md:block" />
                        artificiale, <br />
                        <span className="text-primary">distillata.</span>
                    </h1>
                </div>

                <div className="overflow-hidden mt-8 md:mt-16 max-w-2xl ml-0 md:ml-auto">
                    <p
                        ref={subtitleRef}
                        className="text-xl md:text-2xl font-light text-foreground/80 opacity-0 translate-y-full leading-relaxed"
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
