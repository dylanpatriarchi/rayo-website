"use client";

export default function WorkEthic() {
    return (
        <section className="py-24 md:py-48 px-6 md:px-12 bg-background border-t border-foreground/10">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 md:gap-32">
                <div className="md:w-1/3">
                    <h2 className="text-sm font-bold uppercase tracking-widest text-primary mb-4">Etica del Lavoro</h2>
                    <h3 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight">
                        Artigiani del Software.
                    </h3>
                </div>

                <div className="md:w-2/3 flex flex-col gap-12">
                    <div className="border-l border-foreground/20 pl-8">
                        <h4 className="text-xl font-bold mb-4">Robustezza Enterprise</h4>
                        <p className="text-lg md:text-xl font-light text-foreground/70 leading-relaxed">
                            Non costruiamo giocattoli. I nostri sistemi sono progettati per gestire carichi critici e dati sensibili.
                            Se si rompe, paghiamo noi. SLA garantito.
                        </p>
                    </div>

                    <div className="border-l border-foreground/20 pl-8">
                        <h4 className="text-xl font-bold mb-4">Codice Proprietario</h4>
                        <p className="text-lg md:text-xl font-light text-foreground/70 leading-relaxed">
                            Niente lock-in. Ti consegniamo le chiavi del regno: codice sorgente, pesi del modello e documentazione.
                            L'asset è tuo, per sempre.
                        </p>
                    </div>

                    <div className="border-l border-foreground/20 pl-8">
                        <h4 className="text-xl font-bold mb-4">Focus sul ROI</h4>
                        <p className="text-lg md:text-xl font-light text-foreground/70 leading-relaxed">
                            Non scriviamo una riga di codice se non c'è un chiaro ritorno economico.
                            Ogni sprint deve avvicinarti al fatturato o al risparmio costi.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
