"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const services = [
    {
        title: "RAG Enterprise Systems",
        description: "Non un semplice search. Costruiamo pipeline RAG (Retrieval-Augmented Generation) che comprendono la semantica dei tuoi documenti tecnici, legali o finanziari. Risposte precise, citazioni verificabili, zero allucinazioni.",
        price: "Da €4.500",
        detail: "Setup & Ingestion",
        tags: ["Vector DB", "Semanic Search", "Python", "LangChain"]
    },
    {
        title: "LLM Fine-Tuning",
        description: "Quando il generalista fallisce, lo specialista vince. Prendiamo modelli open-weights (Llama 3, Mistral) e li addestriamo sul tuo know-how aziendale. Il modello parlerà la tua lingua e seguirà le tue procedure.",
        price: "Da €8.000",
        detail: "Training Completo",
        tags: ["LoRA", "PyTorch", "Hugging Face", "Eval"]
    },
    {
        title: "Private Infrastructure",
        description: "La sovranità dei dati non è negoziabile. Progettiamo infrastrutture di inferenza on-premise o su cloud privato (AWS/Azure). I tuoi dati non lasciano mai il tuo perimetro di sicurezza.",
        price: "Su Preventivo",
        detail: "Architettura & Deploy",
        tags: ["Docker", "Kubernetes", "vLLM", "TGI"]
    }
];

export default function Services() {
    const sectionRef = useRef<HTMLElement>(null);
    const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        // Register ScrollTrigger
        gsap.registerPlugin(ScrollTrigger);

        if (!sectionRef.current) return;

        const cards = cardsRef.current.filter(Boolean);
        const totalCards = cards.length;

        // Pin the section
        const ctx = gsap.context(() => {
            ScrollTrigger.create({
                trigger: sectionRef.current,
                start: "top top",
                end: `+=${totalCards * 100}%`,
                pin: true,
                scrub: 1,
            });

            // Animate each card
            cards.forEach((card, i) => {
                if (i === totalCards - 1) return; // Last card doesn't need to move away

                gsap.to(card, {
                    scale: 0.9 + (0.05 * i), // Subtle scale down
                    opacity: 0,
                    y: -50,
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: `top top+=${i * 100}%`,
                        end: `top top+=${(i + 1) * 100}%`,
                        scrub: 1,
                    }
                });
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} id="services" className="relative h-screen w-full bg-background overflow-hidden flex items-center justify-center">
            {/* Background Texture */}
            <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
                <Image src="/images/services-bg.png" alt="Abstract Network" fill className="object-cover" />
            </div>

            <div className="relative z-10 w-full max-w-7xl px-6 md:px-12 h-screen flex flex-col pt-32 pb-12">
                <div className="mb-12 shrink-0">
                    <h2 className="text-sm font-bold uppercase tracking-widest mb-2 text-primary">Arsenale Tecnico</h2>
                    <h3 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">Soluzioni Definitive.</h3>
                </div>

                <div className="relative flex-1 w-full max-w-4xl mx-auto">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            ref={(el) => { cardsRef.current[index] = el; }}
                            className="absolute top-0 left-0 w-full h-[50vh] md:h-[60vh] bg-white/80 backdrop-blur-xl border border-foreground/5 dark:border-white/10 shadow-2xl rounded-3xl p-8 md:p-12 flex flex-col justify-between"
                            style={{
                                top: `${index * 20}px`, // Slight offset for visibility before scrolling
                                zIndex: services.length - index, // Stack order
                                transform: `scale(${1 - (index * 0.05)}) translateY(${index * 20}px)` // Initial stack visual
                            }}
                        >
                            <div>
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {service.tags.map(tag => (
                                        <span key={tag} className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wide">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <h4 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">{service.title}</h4>
                                <p className="text-lg md:text-xl text-foreground/80 font-medium leading-relaxed max-w-2xl">
                                    {service.description}
                                </p>
                            </div>

                            <div className="pt-8 border-t border-foreground/10 flex items-end justify-between">
                                <div>
                                    <div className="text-sm uppercase tracking-wide text-foreground/50 mb-1">{service.detail}</div>
                                    <div className="text-3xl font-bold tracking-tight text-primary">{service.price}</div>
                                </div>
                                <a href="/services" className="px-8 py-4 bg-foreground text-background font-bold rounded-full hover:bg-foreground/80 transition-colors">
                                    Approfondisci
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
