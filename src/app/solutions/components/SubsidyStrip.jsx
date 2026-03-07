'use client'
import Link from 'next/link'
import { SUBSIDY_SLABS } from '@/data/solutions'
import styles from '../css/SubsidyStrip.module.css'

export default function SubsidyStrip() {
  return (
    <section className={styles.section}>

      <div className={styles.gridLines} aria-hidden="true"/>

      <div className={styles.inner}>

        {/* Header */}
        <div className={styles.header}>
          <span className={`${styles.eyebrow} ${styles.fadeUp1}`}>
            PM Surya Ghar Muft Bijli Yojana
          </span>
          <h2 className={`${styles.title} ${styles.fadeUp2}`}>
            सरकार देती है{' '}
            <span className={styles.gold}>₹78,000 तक सब्सिडी</span>
          </h2>
          <p className={`${styles.sub} ${styles.fadeUp3}`}>
            सीधे आपके बैंक में — हम पूरी process करते हैं
          </p>
        </div>

        {/* Slab cards */}
        <div className={styles.slabs}>
          {SUBSIDY_SLABS.map((slab, i) => (
            <div
              key={i}
              className={`${styles.slab} ${slab.tag === 'Best Value' ? styles.slabFeatured : ''} ${styles[`fadeUp${i + 2}`]}`}
            >
              {slab.tag && (
                <div className={`${styles.slabTag} ${slab.tag === 'Best Value' ? styles.slabTagGold : styles.slabTagWhite}`}>
                  {slab.tag}
                </div>
              )}

              <div className={styles.slabKw}>{slab.kw}</div>
              <div className={styles.slabSystem}>सोलर सिस्टम</div>

              <div className={styles.slabDivider}/>

              <div className={styles.slabSubsidy}>{slab.subsidy}</div>
              <div className={styles.slabSubsidyLabel}>सरकारी सब्सिडी</div>

              <div className={styles.slabStats}>
                <div className={styles.slabStat}>
                  <span className={styles.slabStatVal}>{slab.units}</span>
                  <span className={styles.slabStatLabel}>मुफ़्त बिजली/माह</span>
                </div>
                <div className={styles.slabStatDivider}/>
                <div className={styles.slabStat}>
                  <span className={styles.slabStatVal}>{slab.saving}</span>
                  <span className={styles.slabStatLabel}>बचत/माह</span>
                </div>
              </div>

              <Link href="/contact" className={styles.slabCta}>
                {slab.tag === 'Best Value' ? 'अभी अप्लाई करें →' : 'जानकारी लें →'}
              </Link>
            </div>
          ))}
        </div>

        {/* Total assisted banner */}
        <div className={`${styles.totalBanner} ${styles.fadeUp5}`}>
          <div className={styles.totalLeft}>
            <span className={styles.totalIcon}>🏛️</span>
            <div>
              <div className={styles.totalTitle}>
                हमने अब तक दिलाई{' '}
                <span className={styles.totalNum}>₹31,98,000</span>{' '}
                की सब्सिडी
              </div>
              <div className={styles.totalSub}>
                41+ परिवारों को PM Surya Ghar योजना का लाभ — Srishti Solar Power के साथ
              </div>
            </div>
          </div>
          <Link href="/subsidies#calculator" className={styles.totalCta}>
            सब्सिडी कैलकुलेटर →
          </Link>
        </div>

        {/* Fine print */}
        <p className={`${styles.finePrint} ${styles.fadeUp5}`}>
          * सब्सिडी राशि MNRE guidelines अनुसार। DISCOM approval और net metering के बाद DBT के माध्यम से सीधे बैंक में।
        </p>

      </div>

      {/* Quad curve → SolutionsCTA (#0A0602) — dips DOWN */}
      <div className={styles.curveWrap}>
        <svg
          viewBox="0 0 1440 90"
          preserveAspectRatio="none"
          aria-hidden="true"
          className={styles.curveSvg}
        >
          <path d="M0,0 Q720,90 1440,0 L1440,90 L0,90 Z" fill="#0A0602"/>
        </svg>
      </div>

    </section>
  )
}