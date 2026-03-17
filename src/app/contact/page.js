import ContactForm from './Contact'

const SITE_URL = 'https://srishtisolarpower.com'
const PAGE_URL = `${SITE_URL}/contact`

export const metadata = {
  title: 'Contact | Free Solar Site Visit Bihar | 99310 13345',
  description: 'Free solar site visit book करें — Patna, Gaya, Muzaffarpur, Bhagalpur, Darbhanga और Bihar के 9 जिलों में। Call/WhatsApp: 99310 13345 या 99310 67798। Office: East Patel Nagar, Patna 800023।',
  keywords: [
    'contact Srishti Solar Power',
    'solar installation Patna contact',
    'solar company Bihar contact',
    'solar panel Patna contact',
    'rooftop solar Bihar contact',
    'free solar site visit Bihar',
    'solar consultation Patna',
    'Srishti Solar phone number',
    '99310 13345 solar Bihar',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: 'website',
    title: 'Contact Srishti Solar Power — Free Solar Site Visit Bihar',
    description: 'Free solar site visit book करें। Call/WhatsApp: 99310 13345। Bihar के 9 जिलों में service।',
    url: PAGE_URL,
    siteName: 'Srishti Solar Power',
    locale: 'hi_IN',
    images: [{
      url: '/og-image.jpg',
      width: 1200,
      height: 630,
      alt: 'Contact Srishti Solar Power — Free Site Visit Bihar',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Srishti Solar Power | Free Solar Site Visit',
    description: 'Book a free solar site visit in Bihar. Call: 99310 13345.',
    images: ['/og-image.jpg'],
  },
}

const contactSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': `${SITE_URL}/#business`,
  name: 'Srishti Solar Power',
  url: SITE_URL,
  telephone: ['+91-99310-13345', '+91-99310-67798'],
  email: 'info@srishtisolarpower.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Road No-6, Corner, East Patel Nagar, Near Gandhi Murti',
    addressLocality: 'Patna',
    addressRegion: 'Bihar',
    postalCode: '800023',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 25.5941,
    longitude: 85.1376,
  },
  areaServed: [
    { '@type': 'State', name: 'Bihar'        },
    { '@type': 'City',  name: 'Patna'        },
    { '@type': 'City',  name: 'Gaya'         },
    { '@type': 'City',  name: 'Muzaffarpur'  },
    { '@type': 'City',  name: 'Bhagalpur'    },
    { '@type': 'City',  name: 'Darbhanga'    },
    { '@type': 'City',  name: 'Bhojpur'      },
    { '@type': 'City',  name: 'Saran'        },
    { '@type': 'City',  name: 'Nalanda'      },
  ],
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: '+91-99310-13345',
      contactType: 'customer service',
      areaServed: 'IN',
      availableLanguage: ['Hindi', 'English'],
    },
    {
      '@type': 'ContactPoint',
      telephone: '+91-99310-67798',
      contactType: 'sales',
      areaServed: 'IN',
      availableLanguage: ['Hindi', 'English'],
    },
  ],
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],
      opens: '09:00',
      closes: '19:00',
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home',    item: SITE_URL  },
    { '@type': 'ListItem', position: 2, name: 'Contact', item: PAGE_URL  },
  ],
}

export default function ContactPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ContactForm />
    </>
  )
}