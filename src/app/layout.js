import './globals.css'
import { Figtree, Lexend } from 'next/font/google'
import Navbar from '@/components/Navbar/Navbar'
import Footer from '@/components/Footer/Footer'
import LeadModal from '@/components/LeadModal/LeadModal'
import WhatsAppButton from '@/components/Whatsappbutton'

const figtree = Figtree({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-heading',
  display: 'swap',
})
const lexend = Lexend({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-body',
  display: 'swap',
})

const SITE_URL  = 'https://srishtisolarpower.com'
const SITE_NAME = 'Srishti Solar Power'

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:  'Srishti Solar Power — Bihar की #1 Solar Company',
    template: '%s | Srishti Solar Power',
  },
  icons: { icon: '/favicon.ico' },
  description: 'Bihar की #1 Solar Company — Ranked #1 at Bihar Solar Expo 2026. Residential & commercial rooftop solar installation. PM Surya Ghar subsidy up to ₹78,000. Free site visit in Patna, Gaya, Muzaffarpur & across Bihar.',
  keywords: [
    'Srishti Solar Power',
    'srishti solar',
    'shrishti solar',
    'shrishti solar power',
    'srishti solar power patna',
    'solar panel Bihar',
    'solar company Patna',
    'rooftop solar Bihar',
    'solar installation Patna',
    'PM Surya Ghar Bihar',
    'solar subsidy Bihar',
    'solar panel installation Bihar',
    'solar energy Bihar',
    'best solar company Bihar',
    'solar panel price Bihar',
    '1kW 2kW 3kW solar Bihar',
    'MNRE solar Bihar',
    'SBPDCL solar vendor',
    'NBPDCL solar vendor',
    'घरेलू सोलर पैनल बिहार',
    'सोलर सब्सिडी बिहार',
    'सोलर कंपनी पटना',
    'PM सूर्य घर योजना बिहार',
  ],
  authors:   [{ name: SITE_NAME, url: SITE_URL }],
  creator:   SITE_NAME,
  publisher: SITE_NAME,
  alternates: { canonical: '/' },
  robots: {
    index: true, follow: true,
    googleBot: {
      index: true, follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'hi_IN',
    alternateLocale: 'en_IN',
    url: SITE_URL,
    siteName: SITE_NAME,
    title: 'Srishti Solar Power — Bihar की #1 Solar Company',
    description: 'Ranked #1 at Bihar Solar Expo 2026. PM Surya Ghar subsidy up to ₹78,000. Free site visit. 41+ installations across 9 districts of Bihar.',
    images: [{
      url: '/og-image.jpg',
      width: 1200,
      height: 630,
      alt: 'Srishti Solar Power — Solar Panel Installation in Bihar',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Srishti Solar Power — Bihar की #1 Solar Company',
    description: 'PM Surya Ghar subsidy ₹78,000. Free site visit. 41+ installations across Bihar.',
    images: ['/og-image.jpg'],
  },
  manifest: '/manifest.json',
  applicationName: SITE_NAME,
  category: 'Solar Energy',
}

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': `${SITE_URL}/#business`,
  name: 'Srishti Solar Power',
  alternateName: ['श्रृष्टि सोलर पावर', 'Srishti Solar'],
  description: 'Bihar #1 Solar Company — Ranked #1 at Bihar Solar Expo 2026. PM Surya Ghar subsidy assistance up to ₹78,000. MNRE certified, SBPDCL/NBPDCL registered solar installer.',
  url: SITE_URL,
  telephone: '+91-99310-13345',
  email: 'info@srishtisolarpower.com',
  foundingDate: '2024',
  founder: { '@type': 'Person', name: 'Dayamani', jobTitle: 'Founder & Owner' },
  image: `${SITE_URL}/og-image.jpg`,
  logo: `${SITE_URL}/logo.png`,
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
    { '@type': 'State', name: 'Bihar'       },
    { '@type': 'City',  name: 'Patna'       },
    { '@type': 'City',  name: 'Gaya'        },
    { '@type': 'City',  name: 'Muzaffarpur' },
    { '@type': 'City',  name: 'Bhagalpur'   },
    { '@type': 'City',  name: 'Darbhanga'   },
    { '@type': 'City',  name: 'Nalanda'     },
    { '@type': 'City',  name: 'Begusarai'   },
  ],
  serviceType: [
    'Rooftop Solar Installation',
    'Commercial Solar Installation',
    'PM Surya Ghar Subsidy Assistance',
    'Off-Grid Solar Installation',
    'Net Metering',
  ],
  priceRange: '₹₹',
  award: [
    '#1 Technical Efficiency — Bihar Solar Expo 2026',
    'Honored at Solar Mela by BSPHCL Chairman',
  ],
  sameAs: [
    'https://www.instagram.com/srishtisolarpower',
    'https://www.facebook.com/srishtisolarpower',
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Solar Installation Services Bihar',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: '1kW Residential Solar Installation Bihar', description: 'PM Surya Ghar subsidy ₹30,000. Saves ₹1,500/month.' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: '2kW Residential Solar Installation Bihar', description: 'PM Surya Ghar subsidy ₹60,000. Saves ₹3,000/month.' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: '3kW Residential Solar Installation Bihar', description: 'PM Surya Ghar maximum subsidy ₹78,000. Near-zero electricity bill.' } },
    ],
  },
  openingHoursSpecification: [
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'], opens: '09:00', closes: '19:00' },
  ],
}

// ← faqSchema REMOVED from here — now lives only in app/page.js
// This prevents "Duplicate FAQPage" errors on all other pages

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE_URL}/#website`,
  url: SITE_URL,
  name: SITE_NAME,
  description: 'Bihar की #1 Solar Company — PM Surya Ghar subsidy assistance, rooftop solar installation across Bihar.',
  potentialAction: {
    '@type': 'SearchAction',
    target: { '@type': 'EntryPoint', urlTemplate: `${SITE_URL}/?s={search_term_string}` },
    'query-input': 'required name=search_term_string',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="hi" dir="ltr" className={`${figtree.variable} ${lexend.variable}`}>
      <head>
        <meta name="theme-color"             content="#F4A300" />
        <meta name="msapplication-TileColor" content="#0A0602" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      </head>
      <body>
        <Navbar />
        <LeadModal />
        <WhatsAppButton />
        {children}
        <Footer />
      </body>
    </html>
  )
}