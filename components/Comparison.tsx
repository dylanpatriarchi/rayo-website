"use client";

import { motion } from "framer-motion";

const rows = [
    {
        criterion: "Time to Market",
        rayo: "4 – 6 Settimane",
        inHouse: "6 – 12 Mesi",
    },
    {
        criterion: "Costo Operativo",
        rayo: "Zero costi fissi",
        inHouse: "Costi fissi elevati",
    },
    {
        criterion: "Livello Expertise",
        rayo: "Senior specializzati in RAG, LLM, Agenti",
        inHouse: "Generalist, learning curve lunga",
    },
    {
        criterion: "Garanzia & Rischio",
        rayo: "PoC Gratuito — Zero Rischio",
        inHouse: "Rischio e costi di fallimento elevati",
    },
    {
        criterion: "Ownership",
        rayo: "Codice sorgente tuo al 100%",
        inHouse: "Dipendenza da vendor o team interno",
    },
];

export default function Comparison() {
    return (
        <section className="py-24 md:py-40 px-6 md:px-12 bg-background border-t border-foreground/5 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 md:mb-20"
                >
                    <p className="text-xs font-bold uppercase tracking-widest text-primary mb-5">Perché Rayo</p>
                    <h2 className="text-4xl md:text-6xl font-bold tracking-tighter leading-none max-w-2xl">
                        Nessun confronto<br />possibile.
                    </h2>
                </motion.div>

                {/* Comparison Table */}
                <div className="relative">
                    {/* Column Headers */}
                    <div className="grid grid-cols-3 mb-4 text-xs font-bold uppercase tracking-widest">
                        <div className="text-foreground/25 col-span-1">Criterio</div>
                        <div className="text-primary col-span-1 text-center">Rayo Consulting</div>
                        <div className="text-foreground/25 col-span-1 text-center">Team Interno</div>
                    </div>

                    {/* Rows */}
                    <div className="divide-y divide-foreground/8">
                        {rows.map((row, i) => (
                            <motion.div
                                key={row.criterion}
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.08, duration: 0.5, ease: "easeOut" }}
                                className="group grid grid-cols-3 py-6 md:py-7 hover:bg-foreground/[0.02] transition-colors duration-200 -mx-4 px-4 rounded-xl"
                            >
                                {/* Criterion */}
                                <div className="col-span-1 flex items-center">
                                    <span className="text-sm font-medium text-foreground/40 group-hover:text-foreground/60 transition-colors">
                                        {row.criterion}
                                    </span>
                                </div>

                                {/* Rayo */}
                                <div className="col-span-1 flex items-center justify-center">
                                    <span className="text-sm md:text-base font-bold text-foreground group-hover:text-primary transition-colors duration-300 text-center leading-snug">
                                        {row.rayo}
                                    </span>
                                </div>

                                {/* InHouse */}
                                <div className="col-span-1 flex items-center justify-center">
                                    <span className="text-sm text-foreground/30 font-light text-center leading-snug line-through decoration-foreground/15">
                                        {row.inHouse}
                                    </span>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Blue highlight column behind Rayo */}
                    <div className="absolute top-8 left-1/3 right-1/3 bottom-0 bg-primary/[0.03] rounded-2xl border border-primary/10 pointer-events-none" />
                </div>

                {/* Bottom note */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                    className="mt-12 flex items-center gap-3"
                >
                    <span className="w-8 h-px bg-primary/40" />
                    <p className="text-sm text-foreground/40 font-light">
                        Il PoC è gratuito. Se non funziona, non paghi. Punto.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
