import Navbar from '@/components/Navbar/Navbar'
import './globals.css'
import { Figtree, Lexend } from 'next/font/google'
import Footer from '@/components/Footer/Footer'

/* ── Load fonts via next/font (best practice in App Router) ──
   This handles preloading, no-FOUT, and self-hosting automatically.
   To swap fonts: change these imports + update globals.css variables */

const figtree = Figtree({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-heading',
  display: 'swap',
})

const lexend = Lexend({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-body',
  display: 'swap',
})

export const metadata = {
  title: 'Srishti Solar Power — Clean Energy for India',
  description: 'Premium rooftop solar installations. Cut bills by 90%. Claim ₹78,000 govt subsidy.',
  keywords: 'solar panels, rooftop solar, solar installation, PM Surya Ghar, solar energy India',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${figtree.variable} ${lexend.variable}`}>
      <body>
        <Navbar/>
        {children}
          <Footer/>
        </body>
      
    </html>
  )
}
