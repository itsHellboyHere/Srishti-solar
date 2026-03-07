
import HeroSlider from '@/components/HeroSlider/HeroSlider'
import WhyUs from '@/components/Whyus/Whyus'
import Process from '@/components/Process/Process'
import StickyCanvas from '@/components/StickyCanvas/StickyCanvas'
import Subsidy from '@/components/subsidy/Subsidy'
import SolarCTA from '@/components/Cta/SolarCTA'
import MediaStrip from '@/components/MediaStrip'


export const metadata = {
  title: 'Srishti Solar Power — Bihar की #1 Solar Company | Patna',
  description: 'Bihar की #1 Solar Company — Bihar Solar Expo 2026 में #1 ranked। घर और दुकान के लिए rooftop solar। PM Surya Ghar subsidy ₹78,000 तक। Patna, Gaya, Muzaffarpur में free site visit।',
  alternates: { canonical: 'https://srishtisolarpower.com' },
  openGraph: {
    title: 'Srishti Solar Power — Bihar की #1 Solar Company',
    description: 'Bihar Solar Expo 2026 में #1। PM Surya Ghar subsidy ₹78,000। Free site visit। 41+ installations, 9 districts।',
    url: 'https://srishtisolarpower.com',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
}

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
      <Subsidy/>
      <MediaStrip/>
      <SolarCTA/>
      {/* <div style={{
        padding:"100px 100px",
        display: "flex",
        margin: " 0 auto",
        alignItems:"center",
        justifyContent:"center",
        fontSize:"3rem"
      }}  >We are in buid Process </div> */}
    </main>
  )
}