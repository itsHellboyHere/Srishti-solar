'use client'
import { useState } from 'react'
import Image from 'next/image'
import { MEDIA, TAG_COLORS } from '@/data/media'
import styles from '@/css/MediaGallery.module.css'

export default function MediaGallery() {
  const [lightbox, setLightbox] = useState(null) // index of open image

  function open(i)  { setLightbox(i) }
  function close()  { setLightbox(null) }
  function prev()   { setLightbox(i => (i - 1 + MEDIA.length) % MEDIA.length) }
  function next()   { setLightbox(i => (i + 1) % MEDIA.length) }

  // Close on backdrop click
  function onBackdrop(e) {
    if (e.target === e.currentTarget) close()
  }

  // Close on Escape
  if (typeof window !== 'undefined') {
    // handled via onKeyDown on the dialog
  }

  return (
    <section className={styles.section} id="media">

      <div className={styles.inner}>
        <span className={styles.eyebrow}>मीडिया · Recognition · Events</span>
        <h2 className={styles.title}>
          जहाँ हमें <span className={styles.gold}>पहचाना गया</span>
        </h2>
        <p className={styles.sub}>
          Bihar Solar Expo 2026 · Dainik Jagran · BSPHCL Solar Mela
        </p>

        {/* Masonry-style grid using CSS grid areas */}
        <div className={styles.grid}>
          {MEDIA.map((item, i) => {
            const tagStyle = TAG_COLORS[item.tag] || TAG_COLORS.Event
            return (
              <div
                key={i}
                className={`${styles.cell} ${item.wide ? styles.cellWide : ''}`}
                onClick={() => open(i)}
                role="button"
                tabIndex={0}
                aria-label={`View: ${item.caption}`}
                onKeyDown={e => e.key === 'Enter' && open(i)}
              >
                <div className={styles.imgWrap}>
                  <Image
                    src={item.src}
                    alt={`${item.caption} — ${item.outlet}`}
                    fill
                    className={styles.img}
                    sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 560px"
                  />
                  <div className={styles.scrim} />

                  {/* Tag badge */}
                  <span
                    className={styles.tag}
                    style={{ background: tagStyle.bg, color: tagStyle.text }}
                  >
                    {item.tag}
                  </span>

                  {/* Hover overlay */}
                  <div className={styles.hoverOverlay}>
                    <div className={styles.hoverIcon}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                        <path d="M15 3h6m0 0v6m0-6L10 14M9 5H5a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2v-4"/>
                      </svg>
                    </div>
                    <div className={styles.hoverCaption}>{item.caption}</div>
                    <div className={styles.hoverOutlet}>{item.outlet}</div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className={styles.lb}
          onClick={onBackdrop}
          onKeyDown={e => {
            if (e.key === 'Escape') close()
            if (e.key === 'ArrowLeft') prev()
            if (e.key === 'ArrowRight') next()
          }}
          tabIndex={-1}
          role="dialog"
          aria-modal="true"
          aria-label={MEDIA[lightbox].caption}
        >
          <div className={styles.lbInner}>
            {/* Close */}
            <button className={styles.lbClose} onClick={close} aria-label="Close">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <path d="M18 6L6 18M6 6l12 12"/>
              </svg>
            </button>

            {/* Image */}
            <div className={styles.lbImgWrap}>
              <Image
                src={MEDIA[lightbox].src}
                alt={MEDIA[lightbox].caption}
                fill
                className={styles.lbImg}
                sizes="(max-width: 900px) 100vw, 860px"
                priority
              />
            </div>

            {/* Caption */}
            <div className={styles.lbCaption}>
              <span
                className={styles.lbTag}
                style={{
                  background: TAG_COLORS[MEDIA[lightbox].tag]?.bg,
                  color: TAG_COLORS[MEDIA[lightbox].tag]?.text,
                }}
              >
                {MEDIA[lightbox].tag}
              </span>
              <div className={styles.lbTitle}>{MEDIA[lightbox].caption}</div>
              <div className={styles.lbOutlet}>{MEDIA[lightbox].outlet}</div>
            </div>

            {/* Prev / Next */}
            <button className={`${styles.lbNav} ${styles.lbPrev}`} onClick={prev} aria-label="Previous photo">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <path d="M15 18l-6-6 6-6"/>
              </svg>
            </button>
            <button className={`${styles.lbNav} ${styles.lbNext}`} onClick={next} aria-label="Next photo">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <path d="M9 18l6-6-6-6"/>
              </svg>
            </button>

            {/* Counter */}
            <div className={styles.lbCounter}>
              {lightbox + 1} / {MEDIA.length}
            </div>
          </div>
        </div>
      )}

      {/* Curve out → AboutCTA dark #0A0602 */}
      <div className={styles.curveWrap}>
        <svg viewBox="0 0 1440 90" preserveAspectRatio="none" aria-hidden="true" className={styles.curveSvg}>
          <path d="M0,0 Q720,90 1440,0 L1440,90 L0,90 Z" fill="#0A0602"/>
        </svg>
      </div>
    </section>
  )
}