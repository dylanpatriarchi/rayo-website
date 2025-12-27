"use client";

import { motion } from "motion/react";
import { Lock } from "lucide-react";

const testimonials = [
    {
        quote:
            "Rayo ha trasformato il nostro archivio documentale in un oracolo aziendale. Tempi di ricerca ridotti del 95%.",
        role: "CTO",
        company: "Azienda di Contabilità (NDA)",
        impact: "-95% Search Time",
    },
    {
        quote:
            "L'architettura RAG che hanno progettato non allucina. Mai. È l'unica soluzione che abbiamo osato mettere in produzione.",
        role: "Head of AI",
        company: "Healthcare Scale-up (NDA)",
        impact: "Zero Hallucinations",
    },
    {
        quote:
            "I worked with Rayo in 2025 to build Compario. From our first exchanges and even after the website was built, Dylan has been extremely professional, responsive, insightful and knowledgeable. Dylan created a super cool website which brought my vision to life - I can only recommend working with Rayo for your projects!",
        role: "Founder",
        company: "Compario App",
        impact: "App Costruita",
    },
];

export default function Testimonials() {
    return (
        <section className="py-32 px-6 md:px-12 bg-background border-t border-foreground/10">
            <div className="max-w-7xl mx-auto">
                <div className="mb-24 flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
                    <div>
                        <h2 className="text-sm font-bold uppercase tracking-widest text-primary mb-6">
                            Track Record
                        </h2>
                        <h3 className="text-4xl md:text-6xl font-bold tracking-tighter leading-none">
                            Risultati Confidenziali.
                        </h3>
                    </div>
                    <p className="text-foreground/60 max-w-sm text-right hidden md:block">
                        Rispettiamo la privacy dei nostri clienti Enterprise.<br />
                        I risultati parlano per noi.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((t, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.5 }}
                            className="relative p-8 md:p-12 bg-foreground/5 rounded-2xl flex flex-col justify-between min-h-[400px] border border-transparent hover:border-foreground/10 transition-colors"
                        >
                            <div className="absolute top-8 right-8 text-foreground/20">
                                <Lock size={20} />
                            </div>

                            <div className="text-xl md:text-2xl font-light leading-relaxed mb-8">
                                &quot;{t.quote}&quot;
                            </div>

                            <div>
                                <div className="text-sm font-bold uppercase tracking-wide opacity-50 mb-1">
                                    {t.role}
                                </div>
                                <div className="text-lg font-medium mb-6 blur-[2px] hover:blur-none transition-all duration-300 select-none">
                                    {t.company}
                                </div>
                                <div className="inline-block px-3 py-1 bg-background rounded-full text-xs font-bold text-primary border border-foreground/10 shadow-sm">
                                    {t.impact}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
