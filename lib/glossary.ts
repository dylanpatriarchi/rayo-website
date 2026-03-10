/**
 * Glossario /risorse: single source for UI and DefinedTermSet JSON-LD (GEO/AEO).
 */
const BASE_URL = "https://rayo.consulting";

export const glossaryTerms = [
    {
        term: "RAG (Retrieval-Augmented Generation)",
        def: "Tecnica che arricchisce il contesto del modello con documenti recuperati da una base conoscenza. Il modello risponde usando le fonti recuperate, riducendo le allucinazioni. Ideale quando hai molti documenti (contratti, manuali, policy) da interrogare.",
        link: "/servizi/rag",
        linkLabel: "Sistemi RAG",
        termCode: "rag",
    },
    {
        term: "Fine-tuning / Addestramento LLM",
        def: "Addestrare un modello (es. Llama, Mistral) su dati specifici per fargli adottare tono, terminologia e logica del tuo dominio. Serve quando serve output molto strutturato o in gergo di settore.",
        link: "/servizi/addestramento-llm",
        linkLabel: "Addestramento LLM",
        termCode: "fine-tuning",
    },
    {
        term: "Agenti AI",
        def: "Sistemi che non si limitano a rispondere: eseguono azioni (chiamate API, aggiornamento CRM, creazione ticket). Possono essere multi-agente e orchestrati per task complessi.",
        link: "/servizi/agenti-ai",
        linkLabel: "Agenti AI",
        termCode: "agenti-ai",
    },
    {
        term: "Consulenza tecnica / CTO as a Service",
        def: "Affiancamento su architettura, scelta stack, cloud e AI senza assumere un CTO. Audit, roadmap e sessioni ricorrenti per evitare debito tecnico e sprechi.",
        link: "/servizi/consulenza-tecnica",
        linkLabel: "Consulenza tecnica",
        termCode: "consulenza-tecnica",
    },
] as const;

export function getGlossaryDefinedTermSetJsonLd() {
    return {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "DefinedTermSet",
                "@id": `${BASE_URL}/risorse#glossary`,
                name: "Glossario AI e servizi Rayo Consulting",
                description: "Definizioni di RAG, fine-tuning, agenti AI e consulenza tecnica.",
                hasDefinedTerm: glossaryTerms.map((t) => ({
                    "@type": "DefinedTerm" as const,
                    "@id": `${BASE_URL}/risorse#${t.termCode}`,
                    name: t.term,
                    description: t.def,
                    termCode: t.termCode,
                    inDefinedTermSet: `${BASE_URL}/risorse#glossary`,
                })),
            },
        ],
    };
}
