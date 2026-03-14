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
import StatsSection from "@/components/StatsSection";
import CTABanner from "@/components/CTABanner";
import TechStack from "@/components/TechStack";
import BlogPreview from "@/components/BlogPreview";
import FounderCard from "@/components/FounderCard";
import HowToStart from "@/components/HowToStart";
import GdprTrustSection from "@/components/GdprTrustSection";
import RoiCTA from "@/components/RoiCTA";
import { getAllPosts } from "@/utils/mdx";

export const metadata = {
    alternates: { canonical: "https://rayo.consulting" },
};

export default function Home() {
  const allCases = getAllPosts("cases");
  const featuredCases = allCases.slice(0, 4);
  const latestPosts = getAllPosts("blog").slice(0, 3);

  return (
    <main className="w-full min-h-screen">
      <Hero />
      <LogoStrip />
      <StatsSection />
      <RoiCTA />
      <InternationalSection />
      <Services />
      <CaseStudiesPreview posts={featuredCases} />
      <CTABanner />
      <HowToStart />
      <WorkEthic />
      <Methodology />
      <TechStack />
      <GdprTrustSection />
      <Comparison />
      <FAQ />
      <FounderCard />
      <Testimonials />
      <BlogPreview posts={latestPosts} />
      <ContactForm />
    </main>
  );
}
