'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import Link from 'next/link'
import styles from './HeroSlider.module.css'

const SLIDES = [
  {
    tag: 'छत पर सोलर — Rooftop Solar',
    lines: ['छत पर सोलर लगाइए,'],
    accent: 'बिजली का खर्च बचाइए',
    desc: 'सभी प्रकार का सोलर सिस्टम इंस्टॉलेशन — 5 साल निःशुल्क सेवा, EMI सुविधा, मोबाइल मॉनिटरिंग।',
    cta:      'Get Free Assessment',
    ctaHref:  '/contact',
    ghost:     'See How It Works',
    ghostHref: '/solutions',
    bg: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=1800&q=90',
  },
  {
    tag: 'PM Surya Ghar Yojana · मुफ्त बिजली योजना',
    lines: ['सरकार की सब्सिडी'],
    accent: 'का पूरा लाभ पाएँ',
    desc: '₹78,000 तक सीधे बैंक में। SBPDCL / NBPDCL से पंजीकृत · MNRE के नियम अनुसार कार्य।',
    cta:      'Check Eligibility · पात्रता जांचें',
    ctaHref:  '/subsidies',
    ghost:     'Subsidy Details',
    ghostHref: '/subsidies',
    bg: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1800&q=90',
  },
  {
    tag: 'MNRE Certified · SBPDCL/NBPDCL Registered',
    lines: ['Srishti Solar Power'],
    accent: 'से सोलर लगवाएँ।',
    desc: '5 साल निःशुल्क सेवा · EMI सुविधा · मोबाइल मॉनिटरिंग। Bihar\'s most trusted installer since day one.',
    cta:      'Call Now · अभी कॉल करें',
    ctaHref:  '/contact',
    ghost:     'Our Projects',
    ghostHref: '/projects',
    bg: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=1800&q=90',
  },
]

const STATS = [
  { val: '₹78,000', unit: '',    label: 'Max Subsidy · अधिकतम सब्सिडी' },
  { val: '30',       unit: 'GW', label: 'Solar Capacity Added · PM Surya Ghar' },
  { val: '17',       unit: 'L',  label: 'Direct Jobs Created · प्रत्यक्ष रोजगार' },
  { val: '25',       unit: 'Yr', label: 'Panel Warranty · पैनल वारंटी' },
  { val: '5',        unit: 'Yr', label: 'Free Service · निःशुल्क सेवा' },
  { val: '720',      unit: 'MT', label: 'CO₂ Reduced · कार्बन में कमी' },
  { val: '100',      unit: '%',  label: 'Subsidy Assisted · सब्सिडी सहायता' },
]

const DURATION = 6000

export default function HeroSlider() {
  const [current,  setCurrent]  = useState(0)
  const [prev,     setPrev]     = useState(null)
  const [progress, setProgress] = useState(0)
  const timerRef = useRef(null)
  const rafRef   = useRef(null)
  const startRef = useRef(Date.now())
  const total    = SLIDES.length

  const goTo = useCallback((idx) => {
    const next = ((idx % total) + total) % total
    setPrev(current)
    setCurrent(next)
    startRef.current = Date.now()
    clearInterval(timerRef.current)
    timerRef.current = setInterval(() => {
      setCurrent(c => { setPrev(c); return (c + 1) % total })
      startRef.current = Date.now()
    }, DURATION)
  }, [current, total])

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setCurrent(c => { setPrev(c); return (c + 1) % total })
      startRef.current = Date.now()
    }, DURATION)
    return () => clearInterval(timerRef.current)
  }, [total])

  useEffect(() => {
    const tick = () => {
      setProgress(Math.min(((Date.now() - startRef.current) / DURATION) * 100, 100))
      rafRef.current = requestAnimationFrame(tick)
    }
    rafRef.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafRef.current)
  }, [])

  const pad = n => String(n + 1).padStart(2, '0')

  return (
    <section className={styles.hero}>

      <div className={styles.darkBase} aria-hidden="true" />

      <div className={styles.slides}>
        {SLIDES.map((slide, i) => (
          <div
            key={i}
            className={`${styles.slide} ${i === current ? styles.slideIn : ''} ${i === prev ? styles.slideOut : ''}`}
          >
            <div className={styles.bg} style={{ backgroundImage: `url('${slide.bg}')` }} />
            <div className={styles.scrim} />
            <div className={styles.maskLeft} />
            <div className={styles.maskTop} />
            <div className={styles.maskBottom} />
            <div className={styles.photoHaze} />
          </div>
        ))}
      </div>

      <div className={styles.particles} aria-hidden="true">
        {[...Array(10)].map((_, i) => (
          <div key={i} className={styles.particle} style={{ '--pi': i }} />
        ))}
      </div>

      <div className={styles.contentWrap}>

        <div className={styles.accentBar} aria-hidden="true" />

        <div className={styles.content}>
          {SLIDES.map((slide, i) => (
            <div
              key={i}
              className={`${styles.slideContent} ${i === current ? styles.slideContentIn : ''}`}
              aria-hidden={i !== current}
            >
              <div className={styles.tag}>
                <span className={styles.tagDot} />
                {slide.tag}
              </div>

              <h1 className={styles.title}>
                {slide.lines.map((line, li) => (
                  <span key={li} className={styles.line} style={{ '--li': li }}>{line}</span>
                ))}
                <span className={`${styles.line} ${styles.accentLine}`} style={{ '--li': slide.lines.length }}>
                  {slide.accent}
                </span>
              </h1>

              <p className={styles.desc}>{slide.desc}</p>

              <div className={styles.actions}>
                {/* Slide 2 CTA calls phone directly instead of contact page */}
                {slide.ctaHref === 'tel' ? (
                  <a href="tel:+919931013345" className={styles.btnPrimary}>
                    <span className={styles.btnLabel}>{slide.cta}</span>
                    <span className={styles.btnIcon}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8 19.79 19.79 0 01.22 1.18 2 2 0 012.22 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.09a16 16 0 006 6l.56-.56a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                    </span>
                  </a>
                ) : (
                  <Link href={slide.ctaHref} className={styles.btnPrimary}>
                    <span className={styles.btnLabel}>{slide.cta}</span>
                    <span className={styles.btnIcon}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                  </Link>
                )}

                <Link href={slide.ghostHref} className={styles.btnGhost}>
                  {slide.ghost}
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
                    <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
              </div>
            </div>
          ))}

          <div className={styles.controls}>
            <div className={styles.counter}>
              <span className={styles.counterNum}>{pad(current)}</span>
              <div className={styles.counterTrack}>
                <div className={styles.counterFill} style={{ width: `${progress}%` }} />
              </div>
              <span className={styles.counterTotal}>{pad(total - 1)}</span>
            </div>
            <div className={styles.dots}>
              {SLIDES.map((_, i) => (
                <button key={i}
                  className={`${styles.dot} ${i === current ? styles.dotActive : ''}`}
                  onClick={() => goTo(i)} aria-label={`Slide ${i + 1}`} />
              ))}
            </div>
            <div className={styles.arrows}>
              <button className={styles.arrow} onClick={() => goTo(current - 1)} aria-label="Previous">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <button className={styles.arrow} onClick={() => goTo(current + 1)} aria-label="Next">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>

        </div>
      </div>

    </section>
  )
}