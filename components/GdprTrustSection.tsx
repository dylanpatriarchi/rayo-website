const trustPoints = [
    {
        title: "On-Premise Deploy",
        description:
            "Installiamo direttamente sui tuoi server. Zero data egress. Zero vendor lock-in.",
    },
    {
        title: "GDPR by Design",
        description:
            "Architetture conformi al Regolamento EU 2016/679. Audit trail, access control e data residency in Italia.",
    },
    {
        title: "Nessuna API Esterna",
        description:
            "Per le soluzioni sensitive, usiamo modelli open-source hostati localmente. I tuoi documenti non raggiungono OpenAI o altri provider.",
    },
    {
        title: "Codice di Tua Proprietà",
        description:
            "Repository, documentazione e pesi dei modelli addestrati appartengono a te. Nessun lock-in con Rayo.",
    },
];

export default function GdprTrustSection() {
    return (
        <section className="py-24 px-6 md:px-12 bg-background border-t border-foreground/10">
            <div className="max-w-7xl mx-auto">
                <p className="text-primary text-sm font-bold uppercase tracking-widest mb-6">
                    Privacy &amp; Sicurezza
                </p>
                <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">
                    I tuoi dati non escono dall&apos;Italia.
                </h2>
                <p className="text-lg text-foreground/60 font-light max-w-2xl mb-16 leading-relaxed">
                    Ogni sistema che costruiamo può essere deployato on-premise o su cloud dedicato in
                    territorio italiano. Nessun dato transita su API esterne senza il tuo consenso
                    esplicito.
                </p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {trustPoints.map((point) => (
                        <div key={point.title} className="border-l-2 border-primary pl-6">
                            <h3 className="font-bold mb-3 text-base">{point.title}</h3>
                            <p className="text-sm text-foreground/60 font-light leading-relaxed">
                                {point.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
