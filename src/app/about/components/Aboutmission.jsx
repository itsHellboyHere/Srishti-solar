'use client'
import { MISSION, WHY_SOLAR } from '@/data/about'
import styles from '../css/Aboutmission.module.css'

export default function AboutMission() {
  return (
    <section className={styles.section}>
      {/* Subtle solar texture bg — dark overlay keeps it readable */}
      <div className={styles.bgImg} aria-hidden="true"/>
      <div className={styles.overlay} aria-hidden="true"/>

      <div className={styles.inner}>
        <div className={styles.grid}>

          <div className={styles.mvStack}>
            <span className={`${styles.eyebrow} ${styles.fadeUp1}`}>
              Mission · Vision · Philosophy
            </span>
            {[
              { icon: '🎯', label: 'Mission · मिशन',    hindi: MISSION.statementHindi, en: MISSION.statement  },
              { icon: '🔭', label: 'Vision · विज़न',     hindi: MISSION.visionHindi,    en: MISSION.vision     },
              { icon: '📋', label: 'Philosophy · दर्शन', hindi: null,                   en: MISSION.philosophy },
            ].map((m, i) => (
              <div key={i} className={`${styles.mvCard} ${styles[`fadeUp${i + 2}`]}`}>
                <span className={styles.mvIcon}>{m.icon}</span>
                <div className={styles.mvLabel}>{m.label}</div>
                {m.hindi && <p className={styles.mvHindi}>{m.hindi}</p>}
                <p className={styles.mvEn}>{m.en}</p>
              </div>
            ))}
          </div>

          <div className={styles.whyCol}>
            <h2 className={`${styles.title} ${styles.fadeUp1}`}>
              सोलर से <span className={styles.gold}>बिहार बदलेगा</span>
            </h2>
            <div className={styles.reasons}>
              {WHY_SOLAR.map((w, i) => (
                <div key={i} className={`${styles.reason} ${styles[`fadeUp${Math.min(i + 2, 5)}`]}`}>
                  <span className={styles.rIcon}>{w.icon}</span>
                  <div>
                    <div className={styles.rHi}>{w.hindi}</div>
                    <div className={styles.rEn}>{w.text}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Curve: dark → Team warm #FFF5E6 — dips down */}
      <div className={styles.curveWrap}>
        <svg viewBox="0 0 1440 90" preserveAspectRatio="none" aria-hidden="true" className={styles.curveSvg}>
          <path d="M0,0 Q720,90 1440,0 L1440,90 L0,90 Z" fill="#FFF5E6"/>
        </svg>
      </div>
    </section>
  )
}