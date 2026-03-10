import Link from "next/link";

const steps = [
    {
        number: "01",
        title: "Audit Gratuito",
        description:
            "Ci racconti il problema. Analizziamo dati, processi e vincoli. In 48 ore ti mandiamo una stima scritta di tempi e costi. Nessun impegno.",
    },
    {
        number: "02",
        title: "PoC in 2 Settimane",
        description:
            "Costruiamo un prototipo funzionante sul tuo caso d'uso reale. Non una demo con dati finti: un sistema che funziona sui tuoi documenti, nel tuo ambiente.",
    },
    {
        number: "03",
        title: "Deploy in Produzione",
        description:
            "Integrazione nei tuoi sistemi esistenti (ERP, CRM, tool interni). Documentazione completa, codice di tua proprietà. Manutenzione opzionale.",
    },
];

export default function HowToStart() {
    return (
        <section className="py-24 px-6 md:px-12 bg-foreground text-background">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="mb-20">
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-background/40 mb-6 block">
                        Come si inizia
                    </span>
                    <h2 className="text-4xl md:text-6xl font-bold tracking-tighter leading-[1.05] text-background max-w-2xl">
                        Tre passi. Nessun rischio.
                    </h2>
                </div>

                {/* Steps Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-0 mb-20">
                    {steps.map((step, index) => (
                        <div
                            key={step.number}
                            className={[
                                "relative py-10 md:py-0 md:px-10",
                                index === 0 ? "md:pl-0" : "",
                                index === steps.length - 1 ? "md:pr-0" : "",
                                index < steps.length - 1
                                    ? "border-b border-background/10 md:border-b-0 md:border-r md:border-background/10"
                                    : "",
                            ]
                                .filter(Boolean)
                                .join(" ")}
                        >
                            {/* Large Number */}
                            <div className="text-[7rem] md:text-[9rem] font-bold leading-none tracking-tighter select-none text-background opacity-[0.08] -ml-1 mb-4 font-sans">
                                {step.number}
                            </div>

                            {/* Content */}
                            <h3 className="text-xl md:text-2xl font-bold text-background mb-4 -mt-6 md:-mt-8">
                                {step.title}
                            </h3>
                            <p className="text-sm md:text-base text-background/60 font-light leading-relaxed">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className="flex justify-start">
                    <Link
                        href="/contact"
                        className="px-8 py-4 bg-background text-foreground font-bold rounded-full hover:opacity-90 transition-opacity duration-200 text-sm whitespace-nowrap"
                    >
                        Richiedi Audit Gratuito
                    </Link>
                </div>
            </div>
        </section>
    );
}
