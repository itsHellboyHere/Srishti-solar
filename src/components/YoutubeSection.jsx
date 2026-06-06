'use client'

import { useRef, useEffect, useState } from 'react'
import styles from '../css/YoutubeSection.module.css'

// ── Video data — swap IDs / titles as needed ──────────────────
const VIDEOS = [
  {
    id: 'qGKx6vn1KOY',
    title: 'PM Surya Ghar Yojana पर सरकारी अधिकारी का Exclusive Interview',
    tag: 'Exclusive',
    duration: '9:01',
    featured: true,
  },
  {
    id: 'nz-sPxJCvYg',
    title: "India's Biggest Energy Expo ⚡ | All State & Company Stalls Visit | BES 2026",
    tag: 'Event',
    duration: '5:03',
    featured: false,
  },
  {
    id: 'hYYT22mom9I',
    title: 'Bihar Mein Solar Craze Kyun? | Solar Mela 2026 Patna | Srishti Solar',
    tag: 'Solar Mela',
    duration: '1:59',
    featured: false,
  },
  {
    id: 'frOq0G0VSWA',
    title: 'Srishti Solar Power | Harness the Sun, Power Your Future ☀️',
    tag: 'Brand',
    duration: '0:33',
    featured: false,
  },
  {
    id: '2OsDVBR-csg',
    title: 'Go Solar with Srishti Solar Power 🌙 | Save Money & Energy | Hindi Jingle',
    tag: 'Jingle',
    duration: '0:33',
    featured: false,
  },
]

function ThumbCard({ video, size = 'small' }) {
  const [active, setActive] = useState(false)
  const thumb = `https://img.youtube.com/vi/${video.id}/hqdefault.jpg`
  const url   = `https://www.youtube.com/watch?v=${video.id}`

  if (size === 'featured') {
    return (
      <div className={styles.featured}>
        {active ? (
          <iframe
            className={styles.featuredIframe}
            src={`https://www.youtube.com/embed/${video.id}?autoplay=1&rel=0`}
            title={video.titleEn}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <button
            className={styles.featuredThumb}
            onClick={() => setActive(true)}
            aria-label={`Play: ${video.titleEn}`}
          >
            <img src={thumb} alt={video.titleEn} className={styles.featuredImg} />
            <div className={styles.featuredScrim} />
            <span className={styles.featuredTag}>{video.tag}</span>
            <div className={styles.playBtn} aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
            <div className={styles.featuredMeta}>
              <p className={styles.featuredTitle}>{video.title}</p>
              <span className={styles.watchLabel}>▶ अभी देखें</span>
            </div>
          </button>
        )}
      </div>
    )
  }

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.smallCard}
      aria-label={video.titleEn}
    >
      <div className={styles.smallThumbWrap}>
        <img src={thumb} alt={video.titleEn} className={styles.smallThumb} />
        <div className={styles.smallScrim} />
        <span className={styles.smallTag}>{video.tag}</span>
        <div className={styles.smallPlay} aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>
      <p className={styles.smallTitle}>{video.title}</p>
    </a>
  )
}

export default function YoutubeSection() {
  const sectionRef = useRef(null)
  const bgRef      = useRef(null)
  const headRef    = useRef(null)
  const gridRef    = useRef(null)

  // Parallax bg scroll
  useEffect(() => {
    const onScroll = () => {
      if (!bgRef.current || !sectionRef.current) return
      const rect     = sectionRef.current.getBoundingClientRect()
      const progress = -rect.top / (rect.height + window.innerHeight)
      bgRef.current.style.transform = `translateY(${progress * 80}px)`
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Scroll reveal
  useEffect(() => {
    const io = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add(styles.show); io.unobserve(e.target) }
      }),
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    )
    if (headRef.current) io.observe(headRef.current)
    if (gridRef.current) io.observe(gridRef.current)
    return () => io.disconnect()
  }, [])

  const featured = VIDEOS.find(v => v.featured)
  const small    = VIDEOS.filter(v => !v.featured)

  return (
    <section className={styles.section} ref={sectionRef}>

      {/* Wave top */}
      <div className={styles.waveTop} aria-hidden="true">
        <svg viewBox="0 0 1440 90" preserveAspectRatio="none" width="100%" height="100%">
          <path d="M0,90 Q360,0 720,50 Q1080,100 1440,20 L1440,0 L0,0 Z" fill="var(--bg-warm)" />
        </svg>
      </div>

      {/* Parallax bg */}
      <div className={styles.parallaxWrap} aria-hidden="true">
        <div className={styles.parallaxBg} ref={bgRef} />
        <div className={styles.parallaxOverlay} />
      </div>

      <div className={styles.inner}>

        {/* Header */}
        <div className={styles.head} ref={headRef}>
          <div className={styles.eyebrow}>
            <span className={styles.eyebrowPill}>YouTube</span>
            हमारे काम का सबूत
          </div>
          <h2 className={styles.heading}>
            देखिए, कैसे बदल रहा है{' '}
            <span className={styles.gold}>Bihar</span>
          </h2>
          <p className={styles.headDesc}>
            Real installations, real customers, real results — Bihar की हर छत पर solar की कहानी।
          </p>
        </div>

        {/* Grid: 1 big left + 4 small right */}
        <div className={styles.grid} ref={gridRef}>
          {featured && <ThumbCard video={featured} size="featured" />}
          <div className={styles.smallGrid}>
            {small.map(v => <ThumbCard key={v.id} video={v} size="small" />)}
          </div>
        </div>

        {/* Channel CTA */}
        <div className={styles.cta}>
          <a
            href="https://www.youtube.com/@srishtisolarpower"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaBtn}
          >
            <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" aria-hidden="true">
              <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
            </svg>
            सभी Videos देखें — YouTube Channel
          </a>
        </div>

      </div>

      {/* Wave bottom */}
      {/* <div className={styles.waveBottom} aria-hidden="true">
        <svg viewBox="0 0 1440 90" preserveAspectRatio="none" width="100%" height="100%">
          <path d="M0,20 Q360,90 720,40 Q1080,0 1440,70 L1440,90 L0,90 Z" fill="var(--bg-base)" />
        </svg>
      </div> */}

    </section>
  )
}
