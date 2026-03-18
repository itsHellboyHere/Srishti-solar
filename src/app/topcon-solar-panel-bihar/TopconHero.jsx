'use client'
import Link from 'next/link'
import styles from './TopconHero.module.css'

const CERTS = ['IEC 61215', 'IEC 61730', 'UL 61730', 'CSA 61730', 'MNRE Approved']

const TECH_CARDS = [
  {
    badge: 'TOPcon',
    badgeColor: '#F4A300',
    title: 'Bifacial N-Type',
    specs: ['16BB / 18BB', '182MM / 210MM', 'Glass to Glass'],
    highlight: true,
  },
  {
    badge: 'HJT',
    badgeColor: '#22c55e',
    title: 'Heterojunction',
    specs: ['20BB', '210MM × 105MM', 'Blue TCO Film'],
    highlight: false,
  },
  {
    badge: 'PERC',
    badgeColor: '#a855f7',
    title: 'Mono PERC',
    specs: ['10BB', '182MM / 158MM', 'AlOx + SiNx'],
    highlight: false,
  },
]

const ADVANTAGES = [
  { val: 'N-Type',  label: 'Technology',      sub: 'TOPcon Bifacial'          },
  { val: '16/18BB', label: 'Bus Bar',          sub: 'Higher efficiency'        },
  { val: 'IEC',     label: 'Certified',        sub: 'IEC 61215 · IEC 61730'   },
  { val: 'PID',     label: 'Resistance',       sub: 'Excellent protection'     },
]

export default function TopconHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.orb1} aria-hidden="true" />
      <div className={styles.orb2} aria-hidden="true" />

      <div className={styles.inner}>

        {/* Left */}
        <div className={styles.left}>

          <div className={styles.badge}>
            <span className={styles.badgeDot} />
            MNRE Approved · IEC & UL Certified
          </div>

          <h1 className={styles.title}>
            Bihar में
            <span className={styles.techLine}>
              Topcon N-Type
            </span>
            <span className={styles.subLine}>
              Solar Panel Installation
            </span>
          </h1>

          <p className={styles.desc}>
            सामान्य panels नहीं — <strong>Bihar की गर्मी के लिए designed</strong> premium
            N-Type Topcon technology। 16BB/18BB bus bar से ज़्यादा बिजली,
            IEC certified quality, और PM Surya Ghar subsidy के साथ।
          </p>

          {/* Cert pills */}
          <div className={styles.certs}>
            {CERTS.map(c => (
              <span key={c} className={styles.cert}>✓ {c}</span>
            ))}
          </div>

          <div className={styles.ctas}>
            <Link href="/contact" className={styles.ctaPrimary}>
              फ्री साइट विज़िट बुक करें
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
            <Link href="/solutions" className={styles.ctaSecondary}>
              सभी solutions देखें →
            </Link>
          </div>

        </div>

        {/* Right — tech cards + advantage strip */}
        <div className={styles.right}>

          {/* 3 panel type cards */}
          <div className={styles.techCards}>
            {TECH_CARDS.map((t, i) => (
              <div key={i} className={`${styles.techCard} ${t.highlight ? styles.techCardFeatured : ''}`}>
                <div className={styles.techBadge} style={{ background: t.badgeColor, color: t.highlight ? '#1A0E04' : '#fff' }}>
                  {t.badge}
                </div>
                <div className={styles.techTitle}>{t.title}</div>
                <div className={styles.techSpecs}>
                  {t.specs.map((s, j) => (
                    <span key={j} className={styles.techSpec}>{s}</span>
                  ))}
                </div>
                {t.highlight && <div className={styles.techFeaturedGlow} aria-hidden="true" />}
              </div>
            ))}
          </div>

          {/* Advantage strip */}
          <div className={styles.advStrip}>
            {ADVANTAGES.map((a, i) => (
              <div key={i} className={styles.advItem}>
                <span className={styles.advVal}>{a.val}</span>
                <span className={styles.advLabel}>{a.label}</span>
                <span className={styles.advSub}>{a.sub}</span>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  )
}