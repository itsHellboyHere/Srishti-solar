'use client'

import { useEffect, useRef } from 'react'
import styles from './Process.module.css'

const STEPS = [
  { num: '01', title: 'Site Visit & Consultation', desc: 'Professional survey of your roof and electricity needs.' },
  { num: '02', title: 'System Sizing', desc: 'Determining the perfect solar capacity for maximum savings.' },
  { num: '03', title: 'Online Documentation', desc: 'We handle all 14 documents for your subsidy application.' },
  { num: '04', title: 'Installation & Net Metering', desc: 'Fast 72-hour setup and DISCOM approval for net-metering.' },
  { num: '05', title: 'Subsidy Credited', desc: 'Direct benefit transfer to your account after inspection.' }
]

export default function Process() {
  const stepRefs = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.active)
          }
        })
      },
      { threshold: 0.5 }
    )

    stepRefs.current.forEach((step) => step && observer.observe(step))
    return () => observer.disconnect()
  }, [])

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        
        {/* Left Side: Sticky Image */}
        <div className={styles.imageSide}>
          <div className={styles.stickyWrapper}>
            <div className={styles.imageWrapper}>
              <img src="/how-step.jpg" alt="Srishti Solar" className={styles.mainImg} />
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

        {/* Right Side: Animated Timeline */}
        <div className={styles.contentSide}>
          <div className={styles.header}>
            <span className={styles.eyebrow}>Seamless Journey</span>
            <h2 className={styles.title}>How to go Solar with <span className={styles.accent}>Subsidy</span></h2>
          </div>
          
          <div className={styles.timeline}>
            {STEPS.map((step, i) => (
              <div 
                key={i} 
                className={styles.step}
                ref={el => stepRefs.current[i] = el}
                style={{ '--i': i }}
              >
                <div className={styles.numOuter}>
                   <div className={styles.stepNum}>{step.num}</div>
                </div>
                <div className={styles.stepText}>
                  <h3 className={styles.stepTitle}>{step.title}</h3>
                  <p className={styles.stepDesc}>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}