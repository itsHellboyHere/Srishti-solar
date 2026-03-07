import AboutContent from "./components/Aboutcontent"

export const metadata = {
  title: 'हमारे बारे में | About Srishti Solar Power Bihar',
  description: 'Srishti Solar Power — Founded 2024 by Dayamani। Bihar Solar Expo 2026 में Energy Secretary द्वारा #1 Technical Efficiency। 29 members, 41+ installations, 9 districts, ₹31,98,000 subsidy assisted।',
  alternates: { canonical: 'https://srishtisolarpower.com/about' },
  openGraph: {
    title: 'About Srishti Solar Power — Bihar की #1 Solar Company',
    description: 'Founded 2024। #1 Bihar Solar Expo। IIT BHU engineer। 41+ installs across 9 districts।',
    url: 'https://srishtisolarpower.com/about',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
}
export default function AboutPage() {
  return <AboutContent />
}