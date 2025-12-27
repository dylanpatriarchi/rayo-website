import { getPost, getAllPosts } from "@/utils/mdx";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";

export const dynamicParams = false;

export async function generateStaticParams() {
    const posts = getAllPosts("jobs");
    return posts.map((post) => ({
        slug: post.slug,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = getPost("jobs", slug);
    if (!post) return;
    return {
        title: `${post.metadata.title} | Rayo Careers`,
        description: post.metadata.summary,
    };
}

export default async function JobPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = getPost("jobs", slug);

    if (!post) {
        notFound();
    }

    return (
        <article className="pt-32 pb-24 px-6 md:px-12 max-w-4xl mx-auto min-h-screen">
            <header className="mb-16">
                <div className="flex flex-wrap gap-4 mb-6 text-sm font-medium tracking-wide opacity-60">
                    <span className="uppercase">{post.metadata.type}</span>
                    <span>•</span>
                    <span>{post.metadata.rate}</span>
                </div>
                <h1 className="text-4xl md:text-6xl font-bold tracking-tighter leading-none mb-8">
                    {post.metadata.title}
                </h1>
                <p className="text-xl md:text-2xl font-light text-foreground/70 leading-relaxed max-w-2xl">
                    {post.metadata.summary}
                </p>
            </header>

            <div className="prose prose-lg prose-neutral dark:prose-invert max-w-none font-light prose-headings:font-bold prose-headings:tracking-tight prose-a:text-primary prose-a:no-underline hover:prose-a:underline">
                <ReactMarkdown>{post.content}</ReactMarkdown>
            </div>
        </article>
    );
}
