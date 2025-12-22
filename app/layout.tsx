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
  "@type": "ProfessionalService",
  "name": "Rayo Consulting",
  "image": "https://rayo.consulting/favicon.svg",
  "@id": "https://rayo.consulting",
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
