"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import clsx from "clsx";

const services = [
    {
        title: "RAG Enterprise Systems",
        description: "Non un semplice search. Costruiamo pipeline RAG (Retrieval-Augmented Generation) che comprendono la semantica dei documenti. Risposte precise, niente allucinazioni.",
        price: "Da €4.500",
        detail: "Ingestion & Vector DB",
        tags: ["Vector DB", "Semanic Search", "LangChain"],
        className: "md:col-span-2 md:row-span-2", // Big 'Feature' card
        image: "/images/service_rag_abstract_1766431892519.png"
    },
    {
        title: "LLM Fine-Tuning",
        description: "Specializza modelli open-weights (Llama 3, Mistral) sul tuo know-how aziendale specifico.",
        price: "Da €8.000",
        detail: "Training Completo",
        tags: ["LoRA", "PyTorch"],
        className: "md:col-span-1 md:row-span-1",
        image: "/images/service_finetuning_neural_1766431909340.png"
    },
    {
        title: "Private Infra",
        description: "Infrastruttura on-premise o cloud privato. I tuoi dati non escono mai.",
        price: "Custom",
        detail: "Secure Deploy",
        tags: ["Docker", "vLLM"],
        className: "md:col-span-1 md:row-span-1",
        image: "/images/service_infra_server_1766431924398.png"
    }
];

export default function Services() {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        // Simple entrance animation for the bento grid
        gsap.fromTo(".bento-card",
            { y: 50, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.8,
                stagger: 0.1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                }
            }
        );
    }, []);

    return (
        <section ref={sectionRef} id="services" className="relative py-32 w-full bg-background overflow-hidden flex flex-col items-center">
            {/* Background Texture - Liquid Feel */}
            <div className="absolute inset-0 z-0 opacity-30 pointer-events-none">
                <Image
                    src="/images/services-bg.png"
                    alt="Abstract Liquid"
                    fill
                    className="object-cover blur-[80px] scale-125 animate-pulse"
                    style={{ animationDuration: '10s' }}
                />
            </div>

            <div className="relative z-10 w-full max-w-7xl px-6 md:px-12">
                <div className="mb-16 max-w-2xl">
                    <h2 className="text-sm font-bold uppercase tracking-widest mb-3 text-primary">I Nostri Servizi</h2>
                    <h3 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6">
                        Architettura dell'Intelligence.
                    </h3>
                    <p className="text-lg text-foreground/70 leading-relaxed font-light">
                        Non vendiamo chatbot generici. Costruiamo infrastrutture AI su misura progettate per integrarsi nei tuoi processi business-critical.
                    </p>
                </div>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(350px,auto)]">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className={clsx(
                                "bento-card group relative overflow-hidden rounded-[2.5rem] p-8 flex flex-col justify-between transition-all duration-500 hover:scale-[1.01]",
                                // Liquid Glass Effect
                                "bg-white/40 backdrop-blur-[40px] border border-white/60 shadow-[0_8px_32px_rgba(0,0,0,0.05)]",
                                "hover:bg-white/50 hover:shadow-[0_20px_60px_rgba(0,0,0,0.1)] hover:border-white/80",
                                service.className
                            )}
                        >
                            {/* Card Image Background */}
                            <div className="absolute inset-0 z-0 select-none">
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    fill
                                    className="object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-700 mix-blend-overlay"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                            </div>

                            {/* Glossy Reflection Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-transparent opacity-50 pointer-events-none rounded-[2.5rem] z-10" />

                            <div className="relative z-20">
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {service.tags.map(tag => (
                                        <span key={tag} className="px-3 py-1 rounded-full bg-background/50 backdrop-blur-md border border-white/20 text-foreground/80 text-[10px] font-bold uppercase tracking-wider">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <h4 className="text-2xl md:text-3xl font-bold mb-4 text-foreground tracking-tight group-hover:text-primary transition-colors">
                                    {service.title}
                                </h4>
                                <p className="text-base md:text-lg text-foreground/70 font-medium leading-relaxed group-hover:text-foreground/90 transition-colors">
                                    {service.description}
                                </p>
                            </div>

                            <div className="relative z-20 pt-8 mt-auto flex items-end justify-between border-t border-foreground/5 group-hover:border-foreground/10 transition-colors">
                                <div>
                                    <div className="text-[10px] uppercase tracking-widest text-foreground/40 mb-1 group-hover:text-foreground/60">{service.detail}</div>
                                    <div className="text-xl md:text-2xl font-bold tracking-tight text-primary mix-blend-multiply">{service.price}</div>
                                </div>
                                <div className="w-10 h-10 rounded-full bg-foreground text-background flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 shadow-lg">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                        <line x1="5" y1="12" x2="19" y2="12"></line>
                                        <polyline points="12 5 19 12 12 19"></polyline>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
