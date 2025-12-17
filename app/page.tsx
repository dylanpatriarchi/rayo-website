import Hero from '@/components/sections/Hero'
import Manifesto from '@/components/sections/Manifesto'
import DigitalWorkforce from '@/components/sections/DigitalWorkforce'
import ServicesPreview from '@/components/sections/ServicesPreview'
import SelectedWorkPreview from '@/components/sections/SelectedWorkPreview'
import Logo from '@/components/ui/Logo'

export default function Home() {
  return (
    <main className="min-h-screen bg-deep-carbon selection:bg-int-orange selection:text-deep-carbon">

      <Hero />
      <Manifesto />
      <ServicesPreview />
      <SelectedWorkPreview />
      <DigitalWorkforce />
    </main>
  );
}
