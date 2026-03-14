"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import clsx from "clsx";

const services = [
    {
        id: "01",
        title: "ENTERPRISE RAG",
        href: "/servizi/rag",
        description: "Il tuo 'Cervello Aziendale' centralizzato. Ricerca semantica istantanea su milioni di documenti. Zero perdite di tempo.",
        tags: ["Knowledge Graph", "Vector DB", "Zero-Hallucination"]
    },
    {
        id: "02",
        title: "LLM FINE-TUNING",
        href: "/servizi/addestramento-llm",
        description: "Addestriamo l'AI a pensare come il tuo miglior dipendente. Modelli verticali proprietari (Llama 3, Mistral) sui tuoi dati.",
        tags: ["Data Privacy", "Custom Models", "High Accuracy"]
    },
    {
        id: "03",
        title: "AI AGENTS",
        href: "/servizi/agenti-ai",
        description: "Forza lavoro digitale attiva 24/7. Agenti autonomi che eseguono task complessi in Customer Service, Sales e Operations.",
        tags: ["Autonomy", "Multi-Agent", "Workflow Automation"]
    },
    {
        id: "04",
        title: "TECH ADVISORY",
        href: "/servizi/consulenza-tecnica",
        description: "CTO as a Service. Guidiamo la tua trasformazione digitale evitando sprechi di budget e debiti tecnici.",
        tags: ["Strategy", "Audit", "Architecture"]
    }
];

export default function Services() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <section id="services" className="relative py-32 w-full bg-background min-h-screen flex flex-col justify-center">
            <div className="w-full max-w-[90%] mx-auto px-4 md:px-0">
                {/* Section Header - Refined */}
                <div className="mb-24 border-b border-foreground/10 pb-12">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
                        <div className="max-w-3xl">
                            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6 relative inline-block">
                                Capacità Operative.
                                <div className="hidden md:block absolute -top-4 -right-8 w-3 h-3 bg-primary rounded-full animate-pulse" />
                            </h2>
                            <p className="text-xl md:text-2xl text-foreground/60 font-light leading-relaxed">
                                Costruiamo infrastrutture AI su misura progettate per integrarsi nei tuoi processi business-critical.
                            </p>
                        </div>

                        <div className="flex flex-col items-start md:items-end gap-3">
                            <div className="flex items-center gap-3 px-5 py-2.5 border border-primary/20 rounded-full">
                                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                                <div className="flex flex-col">
                                    <span className="text-[10px] uppercase font-bold text-primary tracking-widest">Garanzia Rayo</span>
                                    <span className="text-xs font-medium text-foreground/60">PoC Gratuito — soddisfatti o rimborsati</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Editorial List */}
                <div className="flex flex-col">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="relative border-b border-foreground/10 last:border-b-0"
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            <div
                                className={clsx(
                                    "group w-full py-12 md:py-16 transition-all duration-500 ease-out cursor-pointer",
                                    hoveredIndex !== null && hoveredIndex !== index ? "opacity-30 blur-[2px]" : "opacity-100"
                                )}
                            >
                                <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-6 md:gap-12 pl-2">
                                    {/* Index */}
                                    <span className="text-xs font-mono text-primary/80 mb-2 md:mb-0">
                                        {service.id}
                                    </span>

                                    {/* Massive Title */}
                                    <h3
                                        className={clsx(
                                            "text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-none transition-colors duration-300",
                                            hoveredIndex === index ? "text-primary" : "text-foreground"
                                        )}
                                    >
                                        {service.title}
                                    </h3>
                                </div>

                                {/* Animated Detail Reveal */}
                                <AnimatePresence>
                                    {hoveredIndex === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3, ease: "easeOut" }}
                                            className="overflow-hidden"
                                        >
                                            <div className="pt-6 md:pt-8 md:pl-[60px] max-w-2xl">
                                                <p className="text-lg md:text-xl text-foreground font-light leading-relaxed mb-6">
                                                    {service.description}
                                                </p>
                                                <div className="flex flex-wrap items-center gap-3">
                                                    {service.tags.map(tag => (
                                                        <span key={tag} className="text-[10px] uppercase tracking-wider font-bold text-foreground/40 bg-foreground/5 px-3 py-1.5 rounded-full">
                                                            {tag}
                                                        </span>
                                                    ))}
                                                    <Link
                                                        href={service.href}
                                                        className="ml-auto text-sm font-bold text-primary hover:underline underline-offset-4"
                                                    >
                                                        Scopri di più →
                                                    </Link>
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
