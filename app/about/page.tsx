import FounderCard from "@/components/FounderCard";
import Link from "next/link";

export const metadata = {
    title: "Chi Siamo",
    description: "Rayo Consulting: ingegneri AI, non un'agenzia. Costruiamo sistemi RAG e LLM in produzione, non demo. Visione, metodo e risultati misurabili.",
    openGraph: {
        title: "Chi Siamo | Rayo Consulting",
        description: "Ingegneri AI. Precisione assoluta o niente. Lavoriamo solo con chi vuole dominare il mercato.",
        url: "https://rayo.consulting/about",
    },
    alternates: { canonical: "https://rayo.consulting/about" },
};

export default function About() {
    return (
        <main className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
            <div className="max-w-4xl">
                <p className="text-sm font-bold uppercase tracking-widest text-primary mb-6">Chi Siamo</p>
                <h1 className="text-4xl md:text-7xl font-bold tracking-tighter leading-none mb-12">
                    Non siamo <br />
                    un&apos;altra agenzia.
                </h1>

                <div className="prose prose-lg md:prose-xl dark:prose-invert font-light text-foreground/80 space-y-8 leading-relaxed mb-24">
                    <p>
                        Il mercato è saturo di &quot;esperti AI&quot; nati ieri, che vendono wrapper di ChatGPT come rivoluzioni industriali.
                        Noi siamo ingegneri. Costruiamo sistemi, non demo.
                    </p>
                    <p>
                        Rayo Consulting nasce per colmare il vuoto tra l&apos;hype e la realtà produttiva.
                        Esistono aziende che vogliono giocare con l&apos;AI, e aziende che vogliono dominare il mercato usandola.
                        Noi lavoriamo solo con le seconde.
                    </p>
                    <p>
                        La nostra filosofia è radicale: <strong>precisione assoluta o niente</strong>.
                        Se cerchi qualcuno che ti dica sempre di sì, hai sbagliato indirizzo.
                        Se cerchi partner che sfidano i tuoi processi per renderli a prova di futuro, benvenuto.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 border-t border-foreground/10 pt-16">
                    <div>
                        <h3 className="text-2xl font-bold mb-4">Visione</h3>
                        <p className="text-foreground/70">
                            Un futuro dove l&apos;intelligenza artificiale non sostituisce l&apos;uomo, ma ne amplifica l&apos;intuito strategico eliminando il rumore operativo. Accettiamo solo la massima efficienza.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold mb-4">Metodo</h3>
                        <p className="text-foreground/70">
                            Analisi spietata. Codice pulito. Deploy sicuro. Niente buzzword, niente slide inutili. Misuriamo il successo in ROI e in ore risparmiate, non in like su LinkedIn.
                        </p>
                    </div>
                </div>
            </div>

            <FounderCard />

            <div className="border-t border-foreground/10 pt-16 mt-8">
                <p className="text-sm font-bold uppercase tracking-widest text-primary mb-4">
                    Network
                </p>
                <h2 className="text-2xl md:text-3xl font-bold mb-6">Non lavoriamo soli.</h2>
                <p className="text-foreground/60 font-light max-w-2xl mb-12 leading-relaxed">
                    Rayo Consulting è guidata da Dylan Patriarchi. Per ogni progetto, costruiamo team
                    ad-hoc con specialisti selezionati dalla nostra rete di ingegneri senior: ML
                    engineers, data architects, DevOps e UX designers. Nessun generalista. Solo il
                    profilo giusto per il problema specifico.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        {
                            title: "ML Engineering",
                            description:
                                "Fine-tuning, RAG, model optimization. Esperienza con Llama, Mistral, Qwen, Phi.",
                        },
                        {
                            title: "Data Architecture",
                            description:
                                "Pipeline ETL, vector databases, knowledge graphs. Da Qdrant a Neo4j.",
                        },
                        {
                            title: "Infrastructure & DevOps",
                            description:
                                "Deploy on-premise, GPU servers, Kubernetes, monitoring. Zero downtime.",
                        },
                        {
                            title: "Backend & Integrations",
                            description:
                                "API design, ERP/CRM connectors, automazioni. Python e Node.js.",
                        },
                    ].map((card) => (
                        <div key={card.title} className="bg-foreground/5 rounded-xl p-6">
                            <h3 className="font-bold mb-2 text-base">{card.title}</h3>
                            <p className="text-foreground/60 text-sm font-light leading-relaxed">
                                {card.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="mt-24 pt-24 border-t border-foreground/10 text-center">
                <p className="text-foreground/60 font-light mb-6">Vuoi lavorare con noi?</p>
                <Link href="/contact" className="inline-flex px-8 py-4 bg-primary text-white font-bold rounded-full hover:bg-primary/90 transition-colors text-sm">
                    Contattaci
                </Link>
            </div>
        </main>
    );
}
