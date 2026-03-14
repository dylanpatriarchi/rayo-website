"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function CTABanner() {
    return (
        <section className="relative bg-foreground text-background overflow-hidden">
            {/* Grain texture overlay */}
            <div
                className="absolute inset-0 opacity-[0.04] pointer-events-none"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
                    backgroundRepeat: "repeat",
                    backgroundSize: "128px 128px",
                }}
            />

            {/* Blue glow */}
            <div className="absolute bottom-0 left-0 w-[500px] h-[200px] bg-primary/20 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 md:px-12 py-24 md:py-36 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className="flex flex-col md:flex-row items-start md:items-end justify-between gap-16"
                >
                    <div className="flex-1">
                        <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-background/30 mb-8 block">
                            Proof of Concept Gratuito
                        </span>
                        <h2 className="text-5xl md:text-7xl font-bold tracking-tighter leading-[0.95] text-background max-w-2xl">
                            Pronto a costruire<br />il tuo vantaggio<br />
                            <span className="text-primary">competitivo?</span>
                        </h2>
                    </div>

                    <div className="flex flex-col gap-6 shrink-0 items-start md:items-end max-w-xs">
                        <p className="text-background/40 font-light text-base md:text-right leading-relaxed">
                            In 2 settimane ti mostriamo il potenziale AI nel tuo stack.<br />
                            Nessun impegno, nessun costo.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                            <Link
                                href="/contact"
                                className="group relative px-8 py-4 bg-primary text-white font-bold rounded-full text-center text-sm whitespace-nowrap overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,71,255,0.5)] hover:-translate-y-0.5"
                            >
                                <span className="relative z-10">Inizia il PoC →</span>
                            </Link>
                            <Link
                                href="/cases"
                                className="px-8 py-4 border border-background/15 text-background/70 font-medium rounded-full hover:border-background/40 hover:text-background transition-all duration-200 text-center whitespace-nowrap text-sm"
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
