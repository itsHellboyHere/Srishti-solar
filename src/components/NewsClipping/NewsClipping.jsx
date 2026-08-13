import Image from 'next/image'
import { Newspaper } from 'lucide-react'
import styles from './NewsClipping.module.css'

const NEWS_IMAGE =
  'https://res.cloudinary.com/dgifa4wgb/image/upload/v1786594513/srishti-news-clipping-16x9_kokvbp.png'

export default function NewsClipping({
  source = 'सिटी एंकर · दैनिक जागरण',
  headline = 'बिना गारंटी 2 लाख का लोन — 3 किलोवाट सोलर पैनल पर ₹98,000 तक अनुदान',
}) {
  return (
    <section className={styles.section}>
      {/* wave continues from Subsidy's waveBottom — same gradient direction */}
      <div className={styles.waveTop} aria-hidden="true">
        <svg viewBox="0 0 1440 90" preserveAspectRatio="none" width="100%" height="100%">
          <defs>
            <linearGradient id="newsWaveLinear" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="var(--bg-warm)" />
              <stop offset="100%" stopColor="var(--bg-base)" />
            </linearGradient>
          </defs>
          <path d="M0,90 Q720,0 1440,90 L1440,0 L0,0 Z" fill="url(#newsWaveLinear)" />
        </svg>
      </div>

      <div className={styles.inner}>
        <div className={styles.eyebrow}>
          <Newspaper size={15} strokeWidth={2.4} />
          अखबार में — As Seen In
        </div>

        <div className={styles.card}>
          <div className={styles.imgWrap}>
            <Image
              src={NEWS_IMAGE}
              alt={headline}
              fill
              quality={100}
              className={styles.img}
              sizes="(max-width: 900px) 100vw, 900px"
              priority
            />
          </div>

          <div className={styles.footer}>
            <span className={styles.source}>{source}</span>
            <h3 className={styles.headline}>{headline}</h3>
          </div>
        </div>
      </div>
    </section>
  )
}