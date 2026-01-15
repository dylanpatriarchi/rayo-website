"use client";

import { motion } from "motion/react";
import { Lock } from "lucide-react";

const testimonials = [
    {
        quote:
            "Prima: 4 ore/giorno per cercare pratiche legali. Dopo Rayo: 8 minuti. Il sistema RAG ha analizzato 50.000 PDF storici senza errori.",
        role: "CTO",
        company: "Legal Firm (Milano)",
        impact: "-96% Search Time",
    },
    {
        quote:
            "Avevamo paura delle allucinazioni degli LLM. Rayo ha costruito un layer di validazione che blocca le risposte incerte. Tasso di accuratezza certificato al 99.8%.",
        role: "Head of Innovation",
        company: "Healthcare Scale-up",
        impact: "99.8% Accuracy",
    },
    {
        quote:
            "Infrastruttura on-premise su GPU H100 installata in 3 settimane. Abbiamo ridotto i costi API OpenAI del 70% nel primo mese.",
        role: "Founder",
        company: "Fintech Startup",
        impact: "-70% OpEx Costs",
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
