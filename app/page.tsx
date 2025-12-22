import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Methodology from "@/components/Methodology";
import WorkEthic from "@/components/WorkEthic";
import FAQ from "@/components/FAQ";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <main className="w-full min-h-screen">
      <Hero />
      <Services />
      <WorkEthic />
      <Methodology />
      <FAQ />
      <ContactForm />
    </main>
  );
}
