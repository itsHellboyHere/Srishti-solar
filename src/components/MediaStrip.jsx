'use client'
import Image from 'next/image'
import { MEDIA } from '@/data/media'
import styles from '@/css/MediaStrip.module.css'

export default function MediaStrip() {
  // Double the array so the infinite scroll loop is seamless
  const items = [...MEDIA, ...MEDIA]

  return (
    <section className={styles.section}>

      {/* Curve in: dark (#0F0A03 Subsidy) → cream */}
      {/* <div className={styles.curveTop}>
        <svg viewBox="0 0 1440 90" preserveAspectRatio="none" aria-hidden="true" className={styles.curveSvg}>
          <path d="M0,90 Q720,0 1440,90 L1440,0 L0,0 Z" fill="#0F0A03"/>
        </svg>
      </div> */}

      <div className={styles.inner}>
        <div className={styles.header}>
          <span className={styles.eyebrow}>As Seen In · मीडिया में</span>
          <h2 className={styles.title}>
            Bihar ने देखा,{' '}
            <span className={styles.gold}>Bihar ने माना</span>
          </h2>
        </div>

        {/* Scrolling track */}
        <div className={styles.trackWrap} aria-label="Media and recognition photos">
          <div className={styles.track}>
            {items.map((item, i) => (
              <div key={i} className={styles.card} aria-hidden={i >= MEDIA.length}>
                <div className={styles.imgWrap}>
                  <Image
                    src={item.src}
                    alt={`${item.caption} — ${item.outlet}`}
                    fill
                    className={styles.img}
                    sizes="280px"
                  />
                  <div className={styles.imgScrim} />
                  <span className={styles.tag}>{item.tag}</span>
                </div>
                <div className={styles.cardBody}>
                  <div className={styles.caption}>{item.caption}</div>
                  <div className={styles.outlet}>{item.outlet}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.cta}>
          <a href="/about#media" className={styles.ctaLink}>
            सभी photos देखें
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </div>
      </div>

      {/* Curve out: cream → dark (#0E0904 SolarCTA) */}
      <div className={styles.curveBottom}>
        <svg viewBox="0 0 1440 90" preserveAspectRatio="none" aria-hidden="true" className={styles.curveSvg}>
          <path d="M0,0 Q720,90 1440,0 L1440,90 L0,90 Z" fill="#0E0904"/>
        </svg>
      </div>
    </section>
  )
}