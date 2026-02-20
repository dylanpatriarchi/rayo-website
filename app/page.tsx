import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Methodology from "@/components/Methodology";
import WorkEthic from "@/components/WorkEthic";
import FAQ from "@/components/FAQ";
import Testimonials from "@/components/Testimonials";
import ContactForm from "@/components/ContactForm";
import CaseStudiesPreview from "@/components/CaseStudiesPreview";
import LogoStrip from "@/components/LogoStrip";
import Comparison from "@/components/Comparison";
import InternationalSection from "@/components/InternationalSection";
import { getAllPosts } from "@/utils/mdx";

export default function Home() {
  const allCases = getAllPosts("cases");
  // Get 4 most recent cases (or specific ones if we had a 'featured' flag, but slice is fine for now)
  const featuredCases = allCases.slice(0, 4);

  return (
    <main className="w-full min-h-screen">
      <Hero />
      <LogoStrip />
      <InternationalSection />
      <Services />
      <CaseStudiesPreview posts={featuredCases} />
      <WorkEthic />
      <Methodology />
      <Comparison />
      <FAQ />
      <Testimonials />
      <ContactForm />
    </main>
  );
}
