'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import styles from './HeroSlider.module.css'

const SLIDES = [
  {
    tag: 'छत पर सोलर — Rooftop Solar',
    lines: ['छत पर सोलर लगाइए,'],
    accent: 'बिजली का खर्च बचाइए',
    desc: 'सभी प्रकार का सोलर सिस्टम इंस्टॉलेशन — 5 साल निःशुल्क सेवा, EMI सुविधा, मोबाइल मॉनिटरिंग।',
    cta: 'Get Free Assessment',
    ghost: 'See How It Works',
    bg: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=1800&q=90',
  },
  {
    tag: 'PM Surya Ghar Yojana · मुफ्त बिजली योजना',
    lines: ['सरकार की सब्सिडी'],
    accent: 'का पूरा लाभ पाएँ',
    desc: '₹78,000 तक सीधे बैंक में। SBPDCL / NBPDCL से पंजीकृत · MNRE के नियम अनुसार कार्य।',
    cta: 'Check Eligibility · पात्रता जांचें',
    ghost: 'Subsidy Details',
    bg: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1800&q=90',
  },
  {
    tag: 'MNRE Certified · SBPDCL/NBPDCL Registered',
    lines: ['Srishti Solar Power'],
    accent: 'से सोलर लगवाएँ।',
    desc: '5 साल निःशुल्क सेवा · EMI सुविधा · मोबाइल मॉनिटरिंग। Bihar\'s most trusted installer since day one.',
    cta: 'Call Now · अभी कॉल करें',
    ghost: 'Our Projects',
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

      {/* ── Dark cinematic base ── */}
      <div className={styles.darkBase} aria-hidden="true" />

      {/* ── Slides ── */}
      <div className={styles.slides}>
        {SLIDES.map((slide, i) => (
          <div
            key={i}
            className={`${styles.slide} ${i === current ? styles.slideIn : ''} ${i === prev ? styles.slideOut : ''}`}
          >
            <div className={styles.bg} style={{ backgroundImage: `url('${slide.bg}')` }} />
            {/* Dark scrim over whole photo */}
            <div className={styles.scrim} />
            {/* Gradient: dark left for text, reveals photo right */}
            <div className={styles.maskLeft} />
            {/* Top fade for navbar */}
            <div className={styles.maskTop} />
            {/* Bottom fade into wave */}
            <div className={styles.maskBottom} />
            {/* Gold haze on photo */}
            <div className={styles.photoHaze} />
          </div>
        ))}
      </div>

      {/* ── Floating particles ── */}
      <div className={styles.particles} aria-hidden="true">
        {[...Array(10)].map((_, i) => (
          <div key={i} className={styles.particle} style={{ '--pi': i }} />
        ))}
      </div>

      {/* ── Content — outside slides so it stays sharp ── */}
      <div className={styles.contentWrap}>

        {/* Vertical accent line */}
        <div className={styles.accentBar} aria-hidden="true" />

        <div className={styles.content}>
          {SLIDES.map((slide, i) => (
            <div
              key={i}
              className={`${styles.slideContent} ${i === current ? styles.slideContentIn : ''}`}
              aria-hidden={i !== current}
            >
              {/* Tag */}
              <div className={styles.tag}>
                <span className={styles.tagDot} />
                {slide.tag}
              </div>

              {/* Title */}
              <h1 className={styles.title}>
                {slide.lines.map((line, li) => (
                  <span key={li} className={styles.line} style={{ '--li': li }}>{line}</span>
                ))}
                <span className={`${styles.line} ${styles.accentLine}`} style={{ '--li': slide.lines.length }}>
                  {slide.accent}
                </span>
              </h1>

              {/* Desc */}
              <p className={styles.desc}>{slide.desc}</p>

              {/* Actions */}
              <div className={styles.actions}>
                <button className={styles.btnPrimary}>
                  <span className={styles.btnLabel}>{slide.cta}</span>
                  <span className={styles.btnIcon}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                </button>
                <button className={styles.btnGhost}>
                  {slide.ghost}
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
                    <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>
          ))}

          {/* Controls — always visible */}
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

      {/* ── Ticker strip ── */}
      {/* <div className={styles.ticker} aria-label="Company stats">
        <div className={styles.tickerTrack}>
          {[...STATS, ...STATS, ...STATS].map(({ val, unit, label }, i) => (
            <div key={i} className={styles.tickerItem}>
              <span className={styles.tickerNum}>{val}</span>
              <span className={styles.tickerUnit}>{unit}</span>
              <span className={styles.tickerDot} aria-hidden="true" />
              <span className={styles.tickerLabel}>{label}</span>
            </div>
          ))}
        </div>
      </div> */}

    </section>
  )
}