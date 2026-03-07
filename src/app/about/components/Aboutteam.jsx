'use client'
import Image from 'next/image'
import { TEAM } from '@/data/about'
import styles from '../css/Aboutteam.module.css'

function Avatar({ name }) {
  const letters = name.trim().split(' ').map(w => w[0]).slice(0, 2).join('')
  return (
    <div className={styles.avatar}>
      <span>{letters}</span>
    </div>
  )
}

function TeamCard({ member, featured = false }) {
  return (
    <div className={`${styles.card} ${featured ? styles.cardFeatured : ''}`}>

      {/* ── Background: photo or dark gradient ── */}
      {member.photo ? (
        <Image
          src={member.photo}
          alt={`${member.name} — ${member.role}, Srishti Solar Power`}
          fill
          className={styles.cardBg}
          sizes={featured
            ? '(max-width: 900px) 100vw, 560px'
            : '(max-width: 520px) 100vw, (max-width: 900px) 50vw, 33vw'
          }
          priority={featured}
        />
      ) : (
        <div className={styles.cardBgFallback}>
          <Avatar name={member.name} />
        </div>
      )}

      {/* ── Single scrim — top clear, bottom dark ── */}
      <div className={styles.scrim} aria-hidden="true" />

      {/* ── Featured badge ── */}
      {featured && (
        <div className={styles.badge}>
          <span className={styles.badgeDot} />
          Founder
        </div>
      )}

      {/* ── Content — always at bottom, never overlapping ── */}
      <div className={styles.content}>

        {/* Pills — fade in on hover */}
        <div className={styles.pills}>
          <span className={styles.pill}>{member.experience}</span>
          {member.education && <span className={styles.pill}>{member.education}</span>}
        </div>

        {/* Bio — fade in on hover */}
        <p className={styles.bio}>
          {featured ? member.bio : member.bioHindi}
        </p>

        {/* Name + role — always visible */}
        <div className={styles.nameRow}>
          <div className={styles.name}>{member.name}</div>
          <div className={styles.role}>{member.roleHindi}</div>
          <div className={styles.roleEn}>{member.role}</div>
        </div>
      </div>

    </div>
  )
}

export default function AboutTeam() {
  const founder = TEAM.find(m => m.featured)
  const rest    = TEAM.filter(m => !m.featured)

  return (
    <section className={styles.section}>
      <div className={styles.inner}>

        <span className={`${styles.eyebrow} ${styles.fadeUp1}`}>
          हमारी टीम · Our Team
        </span>
        <h2 className={`${styles.heading} ${styles.fadeUp2}`}>
          29 लोगों की टीम — <span className={styles.gold}>बिहार के लिए</span>
        </h2>

        {/* All 4 in one unified grid */}
        <div className={styles.grid}>
          {/* Founder — spans 2 cols */}
          <div className={`${styles.fadeUp3} ${styles.colSpan2}`}>
            <TeamCard member={founder} featured />
          </div>

          {/* Rest — one col each */}
          {rest.map((m, i) => (
            <div key={i} className={styles[`fadeUp${i + 4}`] || styles.fadeUp5}>
              <TeamCard member={m} />
            </div>
          ))}
        </div>

      </div>

      <div className={styles.curveWrap}>
        <svg viewBox="0 0 1440 90" preserveAspectRatio="none" aria-hidden="true" className={styles.curveSvg}>
          <path d="M0,90 Q720,0 1440,90 L1440,90 L0,90 Z" fill="#FFFBF4"/>
        </svg>
      </div>
    </section>
  )
}