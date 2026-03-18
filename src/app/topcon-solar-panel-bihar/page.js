import TopconHero    from './TopconHero'
import TechnologySpecs from '../solutions/components/TechnologySpecs'
import { SubsidyCTA } from '@/app/subsidies/comp/Subsidysections'

const SITE_URL = 'https://srishtisolarpower.com'
const PAGE_URL = `${SITE_URL}/topcon-solar-panel-bihar`

export const metadata = {
  title: 'Topcon Solar Panel Bihar | N-Type 16BB 18BB Solar Panel | Srishti Solar Power',
  description: 'Bihar में best quality Topcon N-Type solar panel installation। 16BB/18BB technology, IEC & UL certified। TOPcon Bifacial, HJT, PERC panels available। Free site visit — Patna, Gaya, Muzaffarpur, Bhagalpur।',
  keywords: [
    'Topcon solar panel Bihar',
    'N-Type solar panel Bihar',
    'best solar panel Bihar',
    'TOPcon bifacial panel Bihar',
    'solar panel price Bihar',
    '16BB 18BB solar panel Bihar',
    'HJT solar panel Bihar',
    'PERC solar panel Bihar',
    'IEC certified solar panel Bihar',
    'solar panel installation Patna',
    'टॉपकॉन सोलर पैनल बिहार',
    'बेस्ट सोलर पैनल बिहार',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: 'website',
    title: 'Topcon N-Type Solar Panel Bihar | 16BB/18BB Technology | Srishti Solar Power',
    description: 'Bihar में premium Topcon N-Type solar panels। TOPcon Bifacial, HJT, PERC — IEC & UL certified। Free site visit।',
    url: PAGE_URL,
    siteName: 'Srishti Solar Power',
    locale: 'hi_IN',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Topcon Solar Panel Bihar — Srishti Solar Power' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Topcon Solar Panel Bihar | N-Type 16BB 18BB',
    description: 'Premium Topcon N-Type solar panels in Bihar. IEC & UL certified. Free site visit.',
    images: ['/og-image.jpg'],
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  '@id': `${PAGE_URL}/#product`,
  name: 'TOPcon N-Type Solar Panel Bihar',
  alternateName: ['Topcon Bifacial Solar Panel', 'N-Type 16BB Solar Panel Bihar', 'टॉपकॉन सोलर पैनल'],
  description: 'Premium TOPcon Bifacial N-Type solar panels with 16BB/18BB technology. IEC 61215, IEC 61730, UL 61730, CSA 61730 certified. Higher output, better shading tolerance, excellent PID resistance.',
  brand: { '@type': 'Brand', name: 'Srishti Solar Power' },
  seller: { '@type': 'LocalBusiness', '@id': `${SITE_URL}/#business` },
  offers: {
    '@type': 'Offer',
    priceCurrency: 'INR',
    availability: 'https://schema.org/InStock',
    areaServed: { '@type': 'State', name: 'Bihar' },
    description: 'TOPcon solar panel installation with free site visit across Bihar.',
  },
  additionalProperty: [
    { '@type': 'PropertyValue', name: 'Technology',    value: 'TOPcon, Glass to Glass'           },
    { '@type': 'PropertyValue', name: 'Cell Type',     value: 'Bifacial MBB with Circular Ribbon'},
    { '@type': 'PropertyValue', name: 'Certifications',value: 'IEC 61215, IEC 61730, UL 61730, CSA 61730' },
    { '@type': 'PropertyValue', name: 'Bus Bar',       value: '16BB / 18BB'                      },
    { '@type': 'PropertyValue', name: 'Cell Size',     value: '182MM / 210MM'                    },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Topcon solar panel क्या होता है?',
      acceptedAnswer: { '@type': 'Answer', text: 'TOPcon (Tunnel Oxide Passivated Contact) एक advanced N-Type solar cell technology है। यह conventional PERC से ज़्यादा efficient है — higher output power, better shading tolerance, और excellent PID resistance के साथ। Srishti Solar Bihar में TOPcon Bifacial panels install करती है।' },
    },
    {
      '@type': 'Question',
      name: 'N-Type और P-Type solar panel में क्या अंतर है?',
      acceptedAnswer: { '@type': 'Answer', text: 'N-Type panels में higher efficiency, better temperature coefficient, और longer lifespan होता है। Bihar की गर्मी में N-Type panels P-Type से बेहतर perform करते हैं। Srishti Solar सिर्फ N-Type Topcon panels install करती है।' },
    },
    {
      '@type': 'Question',
      name: '16BB और 18BB का क्या मतलब है?',
      acceptedAnswer: { '@type': 'Answer', text: 'BB का मतलब Bus Bar है — solar cell में electrical current collect करने वाली पतली धारियां। ज़्यादा Bus Bar = कम resistance = ज़्यादा बिजली उत्पादन। 16BB/18BB panels, 5BB panels से 10-15% ज़्यादा efficient होते हैं।' },
    },
    {
      '@type': 'Question',
      name: 'Bihar में Topcon panel की कीमत क्या है?',
      acceptedAnswer: { '@type': 'Answer', text: 'Bihar में 1kW Topcon system ₹65,000 से शुरू होता है। PM Surya Ghar subsidy के बाद 1kW पर ₹35,000, 2kW पर ₹70,000 और 3kW पर ₹1,11,000 में लग जाता है। Free site visit के लिए call करें: 99310 13345।' },
    },
    {
      '@type': 'Question',
      name: 'IEC certified solar panel क्यों ज़रूरी है?',
      acceptedAnswer: { '@type': 'Answer', text: 'PM Surya Ghar subsidy सिर्फ MNRE approved, IEC certified panels पर मिलती है। Srishti Solar सिर्फ IEC 61215, IEC 61730, UL 61730 certified panels install करती है — subsidy guarantee के साथ।' },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home',                    item: SITE_URL },
    { '@type': 'ListItem', position: 2, name: 'Solutions',               item: `${SITE_URL}/solutions` },
    { '@type': 'ListItem', position: 3, name: 'Topcon Solar Panel Bihar', item: PAGE_URL },
  ],
}

export default function TopconSolarPanelPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <TopconHero />
      <TechnologySpecs />
      <SubsidyCTA />
    </>
  )
}