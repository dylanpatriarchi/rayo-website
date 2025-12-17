import Hero from '@/components/sections/Hero'
import Manifesto from '@/components/sections/Manifesto'
import DigitalWorkforce from '@/components/sections/DigitalWorkforce'
import Logo from '@/components/ui/Logo'

export default function Home() {
  return (
    <main className="min-h-screen bg-deep-carbon selection:bg-int-orange selection:text-deep-carbon">
      <nav className="fixed top-0 left-0 w-full p-6 flex justify-between items-center z-50 mix-blend-difference">
        <Logo className="w-12 h-12" />
        <div className="font-technical text-xs tracking-widest text-stark-white">
          [V3.0]
        </div>
      </nav>

      <Hero />
      <Manifesto />
      <DigitalWorkforce />

      {/* Footer Placeholder for now */}
      <div className="py-20 text-center font-technical text-concrete-grey/50">
        Rayo Consulting © 2025
      </div>
    </main>
  );
}
