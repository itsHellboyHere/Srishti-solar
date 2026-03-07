'use client'
import { ACHIEVEMENTS, DIFFERENTIATORS } from '@/data/about'
import styles from '../css/Aboutawards.module.css'

export default function AboutAwards() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>

        <span className={`${styles.eyebrow} ${styles.fadeUp1}`}>पुरस्कार और मीडिया · Awards &amp; Media</span>
        <h2 className={`${styles.title} ${styles.fadeUp2}`}>
          बिहार ने किया <span className={styles.gold}>सम्मान</span>
        </h2>

        <div className={`${styles.awardsGrid} ${styles.fadeUp3}`}>
          {ACHIEVEMENTS.awards.map((a, i) => (
            <div key={i} className={styles.awardCard}>
              <span className={styles.awardIcon}>🏆</span>
              <div>
                <div className={styles.awardYear}>{a.year}</div>
                <div className={styles.awardTitle}>{a.title}</div>
                <div className={styles.awardBy}>{a.by} · {a.org}</div>
              </div>
            </div>
          ))}
        </div>

        <div className={`${styles.mediaLabel} ${styles.fadeUp3}`}>📰 Media Coverage</div>
        <div className={`${styles.mediaRow} ${styles.fadeUp4}`}>
          {ACHIEVEMENTS.media.map((m, i) => (
            m.image ? (
              <div key={i} className={styles.mediaImgCard}>
                <div className={styles.mediaImgWrap}>
                  <img src={m.image} alt={`${m.outlet} coverage`} className={styles.mediaImg}
                    onError={e => { e.currentTarget.style.display='none' }}/>
                  <div className={styles.mediaImgFallback}>
                    <span>📰</span>
                    <span>Upload to /public/media/dainik-jagran.jpg</span>
                  </div>
                </div>
                <div className={styles.mediaInfo}>
                  <div className={styles.mediaOutlet}>{m.outlet}</div>
                  <div className={styles.mediaHeadline}>{m.headline}</div>
                  <div className={styles.mediaDate}>{m.date}</div>
                </div>
              </div>
            ) : (
              <div key={i} className={styles.mediaSocial}>
                <div className={styles.mediaSocialIcon}>📱</div>
                <div className={styles.mediaOutlet}>{m.outlet}</div>
                <div className={styles.mediaHeadline}>{m.headline}</div>
                <div className={styles.mediaDate}>{m.date}</div>
              </div>
            )
          ))}
        </div>

        <h3 className={`${styles.diffHeading} ${styles.fadeUp3}`}>
          तीन चीज़ें जो <span className={styles.gold}>हमें अलग बनाती हैं</span>
        </h3>
        <div className={styles.diffGrid}>
          {DIFFERENTIATORS.map((d, i) => (
            <div key={i} className={`${styles.diffCard} ${styles[`fadeUp${i + 3}`]}`}>
              <div className={styles.diffNum}>0{i + 1}</div>
              <div className={styles.diffTitle}>{d.hindi}</div>
              <div className={styles.diffEn}>{d.title}</div>
              <p className={styles.diffDesc}>{d.desc}</p>
            </div>
          ))}
        </div>

      </div>

      {/* Curve: cream → CTA dark #0A0602 — dips DOWN */}
      <div className={styles.curveWrap}>
        <svg viewBox="0 0 1440 90" preserveAspectRatio="none" aria-hidden="true" className={styles.curveSvg}>
          <path d="M0,0 Q720,90 1440,0 L1440,90 L0,90 Z" fill="#0A0602"/>
        </svg>
      </div>
    </section>
  )
}