'use client'

import { useEffect, useRef } from 'react'
import styles from './Process.module.css'

const STEPS = [
  {
    num: '01',
    title: 'साइट विज़िट एवं परामर्श',
    titleEn: 'Site Visit & Consultation',
    desc: 'आपके घर का निरीक्षण कर बिजली खपत के अनुसार सही समाधान सुझाया जाता है।'
  },
  {
    num: '02',
    title: 'सही क्षमता का चयन',
    titleEn: 'System Sizing',
    desc: 'आपकी जरूरत के अनुसार सोलर सिस्टम की क्षमता तय की जाती है, जिससे अधिकतम बचत हो।',
  },
  {
    num: '03',
    title: 'ऑनलाइन आवेदन एवं दस्तावेज़',
    titleEn: 'Online Documentation',
    desc: 'सब्सिडी के लिए आवश्यक दस्तावेज़ तैयार कर ऑनलाइन आवेदन किया जाता है।'
  },
  {
    num: '04',
    title: 'इंस्टॉलेशन एवं नेट मीटरिंग',
    titleEn: 'Installation & Net Metering',
    desc: '72 घंटों के भीतर इंस्टॉलेशन पूरा कर SBPDCL/NBPDCL से नेट मीटरिंग करवाई जाती है।'
  },
  {
    num: '05',
    title: 'सब्सिडी का लाभ प्राप्त',
    titleEn: 'Subsidy Credited',
    desc: 'इंस्टॉलेशन के बाद ₹78,000 तक की सब्सिडी सीधे आपके खाते में प्राप्त होती है।'
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
    </section>
  )
}