import HeroSlider    from '@/components/HeroSlider/HeroSlider'
import WhyUs         from '@/components/Whyus/Whyus'
import Process       from '@/components/Process/Process'
import StickyCanvas  from '@/components/StickyCanvas/StickyCanvas'
import Subsidy       from '@/components/subsidy/Subsidy'
import SolarCTA      from '@/components/Cta/SolarCTA'
import MediaStrip    from '@/components/MediaStrip'
import JingleVideo   from '@/components/JingleVideo'
import ZeroBillStrip from '@/components/ZeroBillStrip'

const SITE_URL = 'https://srishtisolarpower.com'

export const metadata = {
  title: 'Bihar की #1 Solar Company | Solar Panel Installation Patna',
  description: 'Srishti Solar Power — Bihar Solar Expo 2026 में #1 ranked। घर और दुकान के लिए rooftop solar installation। PM Surya Ghar subsidy ₹78,000 तक। Patna, Gaya, Muzaffarpur, Bhagalpur में free site visit। Call: 99310 13345',
  alternates: { canonical: SITE_URL },
  openGraph: {
    title: 'Srishti Solar Power — Bihar की #1 Solar Company',
    description: 'Bihar Solar Expo 2026 में #1 ranked। PM Surya Ghar subsidy ₹78,000 तक। Free site visit। 41+ installations across Bihar.',
    url: SITE_URL,
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Solar Panel Installation in Bihar – Srishti Solar Power' }],
  },
}

const homePageSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${SITE_URL}/#service`,
  name: 'Rooftop Solar Panel Installation Bihar',
  alternateName: 'Bihar Solar Installation',
  provider: {
    '@type': 'LocalBusiness',
    '@id': `${SITE_URL}/#business`,
    name: 'Srishti Solar Power',
    url: SITE_URL,
    telephone: '+91-99310-13345',
  },
  areaServed: { '@type': 'State', name: 'Bihar' },
  serviceType: 'Rooftop Solar Installation',
  description: 'Professional rooftop solar panel installation in Bihar with PM Surya Ghar subsidy assistance up to ₹78,000. MNRE certified, SBPDCL/NBPDCL registered.',
  offers: {
    '@type': 'AggregateOffer',
    priceCurrency: 'INR',
    lowPrice: '30000',
    highPrice: '78000',
    offerCount: '3',
    description: 'Solar installation with PM Surya Ghar subsidy. 1kW: ₹30,000 subsidy. 2kW: ₹60,000. 3kW: ₹78,000.',
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
  ],
}

const videoSchema = {
  '@context': 'https://schema.org',
  '@type': 'VideoObject',
  name: 'Srishti Solar — Official Jingle 2026',
  description: 'Bihar की हर छत पर सौर ऊर्जा — यही है हमारा सपना। Srishti Solar Power का official jingle 2026। बिहार की हर छत चमकेगी, अब बिजली खुद ही दमकेगी।',
  thumbnailUrl: 'https://res.cloudinary.com/dgifa4wgb/video/upload/so_15/v1772943166/f4d8fc7a-c497-4d75-83d8-52d71ee41ec7_t9a4lo.jpg',
  uploadDate: '2026-01-01',
  contentUrl: 'https://res.cloudinary.com/dgifa4wgb/video/upload/v1772943166/f4d8fc7a-c497-4d75-83d8-52d71ee41ec7_t9a4lo.mp4',
  embedUrl: `${SITE_URL}/jingle`,
  duration: 'PT1M30S',
  inLanguage: 'hi',
  publisher: {
    '@type': 'Organization',
    name: 'Srishti Solar Power',
    logo: {
      '@type': 'ImageObject',
      url: `${SITE_URL}/logo.png`,
    },
  },
}

export default function HomePage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(homePageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchema) }} />
      <h1 className="sr-only">
        Srishti Solar Power — Bihar की #1 Solar Company | Rooftop Solar Installation Patna
      </h1>
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
    </main>
  )
}