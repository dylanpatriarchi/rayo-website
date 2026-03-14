import Link from "next/link";
import { getAllPosts } from "@/utils/mdx";
import PostList from "@/components/PostList";

export const metadata = {
    title: "Casi Studio AI | Rayo Consulting",
    description: "Implementazioni AI reali su PMI italiane: RAG, fine-tuning, AI Agents. Risultati misurabili, stack tecnologico trasparente.",
    alternates: { canonical: "https://rayo.consulting/cases" },
    openGraph: {
        title: "Casi Studio | Rayo Consulting",
        description: "Progetti AI reali con metriche reali. Dai documenti fiscali all'e-commerce.",
        url: "https://rayo.consulting/cases",
        type: "website",
    },
    twitter: { card: "summary_large_image" as const, title: "Casi Studio | Rayo Consulting" },
};

export default function CasesPage() {
    const posts = getAllPosts("cases");

    return (
        <main className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto min-h-screen">
            <p className="text-sm font-bold uppercase tracking-widest text-primary mb-6">Casi Studio</p>
            <h1 className="text-4xl md:text-7xl font-bold tracking-tighter leading-none mb-24">
                Risultati Misurabili.
            </h1>

            <PostList initialPosts={posts} variant="cases" />

            <section className="mt-24 pt-24 border-t border-foreground/10 text-center">
                <p className="text-foreground/60 font-light mb-6">Vuoi risultati simili per la tua azienda?</p>
                <Link href="/contact" className="inline-flex px-8 py-4 bg-primary text-white font-bold rounded-full hover:bg-primary/90 transition-colors text-sm">
                    Richiedi un audit
                </Link>
            </section>
        </main>
    );
}
