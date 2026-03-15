import ProjectsGallery from "./ProjectsGallery"

const URL = "https://srishtisolarpower.com/projects"

export const metadata = {
  title: 'Solar Projects Gallery Bihar | Srishti Solar Power',
  description:
    'Srishti Solar Power के 41+ real rooftop solar installations देखें — Patna, Gaya, Muzaffarpur, Bhagalpur, Darbhanga और Bihar के 9 जिलों में। 1kW से 10kW तक residential और commercial solar projects।',
  keywords: [
    'solar projects Bihar',
    'solar installation Patna',
    'rooftop solar projects Bihar',
    'solar panel installation Bihar',
    'solar projects Patna',
    'Srishti Solar Power projects'
  ],
  alternates: { canonical: URL },
  openGraph: {
    title: 'Solar Projects — 41+ Installations Across Bihar | Srishti Solar',
    description:
      '41+ real solar installations across Bihar. Residential 1–3kW and commercial 5–10kW solar projects.',
    url: URL,
    siteName: 'Srishti Solar Power',
    locale: 'hi_IN',
    type: 'article',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Solar Panel Installation Projects in Bihar'
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Solar Projects Gallery Bihar | Srishti Solar Power',
    description:
      '41+ rooftop solar installations across Bihar. Residential and commercial solar projects.',
    images: ['/og-image.jpg'],
  },
}

export default function ProjectsPage() {
  return (
    <>
      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ImageGallery",
            "name": "Solar Installation Projects in Bihar",
            "description":
              "Gallery of rooftop solar installations completed by Srishti Solar Power across Bihar.",
            "creator": {
              "@type": "Organization",
              "name": "Srishti Solar Power",
              "url": "https://srishtisolarpower.com"
            },
            "contentLocation": {
              "@type": "State",
              "name": "Bihar"
            }
          })
        }}
      />

      <ProjectsGallery />
    </>
  )
}