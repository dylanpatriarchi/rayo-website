import { getPost, getAllPosts } from "@/utils/mdx";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import ContentCTA from "@/components/ContentCTA";

const BASE_URL = "https://rayo.consulting";

export async function generateStaticParams() {
    const posts = getAllPosts("cases");
    return posts.map((post) => ({
        slug: post.slug,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = getPost("cases", slug);

    if (!post) return { title: "Case Study Not Found" };

    const url = `${BASE_URL}/cases/${slug}`;
    const image = post.metadata.image ? `${BASE_URL}${post.metadata.image.startsWith("/") ? "" : "/"}${post.metadata.image}` : `${BASE_URL}/og-image.png`;
    return {
        title: { absolute: `${post.metadata.title} | Case Study | Rayo Consulting` },
        description: post.metadata.summary,
        alternates: { canonical: url },
        openGraph: {
            title: `${post.metadata.title} | Case Study | Rayo Consulting`,
            description: post.metadata.summary,
            url,
            type: "article",
            publishedTime: post.metadata.publishedAt,
            images: [{ url: image, width: 1200, height: 630, alt: post.metadata.title }],
        },
        twitter: { card: "summary_large_image", title: post.metadata.title, description: post.metadata.summary },
    };
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = getPost("cases", slug);

    if (!post) {
        notFound();
    }

    return (
        <article className="pt-32 w-full min-h-screen">
            <header className="px-6 md:px-12 max-w-7xl mx-auto mb-24 cursor-default">
                <div className="flex flex-col md:flex-row gap-8 md:items-end justify-between border-b border-foreground/10 pb-8">
                    <div className="max-w-4xl">
                        <div className="text-sm font-bold uppercase tracking-widest text-primary mb-6">
                            {post.metadata.industry}
                        </div>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-none mb-8">
                            {post.metadata.title}
                        </h1>
                    </div>
                    <div className="shrink-0 mb-2">
                        <div className="text-6xl font-bold tracking-tighter">{post.metadata.stat}</div>
                        <div className="text-sm uppercase tracking-wide opacity-50">{post.metadata.statLabel}</div>
                    </div>
                </div>
            </header>

            <div className="px-6 md:px-12 max-w-4xl mx-auto pb-24">
                <div className="prose prose-lg md:prose-xl prose-slate dark:prose-invert max-w-none prose-headings:text-foreground prose-p:text-foreground prose-strong:text-foreground prose-li:text-foreground prose-a:text-primary hover:prose-a:text-blue-600 prose-img:rounded-xl">
                    <MDXRemote source={post.content} />
                </div>
                <ContentCTA variant="case" />
            </div>
        </article>
    );
}
