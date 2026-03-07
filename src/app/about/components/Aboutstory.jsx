'use client'
import { STORY, TIMELINE } from '@/data/about'
import styles from '../css/Aboutstory.module.css'

export default function AboutStory() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>

        {/* Big editorial label */}
        <div className={styles.label}>01 — कहानी</div>

        <div className={styles.grid}>

          {/* Left: Founder origin story */}
          <div className={styles.left}>
            <h2 className={styles.title}>
              एक सोच जो<br/>
              <em className={styles.em}>बिहार बदल</em><br/>
              रही है
            </h2>
            <p className={styles.body}>{STORY.origin}</p>

            <div className={styles.challengeBox}>
              <div className={styles.challengeLabel}>शुरुआती चुनौती</div>
              <p className={styles.challengeText}>{STORY.challenge}</p>
            </div>

            <div className={styles.todayBox}>
              <span className={styles.trophy}>🏆</span>
              <p className={styles.todayText}>{STORY.today}</p>
            </div>
          </div>

          {/* Right: Timeline */}
          <div className={styles.right}>
            {TIMELINE.map((t, i) => (
              <div key={i} className={styles.timelineItem}>
                <div className={styles.yearCol}>
                  <div className={styles.yearNum}>{t.year}</div>
                  {i < TIMELINE.length - 1 && <div className={styles.connector}/>}
                </div>
                <div className={styles.timelineCard}>
                  <div className={styles.timelineTitle}>{t.title}</div>
                  <div className={styles.timelineTitleEn}>{t.titleEn}</div>
                  <p className={styles.timelineDesc}>{t.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}