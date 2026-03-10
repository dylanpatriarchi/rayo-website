import Link from "next/link";

const BASE_URL = "https://rayo.consulting";

export const metadata = {
    title: "Perché Rayo",
    description:
        "Rayo vs team interno, vs altre consulenze. Time to market, costo, expertise e rischio. Perché scegliere Rayo per progetti AI.",
    alternates: { canonical: `${BASE_URL}/rayo-vs` },
    openGraph: {
        title: "Perché Rayo | Rayo Consulting",
        description: "Confronto: Rayo vs team interno, vs altre consulenze AI.",
        url: `${BASE_URL}/rayo-vs`,
    },
};

export default function RayoVsPage() {
    return (
        <main className="pt-32 pb-24 px-6 md:px-12 max-w-4xl mx-auto">
            <h1 className="text-sm font-bold uppercase tracking-widest text-primary mb-6">
                Perché Rayo
            </h1>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter leading-tight mb-12">
                Rayo vs team interno, vs altre consulenze.
            </h2>
            <p className="text-xl text-foreground/70 mb-20">
                Costruire un team AI interno richiede tempo e budget elevati. Affidarsi a
                consulenze generiche espone al rischio di soluzioni non allineate. Ecco come ci
                posizioniamo.
            </p>

            <div className="space-y-16">
                <section>
                    <h3 className="text-2xl font-bold mb-6">Rayo vs team interno</h3>
                    <ul className="space-y-4 text-foreground/80">
                        <li>
                            <strong>Time to market:</strong> con Rayo il primo deploy in produzione
                            arriva in 4–6 settimane. Un team interno richiede mesi (assunzioni,
                            onboarding, scelta stack).
                        </li>
                        <li>
                            <strong>Costo operativo:</strong> nessun costo fisso. Paghi progetto o
                            consulenza. Un team interno ha stipendi e overhead fissi.
                        </li>
                        <li>
                            <strong>Expertise:</strong> ingegneri senior specializzati in RAG, LLM e
                            agenti. Un team generalist ha una learning curve lunga.
                        </li>
                        <li>
                            <strong>Rischio:</strong> PoC gratuito e garanzia soddisfatti o
                            rimborsati. Con un team interno il rischio di fallimento e spreco di
                            budget è alto.
                        </li>
                    </ul>
                </section>

                <section>
                    <h3 className="text-2xl font-bold mb-6">Rayo vs altre consulenze AI</h3>
                    <ul className="space-y-4 text-foreground/80">
                        <li>
                            <strong>Niente wrapper generici:</strong> non vendiamo integrazioni
                            ChatGPT o “AI da mettere ovunque”. Progettiamo sistemi su misura (RAG,
                            fine-tuning, agenti) per il tuo dominio.
                        </li>
                        <li>
                            <strong>Proprietà del codice e dei modelli:</strong> tutto ciò che
                            costruiamo è tuo. Nessun lock-in su piattaforme proprietarie.
                        </li>
                        <li>
                            <strong>Deploy on-premise o cloud privato:</strong> per enterprise con
                            vincoli di dati e compliance. I tuoi dati non finiscono in API di terzi.
                        </li>
                        <li>
                            <strong>Misuriamo il ROI:</strong> obiettivi chiari, metriche e
                            manutenzione continua. Non consegniamo e spariamo.
                        </li>
                    </ul>
                </section>
            </div>

            <div className="mt-24 pt-12 border-t border-foreground/10 flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                    href="/contact"
                    className="inline-flex px-8 py-4 bg-primary text-white font-bold rounded-full hover:bg-primary/90 transition-colors text-sm text-center justify-center"
                >
                    Contattaci
                </Link>
                <Link
                    href="/audit-gratuito"
                    className="inline-flex px-8 py-4 border border-foreground/20 font-medium rounded-full hover:border-foreground/40 transition-colors text-sm text-center justify-center"
                >
                    Audit gratuito
                </Link>
            </div>
        </main>
    );
}
