'use client'

import { useEffect, useRef } from 'react'
import { Zap, ShieldCheck, TrendingUp, FileText, Star, WalletCards } from 'lucide-react'
import styles from './AdvantageSection.module.css'

const REASONS = [
  { Icon: Zap, stat: '72', unit: 'Hrs', title: 'Fastest Installation', desc: 'From site visit to live in 72 hours. Bihar’s most efficient MNRE teams.', tag: 'Record' },
  { Icon: ShieldCheck, stat: '78k', unit: '₹', title: 'Max Subsidy Support', desc: 'Full PM Surya Ghar assistance. Get up to ₹78,000 directly in your bank.', tag: 'Govt Approved' },
  { Icon: TrendingUp, stat: '90', unit: '%', title: 'Bill Savings', desc: 'Verified savings up to 90%. Patna & Bokaro customers save ₹3,200/mo.', tag: 'Verified' },
  { Icon: FileText, stat: '100', unit: '%', title: 'Zero Paperwork', desc: 'We handle all SBPDCL and NBPDCL documentation and DISCOM approvals.', tag: 'Authorized' },
  { Icon: Star, stat: '5', unit: 'Yr', title: 'Free Maintenance', desc: '5 years of complimentary AMC including cleaning and health checks.', tag: 'Risk Free' },
  { Icon: WalletCards, stat: 'EMI', unit: 'Opt', title: 'Easy Financing', desc: 'Low-interest solar loan options and EMI facilities available.', tag: 'Budget Friendly' },
]

const STEPS = [
  { num: '01', title: 'Site Visit & Consultation', desc: 'Professional survey of your roof and electricity needs.' },
  { num: '02', title: 'System Sizing', desc: 'Determining the perfect solar capacity for maximum savings.' },
  { num: '03', title: 'Online Documentation', desc: 'We handle all 14 documents for your subsidy application.' },
  { num: '04', title: 'Installation & Net Metering', desc: 'Fast 72-hour setup and DISCOM approval for net-metering.' },
  { num: '05', title: 'Subsidy Credited', desc: 'Direct benefit transfer to your account after inspection.' }
]

export default function AdvantageSection() {
  const revealRefs = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.active)
        }
      })
    }, { threshold: 0.15 })

    revealRefs.current.forEach(el => el && observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section className={styles.wrapper}>
      {/* 1. SHARED STICKY BACKGROUND */}
      <div className={styles.parallaxBg}>
        <div className={styles.overlay} />
        <img src="https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2072" alt="Solar" className={styles.bgImage} />
        <div className={styles.bigText}>SRISHTI</div>
      </div>

      <div className={styles.scrollContent}>
        {/* --- WHY US PART --- */}
        <div className={styles.container}>
          <div className={styles.header} ref={el => revealRefs.current[0] = el}>
            <span className={styles.eyebrow}>The Srishti Advantage</span>
            <h2 className={styles.title}>Smarter Choice For <span className={styles.accent}>Every Roof</span></h2>
          </div>

          <div className={styles.grid}>
            {REASONS.map((r, i) => (
              <div 
                key={i} 
                ref={el => revealRefs.current[i+1] = el} 
                className={styles.card} 
                style={{ '--delay': `${i * 0.1}s` }}
              >
                <div className={styles.cardHeader}>
                  <div className={styles.iconBox}><r.Icon size={20} strokeWidth={2.5} /></div>
                  <span className={styles.tag}>{r.tag}</span>
                </div>
                <div className={styles.statContainer}><span className={styles.stat}>{r.stat}</span><span className={styles.unit}>{r.unit}</span></div>
                <h3 className={styles.cardTitle}>{r.title}</h3>
                <p className={styles.cardDesc}>{r.desc}</p>
                <div className={styles.cardLine} />
              </div>
            ))}
          </div>
        </div>

        {/* --- PROCESS PART --- */}
        <div className={styles.processContainer}>
          <div className={styles.processGrid}>
            <div className={styles.imageSide}>
              <div className={styles.stickyImgWrapper}>
                <div className={styles.imageWrapper}>
                  <img src="/how-step.jpg" alt="Srishti Team" className={styles.mainImg} />
                  <div className={styles.glassCard}>
                    <div className={styles.badgeIcon}>✔</div>
                    <div>
                      <p className={styles.badgeTitle}>MNRE & DISCOM Registered</p>
                      <p className={styles.badgeSub}>Authorized Subsidy Vendor</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.stepsSide}>
              <div className={styles.header}>
                <span className={styles.eyebrow}>Seamless Journey</span>
                <h2 className={styles.title}>How to go Solar with <span className={styles.accent}>Subsidy</span></h2>
              </div>
              <div className={styles.timeline}>
                {STEPS.map((step, i) => (
                  <div 
                    key={i} 
                    className={styles.step} 
                    ref={el => revealRefs.current[REASONS.length + i + 1] = el}
                  >
                    <div className={styles.stepNum}>{step.num}</div>
                    <div className={styles.stepText}>
                      <h3 className={styles.stepTitle}>{step.title}</h3>
                      <p className={styles.stepDesc}>{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}