'use client'
import Link from 'next/link'
import styles from './ZerobillHero.module.css'

const PROOF_STATS = [
  { val: '₹0',   label: 'बिजली बिल देय',       sub: 'Feb 2026 — Patna'      },
  { val: '292',  label: 'Units Solar Balance',   sub: 'Net meter credited'    },
  { val: '23.8', label: 'Avg Supply Hrs/day',    sub: 'SBPDCL verified'       },
  { val: '41+',  label: 'Bill Families',    sub: 'Across Bihar'          },
]

export default function ZeroBillHero() {
  return (
    <section className={styles.hero}>

      {/* Background glow orbs */}
      <div className={styles.orb1} aria-hidden="true" />
      <div className={styles.orb2} aria-hidden="true" />

      <div className={styles.inner}>

        {/* Left */}
        <div className={styles.left}>

          <div className={styles.badge}>
            <span className={styles.badgeDot} />
            SBPDCL Verified · Real Customer Proof
          </div>

          <h1 className={styles.title}>
            बिजली बिल को
            <span className={styles.zeroLine}>
              <span className={styles.zeroStrike}>₹2,000</span>
              <span className={styles.zeroAmt}> ₹0</span>
            </span>
            करें — हमेशा के लिए
          </h1>

          <p className={styles.desc}>
            Solar panel लगाएँ, net metering करवाएँ, और हर महीने बिजली बिल
            ज़ीरो पाएँ। यह सिर्फ वादा नहीं — <strong>असली SBPDCL bill का प्रमाण है।</strong>
          </p>

          <div className={styles.pills}>
            {[
              'SBPDCL Net Metering',
              'PM Surya Ghar ₹78,000',
              '300 Units Free/Month',
              'Zero Bill Guarantee',
            ].map(p => (
              <span key={p} className={styles.pill}>✓ {p}</span>
            ))}
          </div>

          <div className={styles.ctas}>
            <Link href="/contact" className={styles.ctaPrimary}>
              मेरा भी Zero Bill चाहिए
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
            <a href="tel:+919931013345" className={styles.ctaSecondary}>
              📞 99310 13345
            </a>
          </div>

        </div>

        {/* Right — proof card */}
        <div className={styles.right}>
          <div className={styles.proofCard}>

            <div className={styles.proofHeader}>
              <div className={styles.proofDot} />
              <span className={styles.proofLabel}>Live Proof · असली बिल</span>
              <span className={styles.proofVerified}>✓ SBPDCL Verified</span>
            </div>

            <div className={styles.proofBillAmt}>₹0.00</div>
            <div className={styles.proofBillSub}>कुल देय राशि · Total Amount Due</div>
            <div className={styles.proofBillLoc}>Smt. Sita Devi · Gardanibagh, Patna · Feb 2026</div>

            <div className={styles.proofDivider} />

            <div className={styles.proofStats}>
              {PROOF_STATS.map((s, i) => (
                <div key={i} className={styles.proofStat}>
                  <span className={styles.proofStatVal}>{s.val}</span>
                  <span className={styles.proofStatLabel}>{s.label}</span>
                  <span className={styles.proofStatSub}>{s.sub}</span>
                </div>
              ))}
            </div>

            <div className={styles.proofFooter}>
              3kW Solar System · N-Type Topcon Panel · SBPDCL Net Meter
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}