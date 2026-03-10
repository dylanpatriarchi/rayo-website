import { getPost, getAllPosts } from "@/utils/mdx";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import ContentCTA from "@/components/ContentCTA";
import BlogServiceCTA from "@/components/BlogServiceCTA";

const BASE_URL = "https://rayo.consulting";

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

    const url = `${BASE_URL}/blog/${slug}`;
    const image = post.metadata.image ? `${BASE_URL}${post.metadata.image.startsWith("/") ? "" : "/"}${post.metadata.image}` : `${BASE_URL}/og-image.png`;
    return {
        title: { absolute: `${post.metadata.title} | Rayo Consulting Blog` },
        description: post.metadata.summary,
        alternates: { canonical: url },
        openGraph: {
            title: `${post.metadata.title} | Rayo Consulting Blog`,
            description: post.metadata.summary,
            url,
            type: "article",
            publishedTime: post.metadata.publishedAt,
            images: [{ url: image, width: 1200, height: 630, alt: post.metadata.title }],
        },
        twitter: { card: "summary_large_image", title: post.metadata.title, description: post.metadata.summary },
    };
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = getPost("blog", slug);

    if (!post) {
        notFound();
    }

    const articleJsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: post.metadata.title,
        description: post.metadata.summary,
        datePublished: post.metadata.publishedAt,
        dateModified: post.metadata.updatedAt || post.metadata.publishedAt,
        author: { "@type": "Person", name: "Dylan Patriarchi", url: "https://www.linkedin.com/in/dylan-patriarchi/" },
        publisher: { "@type": "Organization", name: "Rayo Consulting", logo: { "@type": "ImageObject", url: `${BASE_URL}/logo.svg` } },
        url: `${BASE_URL}/blog/${slug}`,
        image: post.metadata.image ? `${BASE_URL}${post.metadata.image.startsWith("/") ? "" : "/"}${post.metadata.image}` : `${BASE_URL}/og-image.png`,
    };

    return (
        <article className="pt-32 pb-24 px-6 md:px-12 max-w-4xl mx-auto min-h-screen">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
            <header className="mb-12">
                <div className="text-sm font-bold uppercase tracking-widest text-primary mb-4">
                    {new Date(post.metadata.publishedAt).toLocaleDateString('it-IT')}
                </div>
                <div className="text-sm font-bold uppercase tracking-widest text-foreground/40 mt-1">
                    Dylan Patriarchi
                </div>
                <h1 className="text-4xl md:text-6xl font-bold tracking-tighter leading-tight mb-8">
                    {post.metadata.title}
                </h1>
                <p className="text-xl md:text-2xl font-light text-foreground/70 leading-relaxed max-w-2xl">
                    {post.metadata.summary}
                </p>
            </header>

            <div className="prose prose-lg md:prose-xl prose-slate dark:prose-invert max-w-none prose-headings:text-foreground prose-p:text-foreground prose-strong:text-foreground prose-li:text-foreground prose-a:text-primary hover:prose-a:text-blue-600 prose-img:rounded-xl">
                <MDXRemote source={post.content} components={{ BlogServiceCTA }} />
            </div>

            <ContentCTA variant="blog" />

        </article>
    );
}
