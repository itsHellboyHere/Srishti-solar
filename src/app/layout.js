import './globals.css'
import { Figtree, Lexend } from 'next/font/google'
import Navbar from '@/components/Navbar/Navbar'
import Footer from '@/components/Footer/Footer'
import LeadModal from '@/components/LeadModal/LeadModal'
import WhatsAppButton from '@/components/Whatsappbutton'

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

const SITE_URL  = 'https://srishtisolarpower.com'
const SITE_NAME = 'Srishti Solar Power'

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:  'Srishti Solar Power — Bihar की #1 Solar Company',
    template: '%s — Srishti Solar Power Bihar',
  },
  description: 'Bihar की #1 Solar Company — Ranked #1 at Bihar Solar Expo 2026. Residential & commercial rooftop solar. PM Surya Ghar subsidy up to ₹78,000. Free site visit in Patna, Gaya, Muzaffarpur & 9 districts.',
  keywords: [
    'solar panel Bihar','rooftop solar Bihar','solar installation Patna',
    'PM Surya Ghar Bihar','solar subsidy Bihar','solar company Patna',
    'Srishti Solar Power','solar panel installation Bihar',
    'घरेलू सोलर पैनल बिहार','सोलर सब्सिडी बिहार',
    'solar energy Bihar','best solar company Bihar','solar panel price Bihar',
    '1kW 2kW 3kW solar Bihar','MNRE solar Bihar',
  ],
  authors:   [{ name: SITE_NAME, url: SITE_URL }],
  creator:   SITE_NAME,
  publisher: SITE_NAME,
  alternates: { canonical: '/' },
  robots: {
    index: true, follow: true,
    googleBot: {
      index: true, follow: true,
      'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website', locale: 'hi_IN', alternateLocale: 'en_IN',
    url: SITE_URL, siteName: SITE_NAME,
    title: 'Srishti Solar Power — Bihar की #1 Solar Company',
    description: 'Ranked #1 at Bihar Solar Expo 2026. PM Surya Ghar subsidy up to ₹78,000. Free site visit. 41+ installations across 9 districts.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Srishti Solar Power — Bihar Solar Installation' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Srishti Solar Power — Bihar की #1 Solar Company',
    description: 'PM Surya Ghar subsidy ₹78,000. Free site visit. 41+ installs across Bihar.',
    images: ['/og-image.jpg'],
  },

  // ── Manifest — Next.js injects <link rel="manifest"> automatically ──
  manifest: '/manifest.json',

  // ── App icons — only needed if NOT using src/app/icon.* file convention ──
  // If you have src/app/favicon.ico, src/app/icon.svg, src/app/apple-icon.png
  // then DELETE the icons block below — Next.js handles them automatically.
  // If your icons are only in /public/, keep this block:
  // icons: {
  //   icon:             [{ url: '/favicon.ico' }, { url: '/icon.svg', type: 'image/svg+xml' }],
  //   apple:            [{ url: '/apple-touch-icon.png' }],
  //   other:            [{ rel: 'mask-icon', url: '/icon.svg' }],
  // },

  // verification: { google: 'REPLACE_WITH_GOOGLE_SEARCH_CONSOLE_CODE' },
  applicationName: SITE_NAME,
  category: 'Solar Energy',
}

export default function RootLayout({ children }) {
  return (
    <html lang="hi" dir="ltr" className={`${figtree.variable} ${lexend.variable}`}>
      <head>
        {/*
           NO <link> tags needed here — Next.js metadata API above handles:
             - favicon.ico, icon.svg, apple-touch-icon  → via icons: {}
             - manifest.json                            → via manifest: ''
             - og-image, twitter card                   → via openGraph/twitter
             - canonical, robots                        → via alternates/robots

          Only put things here that metadata API cannot express:
        */}
        <meta name="theme-color"              content="#F4A300"/>
        <meta name="msapplication-TileColor"  content="#0A0602"/>

        {/* LOCAL BUSINESS — phone/address/awards in Google results */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context':'https://schema.org','@type':'LocalBusiness','@id':SITE_URL,
          name:'Srishti Solar Power',alternateName:'श्रृष्टि सोलर पावर',
          description:'Bihar #1 Solar Company — Ranked #1 at Bihar Solar Expo 2026. PM Surya Ghar subsidy assistance.',
          url:SITE_URL,telephone:'+91-99310-13345',email:'srishtisolarpower@gmail.com',
          foundingDate:'2024',
          founder:{'@type':'Person',name:'Dayamani',jobTitle:'Founder & Owner'},
          numberOfEmployees:{'@type':'QuantitativeValue',value:29},
          address:{'@type':'PostalAddress',addressLocality:'Patna',addressRegion:'Bihar',addressCountry:'IN'},
          geo:{'@type':'GeoCoordinates',latitude:25.5941,longitude:85.1376},
          areaServed:[
            {'@type':'State',name:'Bihar'},{'@type':'City',name:'Patna'},
            {'@type':'City',name:'Gaya'},{'@type':'City',name:'Muzaffarpur'},
            {'@type':'City',name:'Bhagalpur'},{'@type':'City',name:'Darbhanga'},
          ],
          serviceType:['Rooftop Solar Installation','Commercial Solar Installation','PM Surya Ghar Subsidy Assistance','Off-Grid Solar'],
          priceRange:'₹₹',
          award:['#1 Technical Efficiency — Bihar Solar Expo 2026','Honored at Solar Mela by BSPHCL Chairman'],
          sameAs:[],
          hasOfferCatalog:{'@type':'OfferCatalog',name:'Solar Installation Services',itemListElement:[
            {'@type':'Offer',itemOffered:{'@type':'Service',name:'1kW Residential Solar',description:'PM Surya Ghar subsidy ₹30,000'}},
            {'@type':'Offer',itemOffered:{'@type':'Service',name:'2kW Residential Solar',description:'PM Surya Ghar subsidy ₹60,000'}},
            {'@type':'Offer',itemOffered:{'@type':'Service',name:'3kW+ Residential Solar',description:'PM Surya Ghar subsidy ₹78,000'}},
          ]},
        })}}/>

        {/* FAQ — expandable Q&As right inside Google search results */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context':'https://schema.org','@type':'FAQPage',
          mainEntity:[
            {'@type':'Question',name:'Bihar में solar panel लगवाने पर कितनी subsidy मिलती है?',acceptedAnswer:{'@type':'Answer',text:'PM Surya Ghar Muft Bijli Yojana के तहत: 1kW पर ₹30,000, 2kW पर ₹60,000, और 3kW+ पर ₹78,000 सब्सिडी सीधे बैंक में मिलती है।'}},
            {'@type':'Question',name:'Patna में solar panel installation का खर्च कितना है?',acceptedAnswer:{'@type':'Answer',text:'Srishti Solar Power में 1kW system लगभग ₹60,000–₹70,000 से शुरू होता है, जिसमें से ₹30,000 सरकारी सब्सिडी मिलती है।'}},
            {'@type':'Question',name:'Solar panel लगवाने में कितना समय लगता है?',acceptedAnswer:{'@type':'Answer',text:'Site visit 1 दिन में, installation 1–2 दिन में, subsidy 30–45 दिन में। Srishti Solar पूरी process handle करती है।'}},
            {'@type':'Question',name:'Bihar की सबसे अच्छी solar company कौन सी है?',acceptedAnswer:{'@type':'Answer',text:'Srishti Solar Power को Bihar Solar Expo 2026 में Energy Secretary ने #1 Technical Efficiency का खिताब दिया। 41+ installations, 9 districts, zero complaints।'}},
            {'@type':'Question',name:'PM Surya Ghar के लिए कैसे apply करें?',acceptedAnswer:{'@type':'Answer',text:'Srishti Solar Power पूरी process करती है — DISCOM registration, net metering, subsidy application। बस free site visit book करें।'}},
          ],
        })}}/>

        {/* WebSite schema */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context':'https://schema.org','@type':'WebSite',url:SITE_URL,name:SITE_NAME,
        })}}/>
      </head>
      <body>
        <Navbar/>
        <LeadModal/>
        <WhatsAppButton/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}