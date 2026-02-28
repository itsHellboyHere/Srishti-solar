'use client'

import { useEffect, useRef } from 'react'
import Magnetic from '@/components/utils/Magnetic'
import styles from './SolarCTA.module.css';

/* Pre-computed ray coordinates — avoids SSR/client Math.cos float mismatch */
const SUN_RAYS_12 = [
  { x1:92,     y1:60,      x2:104,    y2:60     },
  { x1:87.7128,y1:76,      x2:98.1051,y2:82     },
  { x1:76,     y1:87.7128, x2:82,     y2:98.1051},
  { x1:60,     y1:92,      x2:60,     y2:104    },
  { x1:44,     y1:87.7128, x2:38,     y2:98.1051},
  { x1:32.2872,y1:76,      x2:21.8949,y2:82     },
  { x1:28,     y1:60,      x2:16,     y2:60     },
  { x1:32.2872,y1:44,      x2:21.8949,y2:38     },
  { x1:44,     y1:32.2872, x2:38,     y2:21.8949},
  { x1:60,     y1:28,      x2:60,     y2:16     },
  { x1:76,     y1:32.2872, x2:82,     y2:21.8949},
  { x1:87.7128,y1:44,      x2:98.1051,y2:38     },
]

const SUN_RAYS_8 = [
  { x1:31,     y1:20,      x2:36,     y2:20     },
  { x1:27.7782,y1:27.7782, x2:31.3137,y2:31.3137},
  { x1:20,     y1:31,      x2:20,     y2:36     },
  { x1:12.2218,y1:27.7782, x2:8.6863, y2:31.3137},
  { x1:9,      y1:20,      x2:4,      y2:20     },
  { x1:12.2218,y1:12.2218, x2:8.6863, y2:8.6863 },
  { x1:20,     y1:9,       x2:20,     y2:4      },
  { x1:27.7782,y1:12.2218, x2:31.3137,y2:8.6863 },
]

export default function SolarCTA() {
  const sectionRef = useRef(null)
  const headRef    = useRef(null)

  useEffect(() => {
    const io = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add(styles.show); io.unobserve(e.target) }
      }),
      { threshold: 0.15 }
    )
    if (headRef.current) io.observe(headRef.current)
    return () => io.disconnect()
  }, [])

  return (
    <section className={styles.section} ref={sectionRef}>

      {/* ── Animated wave background ── */}
      <div className={styles.waveLayer} aria-hidden="true">
        <svg className={styles.waveSvg} viewBox="0 0 1440 560" preserveAspectRatio="xMidYMid slice">
          <defs>
            <radialGradient id="sunGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%"   stopColor="#FFD700" stopOpacity="0.35"/>
              <stop offset="100%" stopColor="#F4A300" stopOpacity="0"/>
            </radialGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="8" result="blur"/>
              <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
            </filter>
          </defs>

          {/* Background deep wave 1 */}
          <path className={styles.waveA}
            d="M-100,280 Q200,180 500,260 Q800,340 1100,240 Q1300,180 1540,260 L1540,560 L-100,560 Z"
            fill="rgba(244,163,0,0.07)"
          />
          {/* Background deep wave 2 */}
          <path className={styles.waveB}
            d="M-100,320 Q300,220 600,300 Q900,380 1200,280 Q1380,220 1540,300 L1540,560 L-100,560 Z"
            fill="rgba(244,163,0,0.05)"
          />
          {/* Foreground wave crest */}
          <path className={styles.waveC}
            d="M-100,380 Q250,300 540,360 Q830,420 1120,340 Q1320,280 1540,360 L1540,560 L-100,560 Z"
            fill="rgba(244,163,0,0.09)"
          />
        </svg>
      </div>

      {/* ── Floating SVG elements ── */}
      <div className={styles.floaters} aria-hidden="true">

        {/* Large sun — top center */}
        <svg className={`${styles.floater} ${styles.sunMain}`} viewBox="0 0 120 120">
          <circle cx="60" cy="60" r="28" fill="#F4A300" opacity="0.9" filter="url(#glow)"/>
          <circle cx="60" cy="60" r="22" fill="#FFD700"/>
          {/* Rays — pre-computed to avoid SSR/client Math.cos mismatch */}
          {SUN_RAYS_12.map((r, i) => (
            <line key={i} x1={r.x1} y1={r.y1} x2={r.x2} y2={r.y2}
              stroke="#FFD700" strokeWidth="2.5" strokeLinecap="round" opacity="0.8"/>
          ))}
          <circle cx="60" cy="60" r="50" fill="none" stroke="#F4A300" strokeWidth="1" opacity="0.25"/>
        </svg>

        {/* Solar panel — left float */}
        <svg className={`${styles.floater} ${styles.panelLeft}`} viewBox="0 0 90 70">
          <rect x="4" y="4" width="82" height="62" rx="4" fill="rgba(14,9,4,0.7)" stroke="#F4A300" strokeWidth="1.5" opacity="0.8"/>
          {/* Panel grid cells */}
          {[0,1,2].map(row => [0,1,2,3].map(col => (
            <rect key={`${row}-${col}`}
              x={8 + col * 20} y={8 + row * 19}
              width="17" height="16" rx="2"
              fill="rgba(30,60,120,0.6)" stroke="rgba(244,163,0,0.3)" strokeWidth="0.5"
            />
          )))}
          {/* Shine */}
          <line x1="8" y1="8" x2="28" y2="8" stroke="rgba(255,255,255,0.4)" strokeWidth="1"/>
        </svg>

        {/* Solar panel — right float */}
        <svg className={`${styles.floater} ${styles.panelRight}`} viewBox="0 0 70 55">
          <rect x="3" y="3" width="64" height="49" rx="3" fill="rgba(14,9,4,0.6)" stroke="rgba(244,163,0,0.5)" strokeWidth="1.2" opacity="0.7"/>
          {[0,1].map(row => [0,1,2].map(col => (
            <rect key={`${row}-${col}`}
              x={6 + col * 21} y={6 + row * 22}
              width="18" height="19" rx="2"
              fill="rgba(20,50,100,0.55)" stroke="rgba(244,163,0,0.25)" strokeWidth="0.5"
            />
          )))}
        </svg>

        {/* Small sun sparkle top-left */}
        <svg className={`${styles.floater} ${styles.sparkleA}`} viewBox="0 0 40 40">
          <circle cx="20" cy="20" r="8" fill="#FFD700" opacity="0.7"/>
          {SUN_RAYS_8.map((r, i) => (
            <line key={i} x1={r.x1} y1={r.y1} x2={r.x2} y2={r.y2}
              stroke="#F4A300" strokeWidth="2" strokeLinecap="round" opacity="0.6"/>
          ))}
        </svg>

        {/* Tiny sparkle bottom-right */}
        <svg className={`${styles.floater} ${styles.sparkleB}`} viewBox="0 0 24 24">
          <path d="M12,2 L13.5,10.5 L22,12 L13.5,13.5 L12,22 L10.5,13.5 L2,12 L10.5,10.5 Z"
            fill="#FFD700" opacity="0.65"/>
        </svg>

        {/* Orbit ring around main sun */}
        <svg className={`${styles.floater} ${styles.orbit}`} viewBox="0 0 160 160">
          <circle cx="80" cy="80" r="72" fill="none" stroke="rgba(244,163,0,0.15)" strokeWidth="1" strokeDasharray="8 6"/>
          <circle cx="80" cy="8" r="5" fill="#F4A300" opacity="0.6"/>
        </svg>

      </div>

      {/* ── Main content ── */}
      <div className={styles.inner}>
        <div className={styles.head} ref={headRef}>

          <div className={styles.eyebrow}>
            <span className={styles.eyebrowDot}/>
            अभी शुरू करें · Start Today
          </div>

          <h2 className={styles.title}>
            आपकी छत,
            <br />
            <span className={styles.titleGold}>आपकी बिजली</span>
          </h2>
          <p className={styles.titleEn}>Your roof. Your energy. Your savings.</p>

          <p className={styles.desc}>
            Free site visit · No upfront cost · ₹78,000 subsidy assisted
            <br />
            <span className={styles.descHi}>मुफ्त साइट विज़िट · ₹0 अग्रिम · MNRE certified</span>
          </p>

          {/* ── CTA Buttons — Magnetic ── */}
          <div className={styles.actions}>
            <Magnetic strength={0.4}>
              <a href="tel:+919931013345" className={styles.btnPrimary}>
                <span className={styles.btnPrimaryInner}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 8.8 19.79 19.79 0 01.17 2.18 2 2 0 012.18 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.08 6.08l1.08-.87a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
                  </svg>
                  फ्री कॉल करें
                </span>
                <span className={styles.btnPrimaryHint}>99310 13345</span>
              </a>
            </Magnetic>

            <Magnetic strength={0.35}>
              <a
                href="https://wa.me/919931013345"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.btnWhatsapp}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp करें
              </a>
            </Magnetic>

            <Magnetic strength={0.3}>
              <a href="/contact" className={styles.btnGhost}>
                पात्रता जांचें →
                <span className={styles.btnGhostHi}>Check Eligibility</span>
              </a>
            </Magnetic>
          </div>

          {/* Trust strip */}
          <div className={styles.trust}>
            {['MNRE Certified', 'SBPDCL Registered', '2,500+ Installs', '5 Yr Free AMC'].map((t, i) => (
              <span key={i} className={styles.trustItem}>
                <span className={styles.trustDot}/>
                {t}
              </span>
            ))}
          </div>

        </div>
      </div>

    </section>
  )
}