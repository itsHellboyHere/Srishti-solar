'use client'

import { useEffect, useRef } from 'react'
import Magnetic from '@/components/utils/Magnetic'
import styles from './SolarCTA.module.css'

const TRUST_ITEMS = ['MNRE Certified', 'SBPDCL Registered', '2,500+ Installs', '5 Yr Free AMC']

export default function SolarCTA() {
  const contentRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.show)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.2 }
    )

    if (contentRef.current) observer.observe(contentRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className={styles.section} aria-labelledby="solar-cta-title">
      <div className={styles.inner}>
        <div className={styles.content} ref={contentRef}>
          <p className={styles.eyebrow}>Start Today</p>

          <h2 id="solar-cta-title" className={styles.title}>
            आपकी छत, <span className={styles.titleAccent}>आपकी बिजली</span>
          </h2>

          <p className={styles.subtitle}>Your roof. Your energy. Your savings.</p>

          <p className={styles.desc}>
            Free site visit. No upfront cost. Subsidy assistance end to end.
            <span className={styles.descHi}> मुफ्त साइट विज़िट · ₹0 अग्रिम · MNRE certified</span>
          </p>

          <p className={styles.actionHint}>Tap the sun to call instantly.</p>

          <div className={styles.trust}>
            {TRUST_ITEMS.map(item => (
              <span key={item} className={styles.trustItem}>
                <span className={styles.trustDot} />
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className={styles.visual}>
          <Magnetic strength={0.22}>
            <a href="tel:+919931013345" className={styles.sunCta} aria-label="Call Srishti Solar at 99310 13345">
              <span>फ्री कॉल करें</span>
              <small>99310 13345</small>
            </a>
          </Magnetic>
          <div className={styles.panel}>
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
          <div className={styles.ring} />
        </div>
      </div>
        {/* <div className={styles.waveBottom} aria-hidden="true">
        <svg viewBox="0 0 1440 90" preserveAspectRatio="none">
          <path d="M0,0 Q720,90 1440,0 L1440,90 L0,90 Z" fill="var(--bg-muted)"/>
        </svg>
      </div> */}
    </section>
  )
}
