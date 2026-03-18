import ZeroBillHero     from './ZeroBillHero'
import ZeroBillProof from '../subsidies/comp/ZeroBillProof'
import SubsidyCalculator from '../subsidies/comp/Subsidycalculator'
import { SubsidyCTA } from '../subsidies/comp/Subsidysections'

const SITE_URL = 'https://srishtisolarpower.com'
const PAGE_URL = `${SITE_URL}/zero-electricity-bill`

export const metadata = {
  title: 'Zero Electricity Bill with Solar | बिजली बिल ज़ीरो करें',
  description: 'Solar panel लगाएँ और बिजली बिल हमेशा के लिए ज़ीरो करें। Real proof — Smt. Sita Devi, Patna का SBPDCL Zero Bill देखें। PM Surya Ghar subsidy ₹78,000 + free site visit across Bihar।',
  keywords: [
    'zero electricity bill solar Bihar',
    'solar se zero bill Bihar',
    'बिजली बिल ज़ीरो सोलर',
    'zero bijli bill Bihar',
    'solar panel zero bill Patna',
    'free electricity solar Bihar',
    'solar bill zero kaise kare',
    'SBPDCL zero bill solar',
    'मुफ्त बिजली सोलर बिहार',
    '300 units free solar Bihar',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: 'website',
    title: 'Zero Electricity Bill with Solar Bihar — Real Proof | Srishti Solar Power',
    description: 'Real SBPDCL Zero Bill proof from Patna. Solar panel लगाएँ — बिजली बिल ज़ीरो करें। ₹78,000 subsidy + free site visit।',
    url: PAGE_URL,
    siteName: 'Srishti Solar Power',
    locale: 'hi_IN',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Zero Electricity Bill Solar Bihar — Srishti Solar Power' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zero Electricity Bill with Solar | Bihar',
    description: 'Real SBPDCL Zero Bill proof. Solar se bijli bill zero karo. Free site visit Bihar.',
    images: ['/og-image.jpg'],
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${PAGE_URL}/#service`,
  name: 'Zero Electricity Bill Solar Installation Bihar',
  alternateName: 'बिजली बिल ज़ीरो सोलर बिहार',
  description: 'Rooftop solar installation in Bihar that reduces electricity bill to zero. Real SBPDCL verified proof from Patna. PM Surya Ghar subsidy up to ₹78,000.',
  provider: { '@type': 'LocalBusiness', '@id': `${SITE_URL}/#business` },
  areaServed: { '@type': 'State', name: 'Bihar' },
  offers: {
    '@type': 'Offer',
    priceCurrency: 'INR',
    description: 'Solar installation with PM Surya Ghar subsidy up to ₹78,000. Result: zero monthly electricity bill.',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Solar से बिजली बिल कैसे ज़ीरो होता है?',
      acceptedAnswer: { '@type': 'Answer', text: 'Rooftop solar panel दिन में बिजली बनाता है। Net metering से जो बिजली नहीं लगती वो DISCOM grid में जाती है और आपके account में credit होती है। महीने के अंत में credit और उपयोग बराबर होने पर बिल ₹0 आता है।' },
    },
    {
      '@type': 'Question',
      name: 'Bihar में Zero Bill के लिए कितने kW solar चाहिए?',
      acceptedAnswer: { '@type': 'Answer', text: 'Average Bihar household (500–700 units/month) के लिए 3kW system पर्याप्त है। इस पर PM Surya Ghar से ₹78,000 सब्सिडी मिलती है और net meter से बिल ज़ीरो हो जाता है।' },
    },
    {
      '@type': 'Question',
      name: 'क्या Zero Bill का कोई real proof है?',
      acceptedAnswer: { '@type': 'Answer', text: 'हाँ — Smt. Sita Devi, Gardanibagh Patna का SBPDCL verified February 2026 का ₹0 bill। 292 units solar balance के साथ कुल देय राशि ₹0.00।' },
    },
    {
      '@type': 'Question',
      name: 'SBPDCL net metering क्या होता है?',
      acceptedAnswer: { '@type': 'Answer', text: 'Net metering एक system है जिसमें आपका solar meter दोनों तरफ measure करता है — बिजली जो आपने ली और जो आपने grid में दी। अंतर के आधार पर बिल बनता है। Srishti Solar SBPDCL net metering approval पूरी तरह handle करती है।' },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home',                  item: SITE_URL },
    { '@type': 'ListItem', position: 2, name: 'Zero Electricity Bill', item: PAGE_URL },
  ],
}

export default function ZeroElectricityBillPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ZeroBillHero />
      <ZeroBillProof />
      <SubsidyCalculator />
      <SubsidyCTA />
    </>
  )
}