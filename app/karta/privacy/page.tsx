export default function KartaPrivacyPolicy() {
    return (
        <main className="pt-32 pb-24 px-6 md:px-12 max-w-4xl mx-auto">
            <div className="mb-12">
                <a href="/karta" className="text-gray-500 hover:text-black transition-colors text-sm font-medium mb-4 inline-block">&larr; Torna a Karta</a>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy per Karta</h1>
                <p className="text-gray-500">Ultimo Aggiornamento: 13 Gennaio 2026</p>
            </div>

            <div className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-bold prose-headings:text-black prose-p:text-gray-600 prose-ul:text-gray-600 prose-li:text-gray-600 prose-strong:text-black prose-a:text-[#0047FF]">
                <h3>1. Introduzione</h3>
                <p>
                    Karta (&quot;noi&quot;, &quot;ci&quot; o &quot;nostro&quot;) rispetta la tua privacy. Questa Privacy Policy descrive come l&apos;estensione Chrome Karta raccoglie, utilizza e protegge le tue informazioni.
                </p>

                <h3>2. Raccolta e Utilizzo dei Dati</h3>
                <h4>A. Dati Personali</h4>
                <p>
                    Karta non raccoglie, archivia o condivide alcuna informazione di identificazione personale (PII) sui propri server. Non disponiamo di un database backend e non tracciamo il tuo comportamento di utilizzo.
                </p>

                <h4>B. Contenuto Fornito dall&apos;Utente (Dati LinkedIn)</h4>
                <p>
                    Per fornire il servizio principale di generazione di icebreaker, Karta legge temporaneamente il contenuto testuale della scheda del profilo LinkedIn attivo che stai visitando (es. Nome, Esperienza, Sezione Info, Post Recenti).
                </p>
                <ul>
                    <li><strong>Come viene utilizzato:</strong> Questi dati vengono inviati direttamente dal tuo browser al provider AI che hai selezionato (OpenAI, Anthropic, Google o DeepSeek) esclusivamente allo scopo di generare la risposta testuale.</li>
                    <li><strong>Conservazione:</strong> Non conserviamo questi dati. Vengono elaborati in tempo reale ed eliminati dall&apos;estensione dopo la generazione della risposta.</li>
                </ul>

                <h4>C. Chiavi API</h4>
                <p>
                    Karta opera su un modello &quot;Bring Your Own Key&quot; (BYOK). Fornisci le tue chiavi API personali per servizi AI di terze parti.
                </p>
                <ul>
                    <li><strong>Archiviazione:</strong> Le tue chiavi API sono archiviate localmente sul tuo dispositivo utilizzando l&apos;API di archiviazione sicura di Chrome (chrome.storage.local).</li>
                    <li><strong>Sicurezza:</strong> Le tue chiavi non vengono mai trasmesse a noi o ad altre terze parti, eccetto allo specifico provider AI per autenticare le tue richieste.</li>
                </ul>

                <h3>3. Servizi di Terze Parti</h3>
                <p>
                    Karta si integra con provider di Large Language Model (LLM) di terze parti. Utilizzando Karta, riconosci che i tuoi dati (il testo del profilo LinkedIn) saranno elaborati dal provider che selezioni:
                </p>
                <ul>
                    <li>OpenAI: <a href="https://openai.com/privacy" target="_blank" rel="noopener noreferrer">Privacy Policy</a></li>
                    <li>Anthropic: <a href="https://www.anthropic.com/legal/privacy" target="_blank" rel="noopener noreferrer">Privacy Policy</a></li>
                    <li>Google (Gemini): <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Privacy Policy</a></li>
                    <li>DeepSeek: <a href="https://www.deepseek.com/privacy" target="_blank" rel="noopener noreferrer">Privacy Policy</a></li>
                </ul>
                <p>Ti invitiamo a rivedere le rispettive privacy policy per comprendere come gestiscono l&apos;elaborazione dei dati.</p>

                <h3>4. Vendita e Condivisione dei Dati</h3>
                <p>
                    Non vendiamo mai i tuoi dati a terze parti. Non utilizziamo i tuoi dati per pubblicità, marketing o valutazioni del merito creditizio.
                </p>

                <h3>5. Modifiche a questa Policy</h3>
                <p>
                    Potremmo aggiornare questa Privacy Policy di tanto in tanto. Se apportiamo modifiche sostanziali, ti informeremo aggiornando la data in cima a questa policy e, ove appropriato, fornendo un avviso tramite l&apos;estensione.
                </p>

                <h3>6. Contattaci</h3>
                <p>
                    Se hai domande su questa Privacy Policy, ti preghiamo di contattarci a: <a href="mailto:info@rayo.consulting">info@rayo.consulting</a> <a href="https://rayo.consulting" target="_blank" rel="noopener noreferrer">https://rayo.consulting</a>
                </p>
            </div>
        </main>
    );
}
