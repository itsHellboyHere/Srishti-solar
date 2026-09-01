'use client'
import { useState } from 'react'
import Link from 'next/link'
import styles from '../css/Subsidycalculator.module.css'

/* ── Calculation assumptions (transparent + editable) ───────────────────
   Subsidy : PM Surya Ghar — Central (CFA) + Bihar State (SFA), FY 2026–27
             1kW ₹40,000 · 2kW ₹80,000 · 3kW+ ₹98,000 (capped at 3kW)
   Gen     : ~4 units/day per kW (Bihar avg irradiance benchmark)
   Price   : approximate benchmark system cost (client-supplied)
   Saving  : monthly units × electricity tariff (user-adjustable slider)
──────────────────────────────────────────────────────────────────────── */

const GEN_PER_KW_DAY = 4          // units generated per day per kW
const TARIFF_MIN = 5
const TARIFF_MAX = 10
const TARIFF_DEFAULT = 7.5        // ₹/unit — Bihar domestic avg benchmark

const TIERS = [
  { kw: '1',  calcKw: 1, label: '1 kW',  subsidy: 40000, price: 115000, roofArea: 65,  desc: 'छोटा घर · 2–3 पंखे + बल्ब', descEn: 'Small home · fans + lights', tag: null },
  { kw: '2',  calcKw: 2, label: '2 kW',  subsidy: 80000, price: 155000, roofArea: 130, desc: 'मध्यम घर · AC + फ्रिज + बल्ब', descEn: 'Medium home · AC + fridge',   tag: null },
  { kw: '3',  calcKw: 3, label: '3 kW',  subsidy: 98000, price: 205000, roofArea: 200, desc: 'पूरा घर · 2 AC + सब कुछ',    descEn: 'Full home · 2 ACs + all',   tag: 'Best Value' },
  { kw: '4+', calcKw: 4, label: '4+ kW', subsidy: 98000, price: 250000, roofArea: 270, desc: 'बड़ा घर या व्यवसाय',        descEn: 'Large home or business',    tag: 'Commercial' },
]

function fmt(n) { return '₹' + Math.round(n).toLocaleString('en-IN') }

export default function SubsidyCalculator() {
  const [sel, setSel]       = useState(0)
  const [tariff, setTariff] = useState(TARIFF_DEFAULT)

  const t            = TIERS[sel]
  const unitsDay     = t.calcKw * GEN_PER_KW_DAY
  const monthlyUnits = unitsDay * 30
  const afterSubsidy = t.price - t.subsidy
  const monthlySave  = monthlyUnits * tariff
  const yearSave     = monthlySave * 12
  const payback      = yearSave > 0 ? (afterSubsidy / yearSave).toFixed(1) : '—'
  const life25       = yearSave * 25

  const fillPct = ((tariff - TARIFF_MIN) / (TARIFF_MAX - TARIFF_MIN)) * 100

  return (
    <section className={styles.section} id='calculator'>
      <div className={styles.inner}>

        <div className={styles.head}>
          <span className={styles.eyebrow}>सब्सिडी कैलकुलेटर · Subsidy Calculator</span>
          <h2 className={styles.title}>
            अपनी बचत <span className={styles.gold}>अभी देखें</span>
          </h2>
          <p className={styles.subtitle}>सिस्टम साइज़ और बिजली दर चुनें — कीमत, सब्सिडी और असली बचत तुरंत देखें</p>
        </div>

        <div className={styles.calc}>

          {/* ── Left — Inputs ── */}
          <div className={styles.left}>

            <p className={styles.pickLabel}>सिस्टम साइज़ चुनें · Choose size</p>
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

            {/* Tariff slider — real calculator input */}
            <div className={styles.tariffBox}>
              <div className={styles.tariffTop}>
                <div>
                  <span className={styles.tariffLbl}>आपकी बिजली दर</span>
                  <span className={styles.tariffLblEn}>Your electricity rate</span>
                </div>
                <span className={styles.tariffVal}>
                  ₹{tariff.toFixed(1)}<span className={styles.tariffValUnit}>/यूनिट</span>
                </span>
              </div>
              <input
                type="range"
                min={TARIFF_MIN}
                max={TARIFF_MAX}
                step={0.5}
                value={tariff}
                onChange={e => setTariff(parseFloat(e.target.value))}
                className={styles.slider}
                style={{ background: `linear-gradient(90deg, var(--sun-core) ${fillPct}%, rgba(26,18,9,0.12) ${fillPct}%)` }}
                aria-label="Electricity tariff per unit"
              />
              <div className={styles.sliderScale}>
                <span>₹{TARIFF_MIN}</span>
                <span>₹{TARIFF_MAX}</span>
              </div>
            </div>

            <div className={styles.meta}>
              <div className={styles.metaItem}>
                <span className={styles.metaIcon}>☀️</span>
                <span className={styles.metaVal}>{unitsDay} units/day</span>
                <span className={styles.metaLbl}>रोज़ बनेगी</span>
              </div>
              <div className={styles.metaItem}>
                <span className={styles.metaIcon}>📐</span>
                <span className={styles.metaVal}>{t.roofArea} sq ft</span>
                <span className={styles.metaLbl}>छत की जगह</span>
              </div>
            </div>

            <p className={styles.note}>
              * सब्सिडी PM Surya Ghar (केंद्र + बिहार राज्य) के अनुसार। उत्पादन ~4 यूनिट/दिन
              प्रति kW। बचत आपकी दर ₹{tariff.toFixed(1)}/यूनिट पर आधारित — वास्तविक बचत उपयोग
              और धूप पर निर्भर करती है।
            </p>
          </div>

          {/* ── Right — Result card ── */}
          <div className={styles.right}>
            <div className={styles.card}>

              <div className={styles.cardHead}>
                <span className={styles.cardHeadKw}>{t.label}</span>
                <span className={styles.cardHeadTag}>Rooftop Solar</span>
              </div>

              <div className={styles.cardRows}>
                <div className={styles.row}>
                  <span className={styles.rowLbl}>सिस्टम की कुल कीमत</span>
                  <span className={styles.rowVal}>{fmt(t.price)}</span>
                </div>

                <div className={styles.row}>
                  <span className={styles.rowLbl}>सरकारी सब्सिडी <em>(केंद्र + राज्य)</em></span>
                  <span className={styles.rowValGreen}>− {fmt(t.subsidy)}</span>
                </div>

                <div className={styles.divider}/>

                <div className={`${styles.row} ${styles.rowFinal}`}>
                  <span className={styles.rowFinalLbl}>सब्सिडी के बाद आपकी लागत</span>
                  <span className={styles.rowFinalVal}>{fmt(afterSubsidy)}</span>
                </div>
              </div>

              <div className={styles.savings}>
                {[
                  { val: fmt(monthlySave), lbl: 'हर महीने बचत'  },
                  { val: fmt(yearSave),    lbl: 'हर साल बचत'    },
                  { val: `${payback} yr`,  lbl: 'पैसा वापस'      },
                  { val: fmt(life25),      lbl: '25 साल में बचत' },
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