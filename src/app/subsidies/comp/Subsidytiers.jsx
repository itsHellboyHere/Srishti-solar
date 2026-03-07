'use client'
import Link from 'next/link'
import styles from '../css/Subsidytiers.module.css'

const TIERS = [
  {
    kw: 1, label: '1 kW',
    subsidy: 30000, price: 65000, afterSubsidy: 35000,
    saving: 1000, tag: null,
    descHindi: 'छोटा घर · 2–3 पंखे + बल्ब',
    descEn: 'Small home · Fans + lights',
  },
  {
    kw: 2, label: '2 kW',
    subsidy: 60000, price: 130000, afterSubsidy: 70000,
    saving: 1800, tag: null,
    descHindi: 'मध्यम घर · AC + फ्रिज + बल्ब',
    descEn: 'Medium home · AC + fridge',
  },
  {
    kw: 3, label: '3 kW',
    subsidy: 78000, price: 189000, afterSubsidy: 111000,
    saving: 2500, tag: 'Best Value',
    descHindi: 'पूरा घर · 2 AC + सब कुछ',
    descEn: 'Full home · 2 ACs + all appliances',
  },
  {
    kw: '4+', label: '4+ kW',
    subsidy: 78000, price: 260000, afterSubsidy: 182000,
    saving: 3500, tag: 'Commercial',
    descHindi: 'बड़ा घर या व्यवसाय',
    descEn: 'Large home or business',
  },
]

function fmt(n) { return '₹' + Number(n).toLocaleString('en-IN') }

export default function SubsidyTiers() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>

        <div className={styles.head}>
          <span className={styles.eyebrow}>सब्सिडी स्लैब · Subsidy Tiers</span>
          <h2 className={styles.title}>
            कितना kW,
            <span className={styles.gold}> कितनी सब्सिडी</span>
          </h2>
          <p className={styles.subtitle}>
            सब्सिडी 3kW पर cap है — ₹78,000 से ज़्यादा नहीं मिलती
          </p>
        </div>

        <div className={styles.grid}>
          {TIERS.map((t) => (
            <div key={t.kw}
              className={`${styles.card} ${t.tag === 'Best Value' ? styles.featured : ''}`}>

              {t.tag && <div className={styles.tag}>{t.tag}</div>}

              <div className={styles.kw}>{t.label}</div>
              <div className={styles.descHindi}>{t.descHindi}</div>
              <div className={styles.descEn}>{t.descEn}</div>

              <div className={styles.divider}/>

              <div className={styles.subsidy}>{fmt(t.subsidy)}</div>
              <div className={styles.subsidyLabel}>Government Subsidy</div>

              <div className={styles.divider}/>

              <div className={styles.rows}>
                <div className={styles.row}>
                  <span>System Price</span>
                  <span>{fmt(t.price)}</span>
                </div>
                <div className={`${styles.row} ${styles.rowGreen}`}>
                  <span>After Subsidy</span>
                  <span>{fmt(t.afterSubsidy)}</span>
                </div>
                <div className={styles.row}>
                  <span>Monthly Saving</span>
                  <span className={styles.saving}>{fmt(t.saving)}</span>
                </div>
              </div>

              <Link href="/contact" className={styles.btn}>
                Book {t.label} →
              </Link>
            </div>
          ))}
        </div>

        <p className={styles.note}>
          * Subsidy amounts from official PM Surya Ghar portal (pmsuryaghar.gov.in).
          System prices are approximate benchmark costs and may vary.
          Valid till FY 2026–27.
        </p>
      </div>
    </section>
  )
}