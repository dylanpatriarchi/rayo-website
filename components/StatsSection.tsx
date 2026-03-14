"use client";

import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";

const stats = [
    {
        prefix: "",
        value: 60,
        suffix: "%",
        label: "Riduzione dei costi operativi nei deployment reali",
        note: "fino al",
    },
    {
        prefix: "",
        value: 4,
        suffix: " sett.",
        label: "Dal contratto firmato al primo deploy in produzione",
        note: "in sole",
    },
    {
        prefix: "< ",
        value: 2.5,
        suffix: "%",
        label: "Tasso di allucinazioni nei sistemi RAG che costruiamo",
        note: "",
        decimals: 1,
    },
    {
        prefix: "",
        value: 100,
        suffix: "%",
        label: "Proprietà del codice sorgente e dei pesi del modello",
        note: "garanzia",
    },
];

function AnimatedNumber({ value, prefix = "", suffix = "", decimals = 0 }: { value: number; prefix?: string; suffix?: string; decimals?: number }) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true });
    const motionVal = useMotionValue(0);
    const displayVal = useTransform(motionVal, (v) =>
        decimals > 0 ? v.toFixed(decimals) : Math.round(v).toString()
    );
    const displayStr = useRef("0");

    useEffect(() => {
        if (inView) {
            const controls = animate(motionVal, value, { duration: 1.4, ease: "easeOut" });
            return controls.stop;
        }
    }, [inView, value, motionVal]);

    return (
        <span ref={ref} className="tabular-nums">
            {prefix}
            <motion.span>{displayVal}</motion.span>
            {suffix}
        </span>
    );
}

export default function StatsSection() {
    return (
        <section className="relative py-28 px-6 md:px-12 bg-background border-t border-foreground/10 overflow-hidden">
            {/* Background accent */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-primary/5 rounded-full blur-[120px]" />
            </div>

            <div className="max-w-7xl mx-auto relative">
                <div className="grid grid-cols-2 md:grid-cols-4">
                    {stats.map((stat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
                            className={[
                                "flex flex-col justify-between py-8 px-3 md:px-8 group",
                                i < stats.length - 1 ? "border-r border-foreground/8" : "",
                                i < 2 ? "border-b border-foreground/8 md:border-b-0" : "",
                            ].filter(Boolean).join(" ")}
                        >
                            {stat.note && (
                                <span className="text-[10px] font-bold uppercase tracking-widest text-foreground/25 mb-3 block">
                                    {stat.note}
                                </span>
                            )}
                            <div className="flex items-baseline gap-0 leading-none mb-5">
                                <span className="text-4xl md:text-5xl font-bold tracking-tighter text-foreground group-hover:text-primary transition-colors duration-500">
                                    <AnimatedNumber value={stat.value} prefix={stat.prefix} suffix={stat.suffix} decimals={stat.decimals} />
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
