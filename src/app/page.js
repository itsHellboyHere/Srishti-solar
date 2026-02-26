
import HeroSlider from '@/components/HeroSlider/HeroSlider'
import Process from '@/components/Process/Process'
import WhyUs from '@/components/Whyus/Whyus'

export default function HomePage() {
  return (
    <main>

      <HeroSlider />
      <WhyUs/>
      <Process/>
      {/* ── Add sections below as you build ──
      
      <Services />
      <Projects />
      <Testimonials />
      <Footer />
      */}
    </main>
  )
}
