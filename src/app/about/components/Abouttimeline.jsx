'use client'
import { STORY, TIMELINE } from '@/data/about'
import styles from '../css/Abouttimeline.module.css'

export default function AboutTimeline() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>

        <span className={`${styles.eyebrow} ${styles.fadeUp1}`}>
          हमारा सफर · Our Journey
        </span>
        <h2 className={`${styles.title} ${styles.fadeUp2}`}>
          {STORY.founded} से आज तक —{' '}
          <span className={styles.gold}>बिहार के साथ</span>
        </h2>

        <div className={styles.timeline}>
          {TIMELINE.map((t, i) => (
            <div key={i} className={`${styles.item} ${styles[`fadeUp${Math.min(i + 3, 5)}`]}`}>
              <div className={styles.yearCol}>
                <div className={styles.year}>{t.year}</div>
                {i < TIMELINE.length - 1 && <div className={styles.line}/>}
              </div>
              <div className={styles.card}>
                <div className={styles.cardTitle}>{t.title}</div>
                <div className={styles.cardEn}>{t.titleEn}</div>
                <p className={styles.cardDesc}>{t.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.cards2}>
          <div className={`${styles.challengeBox} ${styles.fadeUp4}`}>
            <div className={styles.boxIcon}>⚡</div>
            <div className={styles.boxLabel}>शुरुआती चुनौती · Initial Challenge</div>
            <p className={styles.boxText}>{STORY.challenge}</p>
          </div>
          <div className={`${styles.todayBox} ${styles.fadeUp5}`}>
            <div className={styles.boxIcon}>🏆</div>
            <div className={`${styles.boxLabel} ${styles.boxLabelDark}`}>आज की स्थिति · Today</div>
            <p className={`${styles.boxText} ${styles.boxTextDark}`}>{STORY.today}</p>
          </div>
        </div>

      </div>

      {/* Curve: cream → Mission dark #0E0904 — arch UP */}
      <div className={styles.curveWrap}>
        <svg viewBox="0 0 1440 90" preserveAspectRatio="none" aria-hidden="true" className={styles.curveSvg}>
          <path d="M0,90 Q720,0 1440,90 L1440,90 L0,90 Z" fill="#0E0904"/>
        </svg>
      </div>
    </section>
  )
}