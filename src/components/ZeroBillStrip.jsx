'use client'
import Link from 'next/link'
import styles from '@/css/ZeroBillStrip.module.css'
import { IndianRupee, ArrowRight, BadgeCheck } from 'lucide-react'

export default function ZeroBillStrip() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>

        {/* Left — stat */}
        <div className={styles.statSide}>
          <div className={styles.zeroBadge}>
            <IndianRupee size={22} strokeWidth={2.5} color="#1A0E04"/>
            <span className={styles.zeroNum}>0</span>
          </div>
          <div className={styles.statText}>
            <div className={styles.statHi}>बिजली बिल</div>
            <div className={styles.statEn}>Actual SBPDCL bill · Patna · Feb 2026</div>
          </div>
        </div>

        {/* Divider */}
        <div className={styles.divider}/>

        {/* Center — message */}
        <div className={styles.message}>
          <BadgeCheck size={16} strokeWidth={2} color="#F4A300"/>
          <span>
            हमारे customer को आया असली{' '}
            <strong>Zero बिजली बिल</strong>{' '}
            — SBPDCL verified
          </span>
        </div>

        {/* Divider */}
        <div className={styles.divider}/>

        {/* Right — CTA */}
        <Link href="/subsidies#zerobill" className={styles.cta}>
          बिल देखें
          <ArrowRight size={14} strokeWidth={2.5}/>
        </Link>

      </div>
    </section>
  )
}