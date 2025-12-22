import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import SmoothScroller from "@/components/SmoothScroller";

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
        <SmoothScroller>{children}</SmoothScroller>
      </body>
    </html>
  );
}
