'use client'
import { HOW_IT_WORKS } from '@/data/solutions'
import styles from '../css/HowItWorks.module.css'
import Link from 'next/link'

export default function HowItWorks() {
  return (
    <section className={styles.section}>

      {/* Subtle grid lines */}
      <div className={styles.gridLines} aria-hidden="true"/>

      <div className={styles.inner}>

        {/* Header */}
        <div className={styles.header}>
          <span className={`${styles.eyebrow} ${styles.fadeUp1}`}>
            प्रक्रिया · The Process
          </span>
          <h2 className={`${styles.title} ${styles.fadeUp2}`}>
            सोलर लगवाना{' '}
            <span className={styles.gold}>कितना आसान है?</span>
          </h2>
          <p className={`${styles.sub} ${styles.fadeUp3}`}>
            साइट विज़िट से लेकर सब्सिडी तक — हम हर कदम पर साथ हैं
          </p>
        </div>

        {/* Steps */}
        <div className={styles.steps}>

          {/* Vertical connector line — runs behind all steps */}
          <div className={styles.connectorLine} aria-hidden="true"/>

          {HOW_IT_WORKS.map((step, i) => (
            <div
              key={i}
              className={`${styles.step} ${styles[`fadeUp${Math.min(i + 2, 5)}`]}`}
            >
              {/* Left — step number + connector dot */}
              <div className={styles.stepLeft}>
                <div className={styles.stepDot}>
                  <span className={styles.stepIcon}>{step.icon}</span>
                </div>
                <div className={styles.stepNum}>{step.step}</div>
              </div>

              {/* Right — content card */}
              <div className={styles.stepCard}>
                <div className={styles.stepCardInner}>
                  <div className={styles.stepMeta}>
                    <span className={styles.stepTime}>{step.time}</span>
                    <span className={styles.stepTimeEn}>{step.timeEn}</span>
                  </div>
                  <h3 className={styles.stepTitleHi}>{step.titleHi}</h3>
                  <p className={styles.stepTitleEn}>{step.titleEn}</p>
                  <p className={styles.stepDescHi}>{step.descHi}</p>
                  <p className={styles.stepDescEn}>{step.descEn}</p>
                </div>

                {/* Gold accent line on left of card */}
                <div className={styles.stepAccent}/>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom CTA banner */}
        <div className={`${styles.ctaBanner} ${styles.fadeUp5}`}>
          <div className={styles.ctaBannerLeft}>
            <span className={styles.ctaBannerIcon}>🚀</span>
            <div>
              <div className={styles.ctaBannerTitle}>आज ही शुरू करें</div>
              <div className={styles.ctaBannerSub}>फ्री साइट विज़िट — कोई commitment नहीं</div>
            </div>
          </div>
          <Link href="/contact" className={styles.ctaBtn}>
            फ्री विज़िट बुक करें →
          </Link>
        </div>

      </div>

      {/* Quad curve → SubsidyStrip (#0E0904) — arch UP */}
      <div className={styles.curveWrap}>
        <svg
          viewBox="0 0 1440 90"
          preserveAspectRatio="none"
          aria-hidden="true"
          className={styles.curveSvg}
        >
          <path d="M0,90 Q720,0 1440,90 L1440,90 L0,90 Z" fill="#0E0904"/>
        </svg>
      </div>

    </section>
  )
}