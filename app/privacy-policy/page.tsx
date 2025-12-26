export default function PrivacyPolicy() {
    return (
        <main className="pt-32 pb-24 px-6 md:px-12 max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-12">Privacy Policy</h1>

            <div className="prose prose-lg dark:prose-invert max-w-none prose-headings:text-foreground prose-p:text-foreground prose-strong:text-foreground prose-li:text-foreground prose-a:text-primary hover:prose-a:text-blue-600">
                <p><strong>Ultimo aggiornamento: {new Date().toLocaleDateString('it-IT')}</strong></p>

                <h3>1. Titolare del Trattamento</h3>
                <p>Rayo Consulting di Patriarchi Dylan<br />
                    Vocabolo Marcheggiane 56/C, Breccione Zona Industriale, 06018 PG<br />
                    P.IVA: 03988190546<br />
                    Email: info@rayo.consulting</p>

                <h3>2. Tipologia di Dati Raccolti</h3>
                <p>Raccogliamo i seguenti dati personali:</p>
                <ul>
                    <li>Dati forniti volontariamente dall&apos;utente (es. tramite form di contatto): Nome, Email, Azienda.</li>
                    <li>Dati di navigazione e cookie (vedi Cookie Policy).</li>
                </ul>

                <h3>3. Finalità del Trattamento</h3>
                <p>I dati sono trattati per:</p>
                <ul>
                    <li>Rispondere alle richieste di contatto.</li>
                    <li>Erogare i nostri servizi di consulenza AI.</li>
                    <li><strong>Marketing e Pubblicità:</strong> Mostrare annunci personalizzati tramite Google AdSense (solo previo consenso).</li>
                    <li><strong>Prenotazione Appuntamenti:</strong> Gestire il calendario tramite Calendly (solo previo consenso).</li>
                    <li>Adempiere agli obblighi legali e fiscali.</li>
                </ul>

                <h3>4. Servizi di Terze Parti</h3>
                <p>Il sito utilizza i seguenti servizi che potrebbero raccogliere dati:</p>
                <ul>
                    <li><strong>Google Analytics 4:</strong> Statistiche (anonimizzato).</li>
                    <li><strong>Google AdSense:</strong> Pubblicità personalizzata (profilazione).</li>
                    <li><strong>Calendly:</strong> Prenotazione appuntamenti.</li>
                </ul>

                <h3>4. Base Giuridica</h3>
                <p>Il trattamento è basato sul consenso dell&apos;utente (art. 6.1.a GDPR) e sull&apos;esecuzione di misure precontrattuali (art. 6.1.b GDPR).</p>

                <h3>5. Conservazione dei Dati</h3>
                <p>I dati saranno conservati per il tempo strettamente necessario a gestire la richiesta o per i termini di legge previsti dalla normativa fiscale se diventi cliente.</p>

                <h3>6. Diritti dell&apos;Interessato</h3>
                <p>Hai il diritto di accedere, rettificare, cancellare i tuoi dati o opporti al loro trattamento scrivendo a info@rayo.consulting.</p>
            </div>
        </main>
    );
}
