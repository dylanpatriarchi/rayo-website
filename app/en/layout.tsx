import type { Metadata } from "next";

const baseUrl = "https://rayo.consulting";

export const metadata: Metadata = {
    title: "Rayo Consulting | Enterprise AI Solutions",
    description: "We turn manual processes into autonomous AI systems. RAG, LLM fine-tuning, and business-critical automation. Italy & EU.",
    alternates: {
        canonical: `${baseUrl}/en`,
        languages: {
            "x-default": baseUrl,
            it: baseUrl,
            en: `${baseUrl}/en`,
        },
    },
    openGraph: {
        locale: "en_GB",
        url: `${baseUrl}/en`,
        title: "Rayo Consulting | Enterprise AI",
        description: "RAG, fine-tuning, AI agents. We build production AI systems.",
        siteName: "Rayo Consulting",
    },
};

export default function EnLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
