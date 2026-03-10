export const SETTORE_SLUGS = ["assicurazioni", "legale", "healthcare", "finance"] as const;
export type SettoreSlug = (typeof SETTORE_SLUGS)[number];

export interface SettoreLandingData {
    slug: SettoreSlug;
    title: string;
    headline: string;
    description: string;
    metaDescription: string;
    problemIntro: string;
    proofTitle: string;
    proofCaseSlug?: string;
    proofCaseTitle?: string;
    ctaTitle: string;
    ctaSubtitle: string;
}

export const SETTORI_LANDING: Record<SettoreSlug, SettoreLandingData> = {
    assicurazioni: {
        slug: "assicurazioni",
        title: "AI per Assicurazioni",
        headline: "RAG e automazione per polizze, sinistri e contact center.",
        description:
            "Sistemi RAG su condizioni di polizza, pre-istruttoria sinistri, assistenza agli operatori. Riduzione errori di classificazione e tempi di risposta.",
        metaDescription:
            "AI e RAG per compagnie assicurative: polizze, sinistri, contact center. Case study e soluzioni su misura. Rayo Consulting.",
        problemIntro:
            "Polizze complesse, documentazione in continuo aggiornamento, contact center sotto pressione. Il RAG enterprise permette agli operatori di avere risposte precise in tempo reale e di classificare i sinistri con accuratezza.",
        proofTitle: "Case study",
        proofCaseSlug: "compagnia-assicurativa-rag",
        proofCaseTitle: "RAG per consulenza su polizze e pre-istruttoria sinistri",
        ctaTitle: "Vuoi risultati simili per la tua compagnia?",
        ctaSubtitle: "Audit gratuito e stima in 48 ore.",
    },
    legale: {
        slug: "legale",
        title: "AI per Studi Legali",
        headline: "Ricerca semantica su contratti e prassi. Zero ore perse in ricerca.",
        description:
            "RAG su contratti, clausole, giurisprudenza. Assistenti che citano le fonti. Ideale per due diligence, analisi contrattuale e supporto ai legali.",
        metaDescription:
            "RAG e AI per studi legali: contratti, clausole, ricerca semantica. Case study e implementazioni. Rayo Consulting.",
        problemIntro:
            "Migliaia di documenti, clausole da confrontare, tempi di ricerca che erodono margini. Un sistema RAG dedicato al dominio legale restituisce la risposta con citazione della fonte in secondi.",
        proofTitle: "Case study",
        proofCaseSlug: "studio-legale-rag",
        proofCaseTitle: "Sistema RAG per analisi contratti e consulenza legale",
        ctaTitle: "Vuoi portare il RAG nel tuo studio?",
        ctaSubtitle: "Una call per capire obiettivi e volumi.",
    },
    healthcare: {
        slug: "healthcare",
        title: "AI per Healthcare",
        headline: "Compliance, privacy e AI. Deploy sicuro su dati sensibili.",
        description:
            "Soluzioni AI per healthcare: report, classificazione, supporto alla diagnosi. Deployment on-premise o cloud dedicato, GDPR e normative sanitarie.",
        metaDescription:
            "AI per healthcare: compliance, privacy, RAG e LLM su dati sensibili. Rayo Consulting.",
        problemIntro:
            "Dati sanitari richiedono massima sicurezza e conformità. Costruiamo sistemi che rispettano normative e data residency, con audit trail e controllo degli accessi.",
        proofTitle: "Case study",
        proofCaseSlug: "gruppo-sanitario-ai-agents",
        proofCaseTitle: "AI Agents per gruppo sanitario",
        ctaTitle: "Hai un progetto AI in ambito sanitario?",
        ctaSubtitle: "Parliamone: valutiamo insieme compliance e architettura.",
    },
    finance: {
        slug: "finance",
        title: "AI per Finance e Banking",
        headline: "LLM e RAG per report, compliance e customer experience.",
        description:
            "Fine-tuning e RAG per istituti finanziari: report automatizzati, analisi documentale, assistenti interni. Infrastruttura controllata e auditabile.",
        metaDescription:
            "AI per finance e banking: LLM, RAG, report e compliance. Case study e soluzioni. Rayo Consulting.",
        problemIntro:
            "Regolamentazione stringente e volumi alti. I nostri progetti in ambito finance puntano su modelli controllati, tracciabilità e integrazione con i vostri sistemi core.",
        proofTitle: "Case study",
        proofCaseSlug: "istituto-bancario-llm",
        proofCaseTitle: "LLM per istituto bancario",
        ctaTitle: "Vuoi esplorare l'AI per la tua banca o fintech?",
        ctaSubtitle: "Discovery call e roadmap senza impegno.",
    },
};

export function getSettoreBySlug(slug: string): SettoreLandingData | null {
    if (SETTORE_SLUGS.includes(slug as SettoreSlug)) return SETTORI_LANDING[slug as SettoreSlug];
    return null;
}
