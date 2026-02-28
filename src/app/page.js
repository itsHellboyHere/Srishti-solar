
import HeroSlider from '@/components/HeroSlider/HeroSlider'
import WhyUs from '@/components/Whyus/Whyus'
import Process from '@/components/Process/Process'
import StickyCanvas from '@/components/StickyCanvas/StickyCanvas'
import Subsidy from '@/components/subsidy/Subsidy'
import SolarCTA from '@/components/Cta/SolarCTA'

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
      {/* <Subsidy/>
      <SolarCTA/> */}
      <div style={{
        padding:"100px 100px",
        display: "flex",
        margin: " 0 auto",
        alignItems:"center",
        justifyContent:"center",
        fontSize:"3rem"
      }}  >We are in buid Process </div>
    </main>
  )
}