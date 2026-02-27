'use client'

import { useEffect, useRef } from 'react'
import styles from './Process.module.css'

const STEPS = [
  {
    num: '01',
    title: 'साइट विज़िट और सलाह',
    titleEn: 'Site Visit & Consultation',
    desc: 'छत का पेशेवर सर्वेक्षण और बिजली ज़रूरत का आकलन — बिल्कुल मुफ्त।'
  },
  {
    num: '02',
    title: 'सही क्षमता का चयन',
    titleEn: 'System Sizing',
    desc: 'आपकी ज़रूरत के अनुसार सही kW सिस्टम तय किया जाता है — अधिकतम बचत के लिए।'
  },
  {
    num: '03',
    title: 'ऑनलाइन आवेदन और दस्तावेज़',
    titleEn: 'Online Documentation',
    desc: 'सब्सिडी के लिए सभी 14 दस्तावेज़ हम खुद तैयार करते हैं — Online आवेदन सहायता।'
  },
  {
    num: '04',
    title: 'इंस्टॉलेशन और नेट मीटर',
    titleEn: 'Installation & Net Metering',
    desc: '72 घंटे में इंस्टॉलेशन पूरी। SBPDCL/NBPDCL नेट मीटर अनुमोदन भी हम करवाते हैं।'
  },
  {
    num: '05',
    title: 'निरीक्षण के बाद सब्सिडी प्राप्त',
    titleEn: 'Subsidy Credited',
    desc: 'इंस्पेक्शन के बाद ₹78,000 तक सब्सिडी सीधे आपके बैंक खाते में — कोई बिचौलिया नहीं।'
  },
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

        {/* Left Side: Sticky Image — sticky applied via CSS on .imageSide */}
        <div className={styles.imageSide}>
          <div className={styles.imageWrapper}>
            <img src="/how-step.jpg" alt="Srishti Solar Installation" className={styles.mainImg} />
            <div className={styles.glassCard}>
              <div className={styles.badgeIcon}>✔</div>
              <div>
                <p className={styles.badgeTitle}>MNRE & DISCOM Registered</p>
                <p className={styles.badgeSub}>Authorized Subsidy Vendor · अधिकृत वेंडर</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Animated Timeline */}
        <div className={styles.contentSide}>
          <div className={styles.header}>
            <span className={styles.eyebrow}>आसान प्रक्रिया · Seamless Journey</span>
            <h2 className={styles.title}>
              सब्सिडी के साथ सोलर{' '}
              <span className={styles.accent}>कैसे लगवाएँ?</span>
            </h2>
            <p className={styles.headerSub}>How to go solar with government subsidy — step by step</p>
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
                  <h3 className={styles.stepTitle}>
                    {step.title}
                    <span className={styles.stepTitleEn}>{step.titleEn}</span>
                  </h3>
                  <p className={styles.stepDesc}>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
      {/* Wave bottom — clean downward arc into dark Subsidy */}
      <div className={styles.waveBottom} aria-hidden="true">
        <svg viewBox="0 0 1440 90" preserveAspectRatio="none">
          <path d="M0,0 Q720,90 1440,0 L1440,90 L0,90 Z" fill="var(--bg-muted)"/>
        </svg>
      </div>
    </section>
  )
}