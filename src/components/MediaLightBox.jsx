// src/components/MediaLightbox.jsx
'use client'
import { useCallback, useEffect, useRef } from 'react'
import Image from 'next/image'
import { TAG_COLORS } from '@/data/media'
import { cldImage, cldPoster, cldVideoFull } from '@/lib/cloudinary'
import styles from '@/css/MediaGallery.module.css'

export default function MediaLightbox({ items, index, onChange, onClose }) {
  const item = items[index]
  const isVideo = item.type === 'video'
  const tagStyle = TAG_COLORS[item.tag] || TAG_COLORS.Event
  const touchX = useRef(null)

  const prev = useCallback(
    () => onChange((index - 1 + items.length) % items.length),
    [index, items.length, onChange]
  )
  const next = useCallback(
    () => onChange((index + 1) % items.length),
    [index, items.length, onChange]
  )

  // Keyboard: Esc / ← / →  (window pe, taaki focus ki zaroorat na pade)
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose, prev, next])

  // Lightbox khula ho to peeche ka page scroll na kare
  useEffect(() => {
    const old = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = old }
  }, [])

  // Phone: left/right swipe se prev/next
  const onTouchStart = (e) => { touchX.current = e.touches[0].clientX }
  const onTouchEnd = (e) => {
    if (touchX.current === null) return
    const dx = e.changedTouches[0].clientX - touchX.current
    touchX.current = null
    if (Math.abs(dx) > 60) (dx > 0 ? prev() : next())
  }

  const onBackdrop = (e) => { if (e.target === e.currentTarget) onClose() }

  return (
    <div
      className={styles.lb}
      onClick={onBackdrop}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      role="dialog"
      aria-modal="true"
      aria-label={item.caption}
    >
      <div className={styles.lbInner}>
        {/* Close */}
        <button className={styles.lbClose} onClick={onClose} aria-label="Close">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>

        {/* Media */}
        <div className={styles.lbImgWrap}>
          {isVideo ? (
            <video
              key={item.src}                 /* prev/next par purani video band ho jaye */
              className={styles.lbVideo}
              src={cldVideoFull(item.src)}
              poster={cldPoster(item.src, 960)}
              controls
              autoPlay
              playsInline
              preload="auto"
              controlsList="nodownload"
            />
          ) : (
            <Image
              key={item.src}
              src={cldImage(item.src, 1400)}
              alt={item.caption}
              fill
              className={styles.lbImg}
              sizes="(max-width: 900px) 100vw, 860px"
              priority
            />
          )}
        </div>

        {/* Caption */}
        <div className={styles.lbCaption}>
          <span
            className={styles.lbTag}
            style={{ background: tagStyle.bg, color: tagStyle.text }}
          >
            {item.tag}
          </span>
          <div className={styles.lbTitle}>{item.caption}</div>
          <div className={styles.lbOutlet}>{item.outlet}</div>
        </div>

        {/* Prev / Next */}
        <button className={`${styles.lbNav} ${styles.lbPrev}`} onClick={prev} aria-label="Previous">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
        <button className={`${styles.lbNav} ${styles.lbNext}`} onClick={next} aria-label="Next">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>

        {/* Counter */}
        <div className={styles.lbCounter}>
          {index + 1} / {items.length}
        </div>
      </div>
    </div>
  )
}