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

            <div className="flex flex-col md:flex-row gap-6">
                <Link
                    href="/"
                    className="px-8 py-4 bg-foreground text-background rounded-full font-bold hover:bg-foreground/90 transition-all"
                >
                    Torna alla Home
                </Link>
                <Link
                    href="/contact"
                    className="px-8 py-4 border border-foreground/20 text-foreground rounded-full font-bold hover:bg-foreground/5 transition-all"
                >
                    Contattaci
                </Link>
            </div>
        </div>
    );
}
