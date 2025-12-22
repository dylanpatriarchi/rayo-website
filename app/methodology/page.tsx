import Methodology from "@/components/Methodology";

export default function MethodologyPage() {
    return (
        <main className="w-full min-h-screen">
            <div className="pt-32 px-6 md:px-12 max-w-7xl mx-auto mb-12">
                <h1 className="text-sm font-bold uppercase tracking-widest text-primary mb-6">Il Nostro Processo</h1>
                <h2 className="text-4xl md:text-7xl font-bold tracking-tighter leading-none">
                    Dal Caos <br />
                    all&apos;Ordine.
                </h2>
            </div>
            <Methodology />
            <div className="py-24 px-6 md:px-12 max-w-4xl mx-auto prose prose-lg md:prose-xl dark:prose-invert">
                <p>
                    Il nostro approccio non è lineare, è ciclico. Ogni deployment fornisce dati per il ciclo successivo di ottimizzazione.
                    Non consegniamo codice morto, ma organismi viventi che evolvono con la tua azienda.
                </p>
            </div>
        </main>
    );
}
