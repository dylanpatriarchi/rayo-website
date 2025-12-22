import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Methodology from "@/components/Methodology";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="w-full min-h-screen">
      <Header />
      <Hero />
      <Services />
      <Methodology />
      <Footer />
    </main>
  );
}
