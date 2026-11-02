// src/components/VideoThumb.jsx
'use client'
import { useEffect, useRef, useState } from 'react'
import { cldPoster, cldVideoMp4, cldVideoWebm } from '@/lib/cloudinary'

/**
 * Pehle thumbnail (poster) dikhata hai, video tabhi load/play hota hai jab screen pe aaye.
 * Parent ko position: relative + fixed size/aspect chahiye.
 */
export default function VideoThumb({ src, alt = '', className = '', width = 800 }) {
  const wrapRef = useRef(null)
  const videoRef = useRef(null)
  const [active, setActive] = useState(false)
  const [posterFailed, setPosterFailed] = useState(false)

  const poster = cldPoster(src, width)

  useEffect(() => {
    const el = wrapRef.current
    const video = videoRef.current
    if (!el || !video) return
    video.muted = true

    const saveData = navigator.connection?.saveData
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (saveData || reduce || !('IntersectionObserver' in window)) return

    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setActive(true)
          video.play().catch(() => {})
        } else {
          video.pause()
        }
      },
      { threshold: 0.3 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  useEffect(() => {
    if (!active) return
    const v = videoRef.current
    if (!v) return
    v.load()
    v.play().catch(() => {})
  }, [active])

  return (
    <div
      ref={wrapRef}
      className={className}
      style={{ position: 'absolute', inset: 0, background: '#1a0e04' }}
    >
      {/* Thumbnail: hamesha niche dikhega, video ke upar aate hi chhup jaayega */}
      {!posterFailed && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={poster}
          alt={alt}
          loading="lazy"
          decoding="async"
          onError={() => setPosterFailed(true)}
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
        />
      )}

      <video
        ref={videoRef}
        poster={poster}
        muted
        loop
        playsInline
        disablePictureInPicture
        preload="metadata"
        aria-label={alt}
        style={{
          position: 'absolute', inset: 0, width: '100%', height: '100%',
          objectFit: 'cover', pointerEvents: 'none',
        }}
      >
        {active && <source src={cldVideoWebm(src, width)} type="video/webm" />}
        {active && <source src={cldVideoMp4(src, width)} type="video/mp4" />}
      </video>
    </div>
  )
}