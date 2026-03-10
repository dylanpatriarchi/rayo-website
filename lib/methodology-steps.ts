/**
 * Passi metodologia: usati da components/Methodology.tsx e da HowTo JSON-LD in app/methodology/page.tsx.
 */
export const methodologySteps = [
    {
        number: "01",
        title: "Data Audit",
        description: "Non tiriamo a indovinare. Analizziamo i tuoi flussi di dati grezzi per isolare le inefficienze che ti costano migliaia di euro al mese.",
    },
    {
        number: "02",
        title: "AI Architecture",
        description: "Costruiamo il sistema. Pipeline RAG ibride e Modelli Fine-Tunati che operano nel tuo perimetro di sicurezza. Niente API pubbliche insicure.",
    },
    {
        number: "03",
        title: "Integration",
        description: "Il sistema entra in produzione. Integrazione invisibile nei tuoi tool esistenti (ERP, CRM) e formazione del team per il massimo ROI.",
    },
] as const;

export function getMethodologyHowToJsonLd() {
    return {
        "@context": "https://schema.org",
        "@type": "HowTo",
        name: "Metodologia Rayo: dal caos all'ordine",
        description: "Processo in tre fasi per portare sistemi AI in produzione: Data Audit, AI Architecture, Integration.",
        step: methodologySteps.map((s, i) => ({
            "@type": "HowToStep" as const,
            position: i + 1,
            name: s.title,
            text: s.description,
        })),
    };
}
