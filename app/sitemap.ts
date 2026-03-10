import { MetadataRoute } from 'next';
import { getAllPosts } from '@/utils/mdx';
import { SERVICE_SLUGS } from '@/lib/services-landing';
import { SETTORE_SLUGS } from '@/lib/settori-landing';

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
            url: `${baseUrl}/en`,
            lastModified: new Date().toISOString(),
            changeFrequency: 'monthly' as const,
            priority: 0.9,
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
        {
            url: `${baseUrl}/careers`,
            lastModified: new Date().toISOString(),
            changeFrequency: 'weekly' as const,
            priority: 0.7,
        },
        {
            url: `${baseUrl}/karta`,
            lastModified: new Date().toISOString(),
            changeFrequency: 'monthly' as const,
            priority: 0.7,
        },
        {
            url: `${baseUrl}/audit-gratuito`,
            lastModified: new Date().toISOString(),
            changeFrequency: 'monthly' as const,
            priority: 0.85,
        },
        {
            url: `${baseUrl}/risorse`,
            lastModified: new Date().toISOString(),
            changeFrequency: 'monthly' as const,
            priority: 0.7,
        },
        {
            url: `${baseUrl}/rayo-vs`,
            lastModified: new Date().toISOString(),
            changeFrequency: 'monthly' as const,
            priority: 0.7,
        },
    ];

    const serviziLanding = SERVICE_SLUGS.map((slug) => ({
        url: `${baseUrl}/servizi/${slug}`,
        lastModified: new Date().toISOString(),
        changeFrequency: 'monthly' as const,
        priority: 0.8,
    }));

    const settoriLanding = SETTORE_SLUGS.map((slug) => ({
        url: `${baseUrl}/settori/${slug}`,
        lastModified: new Date().toISOString(),
        changeFrequency: 'monthly' as const,
        priority: 0.75,
    }));

    return [...routes, ...serviziLanding, ...settoriLanding, ...blogs, ...cases];
}
