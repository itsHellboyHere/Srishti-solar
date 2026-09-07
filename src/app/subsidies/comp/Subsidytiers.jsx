'use client'
import Link from 'next/link'
import styles from '../css/Subsidytiers.module.css'

/* afterSubsidy is computed (price − subsidy), never hardcoded */
const TIERS = [
  {
    kw: 1, label: '1 kW',
    subsidy: 40000, central: 30000, state: 10000, price: 65000,
    saving: 1000, tag: null,
    descHindi: 'छोटा घर · 2–3 पंखे + बल्ब',
    descEn: 'Small home · Fans + lights',
  },
  {
    kw: 2, label: '2 kW',
    subsidy: 80000, central: 60000, state: 20000, price: 130000,
    saving: 1800, tag: null,
    descHindi: 'मध्यम घर · AC + फ्रिज + बल्ब',
    descEn: 'Medium home · AC + fridge',
  },
  {
    kw: 3, label: '3 kW',
    subsidy: 98000, central: 78000, state: 20000, price: 189000,
    saving: 2500, tag: 'Best Value',
    descHindi: 'पूरा घर · 2 AC + सब कुछ',
    descEn: 'Full home · 2 ACs + all appliances',
  },
  {
    kw: '4+', label: '4+ kW',
    subsidy: 98000, central: 78000, state: 20000, price: 260000,
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
            सब्सिडी 3kW पर cap है — ₹98,000 (केंद्र + राज्य) से ज़्यादा नहीं मिलती
          </p>
        </div>

        <div className={styles.grid}>
          {TIERS.map((t) => {
            const afterSubsidy = t.price - t.subsidy
            return (
              <div key={t.kw}
                className={`${styles.card} ${t.tag === 'Best Value' ? styles.featured : ''}`}>

                {t.tag && <div className={styles.tag}>{t.tag}</div>}

                <div className={styles.kw}>{t.label}</div>
                <div className={styles.descHindi}>{t.descHindi}</div>
                <div className={styles.descEn}>{t.descEn}</div>

                <div className={styles.divider}/>

                <div className={styles.subsidy}>{fmt(t.subsidy)}</div>
                <div className={styles.subsidyLabel}>Total Government Subsidy</div>

                {/* Central + State breakup */}
                <div className={styles.breakup}>
                  <div className={styles.breakItem}>
                    <span className={styles.breakVal}>{fmt(t.central)}</span>
                    <span className={styles.breakLabel}>केंद्र</span>
                  </div>
                  <span className={styles.breakPlus}>+</span>
                  <div className={styles.breakItem}>
                    <span className={styles.breakVal}>{fmt(t.state)}</span>
                    <span className={styles.breakLabel}>बिहार राज्य</span>
                  </div>
                </div>

                <div className={styles.divider}/>

                <div className={styles.rows}>
                  <div className={styles.row}>
                    <span>System Price</span>
                    <span>{fmt(t.price)}</span>
                  </div>
                  <div className={`${styles.row} ${styles.rowGreen}`}>
                    <span>After Subsidy</span>
                    <span>{fmt(afterSubsidy)}</span>
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
            )
          })}
        </div>

        <p className={styles.note}>
          * Subsidy amounts as per PM Surya Ghar (Central + Bihar State) — pmsuryaghar.gov.in.
          System prices are approximate benchmark costs and may vary.
          Valid till FY 2026–27.
        </p>
      </div>
    </section>
  )
}