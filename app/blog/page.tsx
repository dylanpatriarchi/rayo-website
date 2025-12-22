import Link from "next/link";
import { getAllPosts } from "@/utils/mdx";

export const metadata = {
    title: "Blog | Rayo Consulting",
    description: "Approfondimenti tecnici e visioni sull'Intelligenza Artificiale.",
};

export default function BlogPage() {
    const posts = getAllPosts("blog");

    return (
        <main className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto min-h-screen">
            <h1 className="text-sm font-bold uppercase tracking-widest text-primary mb-6">Blog</h1>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter leading-none mb-24">
                Trasmissioni.
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {posts.map((post) => (
                    <Link
                        key={post.slug}
                        href={`/blog/${post.slug}`}
                        className="group block border-t border-foreground/10 pt-8"
                    >
                        <div className="text-sm text-foreground/50 mb-4">{post.metadata.publishedAt}</div>
                        <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                            {post.metadata.title}
                        </h3>
                        <p className="text-foreground/70 font-light leading-relaxed mb-4">
                            {post.metadata.summary}
                        </p>
                        <div className="text-sm font-bold underline decoration-1 underline-offset-4 decoration-primary/50 group-hover:decoration-primary transition-all">
                            Leggi tutto
                        </div>
                    </Link>
                ))}
            </div>
        </main>
    );
}
