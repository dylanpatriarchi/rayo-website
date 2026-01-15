"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const steps = [
    {
        number: "01",
        title: "Data Audit",
        description: "Non tiriamo a indovinare. Analizziamo i tuoi flussi di dati grezzi per isolare le inefficienze che ti costano migliaia di euro al mese."
    },
    {
        number: "02",
        title: "AI Architecture",
        description: "Costruiamo il sistema. Pipeline RAG ibride e Modelli Fine-Tunati che operano nel tuo perimetro di sicurezza. Niente API pubbliche insicure."
    },
    {
        number: "03",
        title: "Integration",
        description: "Il sistema entra in produzione. Integrazione invisibile nei tuoi tool esistenti (ERP, CRM) e formazione del team per il massimo ROI."
    }
];

export default function Methodology() {
    const sectionRef = useRef<HTMLElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!sectionRef.current || !containerRef.current) return;

        gsap.registerPlugin(ScrollTrigger);

        const mm = gsap.matchMedia();

        mm.add("(min-width: 768px)", () => {
            const scrollTween = gsap.to(containerRef.current, {
                x: "-200vw", // Move by 2 screen widths
                ease: "none",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top top",
                    end: "bottom bottom",
                    scrub: 1,
                    invalidateOnRefresh: true,
                }
            });

            return () => {
                scrollTween.kill();
            };
        });

        return () => mm.revert();
    }, []);

    return (
        <section
            id="methodology"
            ref={sectionRef}
            className="relative w-full bg-foreground text-background md:h-[300vh] z-20"
        >
            <div className="md:sticky md:top-0 md:h-screen md:overflow-hidden bg-foreground">
                <div className="md:absolute top-12 left-6 md:left-12 z-30 py-12 px-6 md:p-0">
                    <h2 className="text-sm font-bold uppercase tracking-widest text-primary">Metodologia</h2>
                </div>

                <div
                    ref={containerRef}
                    className="flex flex-col md:flex-row md:h-full bg-foreground w-full md:w-[300vw]"
                >
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className="w-full md:w-[100vw] h-[80vh] md:h-full flex flex-col justify-center px-6 md:px-24 border-b md:border-b-0 md:border-r border-white/10 shrink-0"
                        >
                            <div className="max-w-4xl">
                                <div className="text-[8rem] md:text-[20rem] font-bold leading-none tracking-tighter opacity-10 select-none -ml-2 md:-ml-12 font-sans mb-4 md:mb-8 text-white">
                                    {step.number}
                                </div>
                                <h3 className="text-3xl md:text-6xl font-bold mb-4 md:mb-6 text-white">{step.title}</h3>
                                <p className="text-lg md:text-2xl font-light leading-relaxed max-w-2xl text-white/80">
                                    {step.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
