// src/components/MediaGallery.jsx
'use client'
import { useState } from 'react'
import Image from 'next/image'
import { MEDIA, TAG_COLORS } from '@/data/media'
import { cldImage } from '@/lib/cloudinary'
import VideoThumb from '@/components/VideoThumb'
import MediaLightbox from '@/components/MediaLightBox'
import styles from '@/css/MediaGallery.module.css'

export default function MediaGallery() {
  const [lightbox, setLightbox] = useState(null) // open item ka index

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

        {/* Masonry-style grid */}
        <div className={styles.grid}>
          {MEDIA.map((item, i) => {
            const tagStyle = TAG_COLORS[item.tag] || TAG_COLORS.Event
            const isVideo = item.type === 'video'
            const alt = `${item.caption} — ${item.outlet}`

            return (
              <div
                key={i}
                className={`${styles.cell} ${item.wide ? styles.cellWide : ''}`}
                onClick={() => setLightbox(i)}
                role="button"
                tabIndex={0}
                aria-label={`${isVideo ? 'Play video' : 'View'}: ${item.caption}`}
                onKeyDown={e => e.key === 'Enter' && setLightbox(i)}
              >
                <div className={styles.imgWrap}>
                  {isVideo ? (
                    <VideoThumb
                      src={item.src}
                      alt={alt}
                      width={800}
                      className={styles.img}
                    />
                  ) : (
                    <Image
                      src={cldImage(item.src, 800)}
                      alt={alt}
                      fill
                      className={styles.img}
                      sizes="(max-width: 540px) 100vw, (max-width: 900px) 50vw, 560px"
                      loading="lazy"
                    />
                  )}
                  <div className={styles.scrim} />

                  {/* Tag badge */}
                  <span
                    className={styles.tag}
                    style={{ background: tagStyle.bg, color: tagStyle.text }}
                  >
                    {item.tag}
                  </span>

                  {/* Video: play button (hamesha dikhta hai, phone pe bhi) */}
                  {isVideo && (
                    <span className={styles.playBtn} aria-hidden="true">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </span>
                  )}

                  {/* Hover overlay */}
                  <div className={styles.hoverOverlay}>
                    <div className={styles.hoverIcon}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                        <path d="M15 3h6m0 0v6m0-6L10 14M9 5H5a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2v-4" />
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

      {/* Lightbox (alag widget file) */}
      {lightbox !== null && (
        <MediaLightbox
          items={MEDIA}
          index={lightbox}
          onChange={setLightbox}
          onClose={() => setLightbox(null)}
        />
      )}

      {/* Curve out → AboutCTA dark #0A0602 */}
      <div className={styles.curveWrap}>
        <svg viewBox="0 0 1440 90" preserveAspectRatio="none" aria-hidden="true" className={styles.curveSvg}>
          <path d="M0,0 Q720,90 1440,0 L1440,90 L0,90 Z" fill="#0A0602" />
        </svg>
      </div>
    </section>
  )
}