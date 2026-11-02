// src/components/MediaStrip.jsx
'use client'
import { MEDIA } from '@/data/media'
import MediaCard from '@/components/MediaCard'
import styles from '@/css/MediaStrip.module.css'

export default function MediaStrip() {
  // Array double kiya taaki infinite scroll loop seamless rahe
  const items = [...MEDIA, ...MEDIA]

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <span className={styles.eyebrow}>As Seen In · मीडिया में</span>
          <h2 className={styles.title}>
            Bihar ने देखा,{' '}
            <span className={styles.gold}>Bihar ने माना</span>
          </h2>
        </div>

        {/* Scrolling track */}
        <div className={styles.trackWrap} aria-label="Media and recognition photos and videos">
          <div className={styles.track}>
            {items.map((item, i) => (
              <MediaCard key={i} item={item} hidden={i >= MEDIA.length} />
            ))}
          </div>
        </div>

        <div className={styles.cta}>
          <a href="/about#media" className={styles.ctaLink}>
            सभी photos देखें
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}