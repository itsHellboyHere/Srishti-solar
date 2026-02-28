'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useMotionValue, useReducedMotion, useSpring } from 'framer-motion'

export default function Magnetic({ children, strength = 0.45 }) {
  const ref = useRef(null)
  const reduceMotion = useReducedMotion()
  const [isFinePointer, setIsFinePointer] = useState(true)

  const rawX = useMotionValue(0)
  const rawY = useMotionValue(0)

  const x = useSpring(rawX, { stiffness: 180, damping: 18, mass: 0.12 })
  const y = useSpring(rawY, { stiffness: 180, damping: 18, mass: 0.12 })

  useEffect(() => {
    if (typeof window === 'undefined') return undefined

    const media = window.matchMedia('(pointer: fine)')
    const update = () => setIsFinePointer(media.matches)

    update()

    if (media.addEventListener) {
      media.addEventListener('change', update)
      return () => media.removeEventListener('change', update)
    }

    media.addListener(update)
    return () => media.removeListener(update)
  }, [])

  const handleMouseMove = (event) => {
    if (!ref.current || reduceMotion || !isFinePointer) return

    const { clientX, clientY } = event
    const { width, height, left, top } = ref.current.getBoundingClientRect()

    const nextX = (clientX - (left + width / 2)) * strength
    const nextY = (clientY - (top + height / 2)) * strength

    rawX.set(nextX)
    rawY.set(nextY)
  }

  const handleMouseLeave = () => {
    rawX.set(0)
    rawY.set(0)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ display: 'inline-block', willChange: 'transform', x, y }}
    >
      {children}
    </motion.div>
  )
}
