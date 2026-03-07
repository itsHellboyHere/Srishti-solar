'use client'
import Link from 'next/link'
import styles from '../css/Subsidyhero.module.css'

export default function SubsidyHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.inner}>

        <div className={styles.left}>
          <span className={styles.eyebrow}>
            <span className={styles.dot}/>
            PM सूर्य घर योजना · Govt. of India
          </span>

          <h1 className={styles.title}>
            पाएँ सरकारी<br/>
            <span className={styles.gold}>सब्सिडी ₹78,000</span>
          </h1>

          <p className={styles.desc}>
            PM Surya Ghar Muft Bijli Yojana के तहत अपनी छत पर सोलर लगाएँ
            और सरकार से सीधे बैंक में ₹78,000 तक की सब्सिडी पाएँ।
            Srishti Solar सारा काम करती है — आपको कहीं जाने की ज़रूरत नहीं।
          </p>

          <div className={styles.pills}>
            {['MNRE Certified', 'Direct Bank Transfer', 'No Office Visits', 'Valid till FY 2026–27'].map(p => (
              <span key={p} className={styles.pill}>✓ {p}</span>
            ))}
          </div>

          <div className={styles.ctas}>
            <Link href="/contact" className={styles.ctaPrimary}>
              अभी आवेदन करें
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

        <div className={styles.right}>
          <div className={styles.card}>
            <div className={styles.cardLabel}>PM Surya Ghar Yojana</div>
            <div className={styles.cardAmount}>₹78,000</div>
            <div className={styles.cardSub}>Maximum Subsidy — Capped at 3kW</div>
            <div className={styles.cardDivider}/>
            <div className={styles.cardRows}>
              {[
                { label: '1 kW System', val: '₹30,000', pct: '60% of cost' },
                { label: '2 kW System', val: '₹60,000', pct: '60% of cost' },
                { label: '3 kW System', val: '₹78,000', pct: '60% + 40%'   },
                { label: '4+ kW System',val: '₹78,000', pct: 'Capped at 3kW' },
              ].map(r => (
                <div key={r.label} className={styles.cardRow}>
                  <div className={styles.cardRowLeft}>
                    <span className={styles.cardRowLabel}>{r.label}</span>
                    <span className={styles.cardRowPct}>{r.pct}</span>
                  </div>
                  <span className={styles.cardRowVal}>{r.val}</span>
                </div>
              ))}
            </div>
            <div className={styles.cardFooter}>
              सब्सिडी सीधे आपके बैंक खाते में · Direct bank transfer
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}