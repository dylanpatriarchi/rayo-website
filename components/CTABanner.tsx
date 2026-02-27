"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function CTABanner() {
    return (
        <section className="bg-foreground text-background">
            <div className="max-w-7xl mx-auto px-6 md:px-12 py-24 md:py-32">
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="flex flex-col md:flex-row items-start md:items-end justify-between gap-16"
                >
                    <div>
                        <span className="text-xs font-bold uppercase tracking-[0.2em] text-background/40 mb-6 block">
                            Proof of Concept Gratuito
                        </span>
                        <h2 className="text-4xl md:text-6xl font-bold tracking-tighter leading-[1.05] text-background max-w-2xl">
                            Pronto a costruire il tuo vantaggio competitivo?
                        </h2>
                    </div>

                    <div className="flex flex-col gap-6 shrink-0 items-start md:items-end">
                        <p className="text-background/50 font-light text-base md:text-right max-w-xs leading-relaxed">
                            In 2 settimane ti mostriamo il potenziale AI nel tuo stack. Nessun impegno, nessun costo.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3">
                            <Link
                                href="/contact"
                                className="px-8 py-4 bg-background text-foreground font-bold rounded-full hover:opacity-90 transition-opacity duration-200 text-center whitespace-nowrap text-sm"
                            >
                                Inizia il PoC
                            </Link>
                            <Link
                                href="/cases"
                                className="px-8 py-4 border border-background/20 text-background font-medium rounded-full hover:border-background/50 transition-colors duration-200 text-center whitespace-nowrap text-sm"
                            >
                                Vedi i Casi Studio
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
