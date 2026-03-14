import Link from "next/link";
import { getAllPosts } from "@/utils/mdx";
import PostList from "@/components/PostList";

export const metadata = {
    title: "Blog | Rayo Consulting",
    description: "Approfondimenti tecnici su RAG, LLM fine-tuning, AI Agents e architetture enterprise. Scritto da ingegneri, per chi costruisce.",
    alternates: { canonical: "https://rayo.consulting/blog" },
    openGraph: {
        title: "Blog Tecnico | Rayo Consulting",
        description: "RAG, LLM, AI Agents: articoli tecnici per chi vuole costruire AI in produzione.",
        url: "https://rayo.consulting/blog",
        type: "website",
    },
    twitter: { card: "summary_large_image" as const, title: "Blog | Rayo Consulting" },
};

export default function BlogPage() {
    const posts = getAllPosts("blog");

    return (
        <main className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto min-h-screen">
            <p className="text-sm font-bold uppercase tracking-widest text-primary mb-6">Blog</p>
            <h1 className="text-4xl md:text-7xl font-bold tracking-tighter leading-none mb-24">
                Articoli.
            </h1>

            <PostList initialPosts={posts} variant="blog" />

            <section className="mt-24 pt-24 border-t border-foreground/10 text-center">
                <p className="text-foreground/60 font-light mb-6">Vuoi un audit gratuito o parlare con un ingegnere?</p>
                <Link href="/contact" className="inline-flex px-8 py-4 bg-primary text-white font-bold rounded-full hover:bg-primary/90 transition-colors text-sm">
                    Contattaci
                </Link>
            </section>
        </main>
    );
}

