'use client'
import { useRef } from 'react'
import { SOLUTIONS } from '@/data/solutions'
import styles from '../css/SolutionsScroll.module.css'
import Link from 'next/link'

export default function SolutionsScroll() {
  const trackRef = useRef(null)

  return (
    <section className={styles.section}>

      {/* Grid lines */}
      <div className={styles.gridLines} aria-hidden="true"/>

      {/* Section header */}
      <div className={styles.header}>
        <span className={`${styles.eyebrow} ${styles.fadeUp1}`}>
          गहराई से जानें · Deep Dive
        </span>
        <h2 className={`${styles.title} ${styles.fadeUp2}`}>
          हर समाधान की{' '}
          <span className={styles.gold}>पूरी जानकारी</span>
        </h2>
        <p className={`${styles.hint} ${styles.fadeUp3}`}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
          स्क्रॉल करें · Scroll across
        </p>
      </div>

      {/* Horizontal scroll track */}
      <div className={styles.scrollOuter}>
        <div className={styles.track} ref={trackRef}>

          {SOLUTIONS.map((sol, i) => (
            <div key={sol.id} className={styles.card}>

              {/* Left — photo side */}
              <div className={styles.cardPhoto}>
                <img
                  src={sol.image}
                  alt={sol.titleEn}
                  className={styles.cardImg}
                  loading="lazy"
                />
                <div className={styles.photoOverlay}/>
                {/* Big number watermark */}
                <div className={styles.cardNum}>0{i + 1}</div>
                {/* Tag */}
                {sol.tag && (
                  <div
                    className={styles.cardTag}
                    style={{ background: sol.color }}
                  >
                    {sol.tag}
                  </div>
                )}
              </div>

              {/* Right — content side */}
              <div className={styles.cardBody}>
                <div className={styles.cardIcon}>{sol.icon}</div>

                <div className={styles.cardHead}>
                  <h3 className={styles.cardTitleHi}>{sol.titleHi}</h3>
                  <p className={styles.cardTitleEn}>{sol.titleEn}</p>
                </div>

                <p className={styles.cardTagline}>{sol.tagline}</p>
                <p className={styles.cardDesc}>{sol.desc}</p>

                {/* Savings highlight */}
                <div className={styles.savingsBox}>
                  <span className={styles.savingsIcon}>💰</span>
                  <div>
                    <div className={styles.savingsHi}>{sol.savingsHi}</div>
                    <div className={styles.savingsEn}>{sol.savingsEn}</div>
                  </div>
                </div>

                {/* Benefits grid */}
                <div className={styles.benefitsGrid}>
                  {sol.benefits.map((b, j) => (
                    <div key={j} className={styles.benefit}>
                      <span className={styles.bIcon}>{b.icon}</span>
                      <div>
                        <div className={styles.bHi}>{b.hi}</div>
                        <div className={styles.bEn}>{b.en}</div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Sizes + subsidy */}
                <div className={styles.metaRow}>
                  <div className={styles.sizesWrap}>
                    <span className={styles.metaLabel}>Size</span>
                    <div className={styles.sizes}>
                      {sol.sizes.map((s, j) => (
                        <span key={j} className={styles.sizeChip}>{s}</span>
                      ))}
                    </div>
                  </div>
                  <div className={styles.subsidyWrap}>
                    <span className={styles.metaLabel}>Subsidy</span>
                    <span className={styles.subsidyVal}
                      style={{ color: sol.color }}>
                      {sol.subsidy}
                    </span>
                  </div>
                </div>

                <Link href="/contact" className={styles.cardCta}
                  style={{ background: sol.color }}>
                  अभी बुक करें →
                </Link>
              </div>

            </div>
          ))}

        </div>
      </div>

      {/* Scroll progress indicator dots */}
      <div className={styles.dots}>
        {SOLUTIONS.map((_, i) => (
          <div key={i} className={styles.dot}/>
        ))}
      </div>

      {/* Quad curve → HowItWorks (#FFF5E6 warm) — dips DOWN */}
      <div className={styles.curveWrap}>
        <svg
          viewBox="0 0 1440 90"
          preserveAspectRatio="none"
          aria-hidden="true"
          className={styles.curveSvg}
        >
          <path d="M0,0 Q720,90 1440,0 L1440,90 L0,90 Z" fill="#FFF5E6"/>
        </svg>
      </div>

    </section>
  )
}