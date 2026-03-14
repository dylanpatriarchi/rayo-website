import Link from "next/link";

const steps = [
    {
        number: "01",
        title: "Audit Gratuito",
        description:
            "Ci racconti il problema. Analizziamo dati, processi e vincoli. In 48 ore ti mandiamo una stima scritta di tempi e costi. Nessun impegno.",
        detail: "48 ore",
        detailLabel: "tempo di risposta",
    },
    {
        number: "02",
        title: "PoC in 2 Settimane",
        description:
            "Costruiamo un prototipo funzionante sul tuo caso d'uso reale. Non una demo con dati finti: un sistema che funziona sui tuoi documenti, nel tuo ambiente.",
        detail: "2 settimane",
        detailLabel: "dal contratto al prototipo",
    },
    {
        number: "03",
        title: "Deploy in Produzione",
        description:
            "Integrazione nei tuoi sistemi esistenti (ERP, CRM, tool interni). Documentazione completa, codice di tua proprietà. Manutenzione opzionale.",
        detail: "100%",
        detailLabel: "codice di tua proprietà",
    },
];

export default function HowToStart() {
    return (
        <section className="relative py-24 md:py-40 px-6 md:px-12 bg-foreground text-background overflow-hidden">
            {/* Subtle grain */}
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
                <div className="mb-20 md:mb-28 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
                    <div>
                        <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-background/30 mb-8 block">
                            Come si inizia
                        </span>
                        <h2 className="text-5xl md:text-7xl font-bold tracking-tighter leading-[0.95] text-background">
                            Tre passi.<br />Nessun rischio.
                        </h2>
                    </div>
                    <p className="text-background/40 font-light text-base max-w-xs md:text-right leading-relaxed">
                        Dal primo contatto al deploy in produzione, saprai sempre dove sei e cosa aspettarti.
                    </p>
                </div>

                {/* Steps */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-0 mb-20">
                    {steps.map((step, index) => (
                        <div
                            key={step.number}
                            className={[
                                "group relative flex flex-col py-10 md:py-0",
                                index === 0 ? "md:pr-12" : "",
                                index === 1 ? "md:px-12 md:border-x md:border-background/10" : "",
                                index === 2 ? "md:pl-12" : "",
                                index < steps.length - 1
                                    ? "border-b border-background/10 md:border-b-0"
                                    : "",
                            ].filter(Boolean).join(" ")}
                        >
                            <span className="text-[10px] font-mono text-background/20 tracking-widest mb-8 block">
                                {step.number}
                            </span>

                            <h3 className="text-2xl md:text-3xl font-bold text-background mb-5 group-hover:text-primary transition-colors duration-300">
                                {step.title}
                            </h3>
                            <p className="text-sm md:text-base text-background/50 font-light leading-relaxed flex-1">
                                {step.description}
                            </p>

                            {/* Stat callout */}
                            <div className="mt-8 pt-8 border-t border-background/10">
                                <span className="text-2xl font-bold text-primary tracking-tighter">{step.detail}</span>
                                <span className="text-xs font-light text-background/30 block mt-1 uppercase tracking-wider">{step.detailLabel}</span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className="flex items-center gap-6">
                    <Link
                        href="/contact"
                        className="px-8 py-4 bg-primary text-white font-bold rounded-full hover:bg-primary/90 hover:shadow-[0_0_30px_rgba(0,71,255,0.4)] transition-all duration-300 text-sm whitespace-nowrap"
                    >
                        Richiedi Audit Gratuito
                    </Link>
                    <span className="text-background/30 text-sm font-light">Gratis, in 48 ore.</span>
                </div>
            </div>
        </section>
    );
}
