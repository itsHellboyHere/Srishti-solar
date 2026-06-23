import HeroSlider    from '@/components/HeroSlider/HeroSlider'
import WhyUs         from '@/components/Whyus/Whyus'
import Process       from '@/components/Process/Process'
import StickyCanvas  from '@/components/StickyCanvas/StickyCanvas'
import Subsidy       from '@/components/subsidy/Subsidy'
import SolarCTA      from '@/components/Cta/SolarCTA'
import MediaStrip    from '@/components/MediaStrip'
import JingleVideo   from '@/components/JingleVideo'
import ZeroBillStrip from '@/components/ZeroBillStrip'
import YoutubeSection from '@/components/YoutubeSection'

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

// Moved here from layout.js — only home page gets this FAQPage schema
const homeFaqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Bihar में solar panel लगवाने पर कितनी subsidy मिलती है?',
      acceptedAnswer: { '@type': 'Answer', text: 'PM Surya Ghar Muft Bijli Yojana के तहत: 1kW पर ₹30,000, 2kW पर ₹60,000, और 3kW+ पर ₹78,000 सब्सिडी सीधे बैंक में मिलती है।' },
    },
    {
      '@type': 'Question',
      name: 'Patna में solar panel installation का खर्च कितना है?',
      acceptedAnswer: { '@type': 'Answer', text: 'Srishti Solar Power में 1kW system लगभग ₹60,000–₹70,000 से शुरू होता है, जिसमें से ₹30,000 सरकारी सब्सिडी मिलती है।' },
    },
    {
      '@type': 'Question',
      name: 'Solar panel लगवाने में कितना समय लगता है?',
      acceptedAnswer: { '@type': 'Answer', text: 'Site visit के 72 घंटे में installation पूरी। Subsidy 30–45 दिन में bank account में। Srishti Solar पूरी process handle करती है।' },
    },
    {
      '@type': 'Question',
      name: 'Bihar की सबसे अच्छी solar company कौन सी है?',
      acceptedAnswer: { '@type': 'Answer', text: 'Srishti Solar Power को Bihar Solar Expo 2026 में Energy Secretary ने #1 Technical Efficiency का खिताब दिया। 41+ installations, 9 districts, MNRE certified।' },
    },
    {
      '@type': 'Question',
      name: 'PM Surya Ghar के लिए कैसे apply करें?',
      acceptedAnswer: { '@type': 'Answer', text: 'Srishti Solar Power पूरी process करती है — DISCOM registration, net metering, सभी 14 documents, subsidy application। बस free site visit book करें: 99310 13345।' },
    },
    {
      '@type': 'Question',
      name: 'Srishti Solar Power का contact number क्या है?',
      acceptedAnswer: { '@type': 'Answer', text: 'Srishti Solar Power का contact number है: +91 99310 13345। Email: info@srishtisolarpower.com। Free site visit के लिए call करें।' },
    },
  ],
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(homeFaqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchema) }} />
      <h1 className="sr-only">
        Srishti Solar Power — Bihar की #1 Solar Company | Rooftop Solar Installation Patna
      </h1>
      <HeroSlider />
       <YoutubeSection/>
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
      {/* <ZeroBillStrip /> */}
     
      <SolarCTA />
    </main>
  )
}