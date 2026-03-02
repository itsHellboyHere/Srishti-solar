'use client'

import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import Masonry from 'react-masonry-css'
import { PROJECTS, FILTERS } from '@/data/projects'
import styles from './projects.module.css'

const BREAKPOINTS = {
  default: 3,
  1100:    2,
  640:     1,
}

const STATS = [
  { num: '2,500+', label: 'Installations'       },
  { num: '18',     label: 'Districts Covered'   },
  { num: '5 MW+',  label: 'Total Capacity'      },
  { num: '₹12 Cr', label: 'Subsidy Assisted'    },
]

/* ── Solar panel placeholder SVG ── */
function PlaceholderPanel({ gradient, accent, kw }) {
  return (
    <div className={styles.placeholder} style={{ background: gradient }}>
      <svg viewBox="0 0 200 160" className={styles.placeholderSvg}>
        {/* Panel grid */}
        {[0,1,2,3].map(c => [0,1,2].map(r => (
          <rect key={`${c}${r}`}
            x={10 + c * 47} y={10 + r * 47}
            width="42" height="42" rx="3"
            fill="rgba(255,255,255,0.07)"
            stroke={accent} strokeWidth="0.8" strokeOpacity="0.4"
          />
        )))}
        {/* Sun */}
        <circle cx="170" cy="22" r="14" fill={accent} opacity="0.25"/>
        <circle cx="170" cy="22" r="9"  fill={accent} opacity="0.6"/>
        {/* Rays */}
        {[0,45,90,135,180,225,270,315].map((deg,i) => {
          const r = deg * Math.PI / 180
          return <line key={i}
            x1={170 + 13 * Math.cos(r)} y1={22 + 13 * Math.sin(r)}
            x2={170 + 19 * Math.cos(r)} y2={22 + 19 * Math.sin(r)}
            stroke={accent} strokeWidth="1.2" strokeLinecap="round" opacity="0.5"/>
        })}
      </svg>
      <div className={styles.placeholderKw} style={{ color: accent }}>
        {kw} kW
      </div>
      <div className={styles.placeholderLabel}>Installation Photo</div>
      <div className={styles.placeholderHint}>Coming Soon</div>
    </div>
  )
}

/* ── Single gallery card ── */
function ProjectCard({ project, onOpen }) {
  return (
    <div
      className={`${styles.card} ${styles[`span${project.span === 'tall' ? 'Tall' : 'Short'}`]}`}
      onClick={() => onOpen(project)}
    >
      <div className={styles.cardInner}>

        {/* Image or placeholder */}
        {project.image ? (
          <img
            src={project.image}
            alt={`${project.kw}kW solar installation in ${project.location}`}
            className={styles.cardImg}
            loading="lazy"
          />
        ) : (
          <PlaceholderPanel
            gradient={project.gradient}
            accent={project.accent}
            kw={project.label}
          />
        )}

        {/* Tag badge */}
        {project.tag && (
          <div className={styles.tag}>{project.tag}</div>
        )}

        {/* Hover overlay */}
        <div className={styles.overlay}>
          <div className={styles.overlayContent}>
            <div className={styles.overlayKw}>{project.label}</div>
            <div className={styles.overlayLocation}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
              {project.location}
            </div>
            <div className={styles.overlayType}>{project.type}</div>
            <div className={styles.overlayExpand}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/>
              </svg>
              View Full
            </div>
          </div>
        </div>

        {/* Bottom info strip */}
        <div className={styles.cardBottom}>
          <span className={styles.cardKw}>⚡ {project.label}</span>
          <span className={styles.cardLoc}>{project.area}</span>
        </div>

      </div>
    </div>
  )
}

/* ── Lightbox ── */
function Lightbox({ project, all, onClose, onNav }) {
  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') onNav(1)
      if (e.key === 'ArrowLeft')  onNav(-1)
    }
    window.addEventListener('keydown', handler)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', handler)
      document.body.style.overflow = ''
    }
  }, [onClose, onNav])

  const idx     = all.findIndex(p => p.id === project.id)
  const hasPrev = idx > 0
  const hasNext = idx < all.length - 1

  return (
    <div className={styles.lightboxBackdrop} onClick={onClose}>
      <div className={styles.lightbox} onClick={e => e.stopPropagation()}>

        {/* Close */}
        <button className={styles.lbClose} onClick={onClose} aria-label="Close">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <path d="M18 6L6 18M6 6l12 12"/>
          </svg>
        </button>

        {/* Nav prev */}
        {hasPrev && (
          <button className={`${styles.lbNav} ${styles.lbPrev}`}
            onClick={() => onNav(-1)} aria-label="Previous">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <path d="M15 18l-6-6 6-6"/>
            </svg>
          </button>
        )}

        {/* Image */}
        <div className={styles.lbImgWrap}>
          {project.image ? (
            <img src={project.image} alt={project.location} className={styles.lbImg}/>
          ) : (
            <PlaceholderPanel
              gradient={project.gradient}
              accent={project.accent}
              kw={project.label}
            />
          )}
        </div>

        {/* Info */}
        <div className={styles.lbInfo}>
          <div className={styles.lbKw}>{project.label} System</div>
          <div className={styles.lbLocation}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
              <circle cx="12" cy="10" r="3"/>
            </svg>
            {project.area}, {project.location}
          </div>
          <div className={styles.lbMeta}>
            <span>{project.type}</span>
            <span>{project.date}</span>
          </div>
          {project.tag && (
            <div className={styles.lbTag}>{project.tag}</div>
          )}
          <div className={styles.lbCounter}>{idx + 1} / {all.length}</div>
        </div>

        {/* Nav next */}
        {hasNext && (
          <button className={`${styles.lbNav} ${styles.lbNext}`}
            onClick={() => onNav(1)} aria-label="Next">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <path d="M9 18l6-6-6-6"/>
            </svg>
          </button>
        )}

      </div>
    </div>
  )
}

/* ══════════════════════════════════════════════
   MAIN COMPONENT
══════════════════════════════════════════════ */
export default function ProjectsGallery() {
  const [active,    setActive]    = useState('all')
  const [lightbox,  setLightbox]  = useState(null)
  const [animating, setAnimating] = useState(false)

  const filtered = PROJECTS.filter(p => {
    if (active === 'all') return true
    if (active === '4+')  return p.kw >= 4
    return p.kw === active
  })

  const handleFilter = (val) => {
    if (val === active) return
    setAnimating(true)
    setTimeout(() => {
      setActive(val)
      setAnimating(false)
    }, 200)
  }

  const openLightbox  = (project) => setLightbox(project)
  const closeLightbox = () => setLightbox(null)

  const navLightbox = useCallback((dir) => {
    const idx    = filtered.findIndex(p => p.id === lightbox.id)
    const newIdx = idx + dir
    if (newIdx >= 0 && newIdx < filtered.length) {
      setLightbox(filtered[newIdx])
    }
  }, [lightbox, filtered])

  return (
    <div className={styles.page}>

      {/* ── Hero strip ── */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.heroText}>
            <span className={styles.eyebrow}>
              <span className={styles.eyebrowDot}/>
              हमारे काम · Our Work
            </span>
            <h1 className={styles.heroTitle}>
              बिहार भर में<br/>
              <span className={styles.heroGold}>हमारी छाप</span>
            </h1>
            <p className={styles.heroDesc}>
              Real installations. Real customers. Real savings.
              <span className={styles.heroDescHi}> — हर तस्वीर एक खुश परिवार की कहानी है।</span>
            </p>
          </div>

          {/* Stats */}
          <div className={styles.stats}>
            {STATS.map((s, i) => (
              <div key={i} className={styles.stat}>
                <span className={styles.statNum}>{s.num}</span>
                <span className={styles.statLabel}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Gallery ── */}
      <section className={styles.gallery}>
        <div className={styles.galleryInner}>

          {/* Filter bar */}
          <div className={styles.filters}>
            {FILTERS.map(f => (
              <button key={f.value}
                className={`${styles.filterBtn} ${active === f.value ? styles.filterActive : ''}`}
                onClick={() => handleFilter(f.value)}
              >
                {f.label}
                {active === f.value && (
                  <span className={styles.filterCount}>{filtered.length}</span>
                )}
              </button>
            ))}
          </div>

          {/* Masonry grid */}
          <div className={`${styles.masonryWrap} ${animating ? styles.fadeOut : styles.fadeIn}`}>
            <Masonry
              breakpointCols={BREAKPOINTS}
              className={styles.masonryGrid}
              columnClassName={styles.masonryCol}
            >
              {filtered.map(project => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onOpen={openLightbox}
                />
              ))}
            </Masonry>
          </div>

          {/* Empty state */}
          {filtered.length === 0 && (
            <div className={styles.empty}>
              <span>🌞</span>
              <p>No projects in this category yet.</p>
            </div>
          )}

        </div>
      </section>

      {/* ── CTA strip ── */}
      <section className={styles.cta}>
        <div className={styles.ctaInner}>
          <div className={styles.ctaText}>
            <h2 className={styles.ctaTitle}>
              आपकी छत बनेगी<br/>
              <span className={styles.ctaGold}>अगली सफलता की कहानी</span>
            </h2>
            <p className={styles.ctaDesc}>
              Join 2,500+ happy families across Bihar.
              Free site visit · ₹78,000 subsidy assisted · 72-hour install.
            </p>
          </div>
          <div className={styles.ctaActions}>
            <Link href="/contact" className={styles.ctaBtn}>
              फ्री साइट विज़िट बुक करें
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
            <a href="tel:+919931013345" className={styles.ctaCall}>
              📞 99310 13345
            </a>
          </div>
        </div>
      </section>

      {/* ── Lightbox ── */}
      {lightbox && (
        <Lightbox
          project={lightbox}
          all={filtered}
          onClose={closeLightbox}
          onNav={navLightbox}
        />
      )}

    </div>
  )
}