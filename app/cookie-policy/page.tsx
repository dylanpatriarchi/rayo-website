export default function CookiePolicy() {
    return (
        <main className="pt-32 pb-24 px-6 md:px-12 max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-12">Cookie Policy</h1>

            <div className="prose prose-lg dark:prose-invert max-w-none prose-headings:text-foreground prose-p:text-foreground prose-strong:text-foreground prose-li:text-foreground prose-a:text-primary hover:prose-a:text-blue-600">
                <p><strong>Ultimo aggiornamento: {new Date().toLocaleDateString('it-IT')}</strong></p>

                <h3>Cosa sono i cookie</h3>
                <p>I cookie sono piccoli file di testo salvati sul tuo dispositivo durante la navigazione.</p>

                <h3>Cookie utilizzati</h3>
                <ul>
                    <li><strong>Tecnici (Necessari):</strong> Indispensabili per il funzionamento del sito (es. gestione preferenze cookie). Non richiedono consenso.</li>
                    <li><strong>Analitici (Google Analytics 4):</strong> Utilizzati per raccogliere statistiche anonime sull&apos;uso del sito. Richiedono il tuo consenso.</li>
                </ul>

                <h3>Gestione del Consenso</h3>
                <p>Puoi modificare le tue preferenze in qualsiasi momento tramite il banner presente sul sito o configurando il tuo browser. Se disabiliti i cookie analitici, la tua esperienza di navigazione non verrà compromessa.</p>

                <h3>Trasferimento Dati</h3>
                <p>I dati raccolti tramite Google Analytics possono essere trasferiti su server situati negli Stati Uniti, in conformità con il Data Privacy Framework o clausole contrattuali standard.</p>
            </div>
        </main>
    );
}
