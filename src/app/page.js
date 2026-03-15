import HeroSlider from '@/components/HeroSlider/HeroSlider'
import WhyUs from '@/components/Whyus/Whyus'
import Process from '@/components/Process/Process'
import StickyCanvas from '@/components/StickyCanvas/StickyCanvas'
import Subsidy from '@/components/subsidy/Subsidy'
import SolarCTA from '@/components/Cta/SolarCTA'
import MediaStrip from '@/components/MediaStrip'
import JingleVideo from '@/components/JingleVideo'
import ZeroBillStrip from '@/components/ZeroBillStrip'

const SITE_URL = "https://srishtisolarpower.com"

export const metadata = {
  title: 'Srishti Solar Power — Bihar की #1 Solar Company | Solar Panel Installation Patna',
  description:
    'Bihar की #1 Solar Company — Bihar Solar Expo 2026 में #1 ranked। घर और दुकान के लिए rooftop solar installation। PM Surya Ghar subsidy ₹78,000 तक। Patna, Gaya, Muzaffarpur, Bhagalpur में free site visit।',
  keywords: [
    'solar panel Bihar',
    'solar panel Patna',
    'solar company Bihar',
    'rooftop solar Bihar',
    'solar installation Patna',
    'PM Surya Ghar subsidy Bihar',
    'solar energy Bihar',
    'solar panel price Bihar',
    'Srishti Solar Power'
  ],
  alternates: {
    canonical: SITE_URL
  },
  openGraph: {
    title: 'Srishti Solar Power — Bihar की #1 Solar Company',
    description:
      'Bihar Solar Expo 2026 में #1 ranked। PM Surya Ghar subsidy ₹78,000 तक। Free site visit। 41+ installations across Bihar.',
    url: SITE_URL,
    siteName: 'Srishti Solar Power',
    locale: 'hi_IN',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Solar Panel Installation in Bihar – Srishti Solar Power'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Srishti Solar Power — Bihar की #1 Solar Company',
    description:
      'PM Surya Ghar subsidy ₹78,000 तक। Rooftop solar installation across Bihar.',
    images: ['/og-image.jpg']
  }
}

export default function HomePage() {
  return (
    <main>

      {/* Structured Data for Google */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Solar Panel Installation Bihar",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Srishti Solar Power",
              "url": SITE_URL
            },
            "areaServed": {
              "@type": "State",
              "name": "Bihar"
            },
            "serviceType": "Rooftop Solar Installation",
            "offers": {
              "@type": "Offer",
              "priceCurrency": "INR",
              "description": "Solar installation with PM Surya Ghar subsidy up to ₹78,000"
            }
          })
        }}
      />

      <HeroSlider />

      <StickyCanvas
        image="https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2072"
        watermark="SOLAR"
      >
        <JingleVideo />
        <WhyUs />
        <Process />
      </StickyCanvas>

      <Subsidy />

      <MediaStrip />

      <ZeroBillStrip />

      <SolarCTA />
<section className="visually-hidden-seo">
  <h1>Bihar की #1 Solar Company – Srishti Solar Power</h1>

  <p>
    Srishti Solar Power Patna, Bihar की leading rooftop solar installation company है।
    हम घर और commercial buildings के लिए solar panel installation करते हैं।
    PM Surya Ghar Muft Bijli Yojana के तहत ₹78,000 तक की solar subsidy उपलब्ध है।
  </p>

  <h2>Solar Panel Installation in Bihar</h2>

  <p>
    अगर आप अपने घर या दुकान के लिए solar panel लगवाना चाहते हैं तो
    Srishti Solar Power complete solar solution प्रदान करती है।
    हमारी services में site survey, solar system design,
    net metering, subsidy assistance और installation शामिल है।
  </p>

  <h2>Solar Installation Cities</h2>

  <p>
    Patna, Gaya, Muzaffarpur, Bhagalpur, Darbhanga, Nalanda,
    Begusarai और पूरे Bihar में rooftop solar installation उपलब्ध है।
  </p>
</section>

    </main>
  )
}