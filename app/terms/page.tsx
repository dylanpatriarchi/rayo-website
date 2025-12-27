export const metadata = {
    title: "Termini e Condizioni | Rayo Consulting",
    description: "Termini e condizioni di utilizzo dei servizi di Rayo Consulting.",
};

export default function TermsPage() {
    return (
        <main className="mx-auto max-w-3xl min-h-screen px-6 pt-32 pb-24 md:px-12">
            <h1 className="mb-6 text-sm font-bold uppercase tracking-widest text-primary">
                Legal
            </h1>
            <h2 className="mb-12 text-4xl font-bold leading-none tracking-tighter md:text-7xl">
                Termini e Condizioni.
            </h2>

            <div className="prose prose-lg prose-neutral dark:prose-invert font-light text-foreground/80">
                <p>Ultimo aggiornamento: {new Date().toLocaleDateString("it-IT")}</p>

                <h3>1. Introduzione</h3>
                <p>
                    Benvenuti su Rayo Consulting. Accedendo al nostro sito web e
                    utilizzando i nostri servizi, l&apos;utente accetta di essere vincolato
                    dai seguenti Termini e Condizioni.
                </p>

                <h3>2. Proprietà Intellettuale</h3>
                <p>
                    Il contenuto, il layout, il design, i dati, i database e la grafica su
                    questo sito web sono protetti dalle leggi italiane e internazionali
                    sulla proprietà intellettuale e sono di proprietà di Rayo Consulting,
                    salvo diversa indicazione.
                </p>

                <h3>3. Esonero da Responsabilità</h3>
                <p>
                    Rayo Consulting non si assume alcuna responsabilità per eventuali
                    danni diretti, indiretti, incidentali, consequenziali o punitivi
                    derivanti dall&apos;accesso o dall&apos;uso di questo sito.
                </p>

                <h3>4. Modifiche ai Termini</h3>
                <p>
                    Ci riserviamo il diritto di modificare questi termini in qualsiasi
                    momento. Le modifiche entreranno in vigore immediatamente dopo la
                    pubblicazione sul sito web.
                </p>

                <h3>5. Legge Applicabile</h3>
                <p>
                    Questi termini sono regolati e interpretati in conformità con le leggi
                    dello Stato Italiano.
                </p>

                <h3>6. Contatti</h3>
                <p>
                    Per qualsiasi domanda riguardante questi Termini, contattaci a:{" "}
                    <a href="mailto:info@rayo.consulting">info@rayo.consulting</a>
                </p>

                <p className="mt-8 text-sm opacity-50">
                    Rayo Consulting di Patriarchi Dylan
                    <br />P.IVA 03988190546
                    <br />Vocabolo Marcheggiane 56/C
                    <br />Breccione Zona Industriale, Città di Castello (PG)
                </p>
            </div>
        </main>
    );
}
