'use client'
import { useRef } from 'react'
import { SOLUTIONS } from '@/data/solutions'
import styles from '../css/SolutionsScroll.module.css'
import Link from 'next/link'
import {
  Home,
  Building2,
  BatteryFull,
  Landmark,
  Zap,
  IndianRupee,
  Wrench,
  TrendingUp,
  HardHat,
  Shield,
  MapPin,
  Plug,
  Clipboard,
  ArrowRight,
  IndianRupee as Rupee,
} from 'lucide-react'

/* ── Icon maps ── */
const CARD_ICONS = {
  'home':     <Home       size={28} strokeWidth={1.6}/>,
  'building': <Building2  size={28} strokeWidth={1.6}/>,
  'battery':  <BatteryFull size={28} strokeWidth={1.6}/>,
  'landmark': <Landmark   size={28} strokeWidth={1.6}/>,
}

const BENEFIT_ICONS = {
  'zap':       <Zap         size={14} strokeWidth={2}/>,
  'rupee':     <IndianRupee size={14} strokeWidth={2}/>,
  'wrench':    <Wrench      size={14} strokeWidth={2}/>,
  'trending':  <TrendingUp  size={14} strokeWidth={2}/>,
  'hard-hat':  <HardHat     size={14} strokeWidth={2}/>,
  'shield':    <Shield      size={14} strokeWidth={2}/>,
  'battery':   <BatteryFull size={14} strokeWidth={2}/>,
  'map-pin':   <MapPin      size={14} strokeWidth={2}/>,
  'plug':      <Plug        size={14} strokeWidth={2}/>,
  'landmark':  <Landmark    size={14} strokeWidth={2}/>,
  'clipboard': <Clipboard   size={14} strokeWidth={2}/>,
}

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
          <ArrowRight size={14} strokeWidth={2}/>
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
                <div className={styles.cardNum}>0{i + 1}</div>
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

                {/* Card icon */}
                <div className={styles.cardIcon}
                  style={{ color: sol.color }}>
                  {CARD_ICONS[sol.iconKey] ?? <Zap size={28} strokeWidth={1.6}/>}
                </div>

                <div className={styles.cardHead}>
                  <h3 className={styles.cardTitleHi}>{sol.titleHi}</h3>
                  <p className={styles.cardTitleEn}>{sol.titleEn}</p>
                </div>

                <p className={styles.cardTagline}>{sol.tagline}</p>
                <p className={styles.cardDesc}>{sol.desc}</p>

                {/* Savings highlight */}
                <div className={styles.savingsBox}>
                  <span className={styles.savingsIcon}>
                    <IndianRupee size={18} strokeWidth={2} color="#F4A300"/>
                  </span>
                  <div>
                    <div className={styles.savingsHi}>{sol.savingsHi}</div>
                    <div className={styles.savingsEn}>{sol.savingsEn}</div>
                  </div>
                </div>

                {/* Benefits grid */}
                <div className={styles.benefitsGrid}>
                  {sol.benefits.map((b, j) => (
                    <div key={j} className={styles.benefit}>
                      <span className={styles.bIcon}
                        style={{ color: sol.color, opacity: 0.8 }}>
                        {BENEFIT_ICONS[b.iconKey] ?? <Zap size={14} strokeWidth={2}/>}
                      </span>
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
                  अभी बुक करें
                  <ArrowRight size={14} strokeWidth={2.5}/>
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