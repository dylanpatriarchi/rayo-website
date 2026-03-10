import Link from "next/link";
import { getAllPosts } from "@/utils/mdx";
import PostList from "@/components/PostList";

export const metadata = {
    title: "Blog | Rayo Consulting",
    description: "Approfondimenti tecnici e visioni sull'Intelligenza Artificiale.",
};

export default function BlogPage() {
    const posts = getAllPosts("blog");

    return (
        <main className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto min-h-screen">
            <h1 className="text-sm font-bold uppercase tracking-widest text-primary mb-6">Blog</h1>
            <h2 className="text-4xl md:text-7xl font-bold tracking-tighter leading-none mb-24">
                Trasmissioni.
            </h2>

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

