import Link from "next/link";

export const metadata = {
    title: "Servizi",
    description: "Enterprise RAG, LLM Fine-Tuning, AI Agents e Tech Advisory. Soluzioni AI su misura per ridurre costi operativi e automatizzare processi business-critical.",
    openGraph: {
        title: "Servizi AI Enterprise | Rayo Consulting",
        description: "RAG, Fine-Tuning, AI Agents e CTO as a Service.",
        url: "https://rayo.consulting/services",
    },
    alternates: { canonical: "https://rayo.consulting/services" },
};

const services = [
    {
        number: "01",
        name: "Enterprise RAG",
        slug: "rag",
        price: "da €1.500",
        tagline: "Il cervello documentale della tua azienda.",
        description:
            "Ricerca semantica istantanea su milioni di documenti interni. Contratti, manuali, email, policy — tutto interrogabile in linguaggio naturale, con citazione della fonte.",
        features: ["Parsing avanzato PDF, tabelle, schemi", "Hybrid Search (Keyword + Semantic)", "Re-ranking per massima precisione"],
        useCases: ["Assistente legale su corpus contratti", "Supporto tecnico su manualistica", "Onboarding HR automatizzato"],
    },
    {
        number: "02",
        name: "LLM Fine-Tuning",
        slug: "addestramento-llm",
        price: "da €3.000",
        tagline: "Un modello che parla come la tua azienda.",
        description:
            "Addestriamo modelli open-source (Llama 3, Mistral, Qwen) sui tuoi dati proprietari. Il risultato è un LLM che conosce il tuo settore, il tuo tono e i tuoi processi.",
        features: ["Dataset cleaning & augmentation", "LoRA / QLoRA training", "Benchmark proprietari post-training"],
        useCases: ["Generazione schede prodotto e-commerce", "Agenti di vendita con script verticale", "Classificazione ticket di supporto"],
    },
    {
        number: "03",
        name: "AI Agents",
        slug: "agenti-ai",
        price: "preventivo su misura",
        tagline: "Forza lavoro digitale, attiva 24/7.",
        description:
            "Agenti autonomi che non si limitano a rispondere — eseguono: cercano, decidono, inviano, aggiornano. Integrabili con ERP, CRM e qualsiasi API esistente.",
        features: ["Orchestrazione multi-agente (LangGraph)", "Integrazione API e sistemi legacy", "Esecuzione task autonoma con audit trail"],
        useCases: ["Screening CV automatico", "Report operativi da gestionale", "Qualificazione lead da CRM"],
    },
    {
        number: "04",
        name: "Tech Advisory",
        slug: "consulenza-tecnica",
        price: "€38 / ora",
        tagline: "CTO as a Service. Senza il costo fisso.",
        description:
            "Guidiamo la tua strategia tecnologica dall'interno. Stack review, scelte architetturali, vendor selection, ottimizzazione cloud. Nessun debito tecnico nascosto.",
        features: ["Technology Strategy & Audit", "Architettura Cloud & AI", "Ottimizzazione Processi Dev"],
        useCases: ["Scelta LLM provider (make vs buy)", "Audit costi infrastruttura cloud", "Roadmap AI per PMI"],
    },
];

export default function ServicesPage() {
    return (
        <main className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
            {/* Header */}
            <div className="max-w-3xl mb-24">
                <p className="text-sm font-bold uppercase tracking-widest text-primary mb-6">Servizi</p>
                <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-none mb-8">
                    Capacità Operative.
                </h1>
                <p className="text-xl text-foreground/60 font-light leading-relaxed">
                    Quattro aree di intervento. Ognuna misurabile in ore risparmiate, errori eliminati, costi ridotti.
                </p>
            </div>

            {/* Services list */}
            <div className="divide-y divide-foreground/10">
                {services.map((s) => (
                    <div key={s.slug} className="py-16 md:py-20 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 group">

                        {/* LEFT: number + name + price */}
                        <div className="md:col-span-4 flex flex-col justify-between">
                            <div>
                                <span className="text-xs font-mono text-foreground/30 mb-3 block">{s.number}</span>
                                <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-2">{s.name}</h2>
                                <p className="text-foreground/50 font-light text-sm mb-6">{s.tagline}</p>
                                <span className="inline-block text-xs font-bold uppercase tracking-wider border border-foreground/15 rounded-full px-4 py-1.5 text-foreground/60">
                                    {s.price}
                                </span>
                            </div>
                            <div className="mt-8 flex flex-wrap gap-3">
                                <Link
                                    href={`/servizi/${s.slug}`}
                                    className="text-sm font-bold text-primary hover:underline underline-offset-4"
                                >
                                    Scopri di più →
                                </Link>
                                <Link
                                    href="/contact"
                                    className="text-sm font-bold text-foreground/40 hover:text-primary transition-colors"
                                >
                                    Parliamone
                                </Link>
                            </div>
                        </div>

                        {/* CENTER: description + features */}
                        <div className="md:col-span-4">
                            <p className="text-base md:text-lg text-foreground/70 font-light leading-relaxed mb-8">
                                {s.description}
                            </p>
                            <ul className="space-y-2.5">
                                {s.features.map((f) => (
                                    <li key={f} className="flex items-start gap-3 text-sm font-medium">
                                        <span className="text-primary mt-0.5 text-base leading-none">—</span>
                                        <span>{f}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* RIGHT: use cases */}
                        <div className="md:col-span-4">
                            <p className="text-xs font-bold uppercase tracking-widest text-foreground/30 mb-5">Use Cases</p>
                            <ul className="space-y-3">
                                {s.useCases.map((u) => (
                                    <li key={u} className="flex items-start gap-3 text-sm text-foreground/60 font-light">
                                        <span className="text-foreground/25 mt-0.5 leading-none">·</span>
                                        <span>{u}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>

            {/* Bottom CTA */}
            <div className="mt-16 pt-16 border-t border-foreground/10 flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                    <p className="text-xl font-bold mb-1">Non sai da dove iniziare?</p>
                    <p className="text-foreground/60 font-light">Audit gratuito in 48 ore. Nessun impegno.</p>
                </div>
                <Link
                    href="/contact"
                    className="inline-flex px-8 py-4 bg-primary text-white font-bold rounded-full hover:bg-primary/90 transition-colors text-sm whitespace-nowrap"
                >
                    Richiedi Audit Gratuito
                </Link>
            </div>
        </main>
    );
}
