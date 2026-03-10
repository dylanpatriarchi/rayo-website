import Link from "next/link";
import { getFaqPageJsonLdEn } from "@/lib/faq-en";

const baseUrl = "https://rayo.consulting";

export default function EnPage() {
    const faqJsonLd = getFaqPageJsonLdEn(baseUrl);
    const organizationJsonLd = {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        name: "Rayo Consulting",
        url: baseUrl,
        telephone: "+39 327 174 6038",
        address: {
            "@type": "PostalAddress",
            streetAddress: "Vocabolo Marcheggiane 56/C",
            addressLocality: "Città di Castello",
            postalCode: "06018",
            addressCountry: "IT",
        },
        knowsAbout: ["Artificial Intelligence", "RAG Systems", "LLM Fine-Tuning"],
    };

    return (
        <main className="pt-32 pb-24 px-6 md:px-12 max-w-4xl mx-auto">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
            />

            <h1 className="text-sm font-bold uppercase tracking-widest text-primary mb-6">
                English
            </h1>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter leading-tight mb-8">
                Enterprise AI solutions.
            </h2>
            <p className="text-xl text-foreground/70 mb-10">
                We build RAG systems, fine-tune LLMs, and deploy AI agents in production.
                Private cloud and on-premise. No lock-in; you own the code and the models.
            </p>
            <ul className="space-y-3 text-foreground/80 mb-12 border-l-2 border-primary pl-6">
                <li>RAG on your documents (legal, compliance, knowledge bases)</li>
                <li>LLM fine-tuning (Llama, Mistral) for your domain</li>
                <li>AI agents and automation (APIs, CRM, workflows)</li>
                <li>Technical advisory and CTO-as-a-Service</li>
            </ul>

            <div className="flex flex-col sm:flex-row gap-4">
                <Link
                    href="/contact"
                    className="inline-flex px-8 py-4 bg-primary text-white font-bold rounded-full hover:bg-primary/90 transition-colors text-sm text-center justify-center"
                >
                    Get in touch
                </Link>
                <Link
                    href="/audit-gratuito"
                    className="inline-flex px-8 py-4 border border-foreground/20 font-medium rounded-full hover:border-foreground/40 transition-colors text-sm text-center justify-center"
                >
                    Free audit
                </Link>
            </div>

            <p className="mt-12 text-sm text-foreground/50">
                Full site in Italian: <Link href="/" className="text-primary hover:underline">rayo.consulting</Link>
            </p>
        </main>
    );
}
