import Hero from '@/components/sections/Hero'
import Manifesto from '@/components/sections/Manifesto'
import DigitalWorkforce from '@/components/sections/DigitalWorkforce'
import ServicesPreview from '@/components/sections/ServicesPreview'
import SelectedWorkPreview from '@/components/sections/SelectedWorkPreview'
import Marquee from '@/components/ui/Marquee'
import Logo from '@/components/ui/Logo'

export default function Home() {
  return (
    <main className="min-h-screen bg-deep-carbon selection:bg-int-orange selection:text-deep-carbon">

      <Hero />

      <div className="relative py-20 pointer-events-none select-none overflow-hidden">
        <Marquee text="PRAGMATIC VELOCITY // BUILT TO SCALE //" className="absolute top-10 left-0 -z-10" />
      </div>

      <Manifesto />
      <ServicesPreview />

      <div className="relative py-20 pointer-events-none select-none overflow-hidden">
        <Marquee text="SYSTEMS OPERATIONAL // MOTORI NON VETRINE //" reverse={true} className="absolute top-10 left-0 -z-10" />
      </div>

      <SelectedWorkPreview />
      <DigitalWorkforce />
    </main>
  );
}
