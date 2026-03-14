"use client";

import { motion } from "framer-motion";

const trustPoints = [
    {
        number: "01",
        title: "On-Premise Deploy",
        description:
            "Installiamo direttamente sui tuoi server. Zero data egress. Zero vendor lock-in.",
    },
    {
        number: "02",
        title: "GDPR by Design",
        description:
            "Architetture conformi al Regolamento EU 2016/679. Audit trail, access control e data residency in Italia.",
    },
    {
        number: "03",
        title: "Nessuna API Esterna",
        description:
            "Per le soluzioni sensitive, usiamo modelli open-source hostati localmente. I tuoi documenti non raggiungono OpenAI o altri provider.",
    },
    {
        number: "04",
        title: "Codice di Tua Proprietà",
        description:
            "Repository, documentazione e pesi dei modelli addestrati appartengono a te. Nessun lock-in con Rayo.",
    },
];

export default function GdprTrustSection() {
    return (
        <section className="relative py-24 md:py-40 px-6 md:px-12 bg-foreground text-background overflow-hidden">
            {/* Grain */}
            <div
                className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
                    backgroundRepeat: "repeat",
                    backgroundSize: "128px 128px",
                }}
            />

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-20 md:mb-24 flex flex-col md:flex-row md:items-end md:justify-between gap-8"
                >
                    <div>
                        <p className="text-[#0047FF] text-[10px] font-bold uppercase tracking-[0.25em] mb-8 block">
                            Privacy &amp; Sicurezza
                        </p>
                        <h2 className="text-5xl md:text-7xl font-bold tracking-tighter leading-[0.95] text-background">
                            I tuoi dati<br />non escono<br />dall&apos;Italia.
                        </h2>
                    </div>
                    <p className="text-background/40 font-light text-base max-w-sm md:text-right leading-relaxed">
                        Ogni sistema può essere deployato on-premise o su cloud dedicato in territorio italiano.
                        Nessun dato transita su API esterne senza il tuo consenso esplicito.
                    </p>
                </motion.div>

                {/* Trust Points Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-0 divide-y divide-background/10 md:divide-y-0">
                    {trustPoints.map((point, i) => (
                        <motion.div
                            key={point.title}
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.6, ease: "easeOut" }}
                            className={[
                                "group relative py-8 md:py-10",
                                i % 2 === 0 ? "md:pr-16" : "md:pl-16",
                                i < 2 ? "md:border-b md:border-background/10" : "",
                                i % 2 === 0 ? "md:border-r md:border-background/10" : "",
                            ].filter(Boolean).join(" ")}
                        >
                            <div className="flex items-start gap-6">
                                <span className="text-[10px] font-mono text-background/15 tracking-widest shrink-0 mt-1">
                                    {point.number}
                                </span>
                                <div>
                                    <h3 className="font-bold text-lg text-background mb-2 group-hover:text-primary transition-colors duration-300">
                                        {point.title}
                                    </h3>
                                    <p className="text-sm text-background/45 font-light leading-relaxed">
                                        {point.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
