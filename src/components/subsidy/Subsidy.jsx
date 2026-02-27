'use client'

import { useEffect, useRef } from 'react'
import styles from './Subsidy.module.css'

const TIERS = [
  {
    kw: '1',
    kwHindi: '१ किलोवाट',
    label: 'Starter',
    labelHindi: 'शुरुआत',
    subsidy: '30,000',
    monthly: '~₹800',
    desc: 'Perfect for small households with 2–3 BHK flats.',
    panels: '3–4 panels',
    highlight: false,
  },
  {
    kw: '2',
    kwHindi: '२ किलोवाट',
    label: 'Popular',
    labelHindi: 'लोकप्रिय',
    subsidy: '60,000',
    monthly: '~₹1,800',
    desc: 'Ideal for medium homes. Covers 80% of average Bihar household bill.',
    panels: '6–7 panels',
    highlight: false,
  },
  {
    kw: '3',
    kwHindi: '३ किलोवाट',
    label: 'Best Value',
    labelHindi: 'सर्वश्रेष्ठ',
    subsidy: '78,000',
    monthly: '~₹3,200',
    desc: 'Maximum subsidy. Near-zero electricity bill for most families.',
    panels: '9–10 panels',
    highlight: true,
  },
]

const STRENGTHS = [
  { en: 'Topcon Solar Panels',       hi: 'टॉपकॉन पैनल',        icon: '◈' },
  { en: 'HDG Coated Steel Structure', hi: 'HDG स्टील संरचना',   icon: '◈' },
  { en: 'Smart Mobile Monitoring',   hi: 'मोबाइल मॉनिटरिंग',   icon: '◈' },
  { en: 'SBPDCL / NBPDCL Registered',hi: 'रजिस्टर्ड वेंडर',    icon: '◈' },
]

const EASY = [
  { en: 'Subsidy + Loan Support',   hi: 'सब्सिडी सहायता'   },
  { en: 'Free Site Visit',          hi: 'मुफ़्त साइट विज़िट' },
  { en: 'Load Calculation',         hi: 'लोड कैलकुलेशन'    },
  { en: 'Online Application Help',  hi: 'Online आवेदन'     },
  { en: 'Installation + Net Meter', hi: 'नेट मीटर सपोर्ट'  },
]

export default function Subsidy() {
  const sectionRef = useRef(null)
  const headRef    = useRef(null)
  const tiersRef   = useRef([])
  const rightRef   = useRef(null)

  useEffect(() => {
    const io = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add(styles.show); io.unobserve(e.target) }
      }),
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )
    if (headRef.current)  io.observe(headRef.current)
    if (rightRef.current) io.observe(rightRef.current)
    tiersRef.current.forEach(el => el && io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <section className={styles.section} ref={sectionRef}>

      {/* Wave in — animated dual-layer */}
      <div className={styles.waveTop} aria-hidden="true">
        {/* Primary wave — fills top, tiles seamlessly at 50% */}
        <svg viewBox="0 0 2880 90" preserveAspectRatio="none">
          <path d="M0,0 L0,50 C240,80 480,15 720,30 C960,45 1200,75 1440,55 C1680,35 1920,70 2160,48 C2400,26 2640,60 2880,50 L2880,0 Z" fill="var(--bg-muted)"/>
        </svg>
        {/* Secondary wave — different shape, counter-animates */}
        <svg viewBox="0 0 2880 90" preserveAspectRatio="none">
          <path d="M0,0 L0,60 C360,20 720,80 1080,55 C1440,30 1800,70 2160,45 C2520,20 2700,65 2880,60 L2880,0 Z" fill="var(--bg-muted)"/>
        </svg>
      </div>

      {/* Ambient grid lines */}
      <div className={styles.gridLines} aria-hidden="true" />

      <div className={styles.inner}>

        {/* ── Header ── */}
        <div className={styles.head} ref={headRef}>
          <div className={styles.eyebrow}>
            <span className={styles.eyebrowPill}>सरकारी योजना</span>
            PM Surya Ghar Yojana
          </div>
          <h2 className={styles.heading}>
            Get Up To{' '}
            <span className={styles.headAmt}>₹78,000</span>
            <br />
            <span className={styles.headSub}>सीधे आपके खाते में</span>
          </h2>
          <p className={styles.headDesc}>
            Under the Central Government's PM Surya Ghar scheme, eligible households
            receive direct subsidy — no middlemen, credited straight to your bank.
          </p>
        </div>

        {/* ── Main layout ── */}
        <div className={styles.layout}>

          {/* Left — Tier cards */}
          <div className={styles.tiersCol}>
            {TIERS.map((t, i) => (
              <div
                key={i}
                ref={el => tiersRef.current[i] = el}
                className={`${styles.tier} ${t.highlight ? styles.tierHero : ''}`}
                style={{ '--ti': i }}
              >
                {t.highlight && (
                  <div className={styles.heroBadge}>
                    <span>★ {t.label}</span>
                    <span className={styles.heroBadgeHi}>{t.labelHindi}</span>
                  </div>
                )}

                {/* KW label */}
                <div className={styles.tierTop}>
                  <div className={styles.kwBlock}>
                    <span className={styles.kwNum}>{t.kw}</span>
                    <span className={styles.kwUnit}>kW</span>
                  </div>
                  <div className={styles.kwHindi}>{t.kwHindi}</div>
                </div>

                {/* Subsidy amount — the hero number */}
                <div className={styles.amtRow}>
                  <span className={styles.amtPrefix}>₹</span>
                  <span className={styles.amt}>{t.subsidy}</span>
                  <span className={styles.amtSuffix}>तक</span>
                </div>

                <div className={styles.tierDivider} />

                <p className={styles.tierDesc}>{t.desc}</p>

                <div className={styles.tierMeta}>
                  <span className={styles.tierMetaItem}>
                    <span className={styles.metaDot}/>
                    {t.panels}
                  </span>
                  <span className={styles.tierMetaItem}>
                    <span className={styles.metaDot}/>
                    Saves {t.monthly}/mo
                  </span>
                </div>

                {/* Shine layer for hero card */}
                {t.highlight && <div className={styles.tierShine} aria-hidden="true" />}
              </div>
            ))}
          </div>

          {/* Right — Strengths + Easy steps */}
          <div className={styles.rightCol} ref={rightRef}>

            {/* हमारी ताकत */}
            <div className={styles.strengthBox}>
              <div className={styles.boxHeader}>
                <span className={styles.boxTag}>हमारी ताकत</span>
                <span className={styles.boxTagEn}>Our Strength</span>
              </div>
              <ul className={styles.strengthList}>
                {STRENGTHS.map((s, i) => (
                  <li key={i} className={styles.strengthItem} style={{ '--si': i }}>
                    <span className={styles.strengthIcon}>{s.icon}</span>
                    <div>
                      <span className={styles.strengthEn}>{s.en}</span>
                      <span className={styles.strengthHi}>{s.hi}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* सोलर लगवाना आसान है */}
            <div className={styles.easyBox}>
              <div className={styles.boxHeader}>
                <span className={styles.boxTag}>सोलर लगवाना आसान है</span>
                <span className={styles.boxTagEn}>Going Solar is Easy</span>
              </div>
              <ul className={styles.easyList}>
                {EASY.map((e, i) => (
                  <li key={i} className={styles.easyItem} style={{ '--ei': i }}>
                    <span className={styles.easyCheck}>✓</span>
                    <div>
                      <span className={styles.easyEn}>{e.en}</span>
                      <span className={styles.easyHi}>{e.hi}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <a href="/contact" className={styles.ctaBtn}>
              <span>Check My Eligibility</span>
              <span className={styles.ctaBtnHi}>पात्रता जांचें →</span>
            </a>

          </div>
        </div>

      </div>

      {/* Wave out — dark → next section */}
      <div className={styles.waveBottom} aria-hidden="true">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none">
          <path d="M0,80 L0,35 C200,65 400,5 600,20 C800,35 1000,70 1200,58 C1320,50 1380,24 1440,20 L1440,80 Z" fill="var(--bg-base)"/>
        </svg>
      </div>

    </section>
  )
}