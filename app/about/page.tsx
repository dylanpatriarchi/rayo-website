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
                <h1 className="text-sm font-bold uppercase tracking-widest text-primary mb-6">Chi Siamo</h1>
                <h2 className="text-4xl md:text-7xl font-bold tracking-tighter leading-none mb-12">
                    Non siamo <br />
                    un&apos;altra agenzia.
                </h2>

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

            <div className="mt-24 pt-24 border-t border-foreground/10 text-center">
                <p className="text-foreground/60 font-light mb-6">Vuoi lavorare con noi?</p>
                <Link href="/contact" className="inline-flex px-8 py-4 bg-primary text-white font-bold rounded-full hover:bg-primary/90 transition-colors text-sm">
                    Contattaci
                </Link>
            </div>
        </main>
    );
}
