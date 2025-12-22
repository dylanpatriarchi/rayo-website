import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import SmoothScroller from "@/components/SmoothScroller";
import Analytics from "@/components/Analytics";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";
import CookieBanner from "@/components/CookieBanner";

const helvetica = localFont({
  src: [
    {
      path: "../public/fonts/HelveticaNow-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/HelveticaNow-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/HelveticaNow-Light.ttf",
      weight: "300",
      style: "normal",
    },
  ],
  variable: "--font-helvetica",
});

export const metadata: Metadata = {
  title: {
    default: "Rayo Consulting | AI & Web Agency",
    template: "%s | Rayo Consulting",
  },
  description: "Agenzia AI & Sviluppo Web Enterprise. Costruiamo architetture RAG, modelli Fine-Tuned e piattaforme web ad alte prestazioni.",
  keywords: ["AI Agency", "Web Agency", "Sviluppo Next.js", "RAG", "LLM Fine-tuning", "Software House Perugia", "Consulenza AI"],
  authors: [{ name: "Dylan Patriarchi" }],
  creator: "Rayo Consulting",
  metadataBase: new URL("https://rayo.consulting"),
  openGraph: {
    type: "website",
    locale: "it_IT",
    url: "https://rayo.consulting",
    title: "Rayo Consulting | AI & Web Agency",
    description: "Soluzioni AI verticali e Sviluppo Web di precisione. Dalla RAG Enterprise ai siti Next.js ad alte prestazioni.",
    siteName: "Rayo Consulting",
  },
  icons: {
    icon: "/favicon.svg",
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
      "telephone": "",
      "priceRange": "€€€",
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
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Come si differenzia il vostro approccio RAG?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Non usiamo semplici database vettoriali. Costruiamo grafi di conoscenza che mantengono il contesto semantico e gerarchico dei documenti, garantendo risposte che non solo trovano l'informazione, ma la comprendono."
          }
        },
        {
          "@type": "Question",
          "name": "I miei dati vengono usati per il training?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Assolutamente no. Per le soluzioni Enterprise, offriamo deployment su cloud privato o on-premise. I modelli vengono fine-tunati sui tuoi dati, ma quei pesi rimangono di tua esclusiva proprietà."
          }
        },
        {
          "@type": "Question",
          "name": "Quali sono i tempi di implementazione?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Per un sistema RAG standard, 2-3 settimane. Per progetti di Fine-Tuning complessi, dalle 4 alle 8 settimane a seconda della pulizia del dataset iniziale."
          }
        }
      ]
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
      <body className={`${helvetica.variable} font-sans antialiased text-foreground bg-background overflow-x-hidden`}>
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
        <ChatWidget />
        <CookieBanner />
      </body>
    </html>
  );
}
