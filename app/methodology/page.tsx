import Methodology from "@/components/Methodology";
import Link from "next/link";
import { getMethodologyHowToJsonLd } from "@/lib/methodology-steps";

export const metadata = {
    title: "Metodologia",
    description: "Il nostro processo: dal caos all'ordine. Discovery, design, build, deploy e ottimizzazione continua. Approccio ciclico per sistemi AI in produzione.",
    openGraph: {
        title: "Metodologia | Rayo Consulting",
        description: "Dal caos all'ordine. Processo collaudato per RAG, Fine-Tuning e AI Agents.",
        url: "https://rayo.consulting/methodology",
    },
    alternates: { canonical: "https://rayo.consulting/methodology" },
};

export default function MethodologyPage() {
    const howToJsonLd = getMethodologyHowToJsonLd();

    return (
        <main className="w-full min-h-screen">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }}
            />
            <div className="pt-32 px-6 md:px-12 max-w-7xl mx-auto mb-12">
                <p className="text-sm font-bold uppercase tracking-widest text-primary mb-6">Il Nostro Processo</p>
                <h1 className="text-4xl md:text-7xl font-bold tracking-tighter leading-none">
                    Dal Caos <br />
                    all&apos;Ordine.
                </h1>
            </div>
            <Methodology />
            <div className="py-24 px-6 md:px-12 max-w-4xl mx-auto prose prose-lg md:prose-xl dark:prose-invert">
                <p>
                    Il nostro approccio non è lineare, è ciclico. Ogni deployment fornisce dati per il ciclo successivo di ottimizzazione.
                    Non consegniamo codice morto, ma organismi viventi che evolvono con la tua azienda.
                </p>
            </div>
            <div className="pb-24 px-6 md:px-12 text-center">
                <p className="text-foreground/60 font-light mb-6">Pronto ad applicare questo metodo al tuo progetto?</p>
                <Link href="/contact" className="inline-flex px-8 py-4 bg-primary text-white font-bold rounded-full hover:bg-primary/90 transition-colors text-sm">
                    Richiedi un audit
                </Link>
            </div>
        </main>
    );
}
