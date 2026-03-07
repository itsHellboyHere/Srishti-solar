'use client'
import { useEffect, useState } from 'react'
import styles from '@/css/LeadModal.module.css'

const WA_NUMBER  = '919931013345'
const WA_MESSAGE = encodeURIComponent('नमस्ते! मुझे Srishti Solar Power से solar panel लगवाना है। Free site visit book करना है।')
const WA_LINK    = `https://wa.me/${WA_NUMBER}?text=${WA_MESSAGE}`

export default function LeadModal() {
  const [visible, setVisible] = useState(false)
  const [closing, setClosing] = useState(false)

  useEffect(() => {
    // Don't show if already dismissed this session
    if (sessionStorage.getItem('lead_modal_seen')) return

    const timer = setTimeout(() => setVisible(true), 5000)
    return () => clearTimeout(timer)
  }, [])

  // Tell WhatsApp button to hide/show when modal opens/closes
  useEffect(() => {
    if (visible) window.dispatchEvent(new Event('leadModalOpen'))
    else         window.dispatchEvent(new Event('leadModalClose'))
  }, [visible])

  function dismiss() {
    setClosing(true)
    setTimeout(() => {
      setVisible(false)
      setClosing(false)
    }, 320)
    sessionStorage.setItem('lead_modal_seen', '1')
  }

  function handleWa() {
    sessionStorage.setItem('lead_modal_seen', '1')
    window.open(WA_LINK, '_blank', 'noopener,noreferrer')
    dismiss()
  }

  if (!visible) return null

  return (
    <>
      {/* Backdrop */}
      <div
        className={`${styles.backdrop} ${closing ? styles.backdropOut : ''}`}
        onClick={dismiss}
        aria-hidden="true"
      />

      {/* Modal */}
      <div
        className={`${styles.modal} ${closing ? styles.modalOut : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Free solar consultation"
      >
        {/* Close button */}
        <button className={styles.close} onClick={dismiss} aria-label="Close">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <path d="M18 6L6 18M6 6l12 12"/>
          </svg>
        </button>

        {/* Gold glow orb */}
        <div className={styles.orb} aria-hidden="true"/>

        {/* Top badge */}
        <div className={styles.badge}>
          <span className={styles.badgeDot}/>
          Free Consultation · बिल्कुल मुफ़्त
        </div>

        {/* Solar icon */}
        <div className={styles.sunWrap} aria-hidden="true">
          <div className={styles.sun}>
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="4" fill="#F4A300"/>
              <path d="M12 2v2M12 20v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M2 12h2M20 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"
                stroke="#F4A300" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>
          <div className={styles.sunRing}/>
        </div>

        {/* Headline */}
        <h2 className={styles.title}>
          सोलर लगवाना है?
          <span className={styles.titleGold}> अभी पूछें — मुफ़्त!</span>
        </h2>

        <p className={styles.desc}>
          Free site visit · ₹78,000 तक सब्सिडी · Bihar Solar Expo 2026 में <strong>#1</strong>
        </p>

        {/* Stats row */}
        <div className={styles.stats}>
          {[
            { num: '41+',  label: 'Installs' },
            { num: '9',    label: 'Districts' },
            { num: '₹0',   label: 'Site Visit' },
          ].map((s, i) => (
            <div key={i} className={styles.stat}>
              <span className={styles.statNum}>{s.num}</span>
              <span className={styles.statLabel}>{s.label}</span>
            </div>
          ))}
        </div>

        {/* WhatsApp CTA */}
        <button className={styles.waBtn} onClick={handleWa}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          WhatsApp पर बात करें
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </button>

        {/* Dismiss link */}
        <button className={styles.skip} onClick={dismiss}>
          अभी नहीं · Maybe later
        </button>

      </div>
    </>
  )
}