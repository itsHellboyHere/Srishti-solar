'use client'

import { useEffect, useRef } from 'react'
import { 
  Zap, 
  ShieldCheck, 
  TrendingUp, 
  FileText, 
  Star, 
  WalletCards 
} from 'lucide-react'
import styles from './Whyus.module.css'

const REASONS = [
  { 
    Icon: Zap, 
    stat: '72', 
    unit: 'Hrs', 
    title: 'Fastest Installation', 
    desc: 'From site visit to a live system in just 72 hours. Bihar’s most efficient MNRE-certified teams.', 
    tag: 'Industry Record' 
  },
  { 
    Icon: ShieldCheck, 
    stat: '78k', 
    unit: '₹', 
    title: 'Max Subsidy Support', 
    desc: 'Full assistance for PM Surya Ghar Yojana. Get up to ₹78,000 directly in your bank account.', 
    tag: 'Govt Approved' 
  },
  { 
    Icon: TrendingUp, 
    stat: '90', 
    unit: '%', 
    title: 'Bill Savings', 
    desc: 'Verified savings up to 90% on electricity bills. Our Patna & Bokaro customers save ₹3,200/month on average.', 
    tag: 'Verified Data' 
  },
  { 
    Icon: FileText, 
    stat: '100', 
    unit: '%', 
    title: 'Zero Paperwork', 
    desc: 'We handle all documentation with SBPDCL and NBPDCL for net-metering and DISCOM approvals.', 
    tag: 'Authorized Partner' 
  },
  { 
    Icon: Star, 
    stat: '5', 
    unit: 'Yr', 
    title: 'Free Maintenance', 
    desc: '5 years of complimentary Annual Maintenance (AMC) including panel cleaning and health checks.', 
    tag: 'Risk Free' 
  },
  { 
    Icon: WalletCards, 
    stat: 'EMI', 
    unit: 'Opt', 
    title: 'Easy Financing', 
    desc: 'Low-interest solar loan options and EMI facilities available to make your transition affordable.', 
    tag: 'Budget Friendly' 
  },
]

export default function WhyUs() {
  const headerRef = useRef(null)
  const cardsRef = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.show)
        }
      })
    }, { threshold: 0.1 })

    if (headerRef.current) observer.observe(headerRef.current)
    cardsRef.current.forEach(card => card && observer.observe(card))
    
    return () => observer.disconnect()
  }, [])

  return (
    <section className={styles.section}>
      <div className={styles.waveTop}>
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path d="M0,0 L0,60 C80,100 160,120 280,105 C400,90 520,45 640,55 C760,65 880,100 1000,95 C1120,90 1280,55 1440,65 L1440,0 Z" fill="#0E0904"/>
        </svg>
      </div>

      <div className={styles.container}>
        <div className={styles.header} ref={headerRef}>
          <span className={styles.eyebrow}>Why Srishti Solar</span>
          <h2 className={styles.title}>The Smarter Choice For <span className={styles.accent}>Every Roof</span></h2>
        </div>

        <div className={styles.grid}>
          {REASONS.map((r, i) => (
            <div 
              key={i} 
              ref={el => cardsRef.current[i] = el}
              className={styles.card} 
              style={{ '--delay': `${i * 0.1}s` }}
            >
              <div className={styles.cardHeader}>
                <div className={styles.iconBox}>
                   {/* Setting a default stroke width of 2 for a clean look */}
                  <r.Icon size={24} strokeWidth={2} />
                </div>
                <span className={styles.tag}>{r.tag}</span>
              </div>
              
              <div className={styles.statContainer}>
                <span className={styles.stat}>{r.stat}</span>
                <span className={styles.unit}>{r.unit}</span>
              </div>
              
              <h3 className={styles.cardTitle}>{r.title}</h3>
              <p className={styles.cardDesc}>{r.desc}</p>
              <div className={styles.glow} />
            </div>
          ))}
        </div>
      </div>

      <div className={styles.waveBottom}>
        <svg viewBox="0 0 1440 90" preserveAspectRatio="none">
          <path d="M0,90 L0,45 C180,75 360,10 540,25 C720,40 900,80 1080,68 C1260,56 1360,28 1440,32 L1440,90 Z" fill="var(--bg-base)"/>
        </svg>
      </div>
    </section>
  )
}