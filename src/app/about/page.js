import AboutContent from "./components/Aboutcontent"

const URL = "https://srishtisolarpower.com/about"

export const metadata = {
  title: 'About Srishti Solar Power | Bihar की #1 Solar Company',
  description:
    'Srishti Solar Power — Founded in 2024 by Dayamani. Bihar Solar Expo 2026 में #1 Technical Efficiency award। 29 team members, 41+ solar installations, 9 districts served, ₹31,98,000 subsidy assisted.',
  keywords: [
    'Srishti Solar Power',
    'solar company Bihar',
    'solar company Patna',
    'about Srishti Solar Power',
    'solar installation Bihar',
    'rooftop solar Bihar',
  ],
  alternates: { canonical: URL },
  openGraph: {
    title: 'About Srishti Solar Power — Bihar की #1 Solar Company',
    description:
      'Founded 2024। #1 Technical Efficiency award at Bihar Solar Expo 2026। 41+ installations across Bihar.',
    url: URL,
    siteName: 'Srishti Solar Power',
    locale: 'hi_IN',
    type: 'article',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Srishti Solar Power Bihar Solar Installation'
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Srishti Solar Power — Bihar Solar Experts',
    description:
      '41+ solar installations across Bihar. Trusted rooftop solar company helping households save electricity.',
    images: ['/og-image.jpg'],
  },
}

export default function AboutPage() {
  return (
    <>
      {/* Organization structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Srishti Solar Power",
            "url": "https://srishtisolarpower.com",
            "logo": "https://srishtisolarpower.com/logo.png",
            "foundingDate": "2024",
            "founder": {
              "@type": "Person",
              "name": "Dayamani"
            },
            "numberOfEmployees": 29,
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Patna",
              "addressRegion": "Bihar",
              "addressCountry": "IN"
            },
            "areaServed": {
              "@type": "State",
              "name": "Bihar"
            },
            "award": [
              "#1 Technical Efficiency — Bihar Solar Expo 2026"
            ]
          })
        }}
      />

      <AboutContent />
    </>
  )
}