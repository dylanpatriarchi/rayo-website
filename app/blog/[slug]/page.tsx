import { getPost, getAllPosts } from "@/utils/mdx";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";

export async function generateStaticParams() {
    const posts = getAllPosts("blog");
    return posts.map((post) => ({
        slug: post.slug,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = getPost("blog", slug);

    if (!post) {
        return {
            title: "Post Not Found",
        };
    }

    return {
        title: {
            absolute: `${post.metadata.title} | Rayo Consulting Blog`
        },
        description: post.metadata.summary,
    };
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = getPost("blog", slug);

    if (!post) {
        notFound();
    }

    return (
        <article className="pt-32 pb-24 px-6 md:px-12 max-w-4xl mx-auto min-h-screen">
            <header className="mb-12">
                <div className="text-sm font-bold uppercase tracking-widest text-primary mb-4">
                    {new Date(post.metadata.publishedAt).toLocaleDateString('it-IT')}
                </div>
                <h1 className="text-4xl md:text-6xl font-bold tracking-tighter leading-tight mb-8">
                    {post.metadata.title}
                </h1>
                <p className="text-xl md:text-2xl font-light text-foreground/70 leading-relaxed max-w-2xl">
                    {post.metadata.summary}
                </p>
            </header>

            <div className="prose prose-lg md:prose-xl prose-slate dark:prose-invert max-w-none prose-headings:text-foreground prose-p:text-foreground prose-strong:text-foreground prose-li:text-foreground prose-a:text-primary hover:prose-a:text-blue-600 prose-img:rounded-xl">
                <MDXRemote source={post.content} />
            </div>
        </article>
    );
}
