'use client'
import Link from 'next/link'
import { SOLUTIONS_HERO } from '@/data/solutions'
import styles from '../css/SolutionsHero.module.css'

export default function SolutionsHero() {
  return (
    <section className={styles.hero}>

      {/* Sticky parallax solar bg — replace with /public/solutions-hero.jpg later */}
      <div className={styles.bgImg} aria-hidden="true"/>
      <div className={styles.overlay} aria-hidden="true"/>

      {/* Grid line texture overlay */}
      <div className={styles.grid} aria-hidden="true"/>

      <div className={styles.inner}>

        {/* Top eyebrow */}
        <div className={`${styles.eyebrowRow} ${styles.fadeUp1}`}>
          <span className={styles.dot}/>
          <span className={styles.eyebrow}>{SOLUTIONS_HERO.eyebrow}</span>
        </div>

        {/* Main title */}
        <h1 className={`${styles.title} ${styles.fadeUp2}`}>
          <span className={styles.titleLine1}>{SOLUTIONS_HERO.titleHi}</span>
          <span className={styles.titleLine2}>
            {SOLUTIONS_HERO.titleHi2}
            <span className={styles.titleUnderline}/>
          </span>
        </h1>

        <p className={`${styles.desc} ${styles.fadeUp3}`}>
          {SOLUTIONS_HERO.desc}
        </p>

        {/* CTAs */}
        <div className={`${styles.ctas} ${styles.fadeUp4}`}>
          <Link href="/contact" className={styles.btnPrimary}>
            फ्री साइट विज़िट बुक करें
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </Link>
          <a
            href="https://wa.me/919931013345"
            target="_blank" rel="noopener noreferrer"
            className={styles.btnWa}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            WhatsApp पर बात करें
          </a>
        </div>

        {/* Stats strip */}
        <div className={`${styles.statsRow} ${styles.fadeUp5}`}>
          {SOLUTIONS_HERO.stats.map((s, i) => (
            <div key={i} className={styles.stat}>
              <span className={styles.statNum}>{s.num}</span>
              <span className={styles.statLabelHi}>{s.label}</span>
              <span className={styles.statLabelEn}>{s.sub}</span>
            </div>
          ))}
        </div>

      </div>

      {/* Quad curve → SolutionsGrid (#FFFBF4) — dips DOWN */}
      <div className={styles.curveWrap}>
        <svg
          viewBox="0 0 1440 90"
          preserveAspectRatio="none"
          aria-hidden="true"
          className={styles.curveSvg}
        >
          <path d="M0,0 Q720,90 1440,0 L1440,90 L0,90 Z" fill="#FFFBF4"/>
        </svg>
      </div>

    </section>
  )
}