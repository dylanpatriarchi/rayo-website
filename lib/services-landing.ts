/**
 * Slug servizi: solo italiano.
 * Redirect da vecchi URL: fine-tuning → addestramento-llm, ai-agents → agenti-ai, tech-advisory → consulenza-tecnica
 */
export const SERVICE_SLUGS = ["rag", "addestramento-llm", "agenti-ai", "consulenza-tecnica"] as const;
export type ServiceSlug = (typeof SERVICE_SLUGS)[number];

export interface ServiceLandingData {
    slug: ServiceSlug;
    title: string;
    headline: string;
    description: string;
    metaDescription: string;
    /** Hero sezione */
    heroTitle: string;
    heroSubtitle: string;
    /** Il problema */
    problemTitle: string;
    problemIntro: string;
    problemBullets: string[];
    /** Come funziona / processo */
    howTitle: string;
    howIntro: string;
    howSteps: { title: string; text: string }[];
    /** Cosa includiamo */
    features: string[];
    /** Casi d'uso */
    useCasesLabel: string;
    useCases: string[];
    /** Risultati / numeri (opzionale) */
    resultsIntro?: string;
    results?: { value: string; label: string }[];
    /** CTA */
    ctaLabel: string;
    ctaFinalTitle: string;
    ctaFinalSubtitle: string;
}

export const SERVICES_LANDING: Record<ServiceSlug, ServiceLandingData> = {
    rag: {
        slug: "rag",
        title: "Sistemi RAG Enterprise",
        headline: "Il tuo cervello aziendale centralizzato.",
        description:
            "Ricerca semantica istantanea su milioni di documenti. Costruiamo sistemi RAG enterprise con parsing avanzato, hybrid search e re-ranking per massima rilevanza.",
        metaDescription:
            "Sistemi RAG enterprise per ricerca semantica su documenti. Assistenti legali, supporto tecnico, onboarding. Rayo Consulting.",
        heroTitle: "Da milioni di documenti alla risposta giusta in secondi.",
        heroSubtitle:
            "I tuoi dati sono sparsi in PDF, contratti, manuali e knowledge base. Il RAG (Retrieval-Augmented Generation) trasforma quel caos in un unico cervello interrogabile: risposte precise, citazioni alla fonte, zero allucinazioni.",
        problemTitle: "Il problema che risolviamo",
        problemIntro:
            "Ogni giorno le tue persone perdono ore a cercare informazioni: in quale contratto c’è quella clausola? Quale procedura vale per questo sinistro? La risposta esiste, ma è sepolta in decine di fonti.",
        problemBullets: [
            "Tempi di ricerca lunghi e errori di interpretazione",
            "Knowledge dispersa tra reparti e tool diversi",
            "Assistenti generici (tipo ChatGPT) che non conoscono i tuoi documenti",
        ],
        howTitle: "Come lavoriamo",
        howIntro:
            "Non installiamo un chatbot e via. Progettiamo l’architettura di retrieval, il chunking e i metadati giusti per il tuo dominio.",
        howSteps: [
            {
                title: "Discovery e mappatura documentale",
                text: "Analizziamo fonti, formati e modalità di accesso. Definiamo cosa deve essere interrogabile e con quale granularità.",
            },
            {
                title: "Pipeline di indicizzazione",
                text: "Parsing avanzato (tabelle, schemi tecnici), chunking semantico e hybrid search (keyword + vettoriale) con re-ranking per la massima rilevanza.",
            },
            {
                title: "Integrazione e deploy",
                text: "API o interfaccia integrata nel tuo flusso (contact center, intranet, portale). Monitoraggio e manutenzione continua.",
            },
        ],
        features: [
            "Parsing avanzato di tabelle e schemi tecnici",
            "Ricerca ibrida (keyword + semantica)",
            "Re-ranking per massima rilevanza",
            "Citazione delle fonti e tracciabilità",
        ],
        useCasesLabel: "Casi d'uso",
        useCases: [
            "Assistenti legali per analisi contratti e clausole",
            "Supporto tecnico su manualistica e procedure",
            "Onboarding HR con risposte su policy e benefit",
            "Contact center con risposte su polizze e sinistri",
        ],
        resultsIntro: "Nei progetti RAG che abbiamo consegnato abbiamo misurato:",
        results: [
            { value: "-70%", label: "tempo di ricerca dell’informazione" },
            { value: "-90%", label: "errori di classificazione (in contesti pre-istruttoria)" },
        ],
        ctaLabel: "Richiedi un preventivo",
        ctaFinalTitle: "Pronto a dare un cervello ai tuoi documenti?",
        ctaFinalSubtitle: "Audit gratuito in 48 ore. Nessun impegno.",
    },
    "addestramento-llm": {
        slug: "addestramento-llm",
        title: "Addestramento LLM su misura",
        headline: "L’AI che parla il linguaggio della tua azienda.",
        description:
            "Addestriamo modelli (Llama 3, Mistral e altri) sui tuoi dati: tono, terminologia, processi. Report, classificazioni e risposte che sembrano scritte dal tuo miglior esperto.",
        metaDescription:
            "Addestramento LLM su Llama 3, Mistral. Report automatizzati, agenti di vendita, classificazione ticket. Rayo Consulting.",
        heroTitle: "Un modello che ragiona come il tuo miglior dipendente.",
        heroSubtitle:
            "I modelli generici sono bravi a tutto e a niente. Con il fine-tuning (e le tecniche LoRA/QLoRA) addestriamo il modello sul tuo dominio: report medici o finanziari, script di vendita, classificazione ticket, linguaggio di compliance.",
        problemTitle: "Perché il fine-tuning",
        problemIntro:
            "Prompt e RAG portano lontano, ma quando serve uno stile preciso, una terminologia di settore o una logica decisionale ripetibile, il modello deve essere addestrato sui tuoi dati.",
        problemBullets: [
            "Output generici che non rispettano tono e formato aziendale",
            "Errori su acronimi, normativa e procedure interne",
            "Impossibilità di scalare senza rivedere ogni risposta",
        ],
        howTitle: "Il nostro processo",
        howIntro:
            "Dataset cleaning, scelta dell’architettura (full fine-tuning o LoRA/QLoRA) e metriche di valutazione allineate al tuo business.",
        howSteps: [
            {
                title: "Raccolta e pulizia del dataset",
                text: "Definiamo gli esempi (input/output) rappresentativi. Pulizia, deduplicazione e bilanciamento per evitare bias.",
            },
            {
                title: "Training e valutazione",
                text: "Addestramento con LoRA/QLoRA per efficienza e costi contenuti. Benchmark su metriche di qualità e allineamento al tuo use case.",
            },
            {
                title: "Deploy e iterazione",
                text: "Modello deployato on-premise o su cloud controllato. Pipeline di ri-addestramento quando arrivano nuovi dati.",
            },
        ],
        features: [
            "Pulizia e arricchimento dataset",
            "Tecniche LoRA / QLoRA",
            "Valutazione con benchmark su misura",
            "Deploy on-premise o cloud privato",
        ],
        useCasesLabel: "Casi d'uso",
        useCases: [
            "Generazione report medici o finanziari in stile aziendale",
            "Agenti di vendita con script e obiezioni specifiche",
            "Classificazione automatica di ticket e richieste",
            "Risposte in linguaggio di compliance e normativa",
        ],
        resultsIntro: "Con l’addestramento su dati di dominio otteniamo:",
        results: [
            { value: ">90%", label: "allineamento allo stile e al formato richiesto" },
            { value: "-60%", label: "tempo di revisione umana sui contenuti generati" },
        ],
        ctaLabel: "Parliamone",
        ctaFinalTitle: "Vuoi un modello che parli come la tua azienda?",
        ctaFinalSubtitle: "Una call per capire dati, obiettivi e tempi. Preventivo in 48 ore.",
    },
    "agenti-ai": {
        slug: "agenti-ai",
        title: "Agenti AI autonomi",
        headline: "Forza lavoro digitale attiva 24/7.",
        description:
            "Agenti che eseguono task complessi: integrazione con API e sistemi legacy, orchestrazione multi-agente, automazione di customer care, qualificazione lead, data entry e molto altro.",
        metaDescription:
            "Agenti AI per automazione customer care, qualificazione lead, data entry. Agenti 24/7 su API e sistemi legacy. Rayo Consulting.",
        heroTitle: "Agenti che agiscono, non solo rispondono.",
        heroSubtitle:
            "Non solo chatbot: agenti che prendono decisioni, chiamano API, aggiornano CRM, qualificano lead e gestiscono flussi end-to-end. Orchestrazione multi-agente, tool use e integrazione con i tuoi sistemi.",
        problemTitle: "Il limite dei “solo chatbot”",
        problemIntro:
            "Un assistente che risponde ma non agisce ti lascia con metà del lavoro: qualificare un lead, aprire un ticket, aggiornare un record. Gli agenti che progettiamo completano il ciclo.",
        problemBullets: [
            "Chat che rispondono ma non integrano CRM o backend",
            "Task ripetitivi ancora in mano alle persone",
            "Nessuna orchestrazione tra più competenze (vendita, supporto, operations)",
        ],
        howTitle: "Come progettiamo gli agenti",
        howIntro:
            "Dalla mappatura dei task alla scelta di tool, API e logica decisionale. Ogni agente ha obiettivi chiari e confini operativi.",
        howSteps: [
            {
                title: "Mappatura task e integrazioni",
                text: "Definiamo quali azioni l’agente deve compiere, quali API e sistemi deve usare e dove si ferma l’automazione (escalation umana).",
            },
            {
                title: "Orchestrazione e tool use",
                text: "Agenti singoli o multi-agente, con accesso a tool (ricerca, calcoli, chiamate API). Logica di retry, fallback e audit trail.",
            },
            {
                title: "Deploy e monitoraggio",
                text: "Integrazione in canali esistenti (chat, email, telefono). Monitoraggio su qualità, latenza e costi per iterare.",
            },
        ],
        features: [
            "Orchestrazione multi-agente",
            "Integrazione API e sistemi legacy",
            "Esecuzione task autonoma con tool use",
            "Audit trail e escalation umana",
        ],
        useCasesLabel: "Casi d'uso",
        useCases: [
            "Automazione customer care con creazione ticket e follow-up",
            "Qualificazione lead e aggiornamento CRM",
            "Data entry e estrazione da documenti e email",
            "Workflow interni (approvazioni, notifiche, report)",
        ],
        resultsIntro: "Gli agenti che abbiamo messo in produzione portano:",
        results: [
            { value: "24/7", label: "copertura senza aumentare il team" },
            { value: "-50%", label: "tempo su task ripetitivi a alta priorità" },
        ],
        ctaLabel: "Richiedi una consulenza",
        ctaFinalTitle: "Hai processi che vorresti far girare in automatico?",
        ctaFinalSubtitle: "Una discovery call per capire dove gli agenti possono fare la differenza.",
    },
    "consulenza-tecnica": {
        slug: "consulenza-tecnica",
        title: "Consulenza tecnica e CTO as a Service",
        headline: "CTO as a Service: niente sprechi, niente debito tecnico.",
        description:
            "Guidiamo le scelte di architettura, cloud e AI. Audit tecnico, strategy e ottimizzazione processi di sviluppo. Evitiamo progetti sbagliati prima che costino caro.",
        metaDescription:
            "CTO as a Service: audit tecnico, architettura cloud e AI, ottimizzazione costi. Rayo Consulting.",
        heroTitle: "Scelte tecniche giuste, prima che costino care.",
        heroSubtitle:
            "Spesso il problema non è “mancanza di sviluppatori” ma architetture confuse, cloud sprecato e progetti AI avviati senza un piano. Offriamo consulenza tecnica e CTO as a Service per allineare tecnologia e business.",
        problemTitle: "Perché serve una bussola tecnica",
        problemIntro:
            "Scegliere stack, cloud provider, modello AI o partner di sviluppo senza una visione chiara genera ritardi, costi e debito tecnico. Un CTO part-time o un audit mirato mettono ordine.",
        problemBullets: [
            "Progetti AI avviati senza chiarezza su costi e limiti",
            "Cloud e licenze che crescono senza controllo",
            "Team che remano in direzioni diverse",
        ],
        howTitle: "Cosa facciamo",
        howIntro:
            "Audit, roadmap e affiancamento. Non vendiamo ore di sviluppo: vendiamo chiarezza e direzione.",
        howSteps: [
            {
                title: "Technology audit",
                text: "Analisi di architettura, costi cloud, sicurezza e allineamento agli obiettivi business. Report con priorità e raccomandazioni.",
            },
            {
                title: "Strategy e roadmap",
                text: "Definizione di stack, provider e fasi di implementazione per AI, integrazioni e nuovi prodotti. Scelta build vs buy.",
            },
            {
                title: "Affiancamento continuo",
                text: "Sessioni ricorrenti per revisionare scelte, valutare fornitori e ottimizzare processi di sviluppo.",
            },
        ],
        features: [
            "Technology strategy e audit",
            "Architettura cloud e AI",
            "Ottimizzazione processi di sviluppo",
            "Prevenzione debito tecnico",
        ],
        useCasesLabel: "Vantaggi",
        useCases: [
            "Guidiamo le scelte tecniche senza legarvi a un solo fornitore",
            "Preveniamo il debito tecnico e i progetti a binario morto",
            "Ottimizziamo i costi cloud e le licenze",
        ],
        ctaLabel: "Prenota un audit",
        ctaFinalTitle: "Vuoi una bussola tecnica senza assumere un CTO?",
        ctaFinalSubtitle: "Una call per capire dove state e dove volete arrivare.",
    },
};

export function getServiceBySlug(slug: string): ServiceLandingData | null {
    if (SERVICE_SLUGS.includes(slug as ServiceSlug)) return SERVICES_LANDING[slug as ServiceSlug];
    return null;
}
