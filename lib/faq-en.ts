/**
 * FAQ in English – for /en page and FAQPage JSON-LD (GEO/AEO multilingua).
 */
export const faqsEn = [
    { question: "How does your RAG approach differ?", answer: "We don't use simple vector databases. We build knowledge graphs that preserve the semantic and hierarchical context of your documents, so answers don't just retrieve information—they understand it." },
    { question: "Are my data used for training?", answer: "No. For Enterprise solutions we offer deployment on private cloud or on-premise. Models are fine-tuned on your data, but those weights remain your exclusive property." },
    { question: "What are typical implementation timelines?", answer: "For a standard RAG system, 2–3 weeks. For complex Fine-Tuning projects, 4–8 weeks depending on initial dataset quality." },
    { question: "What about post-launch maintenance?", answer: "Yes. AI isn't static. We offer 'Enterprise Care' plans including periodic retraining, performance monitoring, and priority security updates." },
    { question: "Do you work with companies of all sizes?", answer: "Yes. We work with startups, SMBs, and enterprises. The common factor is the goal of having a real AI system in production, not a demo. For very small teams we recommend starting with an audit." },
    { question: "How does the free audit work?", answer: "After your request we get back within 24–48 hours. A 30-minute discovery call to understand goals, data, and constraints. We then send a summary with recommendations and a time/cost estimate. No commitment." },
] as const;

export function getFaqPageJsonLdEn(baseUrl: string) {
    return {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "@id": `${baseUrl}/en#faq`,
        mainEntity: faqsEn.map((faq) => ({
            "@type": "Question" as const,
            name: faq.question,
            acceptedAnswer: { "@type": "Answer" as const, text: faq.answer },
        })),
    };
}
