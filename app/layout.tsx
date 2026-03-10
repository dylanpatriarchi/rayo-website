import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { faqs } from "@/lib/faq";
import SmoothScroller from "@/components/SmoothScroller";
import Analytics from "@/components/Analytics";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import AdSenseLoader from "@/components/AdSenseLoader";
import GradualBlur from "@/components/GradualBlur";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  title: {
    default: "Rayo Consulting | Enterprise AI Solutions",
    template: "%s | Rayo Consulting",
  },
  description: "Trasformiamo processi manuali in sistemi AI autonomi. Agenzia specializzata in RAG Enterprise, LLM Fine-Tuning e Automazione Business Critica.",
  keywords: ["Enterprise AI Agency", "Sviluppo RAG", "LLM Fine-tuning Italia", "Automazione Processi AI", "Consulenza AI B2B", "Software House AI"],
  authors: [{ name: "Rayo Consulting Team" }],
  creator: "Rayo Consulting",
  metadataBase: new URL("https://rayo.consulting"),
  alternates: {
    languages: {
      "x-default": "https://rayo.consulting",
      it: "https://rayo.consulting",
      en: "https://rayo.consulting/en",
    },
  },
  openGraph: {
    type: "website",
    locale: "it_IT",
    url: "https://rayo.consulting",
    title: "Rayo Consulting | L'AI che porta ROI",
    description: "Smetti di giocare con le chat. Costruiamo infrastrutture AI proprietarie che riducono i costi operativi dal 40% al 60%.",
    siteName: "Rayo Consulting",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Rayo Consulting OpenGraph Image",
      }
    ]
  },
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  other: {
    "google-adsense-account": "ca-pub-4372911380864795",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "name": "Rayo Consulting",
      "image": "https://rayo.consulting/favicon.svg",
      "@id": "https://rayo.consulting/#organization",
      "url": "https://rayo.consulting",
      "telephone": "+39 327 174 6038",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Vocabolo Marcheggiane 56/C",
        "addressLocality": "Città di Castello",
        "postalCode": "06018",
        "addressCountry": "IT"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 43.4569,
        "longitude": 12.2397
      },
      "sameAs": [
        "https://www.linkedin.com/company/rayo-consulting"
      ],
      "knowsAbout": ["Artificial Intelligence", "RAG Systems", "LLM Fine-Tuning", "Next.js Development", "Web Engineering"],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "AI & Web Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "RAG Enterprise Systems",
              "description": "Sistemi di ricerca semantica su documenti aziendali (Retrieval-Augmented Generation)."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "LLM Fine-Tuning",
              "description": "Addestramento modelli AI (Llama 3, Mistral) su dataset proprietari."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Private AI Infrastructure",
              "description": "Setup di server AI on-premise o cloud privato GDPR-compliant."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Siti Web & Piattaforme Digitali",
              "description": "Sviluppo web Next.js ad alte prestazioni e SEO nativa."
            }
          }
        ]
      }
    },
    {
      "@type": "FAQPage",
      "@id": "https://rayo.consulting/#faq",
      "mainEntity": faqs.map((faq) => ({
        "@type": "Question" as const,
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer" as const,
          "text": faq.answer,
        },
      }))
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <body className={`${manrope.variable} font-sans antialiased text-foreground bg-background overflow-x-hidden`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Analytics />
        <SmoothScroller>
          <Header />
          {children}
          <Footer />
        </SmoothScroller>
        <GradualBlur
          target="page"
          position="bottom"
          height="6rem"
          strength={2}
          divCount={5}
          curve="bezier"
          exponential={true}
          opacity={1}
          zIndex={50}
        />
        <CookieBanner />
        <AdSenseLoader />
      </body>
    </html>
  );
}
