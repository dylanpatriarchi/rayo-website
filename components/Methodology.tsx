"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const steps = [
    {
        number: "01",
        title: "Discovery",
        description: "Analisi profonda dei flussi dati esistenti e identificazione dei colli di bottiglia risolvibili con l'AI."
    },
    {
        number: "02",
        title: "Engineering",
        description: "Sviluppo iterativo di pipeline RAG e fine-tuning di modelli open-weights (Llama 3, Mistral) ottimizzati per il task."
    },
    {
        number: "03",
        title: "Deployment",
        description: "Rilascio in ambiente protetto, integrazione API e training del personale sull'utilizzo degli agenti."
    }
];

export default function Methodology() {
    const sectionRef = useRef<HTMLElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!sectionRef.current || !containerRef.current) return;

        const scrollTween = gsap.to(containerRef.current, {
            x: () => -(containerRef.current!.scrollWidth - window.innerWidth),
            ease: "none",
            scrollTrigger: {
                trigger: sectionRef.current,
                pin: true,
                scrub: 1,
                // End exactly when horizontal scroll completes
                end: () => "+=" + (containerRef.current!.scrollWidth - window.innerWidth),
                invalidateOnRefresh: true,
            }
        });

        return () => {
            scrollTween.kill();
        };
    }, []);

    return (
        <section
            id="methodology"
            ref={sectionRef}
            className="relative h-screen w-full bg-foreground text-background overflow-hidden"
        >
            <div className="absolute top-12 left-6 md:left-12 z-10">
                <h2 className="text-sm font-bold uppercase tracking-widest text-primary">Metodologia</h2>
            </div>

            <div
                ref={containerRef}
                className="flex h-full w-fit"
            >
                {steps.map((step, index) => (
                    <div
                        key={index}
                        className="w-screen h-full flex flex-col justify-center px-6 md:px-24 border-r border-white/10 shrink-0"
                    >
                        <div className="max-w-4xl">
                            <div className="text-[12rem] md:text-[20rem] font-bold leading-none tracking-tighter opacity-10 select-none -ml-4 md:-ml-12 font-sans mb-8 text-white">
                                {step.number}
                            </div>
                            <h3 className="text-4xl md:text-6xl font-bold mb-6 text-white">{step.title}</h3>
                            <p className="text-xl md:text-2xl font-light leading-relaxed max-w-2xl text-white/80">
                                {step.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
