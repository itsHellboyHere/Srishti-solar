
import HeroSlider from '@/components/HeroSlider/HeroSlider'
import WhyUs from '@/components/Whyus/Whyus'
import Process from '@/components/Process/Process'
import StickyCanvas from '@/components/StickyCanvas/StickyCanvas'

export default function HomePage() {
  return (
    <main>
      <HeroSlider/>

      <StickyCanvas
        image="https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2072"
        watermark="SOLAR"
      >
        <WhyUs />
        <Process />
      </StickyCanvas>

    </main>
  )
}