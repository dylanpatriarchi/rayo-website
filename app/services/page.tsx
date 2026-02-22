export default function ServicesPage() {
    return (
        <main className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
            <h1 className="text-sm font-bold uppercase tracking-widest text-primary mb-6">Servizi</h1>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter leading-none mb-24">
                Capacità Operative.
            </h2>

            <div className="space-y-32">
                {/* RAG Section */}
                <section className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-start">
                    <div>
                        <h3 className="text-4xl font-bold mb-6">Enterprise RAG</h3>
                        <p className="text-xl font-light text-foreground/70 leading-relaxed mb-8">
                            Il tuo &apos;Cervello Aziendale&apos; centralizzato. Ricerca semantica istantanea su milioni di documenti. Zero perdite di tempo.
                        </p>
                        <ul className="space-y-4 text-sm font-medium border-l-2 border-primary pl-6">
                            <li>Parsing avanzato di tabelle e schemi tecnici</li>
                            <li>Hybrid Search (Keyword + Semantic)</li>
                            <li>Re-ranking per massima rilevanza</li>
                        </ul>
                    </div>
                    <div className="bg-foreground/5 p-8 md:p-12 rounded-lg">
                        <div className="text-sm uppercase tracking-wide opacity-50 mb-2">Use Cases</div>
                        <ul className="list-disc list-inside space-y-2 mb-8">
                            <li>Assistenti legali per analisi contratti</li>
                            <li>Supporto tecnico su manualistica complessa</li>
                            <li>Onboarding HR automatizzato</li>
                        </ul>
                        <div className="text-lg font-bold">da €1.500</div>
                    </div>
                </section>

                {/* Fine-Tuning Section */}
                <section className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-start border-t border-foreground/10 pt-24">
                    <div>
                        <h3 className="text-4xl font-bold mb-6">LLM Fine-Tuning</h3>
                        <p className="text-xl font-light text-foreground/70 leading-relaxed mb-8">
                            Addestriamo l&apos;AI a pensare come il tuo miglior dipendente. Modelli verticali proprietari (Llama 3, Mistral) sui tuoi dati.
                        </p>
                        <ul className="space-y-4 text-sm font-medium border-l-2 border-primary pl-6">
                            <li>Dataset cleaning & augmentation</li>
                            <li>LoRA / QLoRA training techniques</li>
                            <li>Valutazione benchmark proprietari</li>
                        </ul>
                    </div>
                    <div className="bg-foreground/5 p-8 md:p-12 rounded-lg">
                        <div className="text-sm uppercase tracking-wide opacity-50 mb-2">Use Cases</div>
                        <ul className="list-disc list-inside space-y-2 mb-8">
                            <li>Generazione report medici/finanziari</li>
                            <li>Agenti di vendita con script specifici</li>
                            <li>Classificazione ticket di supporto</li>
                        </ul>
                        <div className="text-lg font-bold">da €3.000</div>
                    </div>
                </section>

                {/* AI Agents Section */}
                <section className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-start border-t border-foreground/10 pt-24">
                    <div>
                        <h3 className="text-4xl font-bold mb-6">AI Agents</h3>
                        <p className="text-xl font-light text-foreground/70 leading-relaxed mb-8">
                            Forza lavoro digitale attiva 24/7. Agenti autonomi che eseguono task complessi in Customer Service, Sales e Operations.
                        </p>
                        <ul className="space-y-4 text-sm font-medium border-l-2 border-primary pl-6">
                            <li>Orchestrazione Multi-Agente</li>
                            <li>Integrazione API e Sistemi Legacy</li>
                            <li>Esecuzione Task Autonoma</li>
                        </ul>
                    </div>
                    <div className="bg-foreground/5 p-8 md:p-12 rounded-lg">
                        <div className="text-sm uppercase tracking-wide opacity-50 mb-2">Use Cases</div>
                        <ul className="list-disc list-inside space-y-2 mb-8">
                            <li>Automazione Customer Care</li>
                            <li>Qualificazione Lead</li>
                            <li>Data Entry e Data Scraping</li>
                        </ul>
                        <div className="text-lg font-bold">Custom</div>
                    </div>
                </section>

                {/* Tech Advisory Section */}
                <section className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-start border-t border-foreground/10 pt-24">
                    <div>
                        <h3 className="text-4xl font-bold mb-6">Tech Advisory</h3>
                        <p className="text-xl font-light text-foreground/70 leading-relaxed mb-8">
                            CTO as a Service. Guidiamo la tua trasformazione digitale evitando sprechi di budget e debiti tecnici.
                        </p>
                        <ul className="space-y-4 text-sm font-medium border-l-2 border-primary pl-6">
                            <li>Technology Strategy & Audit</li>
                            <li>Architettura Cloud & AI</li>
                            <li>Ottimizzazione Processi Dev</li>
                        </ul>
                    </div>
                    <div className="bg-foreground/5 p-8 md:p-12 rounded-lg">
                        <div className="text-sm uppercase tracking-wide opacity-50 mb-2">Vantaggi</div>
                        <ul className="list-disc list-inside space-y-2 mb-8">
                            <li>Guidiamo le scelte tecniche</li>
                            <li>Preveniamo il debito tecnico</li>
                            <li>Ottimizziamo i costi cloud</li>
                        </ul>
                        <div className="text-lg font-bold">€38/ora</div>
                    </div>
                </section>
            </div>
        </main>
    );
}
