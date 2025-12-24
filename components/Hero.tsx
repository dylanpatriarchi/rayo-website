"use client";

import { useEffect, useRef, useState } from "react";
import NeuralNetwork from "@/components/NeuralNetwork";
import { animateTextReveal } from "@/utils/gsap-animations";
import BlurText from "@/components/BlurText";

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
                            <BlurText
                                text="DISTILLATA."
                                delay={50}
                                animateBy="words"
                                direction="top"
                                className="inline-block text-primary"
                                onAnimationComplete={handleAnimationComplete}
                            />
                        </div>
                    </div>

                    <div className="overflow-hidden mt-8">
                        <p
                            ref={subtitleRef}
                            className="text-lg md:text-xl font-light text-neutral-500 leading-relaxed max-w-md opacity-0" // Start invisible for GSAP
                        >
                            Trasformiamo il caos dei dati in architetture operative. Soluzioni AI verticali per aziende che esigono precisione assoluta.
                        </p>
                    </div>

                    <div className={`mt-12 flex items-center gap-4 transition-opacity duration-1000 ${showButton ? 'opacity-100' : 'opacity-0'}`}>
                        {/* Removed CSS keyframe animation reliance */}
                        <a href="/methodology" className="group relative px-8 py-3 bg-foreground text-background text-sm font-medium hover:bg-primary transition-colors duration-300 rounded-full">
                            SCOPRI IL METODO
                        </a>
                    </div>
                </div>
            </div>

            {/* Right Panel: Dense Graph Visualization */}
            <div className="w-full md:w-1/2 min-h-[50vh] md:min-h-screen relative bg-background">
                <NeuralNetwork />

                {/* Overlay to fade edges if needed, but keeping it clean for now */}
            </div>
        </section>
    );
}
