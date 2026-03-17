import SolutionsContent from './components/SolutionsContent'

const SITE_URL = 'https://srishtisolarpower.com'
const PAGE_URL = `${SITE_URL}/solutions`

export const metadata = {
  title: 'Solar Solutions Bihar | Residential, Commercial & Off-Grid Solar',
  description: 'Bihar के लिए complete solar solutions — residential rooftop solar (1–3kW), commercial solar (5–10kW), off-grid battery solar, और PM Surya Ghar subsidy ₹78,000 तक। IIT BHU engineer supervised installation। Free site visit across Bihar।',
  keywords: [
    'solar solutions Bihar',
    'rooftop solar Bihar',
    'residential solar Bihar',
    'commercial solar Bihar',
    'off grid solar Bihar',
    'solar installation Patna',
    'solar panel installation Bihar',
    'PM Surya Ghar solar Bihar',
    'solar battery backup Bihar',
    'IIT BHU solar engineer Bihar',
    'घरेलू सोलर बिहार',
    'व्यावसायिक सोलर बिहार',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: 'website',
    title: 'Solar Solutions Bihar — Residential, Commercial & Off-Grid | Srishti Solar Power',
    description: 'Residential rooftop solar (1–3kW), commercial solar (5–10kW), off-grid solar with battery. PM Surya Ghar subsidy ₹78,000. IIT BHU engineer supervised. Free site visit.',
    url: PAGE_URL,
    siteName: 'Srishti Solar Power',
    locale: 'hi_IN',
    images: [{
      url: '/og-image.jpg',
      width: 1200,
      height: 630,
      alt: 'Solar Solutions in Bihar — Residential, Commercial and Off-Grid by Srishti Solar Power',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Solar Solutions Bihar | Srishti Solar Power',
    description: 'Residential, commercial and off-grid solar installation across Bihar. PM Surya Ghar subsidy ₹78,000.',
    images: ['/og-image.jpg'],
  },
}

const solutionsSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  '@id': `${PAGE_URL}/#solutions`,
  name: 'Solar Solutions Bihar — Srishti Solar Power',
  description: 'Complete solar installation services in Bihar — residential, commercial, off-grid, and PM Surya Ghar subsidy assistance.',
  url: PAGE_URL,
  numberOfItems: 4,
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      item: {
        '@type': 'Service',
        '@id': `${PAGE_URL}/#residential`,
        name: 'Residential Rooftop Solar Installation Bihar',
        alternateName: 'घरेलू सोलर बिहार',
        description: 'Residential rooftop solar 1kW to 3kW with PM Surya Ghar subsidy up to ₹78,000. Monthly savings ₹800–₹2,500. 25-year panel life. HDG structure, N-Type Topcon panels.',
        provider: { '@type': 'LocalBusiness', '@id': `${SITE_URL}/#business` },
        areaServed: { '@type': 'State', name: 'Bihar' },
        offers: {
          '@type': 'AggregateOffer',
          priceCurrency: 'INR',
          lowPrice: '35000',
          highPrice: '111000',
          description: 'After PM Surya Ghar subsidy. 1kW: ₹35,000 | 2kW: ₹70,000 | 3kW: ₹1,11,000',
        },
      },
    },
    {
      '@type': 'ListItem',
      position: 2,
      item: {
        '@type': 'Service',
        '@id': `${PAGE_URL}/#commercial`,
        name: 'Commercial Rooftop Solar Installation Bihar',
        alternateName: 'व्यावसायिक सोलर बिहार',
        description: 'Commercial solar 5kW to 10kW+. Reduce electricity cost by 80%. ROI in 3–5 years. IIT BHU engineer supervised installation. MNRE approved.',
        provider: { '@type': 'LocalBusiness', '@id': `${SITE_URL}/#business` },
        areaServed: { '@type': 'State', name: 'Bihar' },
        offers: {
          '@type': 'Offer',
          priceCurrency: 'INR',
          description: 'Monthly savings ₹5,000–₹15,000. Available in 5kW, 6kW, 8kW, 10kW+ sizes.',
        },
      },
    },
    {
      '@type': 'ListItem',
      position: 3,
      item: {
        '@type': 'Service',
        '@id': `${PAGE_URL}/#offgrid`,
        name: 'Off-Grid Solar with Battery Backup Bihar',
        alternateName: 'ऑफ-ग्रिड सोलर बिहार',
        description: '24-hour electricity with battery backup. Ideal for rural Bihar and load-shedding areas. Available across all Bihar districts including remote areas.',
        provider: { '@type': 'LocalBusiness', '@id': `${SITE_URL}/#business` },
        areaServed: { '@type': 'State', name: 'Bihar' },
      },
    },
    {
      '@type': 'ListItem',
      position: 4,
      item: {
        '@type': 'Service',
        '@id': `${PAGE_URL}/#subsidy`,
        name: 'PM Surya Ghar Muft Bijli Yojana Assistance Bihar',
        alternateName: 'PM सूर्य घर योजना बिहार',
        description: 'Complete PM Surya Ghar subsidy application assistance. Srishti Solar has helped 41+ families claim ₹31,98,000 in subsidies. We handle all 14 documents, DISCOM registration, net metering.',
        provider: { '@type': 'LocalBusiness', '@id': `${SITE_URL}/#business` },
        areaServed: { '@type': 'State', name: 'Bihar' },
        offers: {
          '@type': 'AggregateOffer',
          priceCurrency: 'INR',
          lowPrice: '30000',
          highPrice: '78000',
          description: '1kW: ₹30,000 | 2kW: ₹60,000 | 3kW+: ₹78,000 direct to bank',
        },
      },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home',      item: SITE_URL  },
    { '@type': 'ListItem', position: 2, name: 'Solutions', item: PAGE_URL  },
  ],
}

export default function SolutionsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(solutionsSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <SolutionsContent />
    </>
  )
}