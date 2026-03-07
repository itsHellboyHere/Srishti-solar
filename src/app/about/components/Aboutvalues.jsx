'use client'
import { DIFFERENTIATORS, WHY_SOLAR, MISSION } from '@/data/about'
import styles from '../css/Aboutvalues.module.css'

export default function AboutValues() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>

        <div className={styles.label}>04 — मूल्य</div>

        {/* Mission quote — full width */}
        <div className={styles.missionBanner}>
          <div className={styles.missionQuoteIcon}>"</div>
          <blockquote className={styles.missionQuote}>
            {MISSION.statementHindi}
          </blockquote>
          <p className={styles.missionEn}>{MISSION.statement}</p>
        </div>

        <div className={styles.grid}>

          {/* Differentiators */}
          <div className={styles.left}>
            <div className={styles.sectionLabel}>हम अलग क्यों हैं</div>
            {DIFFERENTIATORS.map((d, i) => (
              <div key={i} className={styles.diffCard}>
                <div className={styles.diffNum}>0{i + 1}</div>
                <div className={styles.diffBody}>
                  <div className={styles.diffTitleHi}>{d.hindi}</div>
                  <div className={styles.diffTitleEn}>{d.title}</div>
                  <p className={styles.diffDesc}>{d.descHindi}</p>
                  <p className={styles.diffDescEn}>{d.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Why Solar */}
          <div className={styles.right}>
            <div className={styles.sectionLabel}>हम सोलर क्यों करते हैं</div>
            <div className={styles.whyGrid}>
              {WHY_SOLAR.map((w, i) => (
                <div key={i} className={styles.whyCard}>
                  <span className={styles.whyIcon}>{w.icon}</span>
                  <div className={styles.whyHi}>{w.hindi}</div>
                  <div className={styles.whyEn}>{w.text}</div>
                </div>
              ))}
            </div>

            <div className={styles.visionBox}>
              <div className={styles.visionLabel}>5-Year Vision</div>
              <p className={styles.visionText}>{MISSION.visionHindi}</p>
              <p className={styles.visionTextEn}>{MISSION.vision}</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}