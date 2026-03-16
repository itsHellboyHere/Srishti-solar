import AboutContent from './components/Aboutcontent'

const SITE_URL = 'https://srishtisolarpower.com'
const PAGE_URL = `${SITE_URL}/about`

export const metadata = {
  title: 'About Srishti Solar Power | Bihar की #1 Solar Company | Founded 2024',
  description: 'Srishti Solar Power — Founded 2024 by Dayamani। Bihar Solar Expo 2026 में #1 Technical Efficiency award by Energy Secretary of Bihar। 29 team members, 41+ installations, 9 districts, ₹31,98,000 subsidy assisted। IIT BHU engineer supervised installations।',
  keywords: [
    'Srishti Solar Power',
    'about Srishti Solar Power',
    'solar company Bihar',
    'solar company Patna',
    'Dayamani solar Bihar',
    'Bihar Solar Expo 2026',
    'solar installation Bihar',
    'rooftop solar Bihar',
    'IIT BHU solar engineer Bihar',
    'MNRE certified solar company Bihar',
    'श्रृष्टि सोलर पावर',
    'बिहार सोलर कंपनी',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: 'website',
    title: 'About Srishti Solar Power — Bihar की #1 Solar Company | Founded 2024',
    description: 'Founded 2024 by Dayamani। #1 Technical Efficiency — Bihar Solar Expo 2026। 41+ installations, 9 districts, ₹31,98,000 subsidy assisted। Team of 29 professionals.',
    url: PAGE_URL,
    siteName: 'Srishti Solar Power',
    locale: 'hi_IN',
    images: [{
      url: '/og-image.jpg',
      width: 1200,
      height: 630,
      alt: 'Srishti Solar Power — Bihar Solar Expo 2026 #1 Ranked Solar Company',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Srishti Solar Power — Bihar Solar Experts',
    description: '#1 at Bihar Solar Expo 2026. 41+ installations. Founded by Dayamani. IIT BHU engineer supervised.',
    images: ['/og-image.jpg'],
  },
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': ['Organization', 'LocalBusiness'],
  '@id': `${SITE_URL}/#business`,
  name: 'Srishti Solar Power',
  alternateName: ['श्रृष्टि सोलर पावर', 'Srishti Solar'],
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  image: `${SITE_URL}/og-image.jpg`,
  foundingDate: '2024',
  telephone: '+91-99310-13345',
  email: 'info@srishtisolarpower.com',
  founder: {
    '@type': 'Person',
    '@id': `${SITE_URL}/#founder`,
    name: 'Dayamani',
    jobTitle: 'Founder & Owner',
    worksFor: { '@type': 'Organization', '@id': `${SITE_URL}/#business` },
  },
  numberOfEmployees: { '@type': 'QuantitativeValue', value: 29 },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Patna',
    addressRegion: 'Bihar',
    addressCountry: 'IN',
  },
  areaServed: [
    { '@type': 'State', name: 'Bihar' },
    { '@type': 'City',  name: 'Patna' },
    { '@type': 'City',  name: 'Gaya'  },
    { '@type': 'City',  name: 'Muzaffarpur' },
    { '@type': 'City',  name: 'Bhojpur' },
    { '@type': 'City',  name: 'Saran'  },
  ],
  award: [
    '#1 Technical Efficiency — Bihar Solar Expo 2026 (by Energy Secretary of Bihar)',
    'Highly Honored at Solar Mela — Bihar State Power Holding Company (BSPHCL) 2026',
    'Featured in Dainik Jagran — February 26, 2026',
  ],
  description: 'Bihar की #1 Solar Company। Founded 2024 by Dayamani। Ranked #1 in technical efficiency at Bihar Solar Expo 2026 by Energy Secretary of Bihar। 41+ rooftop solar installations across 9 districts। ₹31,98,000 PM Surya Ghar subsidy assisted।',
}

const teamSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Srishti Solar Power Team',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      item: {
        '@type': 'Person',
        '@id': `${SITE_URL}/#founder`,
        name: 'Dayamani',
        jobTitle: 'Founder & Owner',
        description: 'Visionary founder with 25+ years of experience. MA, MBA, LLB. Personally collects monthly feedback from every customer.',
        worksFor: { '@type': 'Organization', '@id': `${SITE_URL}/#business` },
        image: `${SITE_URL}/team/dayamani1.jpg`,
      },
    },
    {
      '@type': 'ListItem',
      position: 2,
      item: {
        '@type': 'Person',
        name: 'Engr. Yash',
        jobTitle: 'Technical Head',
        description: 'IIT BHU B.Tech graduate. Leads all solar installations. Ensures every system meets MNRE specifications.',
        worksFor: { '@type': 'Organization', '@id': `${SITE_URL}/#business` },
        alumniOf: { '@type': 'CollegeOrUniversity', name: 'IIT BHU (Indian Institute of Technology, Banaras Hindu University)' },
      },
    },
    {
      '@type': 'ListItem',
      position: 3,
      item: {
        '@type': 'Person',
        name: 'Bijendra Kr Nirala',
        jobTitle: 'Technical Adviser',
        description: '30 years of experience in electrical and solar energy systems across Bihar.',
        worksFor: { '@type': 'Organization', '@id': `${SITE_URL}/#business` },
      },
    },
    {
      '@type': 'ListItem',
      position: 4,
      item: {
        '@type': 'Person',
        name: 'Dr. Srishti',
        jobTitle: 'HR Head',
        description: 'MBBS. Leads team welfare and human resources at Srishti Solar Power.',
        worksFor: { '@type': 'Organization', '@id': `${SITE_URL}/#business` },
      },
    },
    {
      '@type': 'ListItem',
      position: 5,
      item: {
        '@type': 'Person',
        name: 'Dr. CP Singh',
        jobTitle: 'Market Head',
        description: '10+ years experience in market strategy and partnerships. Leads brand presence and client relations.',
        worksFor: { '@type': 'Organization', '@id': `${SITE_URL}/#business` },
      },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home',  item: SITE_URL  },
    { '@type': 'ListItem', position: 2, name: 'About', item: PAGE_URL  },
  ],
}

export default function AboutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(teamSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <AboutContent />
    </>
  )
}