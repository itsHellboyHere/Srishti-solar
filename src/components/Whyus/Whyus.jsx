'use client'

import { useEffect, useRef } from 'react'
import { Zap, ShieldCheck, TrendingUp, Wrench, Star, WalletCards } from 'lucide-react'
import styles from './Whyus.module.css'

const REASONS = [
  {
    Icon: Zap,
    stat: '72', unit: 'Hrs',
    tag: 'रिकॉर्ड · Record',
    title: 'सबसे तेज़ इंस्टॉलेशन',
    titleEn: 'Fastest Installation',
    desc: 'साइट विज़िट से सिस्टम लाइव — सिर्फ 24 से 72 घंटों के भीतर। Bihar\'s most efficient MNRE-certified teams.',
  },
  {
    Icon: ShieldCheck,
    stat: '₹78,000', unit: '',
    tag: 'सरकारी · Govt Scheme',
    title: 'पूरी सब्सिडी सहायता',
    titleEn: 'Max Subsidy Assisted',
    desc: 'PM Surya Ghar के तहत ₹78,000 तक सीधे बैंक में। 78 हजार रुपये | All 14 documents filed by us — SBPDCL/NBPDCL approved.',
  },
  {
    Icon: TrendingUp,
    stat: '1', unit: 'unit/kW',
    tag: 'प्रतिदिन · Per Day',
    title: 'एक्स्ट्रा बिजली उत्पादन',
    titleEn: 'Extra Generation Daily',
    desc: 'टॉपकॉन सोलर पैनल — प्रति किलोवाट एक यूनिट अधिक बिजली उत्पादन। N-Type 16BB/18BB टेक्नोलॉजी से extra generation। बेहतर durability और output — सामान्य पैनल से कहीं आगे।',
  },
  {
    Icon: Wrench,
    stat: '5', unit: 'Yr',
    tag: 'निःशुल्क · Free AMC',
    title: '5 साल फ्री सर्विस',
    titleEn: 'Free Maintenance',
    desc: 'सोलर प्लांट के लिए समर्पित सेवा — अब कहीं से भी अपने सोलर सिस्टम को मॉनिटर और कंट्रोल करें। 5 साल की मुफ्त AMC — पैनल सफाई, इन्वर्टर डायग्नोस्टिक्स, और Mobile Remote Monitoring शामिल।',
  },
  {
    Icon: Star,
    stat: 'HDG', unit: '',
    tag: 'मज़बूत · Premium Build',
    title: 'HDG कोटेड स्टील स्ट्रक्चर',
    titleEn: 'Strong HDG Structure',
    desc: 'HDG (हॉट-डिप गैल्वेनाइज्ड, 80–120 माइक्रोन जिंक कोटेड) स्ट्रक्चर (2–3 मिमी) — जंग-रहित, सामान्य स्ट्रक्चर से 10 गुना अधिक मजबूत, 25 वर्षों की गारंटी के साथ।',
  },
  {
    Icon: WalletCards,
    stat: '₹ 0', unit: '',
    tag: 'आसान · Zero Upfront',
    title: 'आसान किस्तों में',
    titleEn: 'Easy Financing',
    desc: 'पीएम सूर्य घर मुफ्त बिजली योजना के तहत सोलर लगाने के लिए कम ब्याज दर पर ऋण सुविधा उपलब्ध है। Subsidy + Loan support — Free site visit भी उपलब्ध।',
  },
]

const COMPARE = [
  {
    hi: 'पैनल टेक्नोलॉजी', en: 'Panel Technology',
    them: 'POLY CRISTLINE / MONO CRISTLINE',
    us:   'N-Type Topcon BIFICIAL PANAL',
  },
  {
    hi: 'बस-बार', en: 'Bus Bar',
    them: '5 BUS BAR / 10 BUS BAR',
    us:   '16 BUS BAR',
  },
  {
    hi: 'स्ट्रक्चर', en: 'Structure',
    them: 'साधारण MS',
    us:   'HDG (हॉट-डिप गैल्वेनाइज्ड, 80–120 माइक्रोन जिंक कोटेड) स्ट्रक्चर (2–3 मिमी) — जंग-रहित, सामान्य स्ट्रक्चर से 10 गुना अधिक मजबूत',
  },
  {
    hi: 'मॉनिटरिंग', en: 'Monitoring',
    them: 'मॉनिटरिंग नहीं',
    us:   'MOBILE DAWRA कहीं से भी अपने सोलर सिस्टम को मॉनिटर करें।',
  },
]

export default function WhyUs() {
  const headerRef  = useRef(null)
  const cardsRef   = useRef([])
  const compareRef = useRef(null)

  useEffect(() => {
    const io = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add(styles.show); io.unobserve(e.target) }
      }),
      { threshold: 0.1 }
    )
    if (headerRef.current)  io.observe(headerRef.current)
    if (compareRef.current) io.observe(compareRef.current)
    cardsRef.current.forEach(el => el && io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <section className={styles.section}>

      <div className={styles.waveTop} aria-hidden="true">
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path d="M0,0 L0,60 C80,100 160,120 280,105 C400,90 520,45 640,55 C760,65 880,100 1000,95 C1120,90 1280,55 1440,65 L1440,0 Z" fill="#0E0904"/>
        </svg>
      </div>

      <div className={styles.container}>

        {/* Header */}
        <div className={styles.header} ref={headerRef}>
          <span className={styles.eyebrow}>हमारा सोलर क्यों? · Why Choose Us</span>
          <h2 className={styles.title}>
            सौर ऊर्जा अपनाइए, सस्ती और अच्छी बिजली पाइए —{' '}
            <span className={styles.accent}>हर घर अपनी बिजली बनाइए</span>
          </h2>
          <p className={styles.subtext}>
            सस्ती नहीं — अब मुफ्त सोलर ऊर्जा की ओर बढ़ता बिहार।{' '}
            <span className={styles.subtextEn}>Join Bihar's fastest-growing solar community.</span>
          </p>
        </div>

        {/* 6 Benefit Cards */}
        <div className={styles.grid}>
          {REASONS.map((r, i) => (
            <div
              key={i}
              ref={el => cardsRef.current[i] = el}
              className={styles.card}
              style={{ '--delay': `${i * 0.11}s` }}
            >
              <div className={styles.cardHeader}>
                <div className={styles.iconBox}><r.Icon size={20} strokeWidth={2.5} /></div>
                <span className={styles.tag}>{r.tag}</span>
              </div>
              <div className={styles.statContainer}>
                <span className={styles.stat}>{r.stat}</span>
                {r.unit && <span className={styles.unit}>{r.unit}</span>}
              </div>
              <h3 className={styles.cardTitle}>
                {r.title}
                <span className={styles.cardTitleEn}>{r.titleEn}</span>
              </h3>
              <p className={styles.cardDesc}>{r.desc}</p>
              <div className={styles.cardLine} />
            </div>
          ))}
        </div>

        {/* Comparison Table */}
        <div className={styles.compareWrap} ref={compareRef}>
          <div className={styles.compareHead}>
            <h3 className={styles.compareTitle}>
              सामान्य सोलर <span className={styles.compareVs}>vs</span>{' '}
              <span className={styles.compareUs}>हमारा सोलर</span>
            </h3>
            <p className={styles.compareSub}>Why Srishti's technology outperforms the rest</p>
          </div>

          <div className={styles.compareTable}>
            {/* Column headers */}
            <div className={styles.compareColHeaders}>
              <div className={styles.compareColLabel} />
              <div className={`${styles.compareColHead} ${styles.compareColThem}`}>सामान्य सोलर</div>
              <div className={`${styles.compareColHead} ${styles.compareColOurs}`}>✦ हमारा सोलर</div>
            </div>

            {/* Rows */}
            {COMPARE.map((row, i) => (
              <div key={i} className={styles.compareRow} style={{ '--ri': i }}>

                {/* Label — Hindi bold + English soft below */}
                <div className={styles.compareRowLabel}>
                  <span className={styles.compareRowLabelHi}>{row.hi}</span>
                  <span className={styles.compareRowLabelEn}>{row.en}</span>
                </div>

                <div className={styles.compareRowThem}>
                  <span className={styles.crossIcon}>✗</span>
                  {row.them}
                </div>
                <div className={styles.compareRowUs}>
                  <span className={styles.checkIcon}>✓</span>
                  {row.us}
                </div>

              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}