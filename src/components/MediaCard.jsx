// src/components/MediaCard.jsx
'use client'
import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import styles from '@/css/MediaStrip.module.css'
import { cldImage, cldVideoMp4, cldVideoWebm, cldPoster } from '@/lib/cloudinary'

export default function MediaCard({ item, hidden = false }) {
  const isVideo = item.type === 'video'
  const wrapRef = useRef(null)
  const videoRef = useRef(null)
  const [loaded, setLoaded] = useState(false) // video source tabhi lagega jab card screen ke paas aaye

  // ── Video: sirf visible hone par load + play, bahar jaate hi pause ──
  useEffect(() => {
    if (!isVideo) return
    const el = wrapRef.current
    const video = videoRef.current
    if (!el || !video) return

    // iOS autoplay ke liye zaroori
    video.muted = true
    video.defaultMuted = true

    // Data Saver ON ya reduced-motion: video play nahi hoga, sirf poster dikhega
    const saveData = typeof navigator !== 'undefined' && navigator.connection?.saveData
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (saveData || reduceMotion || !('IntersectionObserver' in window)) return

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setLoaded(true)
          video.play().catch(() => {})
        } else {
          video.pause()
        }
      },
      { threshold: 0.25 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [isVideo])

  // Source lagte hi load() + play() — pehli baar ke liye
  useEffect(() => {
    if (!loaded) return
    const video = videoRef.current
    if (!video) return
    video.load()
    video.play().catch(() => {})
  }, [loaded])

  return (
    <div className={styles.card} aria-hidden={hidden}>
      <div className={styles.imgWrap} ref={wrapRef}>
        {isVideo ? (
          <>
            <video
              ref={videoRef}
              className={styles.video}
              poster={cldPoster(item.src)}
              muted
              loop
              playsInline
              disablePictureInPicture
              preload="none"
              aria-label={`${item.caption} — ${item.outlet}`}
            >
              {loaded && <source src={cldVideoWebm(item.src)} type="video/webm" />}
              {loaded && <source src={cldVideoMp4(item.src)} type="video/mp4" />}
            </video>
            <span className={styles.videoBadge} aria-hidden="true">
              <svg width="9" height="9" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z" />
              </svg>
              LIVE
            </span>
          </>
        ) : (
          <Image
            src={cldImage(item.src)}
            alt={`${item.caption} — ${item.outlet}`}
            fill
            className={styles.img}
            sizes="(max-width: 600px) 220px, 260px"
            loading="lazy"
          />
        )}
        <div className={styles.imgScrim} />
        <span className={styles.tag}>{item.tag}</span>
      </div>
      <div className={styles.cardBody}>
        <div className={styles.caption}>{item.caption}</div>
        <div className={styles.outlet}>{item.outlet}</div>
      </div>
    </div>
  )
}