import SubsidyContent from './comp/SubsidyContent'

export const metadata = {
  title: 'PM Surya Ghar Subsidy Bihar | ₹78,000 तक | Srishti Solar Power',
  description: 'PM Surya Ghar Muft Bijli Yojana — 1kW पर ₹30,000, 2kW पर ₹60,000, 3kW+ पर ₹78,000 सब्सिडी। Srishti Solar ने ₹31,98,000 सब्सिडी दिलाई। हम पूरी process करते हैं — DISCOM, net metering, application।',
  alternates: { canonical: 'https://srishtisolarpower.com/subsidies' },
  openGraph: {
    title: 'PM Surya Ghar Subsidy Bihar — ₹78,000 तक सरकारी सहायता',
    description: '₹30K/₹60K/₹78K subsidy slabs। ₹31,98,000 already assisted। हम पूरी process handle करते हैं।',
    url: 'https://srishtisolarpower.com/subsidies',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
}
export default function SubsidiesPage() {
  return <SubsidyContent />
}