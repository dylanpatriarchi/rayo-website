import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import Footer from "@/components/sections/Footer";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-technical",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rayo Consulting | Built to Scale",
  description: "Motori, non Vetrine. Rayo progetta asset digitali proprietari per la scalabilità.",
};

import Navbar from "@/components/sections/Navbar";

// ... (imports remain mostly same, just add Navbar import if not auto-added, though I will be explicit)

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <body
        className={`${jetbrainsMono.variable} antialiased bg-deep-carbon text-stark-white font-primary`}
      >
        <SmoothScroll>
          <Navbar />
          {children}
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
