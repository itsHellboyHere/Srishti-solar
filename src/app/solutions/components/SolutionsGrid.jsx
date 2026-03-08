'use client'
import Link from 'next/link'
import { SOLUTIONS } from '@/data/solutions'
import styles from '../css/SolutionsGrid.module.css'
import {
  Home, Building2, BatteryFull, Landmark,
  Zap, IndianRupee, Wrench, TrendingUp,
  HardHat, Shield, MapPin, Plug,
  Clipboard, ArrowRight,
} from 'lucide-react'

const CARD_ICONS = {
  'home':     <Home      size={26} strokeWidth={1.8}/>,
  'building': <Building2 size={26} strokeWidth={1.8}/>,
  'battery':  <BatteryFull size={26} strokeWidth={1.8}/>,
  'landmark': <Landmark  size={26} strokeWidth={1.8}/>,
}

const BENEFIT_ICONS = {
  'zap':       <Zap          size={15} strokeWidth={2}/>,
  'rupee':     <IndianRupee  size={15} strokeWidth={2}/>,
  'wrench':    <Wrench       size={15} strokeWidth={2}/>,
  'trending':  <TrendingUp   size={15} strokeWidth={2}/>,
  'hard-hat':  <HardHat      size={15} strokeWidth={2}/>,
  'shield':    <Shield       size={15} strokeWidth={2}/>,
  'battery':   <BatteryFull  size={15} strokeWidth={2}/>,
  'map-pin':   <MapPin       size={15} strokeWidth={2}/>,
  'plug':      <Plug         size={15} strokeWidth={2}/>,
  'landmark':  <Landmark     size={15} strokeWidth={2}/>,
  'clipboard': <Clipboard    size={15} strokeWidth={2}/>,
}

export default function SolutionsGrid() {
  return (
    <section className={styles.section}>
      <div className={styles.gridLines} aria-hidden="true"/>
      <div className={styles.inner}>
        <div className={styles.header}>
          <span className={`${styles.eyebrow} ${styles.fadeUp1}`}>
            हमारे समाधान · Our Solutions
          </span>
          <h2 className={`${styles.title} ${styles.fadeUp2}`}>
            हर ज़रूरत के लिए{' '}
            <span className={styles.gold}>एक समाधान</span>
          </h2>
          <p className={`${styles.sub} ${styles.fadeUp3}`}>
            घर, दुकान, खेत — जहाँ भी हो, सोलर है।
          </p>
        </div>

        <div className={styles.grid}>
          {SOLUTIONS.map((sol, i) => (
            <div
              key={sol.id}
              id={sol.id}
              className={`${styles.card} ${styles[`fadeUp${Math.min(i + 2, 5)}`]}`}
            >
              {/* Photo bg */}
              <div className={styles.cardBg}>
                <img
                  src={sol.image}
                  alt={sol.titleEn}
                  className={styles.cardImg}
                  loading="lazy"
                />
                <div className={styles.cardOverlay}/>
              </div>

              {/* Tag */}
              {sol.tag && (
                <div className={styles.tag} style={{ background: sol.color }}>
                  {sol.tag}
                </div>
              )}

              {/* Content */}
              <div className={styles.cardContent}>

                {/* Card icon — lucide */}
                <div className={styles.cardIcon}>
                  {CARD_ICONS[sol.iconKey] ?? <Zap size={26} strokeWidth={1.8}/>}
                </div>

                <h3 className={styles.cardTitleHi}>{sol.titleHi}</h3>
                <p className={styles.cardTitleEn}>{sol.titleEn}</p>
                <p className={styles.cardTagline}>{sol.tagline}</p>

                {/* Benefits */}
                <ul className={styles.benefits}>
                  {sol.benefits.slice(0, 3).map((b, j) => (
                    <li key={j} className={styles.benefit}>
                      <span className={styles.bIcon}>
                        {BENEFIT_ICONS[b.iconKey] ?? <CheckCircle2 size={15} strokeWidth={2}/>}
                      </span>
                      <span>{b.hi}</span>
                    </li>
                  ))}
                </ul>

                {/* Meta */}
                <div className={styles.cardMeta}>
                  <span className={styles.subsidyPill}>{sol.subsidy}</span>
                  <div className={styles.sizes}>
                    {sol.sizes.map((s, j) => (
                      <span key={j} className={styles.size}>{s}</span>
                    ))}
                  </div>
                </div>

                <Link href="/contact" className={styles.cardCta}>
                  जानकारी लें
                  <ArrowRight size={14} strokeWidth={2.5}/>
                </Link>

              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.curveWrap}>
        <svg viewBox="0 0 1440 90" preserveAspectRatio="none"
          aria-hidden="true" className={styles.curveSvg}>
          <path d="M0,90 Q720,0 1440,90 L1440,90 L0,90 Z" fill="#0E0904"/>
        </svg>
      </div>
    </section>
  )
}