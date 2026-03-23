'use client'
import { useState } from 'react'
import Link from 'next/link'
import styles from '../css/Subsidycalculator.module.css'

// ── Verified data updated per Client Instructions ─────────────────────
// 1kW: 1.15L | 2kW: 1.55L | 3kW: 2.05L | 4+kW: 2.50L
const TIERS = [
  {
    kw: 1, label: '1 kW',
    subsidy: 30000, price: 115000, afterSubsidy: 85000,
    unitsDay: 4, saving: 1000, roofArea: 65,
    desc: 'छोटा घर · 2–3 पंखे + बल्ब', descEn: 'Small home · Fans + lights',
    tag: null,
  },
  {
    kw: 2, label: '2 kW',
    subsidy: 60000, price: 155000, afterSubsidy: 95000,
    unitsDay: 8, saving: 1800, roofArea: 130,
    desc: 'मध्यम घर · AC + फ्रिज + बल्ब', descEn: 'Medium home · AC + fridge',
    tag: null,
  },
  {
    kw: 3, label: '3 kW',
    subsidy: 78000, price: 205000, afterSubsidy: 127000,
    unitsDay: 12, saving: 2500, roofArea: 200,
    desc: 'पूरा घर · 2 AC + सब कुछ', descEn: 'Full home · 2 ACs + all',
    tag: 'Best Value',
  },
  {
    kw: '4+', label: '4+ kW',
    subsidy: 78000, price: 250000, afterSubsidy: 172000,
    unitsDay: 16, saving: 3500, roofArea: 270,
    desc: 'बड़ा घर या व्यवसाय', descEn: 'Large home or business',
    tag: 'Commercial',
  },
]

function fmt(n) { return '₹' + Number(n).toLocaleString('en-IN') }

export default function SubsidyCalculator() {
  const [sel, setSel] = useState(0)
  const t        = TIERS[sel]
  const yearSave = t.saving * 12
  const payback  = (t.afterSubsidy / yearSave).toFixed(1)
  const life25   = yearSave * 25

  return (
    <section className={styles.section} id='calculator'>
      <div className={styles.inner}>

        <div className={styles.head}>
          <span className={styles.eyebrow}>सब्सिडी कैलकुलेटर · Subsidy Calculator</span>
          <h2 className={styles.title}>
            अपनी बचत <span className={styles.gold}>अभी देखें</span>
          </h2>
          <p className={styles.subtitle}>सिस्टम साइज़ चुनें — कीमत, सब्सिडी और बचत तुरंत देखें</p>
        </div>

        <div className={styles.calc}>
          {/* Left — selector */}
          <div className={styles.left}>
            <p className={styles.pickLabel}>सिस्टम साइज़ चुनें</p>
            <div className={styles.tabs}>
              {TIERS.map((tier, i) => (
                <button key={i} onClick={() => setSel(i)}
                  className={`${styles.tab} ${sel === i ? styles.tabActive : ''}`}>
                  <span className={styles.tabKw}>{tier.label}</span>
                  {tier.tag && <span className={styles.tabTag}>{tier.tag}</span>}
                </button>
              ))}
            </div>

            <div className={styles.descBox}>
              <span className={styles.descHindi}>{t.desc}</span>
              <span className={styles.descEn}>{t.descEn}</span>
            </div>

            <div className={styles.meta}>
              <div className={styles.metaItem}>
                <span className={styles.metaIcon}>☀️</span>
                <span className={styles.metaVal}>{t.unitsDay} units/day</span>
                <span className={styles.metaLbl}>रोज़ बनेगी</span>
              </div>
              <div className={styles.metaItem}>
                <span className={styles.metaIcon}>📐</span>
                <span className={styles.metaVal}>{t.roofArea} sq ft</span>
                <span className={styles.metaLbl}>छत की जगह</span>
              </div>
            </div>

            <p className={styles.note}>
              * Subsidy figures from official PM Surya Ghar portal.
              System prices are approximate benchmark costs.
            </p>
          </div>

          {/* Right — Result card with "Sida Likhna" style */}
          <div className={styles.right}>
            <div className={styles.card}>
              <div className={styles.cardRows}>
                <div className={styles.row}>
                  <span className={styles.rowLbl}>सिस्टम की कुल कीमत</span>
                  <span className={styles.rowVal}>{fmt(t.price)}</span>
                </div>
                
                <div className={styles.row}>
                  <span className={styles.rowLbl}>सरकारी सब्सिडी (अनुमानित)</span>
                  <span className={styles.rowVal} style={{color: '#4ade80'}}>{fmt(t.subsidy)}</span>
                </div>

                <div className={styles.divider}/>
                
                <div className={`${styles.row} ${styles.rowFinal}`}>
                  <span className={styles.rowFinalLbl}>सब्सिडी के बाद आपकी लागत</span>
                  <span className={styles.rowFinalVal}>{fmt(t.afterSubsidy)}</span>
                </div>
              </div>

              <div className={styles.savings}>
                {[
                  { val: fmt(t.saving),   lbl: 'हर महीने बचत'  },
                  { val: fmt(yearSave),   lbl: 'हर साल बचत'    },
                  { val: `${payback} yr`, lbl: 'पैसा वापस'      },
                  { val: fmt(life25),     lbl: '25 साल में बचत' },
                ].map((s, i) => (
                  <div key={i} className={styles.savingItem}>
                    <span className={styles.savingVal}>{s.val}</span>
                    <span className={styles.savingLbl}>{s.lbl}</span>
                  </div>
                ))}
              </div>

              <Link href="/contact" className={styles.cta}>
                {t.label} सिस्टम बुक करें
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}