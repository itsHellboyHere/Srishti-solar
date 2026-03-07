import ContactForm from './Contact'

export const metadata = {
  title: 'Contact | Free Site Visit — Srishti Solar Power Patna Bihar',
  description: 'Free site visit book करें। Call 99310 13345। WhatsApp पर बात करें। Patna, Gaya, Muzaffarpur, Bhagalpur, Darbhanga और Bihar के 9 जिलों में service available।',
  alternates: { canonical: 'https://srishtisolarpower.com/contact' },
  openGraph: {
    title: 'Contact Srishti Solar Power — Free Site Visit Bihar',
    description: 'Free site visit। Call/WhatsApp: 99310 13345। Bihar के 9 districts में available।',
    url: 'https://srishtisolarpower.com/contact',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
}

export default function ContactPage() {
  return <ContactForm />
}