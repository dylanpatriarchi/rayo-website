import Link from "next/link";
import { glossaryTerms, getGlossaryDefinedTermSetJsonLd } from "@/lib/glossary";

const BASE_URL = "https://rayo.consulting";

export const metadata = {
    title: "Risorse e Glossario",
    description:
        "Cos'è il RAG, il fine-tuning, gli agenti AI. Guide brevi e link ai servizi Rayo per approfondire.",
    alternates: { canonical: `${BASE_URL}/risorse` },
    openGraph: {
        title: "Risorse e Glossario | Rayo Consulting",
        description: "RAG, LLM, agenti AI: definizioni e quando sceglierli.",
        url: `${BASE_URL}/risorse`,
    },
};

export default function RisorsePage() {
    const definedTermSetJsonLd = getGlossaryDefinedTermSetJsonLd();

    return (
        <main className="pt-32 pb-24 px-6 md:px-12 max-w-4xl mx-auto">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(definedTermSetJsonLd) }}
            />
            <h1 className="text-sm font-bold uppercase tracking-widest text-primary mb-6">
                Risorse
            </h1>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter leading-tight mb-12">
                Glossario e concetti.
            </h2>
            <p className="text-xl text-foreground/70 mb-16">
                Brevi definizioni e quando ha senso ogni approccio. Per approfondire, ogni voce
                punta al servizio corrispondente.
            </p>

            <div className="space-y-16">
                {glossaryTerms.map((v) => (
                    <section key={v.termCode} id={v.termCode} className="border-b border-foreground/10 pb-12">
                        <h3 className="text-2xl font-bold mb-4">{v.term}</h3>
                        <p className="text-foreground/80 leading-relaxed mb-6">{v.def}</p>
                        <Link
                            href={v.link}
                            className="text-primary font-bold text-sm hover:underline"
                        >
                            {v.linkLabel} →
                        </Link>
                    </section>
                ))}
            </div>

            <div className="mt-24 pt-12 border-t border-foreground/10 text-center">
                <p className="text-foreground/60 mb-6">Vuoi capire cosa ha senso per il tuo caso?</p>
                <Link
                    href="/audit-gratuito"
                    className="inline-flex px-8 py-4 bg-primary text-white font-bold rounded-full hover:bg-primary/90 transition-colors text-sm"
                >
                    Audit gratuito
                </Link>
            </div>
        </main>
    );
}
