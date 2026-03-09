'use client'

import { useState } from 'react'
import Link from 'next/link'
import styles from './Contact.module.css'

const KW_OPTIONS = [
  { value: '1',  label: '1 kW',  hint: '₹30,000 subsidy', desc: 'Small home'    },
  { value: '2',  label: '2 kW',  hint: '₹60,000 subsidy', desc: 'Medium home'   },
  { value: '3',  label: '3 kW',  hint: '₹78,000 subsidy', desc: 'Best value'    },
  { value: '4+', label: '4+ kW', hint: 'Commercial',       desc: 'Large/business'},
]

const TRUST = [
  { num: '2,500+', label: 'Installations' },
  { num: '72 Hrs', label: 'Install Time'  },
  { num: '₹78k',   label: 'Max Subsidy'  },
  { num: '5 Yr',   label: 'Free AMC'     },
]

const CONTACTS = [
  { label: 'Call / WhatsApp', value: '99310 13345',                href: 'tel:+919931013345'              },
  { label: 'Call / WhatsApp', value: '99310 67798',                href: 'tel:+919931067798'              },
  { label: 'Email',           value: 'info@srishtisolarpower.com', href: 'mailto:info@srishtisolarpower.com' },
{ label: 'Office', value: 'Road No-6, Corner, East Patel Nagar, Near Gandhi Murti, Patna 800023', href: null },
]

export default function ContactForm() {
  const [form, setForm]     = useState({ name: '', phone: '', city: '', kw: '', message: '' })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | loading | success | error
  const [errMsg, setErrMsg] = useState('')

  const set = (field) => (e) => {
    setForm(p => ({ ...p, [field]: e.target.value }))
    if (errors[field]) setErrors(p => ({ ...p, [field]: '' }))
  }

  const selectKw = (val) => {
    setForm(p => ({ ...p, kw: val }))
    if (errors.kw) setErrors(p => ({ ...p, kw: '' }))
  }

  const validate = () => {
    const e = {}
    if (!form.name.trim())  e.name  = 'नाम ज़रूरी है'
    if (!form.phone.trim()) e.phone = 'फ़ोन नंबर ज़रूरी है'
    else if (!/^\d{10}$/.test(form.phone.replace(/\s/g, ''))) e.phone = 'Valid 10-digit number'
    if (!form.city.trim())  e.city  = 'शहर ज़रूरी है'
    if (!form.kw)           e.kw    = 'सिस्टम साइज़ चुनें'
    return e
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }

    setStatus('loading')
    setErrMsg('')

    try {
      const res  = await fetch('/api/contact', {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify(form),
      })
      const data = await res.json()

      if (!res.ok || !data.success) {
        setStatus('error')
        setErrMsg(data.error || 'Something went wrong. Please try again.')
        return
      }

      setStatus('success')
      setTimeout(() => window.open(data.waUrl, '_blank'), 1400)

    } catch {
      setStatus('error')
      setErrMsg('Network error. Please try again.')
    }
  }

  return (
    <div className={styles.page}>

      {/* ── LEFT — Dark Info Panel ── */}
      <aside className={styles.left}>
        <div className={styles.leftInner}>

          <Link href="/" className={styles.backLink}>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <path d="M19 12H5M5 12l7-7M5 12l7 7"/>
            </svg>
            होम पर जाएँ
          </Link>

          <span className={styles.eyebrow}>
            <span className={styles.eyebrowDot}/>
            संपर्क करें · Get in Touch
          </span>

          <h1 className={styles.leftTitle}>
            मुफ्त साइट<br/>
            <span className={styles.leftTitleGold}>विज़िट बुक करें</span>
          </h1>

          <p className={styles.leftDesc}>
            Book a free site visit today. Our expert will assess your roof,
            calculate savings, and handle all subsidy paperwork — at no cost.
          </p>

          {/* Trust stats */}
          <div className={styles.stats}>
            {TRUST.map((t, i) => (
              <div key={i} className={styles.stat}>
                <span className={styles.statNum}>{t.num}</span>
                <span className={styles.statLabel}>{t.label}</span>
              </div>
            ))}
          </div>

          {/* Contact info */}
          <div className={styles.contactList}>
            {CONTACTS.map((c, i) => (
              <div key={i} className={styles.contactItem}>
                <span className={styles.contactLabel}>{c.label}</span>
                {c.href
                  ? <a href={c.href} className={styles.contactValue}>{c.value}</a>
                  : <span className={styles.contactValue}>{c.value}</span>
                }
              </div>
            ))}
          </div>

          {/* Direct WhatsApp */}
          <a href="https://wa.me/919931013345" target="_blank"
            rel="noopener noreferrer" className={styles.waBtn}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            अभी WhatsApp करें
          </a>

        </div>
      </aside>

      {/* ── RIGHT — Form ── */}
      <main className={styles.right}>
        <div className={styles.formWrap}>

          {status === 'success' ? (

            <div className={styles.successBox}>
              <div className={styles.successIcon}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <path d="M20 6L9 17l-5-5"/>
                </svg>
              </div>
              <h2 className={styles.successTitle}>अनुरोध मिल गया! 🌞</h2>
              <p className={styles.successDesc}>
                Thank you <strong>{form.name}</strong>! We received your request.
                Opening WhatsApp to connect you with our team…
              </p>
              <p className={styles.successHint}>हमारी टीम 24 घंटे में संपर्क करेगी।</p>
            </div>

          ) : (
            <>
              <div className={styles.formHead}>
                <h2 className={styles.formTitle}>फ्री कोटेशन पाएँ</h2>
                <p className={styles.formSubtitle}>Get Free Quote — No commitment, no cost</p>
              </div>

              <form onSubmit={handleSubmit} className={styles.form} noValidate>

                {/* Name + Phone */}
                <div className={styles.row}>
                  <div className={styles.field}>
                    <label className={styles.label}>
                      नाम <span className={styles.req}>*</span>
                    </label>
                    <input type="text" placeholder="आपका नाम"
                      value={form.name} onChange={set('name')}
                      className={`${styles.input} ${errors.name ? styles.inputErr : ''}`}/>
                    {errors.name && <span className={styles.errMsg}>{errors.name}</span>}
                  </div>

                  <div className={styles.field}>
                    <label className={styles.label}>
                      फ़ोन <span className={styles.req}>*</span>
                    </label>
                    <input type="tel" placeholder="10-digit number"
                      value={form.phone} onChange={set('phone')} maxLength={10}
                      className={`${styles.input} ${errors.phone ? styles.inputErr : ''}`}/>
                    {errors.phone && <span className={styles.errMsg}>{errors.phone}</span>}
                  </div>
                </div>

                {/* City */}
                <div className={styles.field}>
                  <label className={styles.label}>
                    शहर / ज़िला <span className={styles.req}>*</span>
                  </label>
                  <input type="text" placeholder="e.g. Patna, Gaya, Muzaffarpur"
                    value={form.city} onChange={set('city')}
                    className={`${styles.input} ${errors.city ? styles.inputErr : ''}`}/>
                  {errors.city && <span className={styles.errMsg}>{errors.city}</span>}
                </div>

                {/* kW cards */}
                <div className={styles.field}>
                  <label className={styles.label}>
                    सिस्टम साइज़ <span className={styles.req}>*</span>
                    <span className={styles.labelHint}> — कितना kW चाहिए?</span>
                  </label>
                  <div className={styles.kwGrid}>
                    {KW_OPTIONS.map((opt) => (
                      <button key={opt.value} type="button"
                        onClick={() => selectKw(opt.value)}
                        className={`${styles.kwCard} ${form.kw === opt.value ? styles.kwActive : ''}`}>
                        <span className={styles.kwLabel}>{opt.label}</span>
                        <span className={styles.kwHint}>{opt.hint}</span>
                        <span className={styles.kwDesc}>{opt.desc}</span>
                      </button>
                    ))}
                  </div>
                  {errors.kw && <span className={styles.errMsg}>{errors.kw}</span>}
                </div>

                {/* Message */}
                <div className={styles.field}>
                  <label className={styles.label}>
                    संदेश <span className={styles.labelHint}> — optional</span>
                  </label>
                  <textarea placeholder="कोई सवाल या ज़रूरी जानकारी…"
                    value={form.message} onChange={set('message')}
                    className={styles.textarea} rows={3}/>
                </div>

                {status === 'error' && (
                  <div className={styles.formErr}>⚠️ {errMsg}</div>
                )}

                <button type="submit" disabled={status === 'loading'}
                  className={styles.submitBtn}>
                  {status === 'loading' ? (
                    <span className={styles.loadingInner}>
                      <span className={styles.spinner}/> भेज रहे हैं…
                    </span>
                  ) : (
                    <span className={styles.submitInner}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                      </svg>
                      WhatsApp पर संपर्क करें
                    </span>
                  )}
                </button>

                <p className={styles.formNote}>
                  फॉर्म भरते ही आप हमारे WhatsApp से जुड़ जाएंगे।<br/>
                  <span>Free site visit · No upfront payment · MNRE certified</span>
                </p>

              </form>
            </>
          )}
        </div>
      </main>

    </div>
  )
}