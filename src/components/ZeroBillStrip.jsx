'use client'
import Link from 'next/link'
import styles from '@/css/ZeroBillStrip.module.css'
import { IndianRupee, ArrowRight, BadgeCheck } from 'lucide-react'

export default function ZeroBillStrip() {
  return (
    <section className={styles.section} aria-label="Zero electricity bill proof">
      {/* Glowing cloud halo behind the bubble */}
      <div className={styles.cloudGlow} aria-hidden="true" />

      <div className={styles.bubble}>
        {/* shimmer sweep */}
        <span className={styles.shimmer} aria-hidden="true" />

        {/* Left — stat */}
        <div className={styles.statSide}>
          <div className={styles.zeroBadge}>
            <IndianRupee size={20} strokeWidth={2.5} color="#1A0E04" />
            <span className={styles.zeroNum}>0</span>
          </div>
          <div className={styles.statText}>
            <div className={styles.statHi}>बिजली बिल</div>
            <div className={styles.statEn}>Actual SBPDCL bill · Patna · Feb 2026</div>
          </div>
        </div>

        <div className={styles.divider} aria-hidden="true" />

        {/* Center — message */}
        <div className={styles.message}>
          <BadgeCheck className={styles.verifyIcon} size={16} strokeWidth={2} />
          <span>
            हमारे customer को आया असली{' '}
            <strong>Zero बिजली बिल</strong>{' '}
            — SBPDCL verified
          </span>
        </div>

        <div className={styles.divider} aria-hidden="true" />

        {/* Right — CTA */}
        <Link href="/zero-electricity-bill" className={styles.cta}>
          बिल देखें
          <ArrowRight size={14} strokeWidth={2.5} />
        </Link>
      </div>
    </section>
  )
}