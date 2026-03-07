import ProjectsGallery from "./ProjectsGallery"

export const metadata = {
  title: 'Solar Projects Gallery Bihar | 41+ Installations | Srishti Solar Power',
  description: 'Srishti Solar Power के 41+ real installations देखें — Patna, Gaya, Muzaffarpur, Bhagalpur, Darbhanga और Bihar के 9 जिलों में। 1kW से 10kW तक residential और commercial projects।',
  alternates: { canonical: 'https://srishtisolarpower.com/projects' },
  openGraph: {
    title: 'Solar Projects — 41+ Installations Across Bihar | Srishti Solar',
    description: '41+ real solar installations। 9 districts। Residential 1–3kW, Commercial 5–10kW।',
    url: 'https://srishtisolarpower.com/projects',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
}

export default function ProjectsPage() {
  
  return <ProjectsGallery />
}