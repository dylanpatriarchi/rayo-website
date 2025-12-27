import Link from "next/link";
import { getAllPosts } from "@/utils/mdx";

export const metadata = {
    title: "Lavora con noi | Rayo Consulting",
    description: "Posizioni aperte e opportunità di carriera.",
};

export default function CareersPage() {
    const jobs = getAllPosts("jobs");

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
                    Cerchiamo collaboratori B2B (P.IVA) per creare eccellenza.
                </p>
                <p>
                    In Rayo Consulting, non assumiamo dipendenti per riempire sedie.
                    Cerchiamo professionisti autonomi che vogliano sfide tecniche reali.
                </p>
            </div>

            <div className="border-t border-foreground/10">
                <h3 className="py-8 text-xl font-bold">Posizioni Aperte</h3>
                <div className="grid grid-cols-1 gap-4">
                    {jobs.map((job) => (
                        <Link
                            key={job.slug}
                            href={`/careers/${job.slug}`}
                            className="group flex flex-col md:flex-row justify-between items-start md:items-center p-6 bg-foreground/5 rounded-xl hover:bg-foreground/10 transition-colors"
                        >
                            <div>
                                <h4 className="text-xl font-bold group-hover:text-primary transition-colors">
                                    {job.metadata.title}
                                </h4>
                                <div className="flex gap-4 mt-2 text-sm opacity-60">
                                    <span>{job.metadata.type}</span>
                                    <span>•</span>
                                    <span>{job.metadata.rate}</span>
                                </div>
                            </div>
                            <div className="mt-4 md:mt-0 px-4 py-2 bg-background rounded-full text-sm font-bold border border-foreground/10 group-hover:border-primary/50 transition-colors">
                                Apply &rarr;
                            </div>
                        </Link>
                    ))}

                    {jobs.length === 0 && (
                        <div className="py-12 text-center opacity-50">
                            Nessuna posizione aperta al momento.
                        </div>
                    )}
                </div>
            </div>

            <div className="mt-24 p-8 bg-foreground/5 rounded-2xl text-center">
                <h3 className="text-xl font-bold mb-4">Candidatura Spontanea?</h3>
                <p className="mb-6 opacity-70">
                    Se pensi di poter fare la differenza ma non vedi una posizione adatta,
                    scrivici comunque.
                </p>
                <a
                    href="mailto:careers@rayo.consulting?subject=Spontaneous Application"
                    className="text-primary hover:underline underline-offset-4"
                >
                    careers@rayo.consulting
                </a>
            </div>
        </main>
    );
}
