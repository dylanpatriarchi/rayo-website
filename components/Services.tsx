"use client";

import { useEffect, useRef } from "react";
import { animateStaggeredList } from "@/utils/gsap-animations";

const services = [
    {
        title: "RAG Systems",
        description: "Sistemi di conoscenza aziendale interattivi. Trasformiamo i tuoi documenti in un oracolo accessibile.",
        price: "Da €4.500",
        detail: "Setup una tantum"
    },
    {
        title: "Fine-Tuning",
        description: "Modelli customizzati sui tuoi dati proprietari. Adattamento profondo per vocaboli e logiche specifiche.",
        price: "Da €8.000",
        detail: "Training & Optimization"
    },
    {
        title: "Private Hosting & Inference",
        description: "Infrastruttura AI on-premise o cloud privato. Massima privacy, zero condivisione dati con terze parti.",
        price: "Da €600",
        detail: "Mensili (Maintenance)"
    }
];

export default function Services() {
    const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        // Filter out nulls just in case
        const elements = cardRefs.current.filter((el): el is HTMLDivElement => el !== null);
        animateStaggeredList(elements, 0.2);
    }, []);

    return (
        <section id="services" className="py-24 md:py-32 px-6 md:px-12 bg-background border-t border-foreground/10">
            <div className="mb-16">
                <h2 className="text-sm font-bold uppercase tracking-widest mb-2 text-primary">Servizi</h2>
                <p className="text-3xl md:text-4xl font-light tracking-tight">Potenza computazionale su misura.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-foreground/10 border border-foreground/10">
                {services.map((service, index) => (
                    <div
                        key={index}
                        ref={(el) => { cardRefs.current[index] = el; }}
                        className="bg-background p-8 md:p-12 flex flex-col justify-between min-h-[400px] opacity-0 translate-y-8"
                    >
                        <div>
                            <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                            <p className="text-foreground/70 font-light leading-relaxed mb-8">
                                {service.description}
                            </p>
                        </div>
                        <div className="pt-8 border-t border-foreground/5 mt-auto">
                            <div className="text-3xl font-bold tracking-tight">{service.price}</div>
                            <div className="text-xs uppercase tracking-wide text-foreground/50 mt-1">{service.detail}</div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
