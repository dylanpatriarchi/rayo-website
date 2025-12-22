import { MetadataRoute } from 'next';
import { getAllPosts } from '@/utils/mdx';

const baseUrl = 'https://rayo.consulting';

export default function sitemap(): MetadataRoute.Sitemap {
    const blogPosts = getAllPosts("blog");
    const caseStudies = getAllPosts("cases");

    const blogs = blogPosts.map((post) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: new Date(post.metadata.publishedAt).toISOString(), // Prioritize published date
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }));

    const cases = caseStudies.map((post) => ({
        url: `${baseUrl}/cases/${post.slug}`,
        lastModified: new Date().toISOString(),
        changeFrequency: 'monthly' as const,
        priority: 0.8,
    }));

    const routes = [
        {
            url: `${baseUrl}`,
            lastModified: new Date().toISOString(),
            changeFrequency: 'yearly' as const,
            priority: 1,
        },
        {
            url: `${baseUrl}/about`,
            lastModified: new Date().toISOString(),
            changeFrequency: 'monthly' as const,
            priority: 0.8,
        },
        {
            url: `${baseUrl}/services`,
            lastModified: new Date().toISOString(),
            changeFrequency: 'monthly' as const,
            priority: 0.9, // High priority for services
        },
        {
            url: `${baseUrl}/methodology`,
            lastModified: new Date().toISOString(),
            changeFrequency: 'yearly' as const,
            priority: 0.7,
        },
        {
            url: `${baseUrl}/cases`,
            lastModified: new Date().toISOString(),
            changeFrequency: 'weekly' as const,
            priority: 0.8,
        },
        {
            url: `${baseUrl}/blog`,
            lastModified: new Date().toISOString(),
            changeFrequency: 'weekly' as const,
            priority: 0.8,
        },
        {
            url: `${baseUrl}/contact`,
            lastModified: new Date().toISOString(),
            changeFrequency: 'yearly' as const,
            priority: 0.9, // Conversion page
        },
        {
            url: `${baseUrl}/privacy-policy`,
            lastModified: new Date().toISOString(),
            changeFrequency: 'yearly' as const,
            priority: 0.3,
        },
        {
            url: `${baseUrl}/cookie-policy`,
            lastModified: new Date().toISOString(),
            changeFrequency: 'yearly' as const,
            priority: 0.3,
        },
    ];

    return [...routes, ...blogs, ...cases];
}
