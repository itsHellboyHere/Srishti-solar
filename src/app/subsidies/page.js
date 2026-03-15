import SubsidyContent from './comp/SubsidyContent'

const URL = "https://srishtisolarpower.com/subsidies"

export const metadata = {
  title: 'PM Surya Ghar Subsidy Bihar | ₹78,000 तक Solar Subsidy | Srishti Solar Power',
  description:
    'PM Surya Ghar Muft Bijli Yojana Bihar — 1kW पर ₹30,000, 2kW पर ₹60,000 और 3kW+ पर ₹78,000 subsidy। Srishti Solar Power ने अब तक ₹31,98,000 subsidy दिलाई। Free site visit और complete solar installation service।',
  keywords: [
    'PM Surya Ghar subsidy Bihar',
    'solar subsidy Bihar',
    'solar panel subsidy Bihar',
    'PM Surya Ghar Muft Bijli Yojana Bihar',
    'solar subsidy Patna',
    'rooftop solar subsidy Bihar',
  ],
  alternates: { canonical: URL },
  openGraph: {
    title: 'PM Surya Ghar Subsidy Bihar — ₹78,000 तक सरकारी सहायता',
    description:
      '₹30K / ₹60K / ₹78K subsidy slabs। Srishti Solar ने ₹31,98,000 subsidy assist की। Complete solar process handled.',
    url: URL,
    siteName: 'Srishti Solar Power',
    locale: 'hi_IN',
    type: 'article',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'PM Surya Ghar Solar Subsidy Bihar'
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PM Surya Ghar Subsidy Bihar — ₹78,000 तक',
    description: 'Solar subsidy ₹30K, ₹60K, ₹78K slabs. Complete assistance by Srishti Solar.',
    images: ['/og-image.jpg'],
  },
}

export default function SubsidiesPage() {
  return (
    <>
      {/* Structured Data for Google */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "GovernmentService",
            "name": "PM Surya Ghar Muft Bijli Yojana Subsidy",
            "serviceType": "Solar Panel Subsidy",
            "provider": {
              "@type": "Organization",
              "name": "Government of India"
            },
            "areaServed": {
              "@type": "State",
              "name": "Bihar"
            },
            "description":
              "Solar subsidy under PM Surya Ghar Muft Bijli Yojana offering ₹30,000 for 1kW, ₹60,000 for 2kW and ₹78,000 for 3kW+ rooftop solar systems.",
            "offers": {
              "@type": "Offer",
              "priceCurrency": "INR",
              "description": "Subsidy up to ₹78,000 for rooftop solar installation."
            }
          })
        }}
      />

      <SubsidyContent />
    </>
  )
}