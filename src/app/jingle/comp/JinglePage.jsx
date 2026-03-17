'use client'
import { useRef, useState, useEffect } from 'react'
import Link from 'next/link'
import styles from '../css/JinglePage.module.css'

const VIDEO_SRC = 'https://res.cloudinary.com/dgifa4wgb/video/upload/v1772943166/f4d8fc7a-c497-4d75-83d8-52d71ee41ec7_t9a4lo.mp4'
const POSTER    = 'https://res.cloudinary.com/dgifa4wgb/video/upload/so_15/v1772943166/f4d8fc7a-c497-4d75-83d8-52d71ee41ec7_t9a4lo.jpg'

export default function JinglePage() {
  const videoRef   = useRef(null)
  const [playing, setPlaying]   = useState(false)
  const [muted,   setMuted]     = useState(false)
  const [progress, setProgress] = useState(0)
  const [duration, setDuration] = useState(0)
  const [showControls, setShowControls] = useState(true)
  const [entered, setEntered]   = useState(false)
  const hideTimer = useRef(null)

  // Entrance animation trigger
  useEffect(() => {
    const t = setTimeout(() => setEntered(true), 100)
    return () => clearTimeout(t)
  }, [])

  // Auto-hide controls
  useEffect(() => {
    if (!playing) return
    clearTimeout(hideTimer.current)
    hideTimer.current = setTimeout(() => setShowControls(false), 3000)
    return () => clearTimeout(hideTimer.current)
  }, [playing, showControls])

  function handleMouseMove() {
    setShowControls(true)
  }

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

  function handleTimeUpdate() {
    const el = videoRef.current
    if (!el || !el.duration) return
    setProgress((el.currentTime / el.duration) * 100)
  }

  function handleLoadedMetadata() {
    const el = videoRef.current
    if (el) setDuration(el.duration)
  }

  function handleSeek(e) {
    const el = videoRef.current
    if (!el) return
    const rect = e.currentTarget.getBoundingClientRect()
    const ratio = (e.clientX - rect.left) / rect.width
    el.currentTime = ratio * el.duration
  }

  function handleFullscreen() {
    const el = videoRef.current
    if (!el) return
    if (document.fullscreenElement) document.exitFullscreen()
    else el.requestFullscreen()
  }

  function formatTime(s) {
    if (!s || isNaN(s)) return '0:00'
    const m = Math.floor(s / 60)
    const sec = Math.floor(s % 60).toString().padStart(2, '0')
    return `${m}:${sec}`
  }

  const currentTime = videoRef.current ? videoRef.current.currentTime : 0

  return (
    <div className={`${styles.root} ${entered ? styles.entered : ''}`} onMouseMove={handleMouseMove}>

      {/* ── Ambient background glow that reacts to progress ── */}
      <div className={styles.ambientBg} />
      <div className={styles.grain} />

      {/* ── Top bar ── */}
      <header className={`${styles.topBar} ${showControls || !playing ? styles.visible : ''}`}>
        <Link href="/" className={styles.backBtn} aria-label="Back to home">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M5 12l7-7M5 12l7 7"/>
          </svg>
          <span>वापस जाएं</span>
        </Link>

        <div className={styles.brandMark}>
          <span className={styles.brandDot} />
          Srishti Solar Power
        </div>

        <div className={styles.topRight}>
          <span className={styles.liveBadge}>🎵 Official Jingle 2026</span>
        </div>
      </header>

      {/* ── Main video theatre ── */}
      <main className={styles.theatre} onClick={togglePlay}>

        {/* Vignette overlay */}
        <div className={styles.vignette} />

        <video
          ref={videoRef}
          src={VIDEO_SRC}
          poster={POSTER}
          className={styles.video}
          loop
          playsInline
          preload="metadata"
          onTimeUpdate={handleTimeUpdate}
          onLoadedMetadata={handleLoadedMetadata}
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
        />

        {/* Big centre play button */}
        {!playing && (
          <div className={styles.bigPlay}>
            <div className={styles.bigPlayRing} />
            <div className={styles.bigPlayRing2} />
            <svg width="36" height="36" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5v14l11-7z"/>
            </svg>
          </div>
        )}

        {/* Overlay title — shown when paused */}
        {!playing && (
          <div className={styles.overlayTitle}>
            <p className={styles.overlayEyebrow}>हमारा सपना · Our Vision</p>
            <h1 className={styles.overlayH1}>
              हर छत पर सूरज,{' '}
              <em>हर घर में रोशनी</em>
            </h1>
            <p className={styles.overlayTagline}>
              बिहार की हर छत चमकेगी, अब बिजली खुद ही दमकेगी
            </p>
          </div>
        )}

      </main>

      {/* ── Bottom controls ── */}
      <footer
        className={`${styles.controls} ${showControls || !playing ? styles.visible : ''}`}
        onClick={e => e.stopPropagation()}
      >
        {/* Progress bar */}
        <div className={styles.progressTrack} onClick={handleSeek} role="slider" aria-label="Seek">
          <div className={styles.progressFill} style={{ width: `${progress}%` }} />
          <div className={styles.progressThumb} style={{ left: `${progress}%` }} />
        </div>

        <div className={styles.controlsRow}>
          {/* Play/pause */}
          <button className={styles.ctrlBtn} onClick={togglePlay} aria-label={playing ? 'Pause' : 'Play'}>
            {playing
              ? <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>
              : <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
            }
          </button>

          {/* Mute */}
          <button className={styles.ctrlBtn} onClick={toggleMute} aria-label={muted ? 'Unmute' : 'Mute'}>
            {muted
              ? <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M16.5 12A4.5 4.5 0 0014 7.97v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51A8.796 8.796 0 0021 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06A8.99 8.99 0 0017.73 18l2 2L21 18.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/></svg>
              : <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3A4.5 4.5 0 0014 7.97v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/></svg>
            }
          </button>

          {/* Time */}
          <span className={styles.timeDisplay}>
            {formatTime(currentTime)} / {formatTime(duration)}
          </span>

          {/* Spacer */}
          <div style={{ flex: 1 }} />

          {/* Label */}
          <span className={styles.controlLabel}>Srishti Solar — Official Jingle 2026</span>

          {/* Fullscreen */}
          <button className={styles.ctrlBtn} onClick={handleFullscreen} aria-label="Fullscreen">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/>
            </svg>
          </button>
        </div>
      </footer>

    </div>
  )
}