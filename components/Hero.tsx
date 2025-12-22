"use client";

import { useEffect, useRef } from "react";
import { animateTextReveal } from "@/utils/gsap-animations";

export default function Hero() {
    const titleRef = useRef<HTMLHeadingElement>(null);
    const subtitleRef = useRef<HTMLParagraphElement>(null);

    useEffect(() => {
        animateTextReveal(titleRef.current, 0);
        animateTextReveal(subtitleRef.current, 0.2);
    }, []);

    return (
        <section className="h-screen w-full flex flex-col justify-center px-6 md:px-12 pt-20">
            <div className="overflow-hidden">
                <h1
                    ref={titleRef}
                    className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.9] text-foreground opacity-0 translate-y-full"
                >
                    L&apos;intelligenza artificiale,
                    <br />
                    distillata.
                </h1>
            </div>

            <div className="overflow-hidden mt-8 md:mt-12 max-w-2xl">
                <p
                    ref={subtitleRef}
                    className="text-lg md:text-xl font-light text-foreground/80 opacity-0 translate-y-full"
                >
                    Soluzioni AI verticali per aziende che esigono precisione.
                    Nessun artificio, solo pura efficienza ingegneristica.
                </p>
            </div>
        </section>
    );
}
