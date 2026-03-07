'use client'

import SubsidyHero from './Subsidyhero'
import SubsidyCalculator from './Subsidycalculator'
import SubsidyTiers      from './Subsidytiers'
import ZeroBillProof from './ZeroBillProof'
import {
  SubsidyEligibility,
  SubsidySteps,
  SubsidyFAQ,
  SubsidyCTA,
  
} from '../comp/Subsidysections'
import styles from '../css/Subsidycontent.module.css'

/*
  PULL-UP CARD ARCHITECTURE — FIXED
  ───────────────────────────────────
  NO sticky. Each card overlaps the previous by 24px using
  negative margin-top + border-radius + box-shadow.
  As you scroll, each card visually "peels up" over the one
  above — full content is always scrollable and visible.
*/

const CARDS = [
  { id: 'calculator',  Component: SubsidyCalculator, bg: 'warm' },
  { id: 'tiers',       Component: SubsidyTiers,       bg: 'base' },
    { id: 'zerobill',      Component: ZeroBillProof,      bg: 'dark' },
  { id: 'eligibility', Component: SubsidyEligibility, bg: 'warm' },
  { id: 'steps',       Component: SubsidySteps,       bg: 'dark' },
  { id: 'faq',         Component: SubsidyFAQ,         bg: 'warm' },
  { id: 'cta',         Component: SubsidyCTA,         bg: 'dark' },
]

export default function SubsidyContent() {
  return (
    <div className={styles.page}>

      {/* Hero — flat, no card treatment */}
      <SubsidyHero />

      {/* Pull-up card stack — overlap via negative margin */}
      <div className={styles.stack}>
        {CARDS.map((card, i) => (
          <div
            key={card.id}
            className={`${styles.card} ${styles[`bg_${card.bg}`]}`}
            style={{ zIndex: 10 + i }}
          >
            <div className={styles.peelBar} />
            <card.Component />
          </div>
        ))}
      </div>

    </div>
  )
}