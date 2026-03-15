import SolutionsContent from "./components/SolutionsContent"

const URL = "https://srishtisolarpower.com/solutions"

export const metadata = {
  title: 'Solar Solutions Bihar | Residential, Commercial & Off-Grid Solar | Srishti Solar',
  description:
    'Bihar के लिए complete solar solutions — residential rooftop solar (1–3kW), commercial solar systems (5–10kW), और off-grid battery solar। PM Surya Ghar subsidy ₹78,000 तक। Free site visit across Bihar.',
  keywords: [
    'solar solutions Bihar',
    'rooftop solar Bihar',
    'solar panel installation Bihar',
    'residential solar Bihar',
    'commercial solar Bihar',
    'solar installation Patna',
    'off grid solar Bihar'
  ],
  alternates: { canonical: URL },
  openGraph: {
    title: 'Solar Solutions — Residential, Commercial & Off-Grid | Bihar',
    description:
      'Residential rooftop solar (1–3kW), commercial solar (5–10kW), off-grid solar systems. Subsidy up to ₹78,000.',
    url: URL,
    siteName: 'Srishti Solar Power',
    locale: 'hi_IN',
    type: 'article',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Solar Solutions in Bihar – Residential and Commercial'
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Solar Solutions Bihar | Srishti Solar Power',
    description:
      'Residential, commercial and off-grid solar installation across Bihar.',
    images: ['/og-image.jpg'],
  },
}

export default function SolutionsPage() {
  return (
    <>
      {/* Structured data for Google */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Solar Installation Services in Bihar",
            "provider": {
              "@type": "Organization",
              "name": "Srishti Solar Power",
              "url": "https://srishtisolarpower.com"
            },
            "areaServed": {
              "@type": "State",
              "name": "Bihar"
            },
            "serviceType": [
              "Residential Rooftop Solar Installation",
              "Commercial Solar Installation",
              "Off Grid Solar System Installation"
            ],
            "offers": {
              "@type": "Offer",
              "priceCurrency": "INR",
              "description": "Solar installation with PM Surya Ghar subsidy up to ₹78,000."
            }
          })
        }}
      />

      <SolutionsContent />
    </>
  )
}