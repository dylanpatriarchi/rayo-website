import Link from "next/link";

export const metadata = {
    title: "Grazie",
    description: "Messaggio ricevuto. Un nostro ingegnere ti risponderà entro 24 ore.",
    robots: { index: false, follow: true },
};

export default function ThankYouPage() {
    return (
        <main className="min-h-screen pt-32 pb-24 px-6 md:px-12 flex flex-col items-center justify-center text-center max-w-xl mx-auto">
            <div className="w-20 h-20 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-8">
                <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                </svg>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">Messaggio ricevuto.</h1>
            <p className="text-foreground/60 text-lg mb-8 leading-relaxed">
                Grazie per averci contattato. Un nostro ingegnere analizzerà la tua richiesta e ti risponderà entro 24 ore.
            </p>
            <p className="text-sm text-foreground/40 mb-10">
                Nel frattempo, puoi prenotare una call direttamente dal nostro calendario se preferisci parlare subito.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
                <Link
                    href="/contact#contact-form"
                    className="px-8 py-4 bg-primary text-white font-bold rounded-full hover:bg-primary/90 transition-colors text-sm text-center"
                >
                    Prenota una call
                </Link>
                <Link
                    href="/"
                    className="px-8 py-4 border border-foreground/20 font-medium rounded-full hover:border-foreground/40 transition-colors text-sm text-center"
                >
                    Torna alla home
                </Link>
            </div>
        </main>
    );
}
