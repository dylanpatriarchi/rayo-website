import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
    return (
        <main className="pt-32 w-full min-h-screen">
            <div className="px-6 md:px-12 max-w-7xl mx-auto text-center mb-12">
                <h1 className="text-4xl md:text-7xl font-bold tracking-tighter mb-6">Parliamo.</h1>
                <p className="text-xl text-foreground/60 font-light max-w-2xl mx-auto">
                    Hai un problema complesso? Ottimo. È il nostro pane quotidiano.
                </p>
            </div>
            <ContactForm />
            <div className="py-24 text-center">
                <p className="text-sm font-bold uppercase tracking-widest text-foreground/40 mb-4">Sede Operativa</p>
                <p className="text-xl">Vocabolo Marcheggiane 56/C<br />06018, Breccione Zona Industriale (PG)</p>
            </div>
        </main>
    );
}
