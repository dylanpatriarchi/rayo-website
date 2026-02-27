"use client";

import { motion } from "framer-motion";

const stats = [
    {
        value: "40–60",
        unit: "%",
        label: "Riduzione dei costi operativi nei deployment reali",
    },
    {
        value: "4",
        unit: " sett.",
        label: "Dal contratto firmato al primo deploy in produzione",
    },
    {
        value: "< 2.5",
        unit: "%",
        label: "Tasso di allucinazioni nei sistemi RAG che costruiamo",
    },
    {
        value: "100",
        unit: "%",
        label: "Proprietà del codice sorgente e dei pesi del modello",
    },
];

export default function StatsSection() {
    return (
        <section className="py-24 px-6 md:px-12 bg-background border-t border-foreground/10">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-4">
                    {stats.map((stat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.08, duration: 0.6, ease: "easeOut" }}
                            className={[
                                "flex flex-col justify-between py-12 px-2 md:px-8",
                                "first:pl-0 last:pr-0",
                                i < stats.length - 1
                                    ? "border-r border-foreground/8"
                                    : "",
                                i < 2
                                    ? "border-b border-foreground/8 md:border-b-0"
                                    : "",
                                i === 0 ? "pl-0" : "",
                                i === stats.length - 1 ? "pr-0" : "",
                            ]
                                .filter(Boolean)
                                .join(" ")}
                        >
                            <div className="flex items-end gap-1 leading-none mb-6">
                                <span className="text-5xl md:text-7xl font-bold tracking-tighter text-foreground">
                                    {stat.value}
                                </span>
                                <span className="text-2xl md:text-3xl font-bold text-primary pb-1">
                                    {stat.unit}
                                </span>
                            </div>
                            <p className="text-xs md:text-sm text-foreground/40 font-light leading-relaxed">
                                {stat.label}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
