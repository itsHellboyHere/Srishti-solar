'use client'

import { useRef, useState } from 'react'

export default function Magnetic({ children, strength = 0.45 }) {
  const ref = useRef(null)
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const animRef = useRef(null)
  const currentPos = useRef({ x: 0, y: 0 })

  const handleMouseMove = (e) => {
    const el = ref.current
    if (!el) return
    const { width, height, left, top } = el.getBoundingClientRect()
    const targetX = (e.clientX - (left + width / 2)) * strength
    const targetY = (e.clientY - (top + height / 2)) * strength

    // Cancel any snap-back animation
    if (animRef.current) cancelAnimationFrame(animRef.current)

    // Smooth lerp toward target
    const lerp = () => {
      currentPos.current.x += (targetX - currentPos.current.x) * 0.18
      currentPos.current.y += (targetY - currentPos.current.y) * 0.18
      setPos({ x: currentPos.current.x, y: currentPos.current.y })
      animRef.current = requestAnimationFrame(lerp)
    }
    animRef.current = requestAnimationFrame(lerp)
  }

  const handleMouseLeave = () => {
    if (animRef.current) cancelAnimationFrame(animRef.current)

    // Spring snap back
    const snap = () => {
      currentPos.current.x *= 0.82
      currentPos.current.y *= 0.82
      setPos({ x: currentPos.current.x, y: currentPos.current.y })
      if (Math.abs(currentPos.current.x) > 0.05 || Math.abs(currentPos.current.y) > 0.05) {
        animRef.current = requestAnimationFrame(snap)
      } else {
        currentPos.current = { x: 0, y: 0 }
        setPos({ x: 0, y: 0 })
      }
    }
    animRef.current = requestAnimationFrame(snap)
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `translate(${pos.x}px, ${pos.y}px)`,
        display: 'inline-block',
        willChange: 'transform',
      }}
    >
      {children}
    </div>
  )
}