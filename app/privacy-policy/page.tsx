export const metadata = {
    title: "Privacy Policy | Rayo Consulting",
    description: "Informativa sul trattamento dei dati personali ai sensi del GDPR (Regolamento UE 2016/679). Rayo Consulting di Patriarchi Dylan.",
    alternates: { canonical: "https://rayo.consulting/privacy-policy" },
};

export default function PrivacyPolicy() {
    return (
        <main className="pt-32 pb-24 px-6 md:px-12 max-w-4xl mx-auto">
            <p className="text-xs font-bold uppercase tracking-widest text-primary mb-4">Legal</p>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4 leading-none">Privacy Policy</h1>
            <p className="text-foreground/50 font-light mb-16 text-sm">
                Informativa ai sensi degli artt. 13 e 14 del Regolamento (UE) 2016/679 (GDPR) e del D.Lgs. 196/2003 e ss.mm.ii.<br />
                <strong>Ultimo aggiornamento: 14 marzo 2026</strong>
            </p>

            <div className="prose prose-lg dark:prose-invert max-w-none prose-headings:text-foreground prose-headings:font-bold prose-headings:tracking-tight prose-p:text-foreground/70 prose-li:text-foreground/70 prose-a:text-primary prose-strong:text-foreground">

                <h2>1. Titolare del Trattamento</h2>
                <p>
                    <strong>Rayo Consulting di Patriarchi Dylan</strong><br />
                    Vocabolo Marcheggiane 56/C, Breccione Zona Industriale, 06018 Città di Castello (PG)<br />
                    P.IVA: 03988190546<br />
                    Email: <a href="mailto:info@rayo.consulting">info@rayo.consulting</a><br />
                    Tel: <a href="tel:+393271746038">+39 327 174 6038</a>
                </p>
                <p>
                    Per qualsiasi questione relativa alla privacy puoi contattarci all&apos;indirizzo email sopra indicato,
                    specificando nell&apos;oggetto: &quot;Richiesta Privacy GDPR&quot;.
                </p>

                <h2>2. Tipologie di Dati Trattati e Finalità</h2>

                <h3>2.1 Form di Contatto e Richiesta Audit</h3>
                <p>
                    Quando compili il form di contatto raccogliamo: nome, email aziendale, nome dell&apos;azienda,
                    P.IVA/CF (opzionale), settore e il contenuto del messaggio.
                </p>
                <ul>
                    <li><strong>Finalità:</strong> rispondere alla tua richiesta e valutare la fattibilità di una collaborazione commerciale.</li>
                    <li><strong>Base giuridica:</strong> art. 6.1.b GDPR (esecuzione di misure precontrattuali su richiesta dell&apos;interessato) e art. 6.1.a GDPR (consenso espresso tramite spunta).</li>
                    <li><strong>Conservazione:</strong> 2 anni dalla ricezione del messaggio, salvo instaurazione di un rapporto commerciale (in tal caso si applicano i termini di legge fiscale: 10 anni).</li>
                </ul>

                <h3>2.2 Iscrizione alla Newsletter</h3>
                <p>
                    Se ti iscrivi alla newsletter raccogliamo il tuo indirizzo email e registriamo il tuo consenso esplicito (data, ora, IP anonimizzato).
                </p>
                <ul>
                    <li><strong>Finalità:</strong> invio di comunicazioni informative e commerciali periodiche su AI, RAG, LLM e attività di Rayo Consulting (cadenza indicativa: ogni 2 settimane).</li>
                    <li><strong>Base giuridica:</strong> art. 6.1.a GDPR (consenso libero, specifico, informato e inequivocabile).</li>
                    <li><strong>Conservazione:</strong> fino alla revoca del consenso (disiscrizione). Puoi disiscriverti in qualsiasi momento tramite il link presente in ogni email o scrivendo a <a href="mailto:info@rayo.consulting">info@rayo.consulting</a>.</li>
                    <li><strong>Nota:</strong> il consenso alla newsletter è separato e indipendente dal consenso per la gestione delle richieste di contatto.</li>
                </ul>

                <h3>2.3 Prenotazione Appuntamenti (Calendly)</h3>
                <p>
                    Se prenoti una call tramite il widget Calendly, i dati inseriti (nome, email) vengono trattati da Calendly LLC come responsabile del trattamento.
                </p>
                <ul>
                    <li><strong>Finalità:</strong> gestione della prenotazione e della call di discovery.</li>
                    <li><strong>Base giuridica:</strong> art. 6.1.b GDPR.</li>
                    <li><strong>Conservazione:</strong> secondo i termini di Calendly (<a href="https://calendly.com/privacy" target="_blank" rel="noopener noreferrer">calendly.com/privacy</a>).</li>
                </ul>

                <h3>2.4 Dati di Navigazione e Analytics</h3>
                <p>
                    Il sito utilizza Google Analytics 4 in modalità con IP anonimizzato e cookie analytics di terze parti.
                    I dati raccolti (pagine visitate, durata sessione, provenienza, dispositivo) sono anonimi/pseudonimi e non consentono l&apos;identificazione diretta.
                </p>
                <ul>
                    <li><strong>Finalità:</strong> analisi del traffico e miglioramento del sito.</li>
                    <li><strong>Base giuridica:</strong> art. 6.1.a GDPR (consenso tramite cookie banner).</li>
                    <li><strong>Conservazione:</strong> 14 mesi (impostazione predefinita GA4).</li>
                </ul>

                <h2>3. Responsabili del Trattamento (Sub-Processor)</h2>
                <p>Per erogare i servizi del sito ci avvaliamo dei seguenti responsabili del trattamento, con cui abbiamo stipulato appositi DPA (Data Processing Agreement):</p>
                <ul>
                    <li><strong>Brevo SAS</strong> (ex Sendinblue) — invio newsletter e marketing email. Server in UE. <a href="https://www.brevo.com/it/informazioni-legali/dpa/" target="_blank" rel="noopener noreferrer">DPA Brevo</a>.</li>
                    <li><strong>Calendly LLC</strong> — prenotazione appuntamenti. Trasferimento USA coperto da Standard Contractual Clauses (SCC). <a href="https://calendly.com/dpa" target="_blank" rel="noopener noreferrer">DPA Calendly</a>.</li>
                    <li><strong>Google LLC (Google Analytics 4)</strong> — analisi del traffico. Trasferimento USA coperto da Data Privacy Framework e SCC. <a href="https://business.safety.google/gdpr/" target="_blank" rel="noopener noreferrer">DPA Google</a>.</li>
                    <li><strong>Vercel Inc.</strong> — hosting del sito web. Server UE disponibili. <a href="https://vercel.com/legal/dpa" target="_blank" rel="noopener noreferrer">DPA Vercel</a>.</li>
                </ul>

                <h2>4. Trasferimento Dati Extra-UE</h2>
                <p>
                    Alcuni sub-processor (Google, Calendly, Vercel) trasferiscono dati verso gli USA.
                    Tali trasferimenti avvengono nel rispetto dell&apos;art. 46 GDPR, tramite Standard Contractual Clauses (SCC) approvate dalla Commissione Europea e/o adesione al Data Privacy Framework EU-USA.
                    Non vengono effettuati trasferimenti verso paesi privi di garanzie adeguate ai sensi del GDPR.
                </p>

                <h2>5. Diritti dell&apos;Interessato</h2>
                <p>Ai sensi degli artt. 15-22 GDPR hai il diritto di:</p>
                <ul>
                    <li><strong>Accesso</strong> (art. 15): ottenere conferma del trattamento e copia dei dati che ti riguardano.</li>
                    <li><strong>Rettifica</strong> (art. 16): correggere dati inesatti o incompleti.</li>
                    <li><strong>Cancellazione (diritto all&apos;oblio)</strong> (art. 17): richiedere la cancellazione dei tuoi dati.</li>
                    <li><strong>Limitazione</strong> (art. 18): limitare il trattamento in determinate circostanze.</li>
                    <li><strong>Portabilità</strong> (art. 20): ricevere i tuoi dati in formato strutturato e leggibile da macchina.</li>
                    <li><strong>Opposizione</strong> (art. 21): opporti al trattamento per fini di marketing diretto in qualsiasi momento.</li>
                    <li><strong>Revoca del consenso</strong> (art. 7.3): revocare il consenso precedentemente prestato senza pregiudicare la liceità del trattamento basata sul consenso prestato prima della revoca.</li>
                </ul>
                <p>
                    Per esercitare i tuoi diritti scrivi a{" "}
                    <a href="mailto:info@rayo.consulting">info@rayo.consulting</a> con oggetto &quot;Esercizio Diritti GDPR&quot;.
                    Risponderemo entro 30 giorni dalla ricezione della richiesta (termine prorogabile di ulteriori 2 mesi in casi complessi, con comunicazione motivata).
                </p>

                <h2>6. Diritto di Reclamo all&apos;Autorità di Controllo</h2>
                <p>
                    Hai il diritto di presentare reclamo all&apos;Autorità Garante per la protezione dei dati personali:
                </p>
                <ul>
                    <li><strong>Garante per la protezione dei dati personali</strong></li>
                    <li>Piazza Venezia 11, 00187 Roma</li>
                    <li>Tel: +39 06 69677 1</li>
                    <li>Email: <a href="mailto:garante@gpdp.it">garante@gpdp.it</a></li>
                    <li>Sito: <a href="https://www.garanteprivacy.it" target="_blank" rel="noopener noreferrer">www.garanteprivacy.it</a></li>
                </ul>

                <h2>7. Sicurezza dei Dati</h2>
                <p>
                    Adottiamo misure tecniche e organizzative adeguate ai sensi dell&apos;art. 32 GDPR per proteggere i dati personali da accessi non autorizzati, perdita, distruzione o divulgazione.
                    Il sito utilizza HTTPS (TLS). I dati trasmessi tramite i form sono cifrati in transito.
                    L&apos;accesso ai sistemi di gestione è protetto da autenticazione forte.
                </p>

                <h2>8. Processo Decisionale Automatizzato</h2>
                <p>
                    Non utilizziamo processi decisionali automatizzati, né profilazione automatizzata ai sensi dell&apos;art. 22 GDPR.
                </p>

                <h2>9. Modifiche alla Privacy Policy</h2>
                <p>
                    Ci riserviamo di aggiornare questa informativa per riflettere modifiche normative o di servizio.
                    In caso di modifiche sostanziali, daremo avviso tramite il sito o via email agli iscritti alla newsletter.
                    La data di &quot;Ultimo aggiornamento&quot; in cima alla pagina indica l&apos;ultima revisione.
                </p>

                <div className="mt-12 p-6 border border-foreground/10 rounded-2xl text-sm text-foreground/50 font-light">
                    <p><strong className="text-foreground">Rayo Consulting di Patriarchi Dylan</strong></p>
                    <p>P.IVA 03988190546</p>
                    <p>Vocabolo Marcheggiane 56/C, Breccione Zona Industriale, 06018 Città di Castello (PG)</p>
                    <p className="mt-2">Informativa redatta in conformità al Regolamento UE 2016/679 (GDPR) e al D.Lgs. 196/2003 come modificato dal D.Lgs. 101/2018.</p>
                </div>
            </div>
        </main>
    );
}
