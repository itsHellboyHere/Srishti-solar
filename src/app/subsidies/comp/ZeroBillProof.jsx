'use client'
import Image from 'next/image'
import styles from '../css/ZeroBillProof.module.css'

export default function ZeroBillProof() {
  return (
    <section className={styles.section} id='zerobill'>
      <div className={styles.inner}>

        {/* Left — bill image */}
        <div className={styles.billSide}>
          <div className={styles.billWrap}>
            <Image
              src="https://res.cloudinary.com/dgifa4wgb/image/upload/v1772907318/IMG_3566_ssbn32.jpg"
              alt="SBPDCL Zero Bill — Smt. Sita Devi, Gardanibagh Patna, Feb 2026"
              fill
              className={styles.billImg}
              sizes="(max-width: 768px) 100vw, 480px"
            />
            {/* Stamp overlay */}
            <div className={styles.stamp}>
              <div className={styles.stampText}>₹0</div>
              <div className={styles.stampSub}>बिजली बिल</div>
            </div>
          </div>
          <p className={styles.billNote}>
            SBPDCL Verified · Gardanibagh, Patna · FEB-2026
          </p>
        </div>

        {/* Right — proof content */}
        <div className={styles.content}>
          <span className={styles.eyebrow}>असली प्रमाण · Real Proof</span>
          <h2 className={styles.title}>
            सोलर लगाया —<br/>
            <span className={styles.gold}>बिजली बिल ज़ीरो हुआ</span>
          </h2>
          <p className={styles.desc}>
            Smt. Sita Devi, Gardanibagh Patna — Solar installation के बाद
            SBPDCL से असली Zero Bill। 292 units सौर ऊर्जा का शेष,
            कुल देय राशि ₹0.00।
          </p>

          {/* Stats row */}
          <div className={styles.stats}>
            <div className={styles.stat}>
              <div className={styles.statNum}>292</div>
              <div className={styles.statLabel}>Units Solar Balance</div>
            </div>
            <div className={styles.statDivider}/>
            <div className={styles.stat}>
              <div className={styles.statNum}>₹0</div>
              <div className={styles.statLabel}>बिजली बिल देय</div>
            </div>
            <div className={styles.statDivider}/>
            <div className={styles.stat}>
              <div className={styles.statNum}>23.87</div>
              <div className={styles.statLabel}>Avg Supply Hours/day</div>
            </div>
          </div>

          <a href="/contact" className={styles.cta}>
            मेरा भी Zero Bill चाहिए →
          </a>
        </div>

      </div>
    </section>
  )
}