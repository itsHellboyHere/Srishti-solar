'use client'

import { useEffect, useRef } from 'react'
import { Zap, ShieldCheck, TrendingUp, FileText, Star, WalletCards } from 'lucide-react'
import styles from './Whyus.module.css'

const REASONS = [
  { Icon: Zap,         stat: '72',  unit: 'Hrs', title: 'Fastest Installation',  desc: "From site visit to live in 72 hours. Bihar's most efficient MNRE-certified teams work around your schedule.",  tag: 'Record'         },
  { Icon: ShieldCheck, stat: '78k', unit: '₹',   title: 'Max Subsidy Support',   desc: 'Full PM Surya Ghar assistance. Get up to ₹78,000 directly in your bank — we file all 14 documents.',          tag: 'Govt Approved'  },
  { Icon: TrendingUp,  stat: '90',  unit: '%',   title: 'Bill Savings',          desc: 'Verified savings up to 90%. Patna & Bokaro customers average ₹3,200/month savings from day one.',              tag: 'Verified'       },
  { Icon: FileText,    stat: '100', unit: '%',   title: 'Zero Paperwork',        desc: 'We handle all SBPDCL and NBPDCL documentation, DISCOM approvals, and net-metering applications.',             tag: 'Authorized'     },
  { Icon: Star,        stat: '5',   unit: 'Yr',  title: 'Free Maintenance',      desc: '5-year complimentary AMC including scheduled cleaning, inverter diagnostics and health checks.',               tag: 'Risk Free'      },
  { Icon: WalletCards, stat: 'EMI', unit: '',    title: 'Easy Financing',        desc: 'Low-interest solar loans and 0% EMI options available. Go solar with ₹0 upfront investment.',                 tag: 'Budget Friendly'},
]

export default function WhyUs() {
  const headerRef = useRef(null)
  const cardsRef  = useRef([])

  useEffect(() => {
    const io = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add(styles.show); io.unobserve(e.target) }
      }),
      { threshold: 0.1 }
    )
    if (headerRef.current) io.observe(headerRef.current)
    cardsRef.current.forEach(el => el && io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <section className={styles.section}>

      {/* Wave — dark hero → light */}
      <div className={styles.waveTop} aria-hidden="true">
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path d="M0,0 L0,60 C80,100 160,120 280,105 C400,90 520,45 640,55 C760,65 880,100 1000,95 C1120,90 1280,55 1440,65 L1440,0 Z" fill="#0E0904"/>
        </svg>
      </div>

      <div className={styles.container}>

        <div className={styles.header} ref={headerRef}>
          <span className={styles.eyebrow}>The Srishti Advantage</span>
          <h2 className={styles.title}>
            The Smarter Choice For <span className={styles.accent}>Every Roof</span>
          </h2>
          <p className={styles.subtext}>
            Join 2,500+ families who have already transitioned to free energy.
          </p>
        </div>

        <div className={styles.grid}>
          {REASONS.map((r, i) => (
            <div key={i} ref={el => cardsRef.current[i] = el}
              className={styles.card} style={{ '--delay': `${i * 0.11}s` }}>
              <div className={styles.cardHeader}>
                <div className={styles.iconBox}><r.Icon size={20} strokeWidth={2.5} /></div>
                <span className={styles.tag}>{r.tag}</span>
              </div>
              <div className={styles.statContainer}>
                <span className={styles.stat}>{r.stat}</span>
                {r.unit && <span className={styles.unit}>{r.unit}</span>}
              </div>
              <h3 className={styles.cardTitle}>{r.title}</h3>
              <p className={styles.cardDesc}>{r.desc}</p>
              <div className={styles.cardLine} />
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}