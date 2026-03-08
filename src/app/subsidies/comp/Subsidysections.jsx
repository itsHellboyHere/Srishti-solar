'use client'
import { useState } from 'react'
import Link from 'next/link'
import styles from '../css/Subsidysections.module.css'

// ── Verified eligibility — corrected from official scheme rules ──────────
// Note: Tenants CAN apply if they have electricity connection in their name
const ELIGIBILITY = [
  { text: 'Own a residential property in India',         hindi: 'भारत में अपना घर है',                   pass: true  },
  { text: 'Valid SBPDCL electricity connection',          hindi: 'आपके नाम पर बिजली कनेक्शन है',          pass: true  },
  { text: 'Roof gets 4+ hours of sunlight daily',        hindi: 'छत पर रोज़ 4+ घंटे धूप आती है',         pass: true  },
  { text: 'Haven\'t claimed solar subsidy before',       hindi: 'पहले कभी सोलर सब्सिडी नहीं ली',         pass: true  },
  { text: 'Valid Aadhaar card + bank account',           hindi: 'आधार कार्ड और बैंक खाता है',            pass: true  },
  { text: 'Tenants with electricity in their name',      hindi: 'किराएदार (बिजली अपने नाम पर हो तो)',     pass: true  },
  { text: 'Commercial / industrial properties',          hindi: 'कमर्शियल / फैक्ट्री संपत्ति',           pass: false },
  { text: 'Already has solar system installed',          hindi: 'पहले से सोलर लगा हुआ है',               pass: false },
]

const STEPS = [
  {
    num: '01', title: 'मुफ्त साइट विज़िट', titleEn: 'Free Site Visit',
    desc: 'हमारे एक्सपर्ट आपकी छत देखते हैं, सही साइज़ बताते हैं और बिना किसी शुल्क के पूरा आकलन करते हैं।',
  },
  {
    num: '02', title: 'दस्तावेज़ इकट्ठा', titleEn: 'Document Collection',
    desc: 'आधार, बिजली बिल और संपत्ति के कागज़ — हम आपको बताते हैं क्या चाहिए और इकट्ठा भी करते हैं।',
  },
  {
    num: '03', title: 'पोर्टल पर आवेदन', titleEn: 'Portal Application',
    desc: 'हम PM Surya Ghar national portal (pmsuryaghar.gov.in) पर आपका आवेदन भरते हैं — आपको कहीं जाना नहीं।',
  },
  {
    num: '04', title: '72 घंटे में इंस्टॉलेशन', titleEn: 'Installation in 72 Hours',
    desc: 'DISCOM feasibility approval के बाद पटना में 72 घंटे में पूरा सिस्टम लग जाता है। SBPDCL निरीक्षण हम कराते हैं।',
  },
  {
    num: '05', title: 'सब्सिडी आपके खाते में', titleEn: 'Subsidy in Your Account',
    desc: 'Net meter लगने के बाद 30–60 दिन में सरकारी सब्सिडी सीधे आपके बैंक खाते में आ जाती है।',
  },
]

// ── Verified FAQ with corrected tenant info ──────────────────────────────
const FAQS = [
  {
    q: 'PM Surya Ghar सब्सिडी क्या है?', qEn: 'What is PM Surya Ghar Yojana?',
    a: 'PM Surya Ghar Muft Bijli Yojana भारत सरकार की योजना है (शुरुआत: 13 फरवरी 2024) जिसमें 1 करोड़ घरों पर रूफटॉप सोलर लगाने का लक्ष्य है। 1kW पर ₹30,000, 2kW पर ₹60,000 और 3kW या उससे ज़्यादा पर ₹78,000 की सब्सिडी मिलती है। यह योजना FY 2026–27 तक चलेगी।',
  },
  {
    q: 'सब्सिडी कितने दिन में आती है?', qEn: 'How long does subsidy take?',
    a: 'Net meter इंस्टॉलेशन और DISCOM commissioning certificate के बाद आमतौर पर 30–60 दिन में सब्सिडी सीधे बैंक खाते में आती है। Srishti Solar पूरी प्रक्रिया को ट्रैक करती है।',
  },
  {
    q: 'क्या किराए के मकान पर सब्सिडी मिलती है?', qEn: 'Can tenants apply?',
    a: 'हाँ — अगर बिजली कनेक्शन आपके नाम पर है तो किराएदार भी आवेदन कर सकते हैं। यह PM Surya Ghar की official eligibility है।',
  },
  {
    q: '3kW से बड़े सिस्टम पर सब्सिडी?', qEn: 'Subsidy above 3kW?',
    a: 'सब्सिडी 3kW पर cap है — 4kW या उससे बड़े किसी भी सिस्टम पर अधिकतम ₹78,000 ही मिलेगी। बाकी लागत खुद वहन करनी होगी, लेकिन बड़े सिस्टम से बचत भी ज़्यादा होती है।',
  },
  {
    q: 'क्या Srishti Solar सारा काम करती है?', qEn: 'Does Srishti handle everything?',
    a: 'हाँ, बिल्कुल। Portal application से SBPDCL निरीक्षण तक — सब कुछ हम करते हैं। आपको बस दस्तावेज़ देने हैं।',
  },
  {
    q: 'बिजली बिल कितना कम होगा?', qEn: 'How much will bill reduce?',
    a: 'सरकारी अनुमान के अनुसार 3kW सिस्टम से ₹15,000 प्रति वर्ष की बचत होती है। यानी लगभग ₹1,250 प्रति महीना (EMI काटकर)। वास्तविक बचत आपके उपयोग और धूप पर निर्भर करती है।',
  },
  {
    q: 'लोन की सुविधा है?', qEn: 'Is solar loan available?',
    a: 'हाँ। PM Surya Ghar योजना के तहत SBI सहित राष्ट्रीयकृत बैंक collateral-free solar loan देते हैं JanSamarth Portal के ज़रिए। Srishti Solar आपको सही बैंक से जोड़ने में मदद करती है।',
  },
  {
    q: 'इंस्टॉलेशन में कितना समय?', qEn: 'How long does installation take?',
    a: 'पटना और आसपास के इलाकों में DISCOM approval के बाद 72 घंटे। अन्य जिलों में 5–7 कार्य दिवस। पूरी प्रक्रिया (application to subsidy) में 60–90 दिन लगते हैं।',
  },
]

// ── Eligibility ─────────────────────────────────────────────────────────────
export function SubsidyEligibility() {
  return (
    <section className={styles.panel}>
      <div className={styles.inner}>
        <div className={styles.grid2}>
          <div>
            <span className={styles.eyebrow}>पात्रता · Eligibility</span>
            <h2 className={styles.title}>
              क्या आप<br/>
              <span className={styles.gold}>योग्य हैं?</span>
            </h2>
            <p className={styles.desc}>
              नीचे दी गई शर्तें पूरी होती हैं तो आप PM Surya Ghar
              सब्सिडी के लिए आवेदन कर सकते हैं।
            </p>
            <Link href="/contact" className={styles.btn}>
              मुफ्त जाँच करवाएँ
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
          </div>

          <div className={styles.list}>
            {ELIGIBILITY.map((e, i) => (
              <div key={i} className={`${styles.item} ${e.pass ? styles.pass : styles.fail}`}>
                <span className={`${styles.icon} ${e.pass ? styles.iconPass : styles.iconFail}`}>
                  {e.pass ? '✓' : '✗'}
                </span>
                <div>
                  <div className={styles.itemHindi}>{e.hindi}</div>
                  <div className={styles.itemEn}>{e.text}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// ── Steps ────────────────────────────────────────────────────────────────────
export function SubsidySteps() {
  return (
    <section className={`${styles.panel} ${styles.panelDark}`}>
      <div className={styles.inner}>
        <div className={styles.headCenter}>
          <span className={`${styles.eyebrow} ${styles.eyebrowLight}`}>हमारी प्रक्रिया · How We Handle It</span>
          <h2 className={`${styles.title} ${styles.titleLight}`}>
            सब्सिडी का सारा काम<br/>
            <span className={styles.goldLight}>हम करते हैं</span>
          </h2>
          <p className={`${styles.desc} ${styles.descLight}`}>
            आपको कहीं जाने की ज़रूरत नहीं — बस हमें बुलाएँ
          </p>
        </div>

        <div className={styles.steps}>
          {STEPS.map((s, i) => (
            <div key={i} className={styles.step}>
              <div className={styles.stepLeft}>
                <div className={styles.stepNum}>{s.num}</div>
                {i < STEPS.length - 1 && <div className={styles.stepLine}/>}
              </div>
              <div className={styles.stepBody}>
                <div className={styles.stepTitle}>{s.title}</div>
                <div className={styles.stepTitleEn}>{s.titleEn}</div>
                <div className={styles.stepDesc}>{s.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── FAQ ──────────────────────────────────────────────────────────────────────
export function SubsidyFAQ() {
  const [open, setOpen] = useState(null)
  return (
    <section className={styles.panel} id='f&q'>
      <div className={styles.inner}>
        <div className={styles.headCenter}>
          <span className={styles.eyebrow}>अक्सर पूछे जाने वाले सवाल · FAQ</span>
          <h2 className={styles.title}>
            आपके सवाल,&nbsp;
            <span className={styles.gold}>हमारे जवाब</span>
          </h2>
        </div>

        <div className={styles.faqList}>
          {FAQS.map((f, i) => (
            <div key={i} className={`${styles.faqItem} ${open === i ? styles.faqOpen : ''}`}>
              <button className={styles.faqQ} onClick={() => setOpen(open === i ? null : i)}>
                <span className={styles.faqQText}>
                  <span className={styles.faqHindi}>{f.q}</span>
                  <span className={styles.faqEn}>{f.qEn}</span>
                </span>
                <span className={styles.faqIcon}>{open === i ? '−' : '+'}</span>
              </button>
              {open === i && (
                <div className={styles.faqA}>
                  <p>{f.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── Final CTA ────────────────────────────────────────────────────────────────
export function SubsidyCTA() {
  return (
    <section className={`${styles.panel} ${styles.panelDark}`}>
      <div className={styles.inner}>
        <div className={styles.ctaWrap}>
          <div>
            <h2 className={`${styles.title} ${styles.titleLight}`}>
              देर मत करें —<br/>
              <span className={styles.goldLight}>सब्सिडी सीमित है</span>
            </h2>
            <p className={`${styles.desc} ${styles.descLight}`}>
              PM Surya Ghar योजना FY 2026–27 तक चलेगी — slots सीमित हैं।
              आज ही फ्री साइट विज़िट बुक करें और ₹78,000 सुरक्षित करें।
            </p>
          </div>
          <div className={styles.ctaBtns}>
            <Link href="/contact" className={styles.ctaPrimary}>
              मुफ्त साइट विज़िट बुक करें
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
            <a href="https://wa.me/919931013345" target="_blank" rel="noopener noreferrer"
              className={styles.ctaWa}>
              <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp करें
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}