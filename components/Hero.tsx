"use client";

import { useEffect, useRef, useState } from "react";
import NeuralNetwork from "@/components/NeuralNetwork";
import { animateTextReveal } from "@/utils/gsap-animations";
import BlurText from "@/components/BlurText";
import { FlipWords } from "@/components/ui/flip-words";

export default function Hero() {
    const subtitleRef = useRef<HTMLParagraphElement>(null);
    const [showButton, setShowButton] = useState(false);

    const handleAnimationComplete = () => {
        if (subtitleRef.current) {
            animateTextReveal(subtitleRef.current, 0);
        }
        // Delay button appearance slightly after subtitle starts
        setTimeout(() => setShowButton(true), 1000);
    };

    const words = ["OPERATIVA", "SCALABILE", "SICURA", "VELOCE"];

    // To ensure the blur animation also runs if we re-render or mount
    useEffect(() => {
        if (subtitleRef.current) {
            setTimeout(() => {
                animateTextReveal(subtitleRef.current!, 0);
            }, 500);
        }
        setTimeout(() => setShowButton(true), 1000);
    }, []);

    return (
        <section className="relative min-h-screen w-full flex flex-col-reverse md:flex-row bg-background pt-[80px] md:pt-0 overflow-hidden">
            {/* Left Panel: Content */}
            <div className="w-full md:w-1/2 flex flex-col justify-center px-6 md:px-16 lg:px-24 py-12 md:py-0 z-10 bg-background relative">
                <div className="max-w-xl">
                    <div className="min-h-[160px] md:min-h-[240px] flex items-center">
                        <div className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-[1.1] text-foreground">
                            <BlurText
                                text="L'INTELLIGENZA ARTIFICIALE,"
                                delay={50}
                                animateBy="words"
                                direction="top"
                                className="inline-block mr-2 md:mr-4"
                            />
                            <FlipWords words={words} className="text-primary px-0 font-bold" />
                        </div>
                    </div>

                    <div className="overflow-hidden mt-8">
                        <p
                            ref={subtitleRef}
                            className="text-lg md:text-xl font-light text-neutral-500 leading-relaxed max-w-md opacity-0" // Start invisible for GSAP
                        >
                            Riduci i costi operativi del 40-60% con un'infrastruttura AI proprietaria.
                            Dal caos dei dati al deploy in produzione in 4 settimane.
                        </p>
                    </div>

                    <div className={`mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-4 transition-opacity duration-1000 ${showButton ? 'opacity-100' : 'opacity-0'}`}>
                        {/* Primary CTA */}
                        <div onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })} className="cursor-pointer group relative px-8 py-4 bg-primary text-white text-sm font-bold tracking-wider hover:bg-primary/90 transition-all duration-300 rounded-full shadow-[0_0_20px_rgba(0,71,255,0.3)] hover:shadow-[0_0_30px_rgba(0,71,255,0.5)] transform hover:-translate-y-1">
                            RICHIEDI AUDIT GRATUITO
                        </div>

                        {/* Secondary CTA */}
                        <a href="/methodology" className="px-6 py-4 text-foreground/60 text-sm font-medium hover:text-foreground transition-colors border-b border-transparent hover:border-foreground/20">
                            Scopri il Metodo →
                        </a>
                    </div>
                </div>
            </div>

            {/* Right Panel: Dense Graph Visualization */}
            <div className="w-full md:w-1/2 min-h-[50vh] md:min-h-screen relative bg-background">
                <NeuralNetwork />
            </div>
        </section>
    );
}
