'use client'
import Link from 'next/link'
import { STORY, ACHIEVEMENTS } from '@/data/about'
import styles from '../css/Abouthero.module.css'

export default function AboutHero() {
  return (
    <section className={styles.hero}>

      {/* Solar field bg — replace with real photo at /public/about-hero.jpg later */}
      <div className={styles.bgImg} aria-hidden="true"/>
      <div className={styles.overlay} aria-hidden="true"/>

      <div className={styles.inner}>
        <div className={styles.grid}>

          {/* Left */}
          <div className={styles.left}>
            <span className={`${styles.eyebrow} ${styles.fadeUp1}`}>
              <span className={styles.dot}/>
              हमारे बारे में · Founded {STORY.founded}
            </span>

            <h1 className={`${styles.title} ${styles.fadeUp2}`}>
              {STORY.founderName} की
              <span className={styles.gold}>बिहार के लिए सोच</span>
            </h1>

            <blockquote className={`${styles.quote} ${styles.fadeUp3}`}>
              "{STORY.mission}"
              <cite>— {STORY.founderName}, {STORY.founderTitle}</cite>
            </blockquote>

            <p className={`${styles.story} ${styles.fadeUp4}`}>{STORY.origin}</p>

            <div className={`${styles.ctas} ${styles.fadeUp5}`}>
              <Link href="/contact" className={styles.btnPrimary}>
                बात करें
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </Link>
              <Link href="/projects" className={styles.btnGhost}>
                हमारा काम देखें →
              </Link>
            </div>
          </div>

          {/* Right — dark stat card */}
          <div className={`${styles.right} ${styles.fadeUp3}`}>
            <div className={styles.card}>
              <div className={styles.cardLabel}>Srishti Solar Power · Est. {STORY.founded}</div>
              <div className={styles.cardNum}>#1</div>
              <div className={styles.cardSub}>Technical Efficiency — Bihar Solar Expo 2026</div>
              <div className={styles.cardDiv}/>
              {[
                { label: 'Total Installations', val: ACHIEVEMENTS.installations },
                { label: 'Districts Covered',   val: ACHIEVEMENTS.districts     },
                { label: 'Team Members',        val: ACHIEVEMENTS.employees     },
                { label: 'Subsidy Assisted',    val: ACHIEVEMENTS.subsidyHelped },
              ].map((r, i) => (
                <div key={i} className={styles.cardRow}>
                  <span className={styles.cardRowLabel}>{r.label}</span>
                  <span className={styles.cardRowVal}>{r.val}</span>
                </div>
              ))}
              <div className={styles.cardFooter}>
                Ranked by Energy Secretary of Bihar · Feb 2026
              </div>
            </div>
          </div>

        </div>

        {/* Stats strip */}
        <div className={`${styles.statsGrid} ${styles.fadeUp5}`}>
          {[
            { num: ACHIEVEMENTS.installations, hi: 'इंस्टॉलेशन',    en: 'Installations'    },
            { num: ACHIEVEMENTS.districts,     hi: 'जिले',          en: 'Districts'        },
            { num: ACHIEVEMENTS.employees,     hi: 'टीम सदस्य',     en: 'Team Members'     },
            { num: ACHIEVEMENTS.subsidyHelped, hi: 'सब्सिडी दिलाई', en: 'Subsidy Assisted' },
          ].map((s, i) => (
            <div key={i} className={styles.stat}>
              <span className={styles.statNum}>{s.num}</span>
              <span className={styles.statHi}>{s.hi}</span>
              <span className={styles.statEn}>{s.en}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Quad curve → Timeline (#FFFBF4) */}
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