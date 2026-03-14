"use client";

import { motion } from "framer-motion";

const principles = [
    {
        number: "01",
        title: "Robustezza Enterprise",
        body: "Non costruiamo giocattoli. I nostri sistemi sono progettati per gestire carichi critici e dati sensibili. Se si rompe, paghiamo noi. SLA garantito.",
        tag: "Zero downtime",
    },
    {
        number: "02",
        title: "Codice Proprietario",
        body: "Niente lock-in. Ti consegniamo le chiavi del regno: codice sorgente, pesi del modello e documentazione. L'asset è tuo, per sempre.",
        tag: "Full ownership",
    },
    {
        number: "03",
        title: "Focus sul ROI",
        body: "Non scriviamo una riga di codice se non c'è un chiaro ritorno economico. Ogni sprint deve avvicinarti al fatturato o al risparmio costi.",
        tag: "ROI measurabile",
    },
];

export default function WorkEthic() {
    return (
        <section className="py-24 md:py-40 px-6 md:px-12 bg-background border-t border-foreground/10 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="mb-20 md:mb-24 flex flex-col md:flex-row md:items-end md:justify-between gap-6"
                >
                    <div>
                        <p className="text-xs font-bold uppercase tracking-widest text-primary mb-4">Etica del Lavoro</p>
                        <h2 className="text-4xl md:text-6xl font-bold tracking-tighter leading-none">
                            Artigiani<br />del Software.
                        </h2>
                    </div>
                    <p className="text-base md:text-lg text-foreground/40 font-light max-w-xs leading-relaxed md:text-right">
                        Tre principi non negoziabili che guidano ogni progetto.
                    </p>
                </motion.div>

                {/* Principles */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-0 divide-y divide-foreground/8 md:divide-y-0 md:divide-x md:divide-foreground/8">
                    {principles.map((p, i) => (
                        <motion.div
                            key={p.number}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.12, duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
                            className={[
                                "group relative flex flex-col justify-between py-10 md:py-0",
                                i === 0 ? "md:pr-12" : "",
                                i === 1 ? "md:px-12" : "",
                                i === 2 ? "md:pl-12" : "",
                            ].filter(Boolean).join(" ")}
                        >
                            {/* Hover line accent */}
                            <div className="absolute top-0 left-0 w-0 h-[2px] bg-primary transition-all duration-500 group-hover:w-full md:w-full md:h-0 md:left-0 md:top-0 md:group-hover:h-[2px]" />

                            <div>
                                <span className="text-[10px] font-mono text-foreground/20 tracking-widest mb-6 block">
                                    {p.number}
                                </span>
                                <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground mb-5 group-hover:text-primary transition-colors duration-300">
                                    {p.title}
                                </h3>
                                <p className="text-base md:text-lg font-light text-foreground/60 leading-relaxed">
                                    {p.body}
                                </p>
                            </div>

                            <div className="mt-8">
                                <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary/70">
                                    <span className="w-4 h-px bg-primary/40" />
                                    {p.tag}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
