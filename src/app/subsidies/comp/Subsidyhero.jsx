'use client'
import Link from 'next/link'
import styles from '../css/Subsidyhero.module.css'

const SUBSIDY_ROWS = [
  { label: '1 kW System', val: '₹30,000', pct: '60% of cost',  featured: false },
  { label: '2 kW System', val: '₹60,000', pct: '60% of cost',  featured: false },
  { label: '3 kW System', val: '₹78,000', pct: '60% + 40%',    featured: true  },
  { label: '4+ kW System',val: '₹78,000', pct: 'Capped at 3kW',featured: false },
]

const PILLS = [
  'MNRE Certified',
  'Direct Bank Transfer', 
  'No Office Visits',
  'Valid till FY 2026–27',
]

export default function SubsidyHero() {
  return (
    <section className={styles.hero}>

      {/* Saffron top band */}
      <div className={styles.topBand} aria-hidden="true">
        <div className={styles.bandSaffron}/>
        <div className={styles.bandWhite}/>
        <div className={styles.bandGreen}/>
      </div>

      {/* Big watermark text */}
      <div className={styles.watermark} aria-hidden="true">
        PM SURYA GHAR
      </div>

      {/* Decorative sun rays */}
      <div className={styles.sunRays} aria-hidden="true">
        {Array.from({length: 12}, (_, i) => (
          <div key={i} className={styles.ray}
            style={{transform: `rotate(${i * 30}deg)`}}/>
        ))}
      </div>

      <div className={styles.inner}>

        {/* ── LEFT ── */}
        <div className={styles.left}>

          {/* Govt badge */}
          <div className={styles.govtBadge}>
            <div className={styles.govtFlag}>
              <span className={styles.flagSaffron}/>
              <span className={styles.flagWhite}>
                <span className={styles.flagChakra}>✦</span>
              </span>
              <span className={styles.flagGreen}/>
            </div>
            <div className={styles.govtBadgeText}>
              <span className={styles.govtBadgeTop}>भारत सरकार · Government of India</span>
              <span className={styles.govtBadgeSub}>Ministry of New & Renewable Energy</span>
            </div>
            <span className={styles.liveTag}>● Live</span>
          </div>

          {/* Main title */}
          <h1 className={styles.title}>
            <span className={styles.schemeTag}>PM Surya Ghar Muft Bijli Yojana</span>
            <span className={styles.titleHindi}>सोलर लगाएँ —</span>
            <span className={styles.titleAmt}>
              ₹78,000
              <span className={styles.titleAmtSub}> सब्सिडी <span style={{
                marginLeft:"6px",
              }}>पाएँ</span></span>
            </span>
          </h1>

          <p className={styles.desc}>
            भारत सरकार की <strong>दुनिया की सबसे बड़ी</strong> Rooftop Solar Scheme।
            अपनी छत पर सोलर लगाएँ, SBPDCL नेट मीटर लगवाएँ, और सब्सिडी
            सीधे बैंक में पाएँ। Srishti Solar सारा काम करती है।
          </p>

          {/* Key facts — horizontal */}
          <div className={styles.facts}>
            <div className={styles.fact}>
              <span className={styles.factNum}>300</span>
              <span className={styles.factLabel}>Units मुफ्त/माह</span>
            </div>
            <div className={styles.factDiv}/>
            <div className={styles.fact}>
              <span className={styles.factNum}>1 Cr</span>
              <span className={styles.factLabel}>घरों का लक्ष्य</span>
            </div>
            <div className={styles.factDiv}/>
            <div className={styles.fact}>
              <span className={styles.factNum}>₹75K Cr</span>
              <span className={styles.factLabel}>सरकारी बजट</span>
            </div>
            <div className={styles.factDiv}/>
            <div className={styles.fact}>
              <span className={styles.factNum}>FY27</span>
              <span className={styles.factLabel}>Valid Till</span>
            </div>
          </div>

          <div className={styles.pills}>
            {PILLS.map(p => (
              <span key={p} className={styles.pill}>✓ {p}</span>
            ))}
          </div>

          <div className={styles.ctas}>
            <Link href="/contact" className={styles.ctaPrimary}>
              अभी आवेदन करें
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
            <a href="tel:+919931013345" className={styles.ctaCall}>
              📞 99310 13345
            </a>
          </div>

          {/* Srishti trust line */}
          <div className={styles.trustLine}>
            <span className={styles.trustCheck}>✓</span>
            Srishti Solar ने अब तक <strong>41+ families</strong> को <strong>₹31,98,000</strong> subsidy दिलाई
          </div>

        </div>

        {/* ── RIGHT — Certificate card ── */}
        <div className={styles.right}>

          {/* Certificate stamp decoration */}
          <div className={styles.certWrap}>

            {/* Top seal */}
            <div className={styles.certSeal}>
              <div className={styles.sealRing}>
                <div className={styles.sealInner}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                  </svg>
                </div>
              </div>
              <div className={styles.sealText}>
                <div className={styles.sealTitle}>PM Surya Ghar Yojana</div>
                <div className={styles.sealSub}>Official Subsidy Certificate</div>
              </div>
              <div className={styles.sealLive}>
                <span/>Live
              </div>
            </div>

            <div className={styles.certDivider}/>

            {/* Big amount */}
            <div className={styles.certAmt}>
              <div className={styles.certAmtLabel}>Maximum Government Subsidy</div>
              <div className={styles.certAmtNum}>₹78,000</div>
              <div className={styles.certAmtNote}>Capped at 3kW · सीधे बैंक खाते में (DBT)</div>
            </div>

            <div className={styles.certDivider}/>

            {/* Slab rows */}
            <div className={styles.certRows}>
              {SUBSIDY_ROWS.map((r, i) => (
                <div key={i} className={`${styles.certRow} ${r.featured ? styles.certRowFeatured : ''}`}>
                  <div>
                    <div className={styles.certRowLabel}>{r.label}</div>
                    <div className={styles.certRowPct}>{r.pct}</div>
                  </div>
                  <div className={styles.certRowVal}>{r.val}</div>
                </div>
              ))}
            </div>

            <div className={styles.certDivider}/>

            {/* DBT note */}
            <div className={styles.certDbt}>
              <span className={styles.certDbtDot}/>
              <span>Direct Benefit Transfer · कोई बिचौलिया नहीं · SBPDCL Approved</span>
            </div>

            {/* Decorative stamp */}
            <div className={styles.stampDecor} aria-hidden="true">
              <div className={styles.stampRing}>
                <span>APPROVED</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}