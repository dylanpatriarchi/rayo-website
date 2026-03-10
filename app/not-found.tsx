import Link from "next/link";
import { headers } from "next/headers";

export default async function NotFound() {
    const headersList = await headers();
    // const domain = headersList.get("host") || "";

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground px-6 text-center">
            <h1 className="text-9xl font-bold tracking-tighter mb-4 text-primary opacity-20">404</h1>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Pagina non trovata.</h2>
            <p className="text-xl font-light text-foreground/60 max-w-lg mb-12">
                Sembra che tu stia cercando qualcosa che non esiste più, o che non è mai esistito.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
                <Link
                    href="/"
                    className="px-8 py-4 bg-foreground text-background rounded-full font-bold hover:bg-foreground/90 transition-all focus:outline focus:ring-2 focus:ring-primary focus:ring-offset-2"
                >
                    Torna alla Home
                </Link>
                <Link
                    href="/services"
                    className="px-8 py-4 border border-foreground/20 text-foreground rounded-full font-bold hover:bg-foreground/5 transition-all focus:outline focus:ring-2 focus:ring-primary focus:ring-offset-2"
                >
                    Servizi
                </Link>
                <Link
                    href="/contact"
                    className="px-8 py-4 border border-foreground/20 text-foreground rounded-full font-bold hover:bg-foreground/5 transition-all focus:outline focus:ring-2 focus:ring-primary focus:ring-offset-2"
                >
                    Contattaci
                </Link>
            </div>
        </div>
    );
}
