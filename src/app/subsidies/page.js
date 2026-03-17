import SubsidyContent from './comp/SubsidyContent'

const SITE_URL = 'https://srishtisolarpower.com'
const PAGE_URL = `${SITE_URL}/subsidies`

export const metadata = {
  title: 'PM Surya Ghar Subsidy Bihar | ₹78,000 Solar Subsidy | Srishti Solar Power',
  description: 'PM Surya Ghar Muft Bijli Yojana Bihar — 1kW पर ₹30,000, 2kW पर ₹60,000, 3kW+ पर ₹78,000 subsidy। Srishti Solar Power ने 41+ families को ₹31,98,000 subsidy दिलाई। Free site visit। Patna, Gaya, Muzaffarpur में उपलब्ध।',
  keywords: [
    'PM Surya Ghar subsidy Bihar',
    'solar subsidy Bihar',
    'solar panel subsidy Bihar 2025',
    'PM Surya Ghar Muft Bijli Yojana Bihar',
    'solar subsidy Patna',
    'rooftop solar subsidy Bihar',
    'PM सूर्य घर योजना बिहार',
    'सोलर सब्सिडी बिहार',
    '78000 solar subsidy Bihar',
    'solar subsidy apply Bihar',
    'SBPDCL solar subsidy',
    'MNRE solar subsidy Bihar',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: 'website',
    title: 'PM Surya Ghar Subsidy Bihar — ₹78,000 तक सरकारी सहायता',
    description: '₹30K / ₹60K / ₹78K subsidy slabs। Srishti Solar ने 41+ families को ₹31,98,000 subsidy दिलाई। Complete solar process handled — free site visit।',
    url: PAGE_URL,
    siteName: 'Srishti Solar Power',
    locale: 'hi_IN',
    images: [{
      url: '/og-image.jpg',
      width: 1200,
      height: 630,
      alt: 'PM Surya Ghar Solar Subsidy Bihar — Srishti Solar Power',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PM Surya Ghar Subsidy Bihar — ₹78,000 तक',
    description: 'Solar subsidy ₹30K, ₹60K, ₹78K slabs. Complete assistance by Srishti Solar Power.',
    images: ['/og-image.jpg'],
  },
}

const subsidyServiceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${PAGE_URL}/#service`,
  name: 'PM Surya Ghar Subsidy Assistance Bihar',
  alternateName: 'PM सूर्य घर सब्सिडी सहायता',
  serviceType: 'Solar Subsidy Application Assistance',
  description: 'Srishti Solar Power assists Bihar households in claiming PM Surya Ghar Muft Bijli Yojana subsidy — ₹30,000 for 1kW, ₹60,000 for 2kW, ₹78,000 for 3kW+. End-to-end handling of all 14 documents, SBPDCL application, net metering and subsidy tracking.',
  provider: {
    '@type': 'LocalBusiness',
    '@id': `${SITE_URL}/#business`,
    name: 'Srishti Solar Power',
    telephone: '+91-99310-13345',
    url: SITE_URL,
  },
  areaServed: [
    { '@type': 'State', name: 'Bihar' },
    { '@type': 'City',  name: 'Patna' },
    { '@type': 'City',  name: 'Gaya'  },
    { '@type': 'City',  name: 'Muzaffarpur' },
  ],
  offers: {
    '@type': 'AggregateOffer',
    priceCurrency: 'INR',
    lowPrice: '30000',
    highPrice: '78000',
    offerCount: '3',
    description: '1kW: ₹30,000 subsidy | 2kW: ₹60,000 subsidy | 3kW+: ₹78,000 subsidy',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'PM Surya Ghar Subsidy Slabs',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: '1kW Solar System Bihar', description: 'Subsidy ₹30,000. System price ₹65,000. After subsidy ₹35,000. Monthly saving ₹1,000.' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: '2kW Solar System Bihar', description: 'Subsidy ₹60,000. System price ₹1,30,000. After subsidy ₹70,000. Monthly saving ₹1,800.' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: '3kW Solar System Bihar', description: 'Maximum subsidy ₹78,000. System price ₹1,89,000. After subsidy ₹1,11,000. Monthly saving ₹2,500.' } },
    ],
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'PM Surya Ghar सब्सिडी क्या है?',
      acceptedAnswer: { '@type': 'Answer', text: 'PM Surya Ghar Muft Bijli Yojana भारत सरकार की योजना है (शुरुआत: 13 फरवरी 2024) जिसमें 1 करोड़ घरों पर रूफटॉप सोलर लगाने का लक्ष्य है। 1kW पर ₹30,000, 2kW पर ₹60,000 और 3kW+ पर ₹78,000 की सब्सिडी मिलती है। FY 2026–27 तक valid।' },
    },
    {
      '@type': 'Question',
      name: 'Bihar में solar subsidy के लिए कैसे apply करें?',
      acceptedAnswer: { '@type': 'Answer', text: 'Srishti Solar Power पूरी process handle करती है — SBPDCL registration, सभी 14 documents, pmsuryaghar.gov.in पर application, net metering और subsidy tracking। Call करें: 99310 13345।' },
    },
    {
      '@type': 'Question',
      name: 'सब्सिडी कितने दिन में आती है?',
      acceptedAnswer: { '@type': 'Answer', text: 'Net meter installation और DISCOM commissioning के बाद 30–60 दिन में सब्सिडी सीधे बैंक खाते में आती है।' },
    },
    {
      '@type': 'Question',
      name: 'क्या किराए के मकान पर सब्सिडी मिलती है?',
      acceptedAnswer: { '@type': 'Answer', text: 'हाँ — अगर बिजली कनेक्शन आपके नाम पर है तो किराएदार भी PM Surya Ghar subsidy के लिए आवेदन कर सकते हैं।' },
    },
    {
      '@type': 'Question',
      name: '3kW से बड़े सिस्टम पर कितनी subsidy मिलती है?',
      acceptedAnswer: { '@type': 'Answer', text: 'Subsidy 3kW पर cap है — 4kW या उससे बड़े सिस्टम पर अधिकतम ₹78,000 ही मिलेगी।' },
    },
    {
      '@type': 'Question',
      name: 'Solar loan की सुविधा है?',
      acceptedAnswer: { '@type': 'Answer', text: 'हाँ। PM Surya Ghar योजना के तहत SBI सहित राष्ट्रीयकृत बैंक collateral-free solar loan देते हैं JanSamarth Portal के ज़रिए।' },
    },
    {
      '@type': 'Question',
      name: 'Patna में solar installation में कितना समय लगता है?',
      acceptedAnswer: { '@type': 'Answer', text: 'Patna में DISCOM approval के बाद 72 घंटे में installation। पूरी process (application to subsidy) में 60–90 दिन।' },
    },
    {
      '@type': 'Question',
      name: 'बिजली बिल कितना कम होगा?',
      acceptedAnswer: { '@type': 'Answer', text: '3kW system से सरकारी अनुमान के अनुसार ₹15,000 प्रति वर्ष की बचत — यानी लगभग ₹1,250 प्रति महीना।' },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home',      item: SITE_URL       },
    { '@type': 'ListItem', position: 2, name: 'Subsidies', item: PAGE_URL       },
  ],
}

export default function SubsidiesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(subsidyServiceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <SubsidyContent />
    </>
  )
}