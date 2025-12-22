export default function ServicesPage() {
    return (
        <main className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
            <h1 className="text-sm font-bold uppercase tracking-widest text-primary mb-6">Servizi</h1>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter leading-none mb-24">
                Arsenale Tecnico.
            </h2>

            <div className="space-y-32">
                {/* RAG Section */}
                <section className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-start">
                    <div>
                        <h3 className="text-4xl font-bold mb-6">Retrieval Augmented Generation (RAG)</h3>
                        <p className="text-xl font-light text-foreground/70 leading-relaxed mb-8">
                            La memoria della tua azienda, resa parlante. Non ci limitiamo a indicizzare PDF.
                            Creiamo pipeline di ingestion intelligenti che comprendono la struttura dei tuoi documenti,
                            rispettano le gerarchie e forniscono citazioni precise al millimetro.
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
                        <div className="text-lg font-bold">Da €1.500 una tantum</div>
                    </div>
                </section>

                {/* Fine-Tuning Section */}
                <section className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-start border-t border-foreground/10 pt-24">
                    <div>
                        <h3 className="text-4xl font-bold mb-6">Fine-Tuning & LLM Engineering</h3>
                        <p className="text-xl font-light text-foreground/70 leading-relaxed mb-8">
                            Quando il generalista non basta. Forgiamo modelli verticali addestrati sul tuo gergo,
                            sul tuo tono di voce e sulle tue logiche di business uniche.
                            Prendiamo Llama 3 o Mistral e li trasformiamo nei tuoi dipendenti migliori.
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
                        <div className="text-lg font-bold">Da €3.000 (Progetto Pilot)</div>
                    </div>
                </section>

                {/* Private Hosting Section */}
                <section className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-start border-t border-foreground/10 pt-24">
                    <div>
                        <h3 className="text-4xl font-bold mb-6">Private Infrastructure</h3>
                        <p className="text-xl font-light text-foreground/70 leading-relaxed mb-8">
                            I tuoi dati non devono mai lasciare il tuo perimetro. Progettiamo infrastrutture di inferenza
                            che girano sui tuoi server o su cloud privati (AWS/Azure/GCP) con isolamento totale.
                            GDPR compliant by design.
                        </p>
                        <ul className="space-y-4 text-sm font-medium border-l-2 border-primary pl-6">
                            <li>Deployment VLLM / TGI ad alte prestazioni</li>
                            <li>Gestione scalabilità GPU</li>
                            <li>API Gateway sicuri</li>
                        </ul>
                    </div>
                    <div className="bg-foreground/5 p-8 md:p-12 rounded-lg">
                        <div className="text-sm uppercase tracking-wide opacity-50 mb-2">Vantaggi</div>
                        <ul className="list-disc list-inside space-y-2 mb-8">
                            <li>Zero data leak verso OpenAI/Anthropic</li>
                            <li>Latenza ridotta (Edge computing)</li>
                            <li>Costi prevedibili (no token pricing)</li>
                        </ul>
                        <div className="text-lg font-bold">Supporto Mensile Personalizzato</div>
                    </div>
                </section>
            </div>
        </main>
    );
}
