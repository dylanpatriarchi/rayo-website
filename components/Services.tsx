"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";

const services = [
    {
        id: "01",
        title: "RAG SYSTEMS",
        description: "Pipeline di ricerca semantica su documenti aziendali. Zero allucinazioni, massima precisione.",
        price: "da €1.5k",
        tags: ["Vector DB", "LangChain", "Semantic Search"]
    },
    {
        id: "02",
        title: "LLM FINE-TUNING",
        description: "Specializzazione di modelli open-weights (Llama 3, Mistral) sul tuo know-how specifico.",
        price: "da €3.0k",
        tags: ["LoRA", "PyTorch", "Hugging Face"]
    },
    {
        id: "03",
        title: "PRIVATE INFRA",
        description: "Infrastruttura on-premise o cloud privato. I tuoi dati rimangono tuoi.",
        price: "Custom",
        tags: ["vLLM", "Docker", "GPU Clusters"]
    },
    {
        id: "04",
        title: "WEB PLATFORMS",
        description: "Asset digitali performanti. Next.js e SEO avanzato per dominare il mercato.",
        price: "da €450",
        tags: ["Next.js", "React", "Advanced SEO"]
    }
];

export default function Services() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <section id="services" className="relative py-32 w-full bg-background min-h-screen flex flex-col justify-center">
            <div className="w-full max-w-[90%] mx-auto px-4 md:px-0">
                {/* Section Header - Minimalist */}
                <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between border-b border-foreground/10 pb-6">
                    <div>
                        <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-2">
                            Capabilities
                        </h2>
                        <p className="text-sm text-foreground/60 max-w-sm leading-relaxed">
                            Costruiamo infrastrutture AI su misura progettate per integrarsi nei tuoi processi business-critical.
                        </p>
                    </div>
                    {/* Optional numeric indicator or decoration */}
                    <div className="hidden md:block text-xs font-mono text-foreground/40">
                        // ARCHITETTURA DELL'INTELLIGENZA
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

                                    {/* Price Tag (Desktop) */}
                                    <div className="hidden md:block min-w-[100px] text-right">
                                        <span className="text-xs font-mono border border-foreground/20 rounded-full px-3 py-1">
                                            {service.price}
                                        </span>
                                    </div>
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
                                                <div className="flex flex-wrap gap-2">
                                                    {service.tags.map(tag => (
                                                        <span key={tag} className="text-[10px] uppercase tracking-wider font-bold text-foreground/50 bg-foreground/5 px-2 py-1 rounded-sm">
                                                            {tag}
                                                        </span>
                                                    ))}
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
