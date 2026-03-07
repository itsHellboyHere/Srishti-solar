'use client'
import { TEAM } from '@/data/about'
import styles from '../css/Aboutteam.module.css'

function Avatar({ name, size = 'md' }) {
  const letters = name.trim().split(' ').map(w => w[0]).slice(0,2).join('')
  return (
    <div className={`${styles.avatar} ${styles[`avatar_${size}`]}`}>
      <span>{letters}</span>
    </div>
  )
}

export default function AboutTeam() {
  const founder = TEAM.find(m => m.featured)
  const rest    = TEAM.filter(m => !m.featured)

  return (
    <section className={styles.section}>
      <div className={styles.inner}>

        <span className={`${styles.eyebrow} ${styles.fadeUp1}`}>हमारी टीम · Our Team</span>
        <h2 className={`${styles.title} ${styles.fadeUp2}`}>
          29 लोगों की टीम —{' '}
          <span className={styles.gold}>बिहार के लिए</span>
        </h2>

        <div className={`${styles.founderCard} ${styles.fadeUp3}`}>
          <div className={styles.founderLeft}>
            <Avatar name={founder.name} size="lg"/>
            <span className={styles.founderTag}>Founder</span>
          </div>
          <div className={styles.founderRight}>
            <div className={styles.founderName}>{founder.name}</div>
            <div className={styles.founderRole}>{founder.roleHindi} · {founder.role}</div>
            <div className={styles.founderPills}>
              <span className={styles.pill}>{founder.experience} Experience</span>
              <span className={styles.pill}>{founder.education}</span>
            </div>
            <p className={styles.founderBio}>{founder.bio}</p>
          </div>
        </div>

        <div className={styles.teamGrid}>
          {rest.map((m, i) => (
            <div key={i} className={`${styles.memberCard} ${styles[`fadeUp${Math.min(i + 3, 5)}`]}`}>
              <Avatar name={m.name} size="sm"/>
              <div className={styles.memberName}>{m.name}</div>
              <div className={styles.memberRoleHi}>{m.roleHindi}</div>
              <div className={styles.memberRoleEn}>{m.role}</div>
              <div className={styles.memberPills}>
                <span className={styles.pill}>{m.experience}</span>
                {m.education && <span className={styles.pill}>{m.education}</span>}
              </div>
              <p className={styles.memberBio}>{m.bioHindi}</p>
            </div>
          ))}
        </div>

      </div>

      {/* Curve: warm → Awards cream #FFFBF4 — arch UP */}
      <div className={styles.curveWrap}>
        <svg viewBox="0 0 1440 90" preserveAspectRatio="none" aria-hidden="true" className={styles.curveSvg}>
          <path d="M0,90 Q720,0 1440,90 L1440,90 L0,90 Z" fill="#FFFBF4"/>
        </svg>
      </div>
    </section>
  )
}