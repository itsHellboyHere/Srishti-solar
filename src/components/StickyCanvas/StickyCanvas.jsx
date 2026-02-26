'use client'

import styles from './StickyCanvas.module.css'

/**
 * StickyCanvas
 * Wraps multiple sections with one shared sticky background.
 * The bg image pins at top: 0 and scrolls away only when the
 * entire canvas leaves the viewport — giving a long, cinematic
 * parallax feel across WhyUs + Process.
 */
export default function StickyCanvas({ children, image, watermark }) {
  return (
    <div className={styles.canvas}>

      {/* ── Sticky bg — stays pinned while children scroll ── */}
      <div className={styles.stickyBg} aria-hidden="true">
        <img src={image} alt="" className={styles.bgImg} />
        <div className={styles.bgOverlay} />
        {watermark && (
          <span className={styles.watermark}>{watermark}</span>
        )}
      </div>

      {/* ── All sections stack on top ── */}
      <div className={styles.content}>
        {children}
      </div>

    </div>
  )
}