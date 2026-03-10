/**
 * Single source of truth for FAQ content.
 * Used by components/FAQ.tsx and app/layout.tsx (FAQPage JSON-LD for GEO/AEO).
 */
export const faqs = [
    {
        question: "Come si differenzia il vostro approccio RAG?",
        answer: "Non usiamo semplici database vettoriali. Costruiamo grafi di conoscenza che mantengono il contesto semantico e gerarchico dei documenti, garantendo risposte che non solo trovano l'informazione, ma la comprendono.",
    },
    {
        question: "I miei dati vengono usati per il training?",
        answer: "Assolutamente no. Per le soluzioni Enterprise, offriamo deployment su cloud privato o on-premise. I modelli vengono fine-tunati sui tuoi dati, ma quei pesi rimangono di tua esclusiva proprietà.",
    },
    {
        question: "Quali sono i tempi di implementazione?",
        answer: "Per un sistema RAG standard, 2-3 settimane. Per progetti di Fine-Tuning complessi, dalle 4 alle 8 settimane a seconda della pulizia del dataset iniziale.",
    },
    {
        question: "Quanto costa l'investimento iniziale e qual è il ROI?",
        answer: "L'investimento dipende da obiettivi e scope. Il ROI dipende fortemente dal volume del processo automatizzato. Per sistemi RAG su processi documentali intensivi, i clienti tipicamente recuperano l'investimento in 3–6 mesi grazie al risparmio di ore-uomo. Usiamo il nostro ROI Calculator per stimare i numeri reali basandoci sui tuoi dati.",
    },
    {
        question: "Offrite manutenzione post-rilascio?",
        answer: "Sì. L'AI non è statica. Offriamo piani 'Enterprise Care' che includono retraining periodico, monitoraggio delle performance e aggiornamenti di sicurezza prioritari.",
    },
    {
        question: "Quali tecnologie usate?",
        answer: "Lavoriamo con stack open source e cloud: Llama, Mistral, vettoriali (Qdrant, pgvector), LangChain/LlamaIndex per orchestrazione, Next.js e Python per applicazioni. Preferiamo soluzioni che restano di vostra proprietà e deployabili on-premise o su cloud dedicato.",
    },
    {
        question: "Lavorate con aziende di ogni dimensione?",
        answer: "Sì. Abbiamo progetti con startup, PMI e enterprise. Il comune denominatore è la volontà di avere un sistema AI reale in produzione, non una demo. Per realtà molto piccole consigliamo di partire da un audit per capire priorità e budget.",
    },
    {
        question: "Come funziona l'audit gratuito?",
        answer: "Dopo la richiesta ti contattiamo in 24–48 ore. Una call di discovery (circa 30 min) per capire obiettivi, dati e vincoli. In seguito inviamo una sintesi con raccomandazioni e stima di tempi e investimento. Nessun impegno.",
    },
    {
        question: "Posso avere il codice sorgente?",
        answer: "Sì. Il codice che scriviamo è di proprietà del cliente. Nessun lock-in: repository, documentazione e pesi dei modelli addestrati vi appartengono.",
    },
    {
        question: "Gestite anche il deploy e l'hosting?",
        answer: "Sì. Possiamo occuparci del deploy su vostra infrastruttura (on-premise o cloud che già usate) o consigliare e configurare ambienti dedicati. Supportiamo anche la manutenzione e il monitoraggio post-go-live.",
    },
    {
        question: "Costruite anche AI Agents? Come si differenziano dal RAG?",
        answer: "Sì. Gli AI Agents sono sistemi che non si limitano a rispondere ma eseguono azioni: inviano email, compilano form, interrogano API, prendono decisioni condizionate. Il RAG è ideale per la ricerca documentale intelligente. Gli Agents sono ideali per automatizzare workflow multi-step. Spesso li combiniamo: un Agent che usa RAG per trovare le informazioni e poi agisce di conseguenza.",
    },
    {
        question: "I sistemi che costruite sono conformi al GDPR?",
        answer: "Sì. Progettiamo ogni sistema con la conformità GDPR come requisito non negoziabile, non come afterthought. Questo significa: data residency in Italia o EU, possibilità di deploy on-premise, zero trasmissione di dati a provider esterni senza consenso esplicito, audit trail completo, e documentazione per il DPO.",
    },
] as const;
