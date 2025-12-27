export const metadata = {
    title: "Lavora con noi | Rayo Consulting",
    description: "Cerchiamo un Visual Designer & Framer Specialist.",
};

export default function CareersPage() {
    return (
        <main className="pt-32 pb-24 px-6 md:px-12 max-w-5xl mx-auto min-h-screen">
            <h1 className="text-sm font-bold uppercase tracking-widest text-primary mb-6">
                Careers
            </h1>
            <h2 className="text-4xl md:text-7xl font-bold tracking-tighter leading-none mb-12">
                We don&apos;t want <br />
                average.
            </h2>

            <div className="prose prose-lg prose-neutral dark:prose-invert font-light text-foreground/80 max-w-none leading-relaxed mb-24">
                <p className="text-2xl md:text-3xl text-foreground !font-light leading-tight">
                    Cerchiamo un Visual Designer che sappia usare <span className="underline decoration-primary">Framer</span> meglio delle sue mani.
                </p>
                <p>
                    In Rayo Consulting, non facciamo siti web. Costruiamo esperienze digitali
                    che devono essere visivamente scioccanti. Il codice lo mettiamo noi, tu metti
                    la visione e l&apos;interazione.
                </p>
            </div>

            <div className="border-t border-b border-foreground/10 divide-y divide-foreground/10">
                <div className="py-12 md:py-16">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="md:col-span-1">
                            <h3 className="text-2xl font-bold">Il Ruolo</h3>
                            <div className="mt-2 text-sm uppercase tracking-wide opacity-50">
                                Remote / Contract
                            </div>
                        </div>
                        <div className="md:col-span-2 space-y-8">
                            <div>
                                <h4 className="font-bold mb-2">Cosa farai</h4>
                                <ul className="list-disc list-inside space-y-1 opacity-70">
                                    <li>Progettare interfacce UI "Absolute Minimal" su Figma.</li>
                                    <li>
                                        Implementare landing page animate direttamente su Framer.
                                    </li>
                                    <li>
                                        Collaborare con gli ingegneri per l&apos;export in Next.js (se necessario).
                                    </li>
                                    <li>Curare le micro-interazioni e le transizioni GSAP/Motion.</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-bold mb-2">Chi sei</h4>
                                <ul className="list-disc list-inside space-y-1 opacity-70">
                                    <li>Hai un portfolio Framer che fa paura.</li>
                                    <li>Odi i template standard.</li>
                                    <li>Capisci la tipografia svizzera e l&apos;uso dello spazio bianco.</li>
                                    <li>Non hai bisogno di micromanagement.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-24 text-center">
                <h3 className="text-2xl font-bold mb-6">Pensi di essere tu?</h3>
                <a
                    href="mailto:careers@rayo.consulting?subject=Framer Designer Application"
                    className="inline-block bg-foreground text-background px-8 py-4 rounded-xl font-bold text-lg hover:bg-foreground/90 transition-all hover:scale-105"
                >
                    Invia Portfolio
                </a>
                <p className="mt-6 text-sm opacity-50">
                    Niente CV EUROPASS. Solo link ai tuoi lavori.
                </p>
            </div>
        </main>
    );
}
