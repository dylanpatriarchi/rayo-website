import Link from "next/link";
import { getAllPosts } from "@/utils/mdx";
import PostList from "@/components/PostList";

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

            <PostList initialPosts={posts} variant="cases" />
        </main>
    );
}
