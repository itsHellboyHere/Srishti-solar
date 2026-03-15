import ContactForm from './Contact'

const URL = "https://srishtisolarpower.com/contact"

export const metadata = {
  title: 'Contact Srishti Solar Power | Free Solar Site Visit Patna Bihar',
  description:
    'Free solar site visit book करें। Call/WhatsApp: 99310 13345। Srishti Solar Power rooftop solar installation Patna, Gaya, Muzaffarpur, Bhagalpur, Darbhanga और Bihar के 9 जिलों में service देती है।',
  keywords: [
    'contact Srishti Solar Power',
    'solar installation Patna contact',
    'solar company Bihar contact',
    'solar panel Patna contact',
    'rooftop solar Bihar contact'
  ],
  alternates: { canonical: URL },
  openGraph: {
    title: 'Contact Srishti Solar Power — Free Solar Site Visit',
    description:
      'Free solar consultation and site visit. Call or WhatsApp: 99310 13345.',
    url: URL,
    siteName: 'Srishti Solar Power',
    locale: 'hi_IN',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Contact Srishti Solar Power Bihar'
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Srishti Solar Power',
    description: 'Book a free solar site visit in Bihar.',
    images: ['/og-image.jpg'],
  },
}

export default function ContactPage() {
  return (
    <>
      {/* Local business contact schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Srishti Solar Power",
            "url": "https://srishtisolarpower.com",
            "telephone": "+91-9931013345",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Patna",
              "addressRegion": "Bihar",
              "addressCountry": "IN"
            },
            "areaServed": [
              { "@type": "City", "name": "Patna" },
              { "@type": "City", "name": "Gaya" },
              { "@type": "City", "name": "Muzaffarpur" },
              { "@type": "City", "name": "Bhagalpur" },
              { "@type": "City", "name": "Darbhanga" }
            ],
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+91-9931013345",
              "contactType": "customer service",
              "areaServed": "IN",
              "availableLanguage": ["Hindi", "English"]
            }
          })
        }}
      />

      <ContactForm />
    </>
  )
}