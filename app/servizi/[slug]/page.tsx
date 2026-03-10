import Link from "next/link";
import { notFound } from "next/navigation";
import { getServiceBySlug, SERVICE_SLUGS } from "@/lib/services-landing";

const BASE_URL = "https://rayo.consulting";

export async function generateStaticParams() {
    return SERVICE_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const service = getServiceBySlug(slug);
    if (!service) return { title: "Servizio non trovato" };
    const url = `${BASE_URL}/servizi/${slug}`;
    return {
        title: `${service.title} | Servizi | Rayo Consulting`,
        description: service.metaDescription,
        alternates: { canonical: url },
        openGraph: {
            title: `${service.title} | Rayo Consulting`,
            description: service.metaDescription,
            url,
        },
    };
}

export default async function ServizioPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const s = getServiceBySlug(slug);
    if (!s) notFound();

    return (
        <main className="w-full">
            {/* Hero */}
            <section className="pt-32 pb-20 px-6 md:px-12 border-b border-foreground/10">
                <div className="max-w-4xl mx-auto">
                    <Link
                        href="/services"
                        className="text-sm font-bold uppercase tracking-widest text-primary hover:underline mb-8 inline-block"
                    >
                        ← Tutti i servizi
                    </Link>
                    <p className="text-sm font-bold uppercase tracking-widest text-primary mb-6">
                        {s.title}
                    </p>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-[1.05] mb-8">
                        {s.heroTitle}
                    </h1>
                    <p className="text-xl md:text-2xl font-light text-foreground/70 leading-relaxed max-w-3xl">
                        {s.heroSubtitle}
                    </p>
                </div>
            </section>

            {/* Il problema */}
            <section className="py-20 md:py-28 px-6 md:px-12 bg-foreground/[0.02]">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-8">
                        {s.problemTitle}
                    </h2>
                    <p className="text-lg text-foreground/80 leading-relaxed mb-10">
                        {s.problemIntro}
                    </p>
                    <ul className="space-y-4">
                        {s.problemBullets.map((b) => (
                            <li
                                key={b}
                                className="flex items-start gap-4 text-foreground/80 border-l-2 border-primary/30 pl-6 py-1"
                            >
                                <span className="text-primary font-bold">—</span>
                                {b}
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* Come funziona */}
            <section className="py-20 md:py-28 px-6 md:px-12">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-6">
                        {s.howTitle}
                    </h2>
                    <p className="text-lg text-foreground/80 leading-relaxed mb-16">
                        {s.howIntro}
                    </p>
                    <div className="space-y-14">
                        {s.howSteps.map((step, i) => (
                            <div key={step.title} className="flex gap-8">
                                <span className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 text-primary font-bold flex items-center justify-center text-lg">
                                    {i + 1}
                                </span>
                                <div>
                                    <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                                    <p className="text-foreground/70 leading-relaxed">{step.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Cosa includiamo + Casi d'uso + Prezzo */}
            <section className="py-20 md:py-28 px-6 md:px-12 bg-foreground/[0.02]">
                <div className="max-w-5xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
                        <div>
                            <h2 className="text-xl font-bold mb-8">Cosa includiamo</h2>
                            <ul className="space-y-4 text-foreground/80 border-l-2 border-primary pl-6">
                                {s.features.map((f) => (
                                    <li key={f}>{f}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="bg-background border border-foreground/10 rounded-2xl p-8 md:p-10">
                            <h2 className="text-sm font-bold uppercase tracking-wider text-foreground/50 mb-6">
                                {s.useCasesLabel}
                            </h2>
                            <ul className="list-disc list-inside space-y-3 text-foreground/80 mb-10">
                                {s.useCases.map((u) => (
                                    <li key={u}>{u}</li>
                                ))}
                            </ul>
                            <Link
                                href={`/contact?service=${s.slug}&utm_medium=landing-servizio`}
                                className="mt-8 inline-flex px-8 py-4 bg-primary text-white font-bold rounded-full hover:bg-primary/90 transition-colors text-sm"
                            >
                                {s.ctaLabel} →
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Risultati / numeri (se presenti) */}
            {s.results && s.results.length > 0 && (
                <section className="py-20 md:py-28 px-6 md:px-12">
                    <div className="max-w-4xl mx-auto">
                        {s.resultsIntro && (
                            <p className="text-lg text-foreground/70 mb-12">{s.resultsIntro}</p>
                        )}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                            {s.results.map((r) => (
                                <div
                                    key={r.label}
                                    className="border border-foreground/10 rounded-xl p-8 text-center"
                                >
                                    <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                                        {r.value}
                                    </div>
                                    <div className="text-foreground/70 font-light">{r.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* CTA finale */}
            <section className="py-24 md:py-32 px-6 md:px-12 bg-foreground text-background">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
                        {s.ctaFinalTitle}
                    </h2>
                    <p className="text-background/80 text-lg mb-10">{s.ctaFinalSubtitle}</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href={`/contact?service=${s.slug}&utm_medium=landing-servizio`}
                            className="inline-flex px-10 py-4 bg-background text-foreground font-bold rounded-full hover:bg-background/90 transition-colors text-sm justify-center"
                        >
                            Contattaci
                        </Link>
                        <Link
                            href="/audit-gratuito"
                            className="inline-flex px-10 py-4 border border-background/30 text-background font-medium rounded-full hover:border-background/60 transition-colors text-sm justify-center"
                        >
                            Audit gratuito
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
