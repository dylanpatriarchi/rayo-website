import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Methodology from "@/components/Methodology";
import Footer from "@/components/Footer";
import WorkEthic from "@/components/WorkEthic";
import FAQ from "@/components/FAQ";
import ContactForm from "@/components/ContactForm";
import ChatWidget from "@/components/ChatWidget";
import CookieBanner from "@/components/CookieBanner";
import Analytics from "@/components/Analytics";

export default function Home() {
  return (
    <main className="w-full min-h-screen">
      <Analytics />
      <Header />
      <Hero />
      <Services />
      <WorkEthic />
      <Methodology />
      <FAQ />
      <ContactForm />
      <Footer />
      <ChatWidget />
      <CookieBanner />
    </main>
  );
}
