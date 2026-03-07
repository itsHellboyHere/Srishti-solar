import SolutionsContent from "./components/SolutionsContent"

export const metadata = {
  title: 'Solar Solutions Bihar | Residential, Commercial, Off-Grid | Srishti Solar',
  description: 'Bihar के लिए complete solar solutions — घरेलू solar (1–3kW), commercial solar (5–10kW), off-grid battery solar। PM Surya Ghar subsidy ₹78,000 तक। IIT BHU engineer supervised installation।',
  alternates: { canonical: 'https://srishtisolarpower.com/solutions' },
  openGraph: {
    title: 'Solar Solutions — Residential, Commercial & Off-Grid | Bihar',
    description: 'Residential 1–3kW, Commercial 5–10kW, Off-grid। PM Surya Ghar subsidy ₹78,000। Free site visit।',
    url: 'https://srishtisolarpower.com/solutions',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
}

export default function SolutionsPage() {
  return <SolutionsContent />
}