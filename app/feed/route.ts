import { getAllPosts } from "@/utils/mdx";

const BASE_URL = "https://rayo.consulting";

export async function GET() {
    const posts = getAllPosts("blog");

    const itemsXml = posts
        .sort((a, b) =>
            new Date(b.metadata.publishedAt).getTime() -
            new Date(a.metadata.publishedAt).getTime()
        )
        .map((post) => {
            const { metadata, slug } = post;
            const url = `${BASE_URL}/blog/${slug}`;

            return `<item>
        <title><![CDATA[${metadata.title}]]></title>
        <link>${url}</link>
        <guid isPermaLink="true">${url}</guid>
        <description><![CDATA[${metadata.summary}]]></description>
        <pubDate>${new Date(metadata.publishedAt).toUTCString()}</pubDate>
      </item>`;
        })
        .join("\n");

    const rssXml = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Rayo Consulting Blog</title>
    <link>${BASE_URL}</link>
    <description>Approfondimenti su AI, RAG, e Sviluppo Web Enterprise.</description>
    <language>it</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${BASE_URL}/feed" rel="self" type="application/rss+xml" />
    ${itemsXml}
  </channel>
</rss>`;

    return new Response(rssXml, {
        headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "s-maxage=3600, stale-while-revalidate",
        },
    });
}
