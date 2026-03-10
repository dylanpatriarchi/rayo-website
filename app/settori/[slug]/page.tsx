import Link from "next/link";
import { notFound } from "next/navigation";
import { getSettoreBySlug, SETTORE_SLUGS } from "@/lib/settori-landing";

const BASE_URL = "https://rayo.consulting";

export async function generateStaticParams() {
    return SETTORE_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const settore = getSettoreBySlug(slug);
    if (!settore) return { title: "Settore non trovato" };
    const url = `${BASE_URL}/settori/${slug}`;
    return {
        title: `${settore.title} | Settori | Rayo Consulting`,
        description: settore.metaDescription,
        alternates: { canonical: url },
        openGraph: {
            title: `${settore.title} | Rayo Consulting`,
            description: settore.metaDescription,
            url,
        },
    };
}

export default async function SettorePage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const s = getSettoreBySlug(slug);
    if (!s) notFound();

    return (
        <main className="w-full">
            <section className="pt-32 pb-20 px-6 md:px-12 border-b border-foreground/10">
                <div className="max-w-4xl mx-auto">
                    <Link
                        href="/cases"
                        className="text-sm font-bold uppercase tracking-widest text-primary hover:underline mb-8 inline-block"
                    >
                        ← Casi studio per settore
                    </Link>
                    <p className="text-sm font-bold uppercase tracking-widest text-primary mb-6">
                        {s.title}
                    </p>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-[1.05] mb-8">
                        {s.headline}
                    </h1>
                    <p className="text-xl md:text-2xl font-light text-foreground/70 leading-relaxed max-w-3xl">
                        {s.description}
                    </p>
                </div>
            </section>

            <section className="py-20 md:py-28 px-6 md:px-12 bg-foreground/[0.02]">
                <div className="max-w-4xl mx-auto">
                    <p className="text-lg text-foreground/80 leading-relaxed">
                        {s.problemIntro}
                    </p>
                </div>
            </section>

            {s.proofCaseSlug && s.proofCaseTitle && (
                <section className="py-20 md:py-28 px-6 md:px-12">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-xl font-bold mb-8">{s.proofTitle}</h2>
                        <Link
                            href={`/cases/${s.proofCaseSlug}`}
                            className="block p-8 rounded-2xl border border-foreground/10 bg-background hover:border-primary/30 transition-colors"
                        >
                            <span className="text-primary font-bold">→</span> {s.proofCaseTitle}
                        </Link>
                    </div>
                </section>
            )}

            <section className="py-24 md:py-32 px-6 md:px-12 bg-foreground text-background">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
                        {s.ctaTitle}
                    </h2>
                    <p className="text-background/80 text-lg mb-10">{s.ctaSubtitle}</p>
                    <Link
                        href={`/contact?utm_medium=landing-settore&settore=${s.slug}`}
                        className="inline-flex px-10 py-4 bg-background text-foreground font-bold rounded-full hover:bg-background/90 transition-colors text-sm"
                    >
                        Contattaci
                    </Link>
                </div>
            </section>
        </main>
    );
}
