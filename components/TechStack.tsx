"use client";

import { motion } from "framer-motion";

const categories = [
    {
        label: "Foundation Models",
        tools: ["GPT-5.4", "Claude Sonnet 4.6", "Llama 4", "DeepSeek V3.2", "Mistral Large 3"],
    },
    {
        label: "Orchestration",
        tools: ["LangChain", "LlamaIndex", "CrewAI", "Haystack", "AutoGen"],
    },
    {
        label: "Vector & Dati",
        tools: ["Pinecone", "Weaviate", "pgvector", "Qdrant", "Neo4j"],
    },
    {
        label: "Infrastruttura",
        tools: ["AWS", "GCP", "NVIDIA H100", "vLLM", "Hugging Face TGI"],
    },
];

export default function TechStack() {
    return (
        <section className="py-24 px-6 md:px-12 bg-background border-t border-foreground/10">
            <div className="max-w-7xl mx-auto">

                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20">
                    <div>
                        <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-4">
                            Stack Tecnologico
                        </h2>
                        <h3 className="text-4xl md:text-6xl font-bold tracking-tighter leading-none">
                            Strumenti scelti<br />caso per caso.
                        </h3>
                    </div>
                    <p className="text-foreground/40 font-light text-sm max-w-[260px] text-left md:text-right mt-6 md:mt-0 leading-relaxed">
                        Nessun vendor preferenziale.<br />
                        Il modello giusto per il problema giusto.
                    </p>
                </div>

                <div className="flex flex-col">
                    {categories.map((cat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.08, duration: 0.5 }}
                            className="flex flex-col md:flex-row md:items-center gap-5 md:gap-0 py-7 border-b border-foreground/5 last:border-b-0"
                        >
                            <span className="text-xs font-bold uppercase tracking-widest text-foreground/25 md:w-52 shrink-0">
                                {cat.label}
                            </span>
                            <div className="flex flex-wrap gap-2">
                                {cat.tools.map((tool) => (
                                    <span
                                        key={tool}
                                        className="px-3.5 py-1.5 rounded-full bg-foreground/[0.04] text-sm font-light text-foreground/60 hover:bg-primary/10 hover:text-foreground transition-all duration-300 cursor-default"
                                    >
                                        {tool}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
