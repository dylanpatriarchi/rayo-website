import Link from "next/link";

type Variant = "blog" | "case";

export default function ContentCTA({ variant }: { variant: Variant }) {
    const isCase = variant === "case";
    return (
        <section className="mt-24 py-16 px-6 md:px-12 rounded-2xl bg-foreground text-background">
            <div className="max-w-2xl mx-auto text-center">
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">
                    {isCase ? "Vuoi risultati simili?" : "Vuoi approfondire per il tuo business?"}
                </h2>
                <p className="text-background/80 font-light mb-8">
                    {isCase
                        ? "Parliamone: audit gratuito e stima in 48 ore."
                        : "Richiedi un audit gratuito o prenota una call con un ingegnere."}
                </p>
                <Link
                    href="/contact"
                    className="inline-flex px-8 py-4 bg-background text-foreground font-bold rounded-full hover:bg-background/90 transition-colors text-sm"
                >
                    Richiedi un audit
                </Link>
            </div>
        </section>
    );
}
