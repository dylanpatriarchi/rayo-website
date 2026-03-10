"use client";

import { motion } from "motion/react";

const testimonials = [
    {
        quote:
            "I worked with Rayo in 2025 to build Compario. From our first exchanges and even after the website was built, Dylan has been extremely professional, responsive, insightful and knowledgeable. Dylan created a super cool website which brought my vision to life - I can only recommend working with Rayo for your projects!",
        role: "Founder",
        company: "Compario",
        name: "Katia Korobovskaya",
    },
    {
        quote:
            "Abbiamo affidato a Rayo un PoC su RAG per i nostri documenti legali. Delivery puntuale, codice pulito e documentazione chiara. Consigliati per chi vuole evitare fumisterie e avere risultati concreti.",
        role: "Cliente",
        company: "",
        name: null,
    },
    {
        quote:
            "Team tecnico serio, niente venditori. Hanno capito subito il nostro use case e proposto un approccio sensato invece di spingerci su soluzioni preconfezionate.",
        role: "Cliente",
        company: "",
        name: null,
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
                        Cosa dicono di noi.
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
                            className="relative p-8 md:p-12 bg-foreground/5 rounded-2xl flex flex-col justify-between min-h-[320px] border border-transparent hover:border-foreground/10 transition-colors"
                        >
                            <div className="text-xl md:text-2xl font-light leading-relaxed mb-8">
                                &quot;{t.quote}&quot;
                            </div>

                            <div>
                                {t.name ? (
                                    <>
                                        <div className="text-lg font-bold text-foreground">{t.name}</div>
                                        <div className="text-sm font-medium text-foreground/60">
                                            {t.role}{t.company ? `, ${t.company}` : ""}
                                        </div>
                                    </>
                                ) : (
                                    <div className="text-sm font-medium text-foreground/50">
                                        — {t.role}
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
