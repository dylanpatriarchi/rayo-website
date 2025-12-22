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
  title: "Rayo Consulting | AI Agency",
  description: "Soluzioni AI verticali per aziende che esigono precisione.",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <body className={`${helvetica.variable} font-sans antialiased text-foreground bg-background overflow-x-hidden`}>
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
