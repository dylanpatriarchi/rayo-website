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
                        <h4 className="text-xl font-bold mb-4">Precisione Ossessiva</h4>
                        <p className="text-lg md:text-xl font-light text-foreground/70 leading-relaxed">
                            Non accettiamo il &quot;funziona abbastanza&quot;. Costruiamo infrastrutture che devono reggere il peso
                            di decisioni critiche. Ogni riga di codice, ogni prompt, ogni pipeline è testata fino alla rottura.
                        </p>
                    </div>

                    <div className="border-l border-foreground/20 pl-8">
                        <h4 className="text-xl font-bold mb-4">No Black Boxes</h4>
                        <p className="text-lg md:text-xl font-light text-foreground/70 leading-relaxed">
                            L&apos;AI non deve essere magica, deve essere comprensibile. Ti diamo il controllo completo
                            sui tuoi sistemi. Niente lock-in tecnologico, niente dipendenze oscure.
                        </p>
                    </div>

                    <div className="border-l border-foreground/20 pl-8">
                        <h4 className="text-xl font-bold mb-4">Velocità Chirurgica</h4>
                        <p className="text-lg md:text-xl font-light text-foreground/70 leading-relaxed">
                            Ci muoviamo velocemente non perché corriamo, ma perché non sbagliamo strada.
                            La nostra metodologia elimina le distrazioni e punta dritta al valore di business.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
