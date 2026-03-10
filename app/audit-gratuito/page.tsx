import Link from "next/link";

const BASE_URL = "https://rayo.consulting";

export const metadata = {
    title: "Audit gratuito | Rayo Consulting",
    description:
        "Audit gratuito sul potenziale AI per la tua azienda. In 48 ore: analisi, stima ROI e piano d'azione. Nessun impegno.",
    alternates: { canonical: `${BASE_URL}/audit-gratuito` },
    openGraph: {
        title: "Audit gratuito | Rayo Consulting",
        description: "Analisi del potenziale AI in 48 ore. Zero impegno.",
        url: `${BASE_URL}/audit-gratuito`,
    },
};

export default function AuditGratuitoPage() {
    return (
        <main className="pt-32 pb-24 px-6 md:px-12 max-w-3xl mx-auto">
            <p className="text-sm font-bold uppercase tracking-widest text-primary mb-6">
                Offerta limitata
            </p>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter leading-tight mb-8">
                Audit gratuito.<br />
                Zero impegno.
            </h1>
            <p className="text-xl text-foreground/70 leading-relaxed mb-12">
                In 48 ore analizziamo il potenziale AI per la tua azienda: dove automatizzare, stima ROI e piano d'azione concreto. Nessun commerciale, solo un ingegnere che ti dice cosa ha senso (e cosa no).
            </p>

            <ul className="space-y-4 text-foreground/80 mb-12 border-l-2 border-primary pl-6">
                <li>Analisi del tuo stack e dei processi candidati</li>
                <li>Stima di costi e tempi per un PoC</li>
                <li>Raccomandazioni prioritarie (RAG, Fine-Tuning, Agents)</li>
            </ul>

            <div className="flex flex-col sm:flex-row gap-4">
                <Link
                    href="/contact?utm_medium=audit&utm_source=landing"
                    className="inline-flex px-8 py-4 bg-primary text-white font-bold rounded-full hover:bg-primary/90 transition-colors text-sm text-center justify-center"
                >
                    Richiedi l'audit gratuito
                </Link>
                <Link
                    href="/cases"
                    className="inline-flex px-8 py-4 border border-foreground/20 font-medium rounded-full hover:border-foreground/40 transition-colors text-sm text-center justify-center"
                >
                    Vedi i casi studio
                </Link>
            </div>

            <p className="mt-12 text-sm text-foreground/50">
                Oppure prenota direttamente una discovery call di 30 minuti dalla{" "}
                <Link href="/contact#contact-form" className="text-primary hover:underline">
                    pagina contatti
                </Link>.
            </p>
        </main>
    );
}
