'use client'
import { Target, Telescope, BookOpen, Leaf, Zap, IndianRupee, Wrench, Battery } from 'lucide-react'
import { MISSION, WHY_SOLAR } from '@/data/about'
import styles from '../css/Aboutmission.module.css'

// Map each WHY_SOLAR item to a Lucide icon by index
const WHY_ICONS = [Leaf, Zap, IndianRupee, Wrench, Battery]

export default function AboutMission() {
  return (
    <section className={styles.section}>
      <div className={styles.bgImg} aria-hidden="true"/>
      <div className={styles.overlay} aria-hidden="true"/>

      <div className={styles.inner}>
        <div className={styles.grid}>

          {/* ── Left: Mission / Vision / Philosophy ── */}
          <div className={styles.mvStack}>
            <span className={`${styles.eyebrow} ${styles.fadeUp1}`}>
              Mission · Vision · Philosophy
            </span>

            {[
              {
                Icon:  Target,
                label: 'Mission · मिशन',
                hindi: MISSION.statementHindi,
                en:    MISSION.statement,
              },
              {
                Icon:  Telescope,
                label: 'Vision · विज़न',
                hindi: MISSION.visionHindi,
                en:    MISSION.vision,
              },
              {
                Icon:  BookOpen,
                label: 'Philosophy · दर्शन',
                hindi: null,
                en:    MISSION.philosophy,
              },
            ].map(({ Icon, label, hindi, en }, i) => (
              <div key={i} className={`${styles.mvCard} ${styles[`fadeUp${i + 2}`]}`}>
                <div className={styles.mvIconWrap}>
                  <Icon size={18} strokeWidth={1.8} />
                </div>
                <div className={styles.mvLabel}>{label}</div>
                {hindi && <p className={styles.mvHindi}>{hindi}</p>}
                <p className={styles.mvEn}>{en}</p>
              </div>
            ))}
          </div>

          {/* ── Right: Why Solar ── */}
          <div className={styles.whyCol}>
            <h2 className={`${styles.title} ${styles.fadeUp1}`}>
              सोलर से <span className={styles.gold}>बिहार बदलेगा</span>
            </h2>
            <div className={styles.reasons}>
              {WHY_SOLAR.map((w, i) => {
                const Icon = WHY_ICONS[i] || Leaf
                return (
                  <div key={i} className={`${styles.reason} ${styles[`fadeUp${Math.min(i + 2, 5)}`]}`}>
                    <div className={styles.rIconWrap}>
                      <Icon size={17} strokeWidth={1.8} />
                    </div>
                    <div>
                      <div className={styles.rHi}>{w.hindi}</div>
                      <div className={styles.rEn}>{w.text}</div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

        </div>
      </div>

      {/* Curve: dark → Team warm #FFF5E6 */}
      <div className={styles.curveWrap}>
        <svg viewBox="0 0 1440 90" preserveAspectRatio="none" aria-hidden="true" className={styles.curveSvg}>
          <path d="M0,0 Q720,90 1440,0 L1440,90 L0,90 Z" fill="#FFF5E6"/>
        </svg>
      </div>
    </section>
  )
}