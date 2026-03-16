import ProjectsGallery from './ProjectsGallery'

const SITE_URL = 'https://srishtisolarpower.com'
const PAGE_URL = `${SITE_URL}/projects`

export const metadata = {
  title: 'Solar Installation Projects Bihar | 41+ Installs | Srishti Solar Power',
  description: 'Srishti Solar Power के 41+ real rooftop solar installations देखें — Patna, Gaya, Muzaffarpur, Bhagalpur, Darbhanga और Bihar के 9 जिलों में। 1kW से 10kW तक residential और commercial solar projects। MNRE certified installations।',
  keywords: [
    'solar projects Bihar',
    'solar installation Patna',
    'rooftop solar projects Bihar',
    'solar panel installation Bihar',
    'solar projects Patna',
    'Srishti Solar Power projects',
    'solar installation photos Bihar',
    'residential solar Bihar',
    'commercial solar Bihar',
    'solar panel Bihar photos',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: 'website',
    title: 'Solar Projects — 41+ Installations Across Bihar | Srishti Solar Power',
    description: '41+ real solar installations across Bihar. Residential 1–3kW और commercial 5–10kW solar projects। Patna, Gaya, Muzaffarpur, Bhagalpur, Darbhanga में completed installations।',
    url: PAGE_URL,
    siteName: 'Srishti Solar Power',
    locale: 'hi_IN',
    images: [{
      url: '/og-image.jpg',
      width: 1200,
      height: 630,
      alt: 'Rooftop Solar Panel Installation Projects in Bihar — Srishti Solar Power',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Solar Projects Gallery Bihar | 41+ Installs | Srishti Solar Power',
    description: '41+ rooftop solar installations across Bihar. Residential and commercial solar projects by Srishti Solar Power.',
    images: ['/og-image.jpg'],
  },
}

const projectsSchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  '@id': `${PAGE_URL}/#page`,
  name: 'Solar Installation Projects in Bihar — Srishti Solar Power',
  description: 'Portfolio of 41+ rooftop solar installations completed by Srishti Solar Power across 9 districts of Bihar. Residential 1kW–3kW and commercial 5kW–10kW projects.',
  url: PAGE_URL,
  provider: {
    '@type': 'LocalBusiness',
    '@id': `${SITE_URL}/#business`,
    name: 'Srishti Solar Power',
    telephone: '+91-99310-13345',
    url: SITE_URL,
  },
  about: {
    '@type': 'Service',
    name: 'Rooftop Solar Installation Bihar',
    areaServed: { '@type': 'State', name: 'Bihar' },
  },
mainEntity: {
  '@type': 'ItemList',
  name: 'Solar Installation Projects Bihar',
  numberOfItems: 20,  // ← update to 20, matches your actual data
  itemListElement: [
    { '@type': 'ListItem', position: 1,  name: 'Residential Solar Installation — Ranipura, Patna',           description: 'Rooftop solar installation. Completed May 2025.' },
    { '@type': 'ListItem', position: 2,  name: 'Residential Solar Installation — Chitragupt Nagar, Patna',   description: 'Rooftop solar installation. Completed Sep 2025.' },
    { '@type': 'ListItem', position: 3,  name: 'Residential Solar Installation — Shivpuri Chitkohra, Patna', description: 'Rooftop solar installation. Completed Jul 2025.' },
    { '@type': 'ListItem', position: 4,  name: 'Commercial Solar Installation — Prabhunath Nagar, Dahiawan', description: 'Commercial rooftop solar. Completed May 2025.' },
    { '@type': 'ListItem', position: 5,  name: 'Agricultural Solar Installation — Rural Saran',              description: 'Farm solar installation. Completed Jun 2025.' },
    { '@type': 'ListItem', position: 6,  name: 'Commercial Solar Installation — Hakma, Saran',               description: 'Commercial solar project. Completed Apr 2025.' },
    { '@type': 'ListItem', position: 7,  name: 'Residential Solar Installation — Ara, Bhojpur',              description: 'Rooftop solar installation. Completed Jan 2025.' },
    { '@type': 'ListItem', position: 8,  name: 'Residential Solar Installation — Sonbarsa',                  description: 'Rooftop solar installation. Completed Mar 2025.' },
    { '@type': 'ListItem', position: 9,  name: 'Residential Solar Installation — Shastri Nagar, Gaya',       description: 'Rooftop solar installation. Completed Apr 2025.' },
    { '@type': 'ListItem', position: 10, name: 'Residential Solar Installation — Sri Krishna Puri, Patna',   description: 'Rooftop solar installation. Completed Jun 2025.' },
  ],
},
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home',     item: SITE_URL  },
    { '@type': 'ListItem', position: 2, name: 'Projects', item: PAGE_URL  },
  ],
}

export default function ProjectsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(projectsSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ProjectsGallery />
    </>
  )
}