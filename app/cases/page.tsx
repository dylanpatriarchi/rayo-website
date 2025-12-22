import Link from "next/link";
import { getAllPosts } from "@/utils/mdx";

export const metadata = {
    title: "Casi Studio | Rayo Consulting",
    description: "Esempi reali di implementazione AI Enterprise.",
};

export default function CasesPage() {
    const posts = getAllPosts("cases");

    return (
        <main className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto min-h-screen">
            <h1 className="text-sm font-bold uppercase tracking-widest text-primary mb-6">Casi Studio</h1>
            <h2 className="text-4xl md:text-7xl font-bold tracking-tighter leading-none mb-24">
                Risultati Misurabili.
            </h2>

            <div className="grid grid-cols-1 gap-px bg-foreground/10 border border-foreground/10">
                {posts.map((post) => (
                    <Link
                        key={post.slug}
                        href={`/cases/${post.slug}`}
                        className="group block bg-background p-8 md:p-12 hover:bg-foreground/5 transition-colors"
                    >
                        <div className="flex flex-col md:flex-row justify-between md:items-center gap-6 mb-8">
                            <div>
                                <div className="text-sm uppercase tracking-wide opacity-50 mb-2">{post.metadata.industry}</div>
                                <h3 className="text-2xl md:text-4xl font-bold group-hover:text-primary transition-colors">
                                    {post.metadata.title}
                                </h3>
                            </div>
                            <div className="text-right hidden md:block">
                                <div className="text-4xl font-bold tracking-tight">{post.metadata.stat}</div>
                                <div className="text-xs uppercase opacity-50">{post.metadata.statLabel}</div>
                            </div>
                        </div>

                        <p className="text-xl md:text-2xl font-light text-foreground/70 leading-relaxed max-w-3xl mb-8">
                            {post.metadata.summary}
                        </p>

                        <div className="text-sm font-bold underline decoration-1 underline-offset-4 decoration-primary/50 group-hover:decoration-primary transition-all">
                            Scopri l&apos;implementazione
                        </div>
                    </Link>
                ))}
            </div>
        </main>
    );
}
