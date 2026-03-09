'use client'
import { useRef, useState, useEffect } from 'react'
import styles from '@/css/JingleVideo.module.css'

export default function JingleVideo() {
  const videoRef = useRef(null)
  const [playing, setPlaying] = useState(false)
  const [muted, setMuted] = useState(true)

  // Autoplay muted when scrolled into view
  useEffect(() => {
    const el = videoRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.play().catch(() => {})
          setPlaying(true)
        } else {
          el.pause()
          setPlaying(false)
        }
      },
      { threshold: 0.5 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  function togglePlay() {
    const el = videoRef.current
    if (!el) return
    if (el.paused) { el.play(); setPlaying(true) }
    else           { el.pause(); setPlaying(false) }
  }

  function toggleMute() {
    const el = videoRef.current
    if (!el) return
    el.muted = !el.muted
    setMuted(el.muted)
  }

  return (
    <section className={styles.section}>
      {/* Grid lines */}
      <div className={styles.gridLines} aria-hidden="true"/>

      <div className={styles.inner}>

        {/* Header */}
        <div className={styles.header}>
          <span className={styles.eyebrow}>हमारी कहानी · Our Story</span>
          <h2 className={styles.title}>
            एक जिंगल,{' '}
            <span className={styles.gold}>एक वादा</span>
          </h2>
          <p className={styles.sub}>
            Bihar की हर छत पर सौर ऊर्जा — यही है हमारा सपना
          </p>
        </div>

        {/* Video container */}
        <div className={styles.videoOuter}>

          {/* Glow behind video */}
          <div className={styles.glow}/>

          <div className={styles.videoWrap}>
      <video
  ref={videoRef}
  src="https://res.cloudinary.com/dgifa4wgb/video/upload/v1772943166/f4d8fc7a-c497-4d75-83d8-52d71ee41ec7_t9a4lo.mp4"
  className={styles.video}
  muted
  loop
  playsInline
  preload="metadata"
  poster="https://res.cloudinary.com/dgifa4wgb/video/upload/so_15/v1772943166/f4d8fc7a-c497-4d75-83d8-52d71ee41ec7_t9a4lo.jpg"
/>

            {/* Play/pause overlay — only shows when paused */}
            {!playing && (
              <button
                className={styles.playBtn}
                onClick={togglePlay}
                aria-label="Play jingle"
              >
                <div className={styles.playRing}/>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </button>
            )}

            {/* Controls bar */}
            <div className={styles.controls}>
              <button
                className={styles.controlBtn}
                onClick={togglePlay}
                aria-label={playing ? 'Pause' : 'Play'}
              >
                {playing
                  ? <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>
                  : <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
                }
              </button>

              <div className={styles.controlLabel}>
                Srishti Solar — Official Jingle 2026
              </div>

              <button
                className={styles.controlBtn}
                onClick={toggleMute}
                aria-label={muted ? 'Unmute' : 'Mute'}
              >
                {muted
                  ? <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M16.5 12A4.5 4.5 0 0014 7.97v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51A8.796 8.796 0 0021 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06A8.99 8.99 0 0017.73 18l2 2L21 18.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/></svg>
                  : <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3A4.5 4.5 0 0014 7.97v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/></svg>
                }
              </button>
            </div>

            {/* Click anywhere to play/pause */}
            <div className={styles.clickZone} onClick={togglePlay}/>
          </div>

          {/* Side decorations */}
          <div className={styles.sideLeft}>
            <div className={styles.sideTag}>🎵 Official</div>
            <div className={styles.sideLine}/>
          </div>
          <div className={styles.sideRight}>
            <div className={styles.sideLine}/>
            <div className={styles.sideTag}>2026</div>
          </div>

        </div>

        {/* Below video — brand tagline */}
        <div className={styles.taglineRow}>
          <span className={styles.taglineDot}/>
          <span className={styles.tagline}>
            बिहार की हर छत चमकेगी, अब बिजली खुद ही दमकेगी
          </span>
          <span className={styles.taglineDot}/>
        </div>

      </div>

  

    </section>
  )
}