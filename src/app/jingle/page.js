import JinglePage from './comp/JinglePage'

const SITE_URL = 'https://srishtisolarpower.com'

const videoSchema = {
  '@context': 'https://schema.org',
  '@type': 'VideoObject',
  name: 'Srishti Solar — Official Jingle 2026',
  description: 'Bihar की हर छत पर सौर ऊर्जा — यही है हमारा सपना। Srishti Solar Power का official jingle 2026। बिहार की हर छत चमकेगी, अब बिजली खुद ही दमकेगी।',
  thumbnailUrl: 'https://res.cloudinary.com/dgifa4wgb/video/upload/so_15/v1772943166/f4d8fc7a-c497-4d75-83d8-52d71ee41ec7_t9a4lo.jpg',
  uploadDate: '2026-01-01',
  contentUrl: 'https://res.cloudinary.com/dgifa4wgb/video/upload/v1772943166/f4d8fc7a-c497-4d75-83d8-52d71ee41ec7_t9a4lo.mp4',
  embedUrl: `${SITE_URL}/jingle`,
  duration: 'PT1M30S', // ← update to actual video duration
  inLanguage: 'hi',
  publisher: {
    '@type': 'Organization',
    name: 'Srishti Solar Power',
    url: SITE_URL,
    logo: {
      '@type': 'ImageObject',
      url: `${SITE_URL}/logo.png`,
    },
  },
}

export const metadata = {
  title: 'Official Jingle 2026 — हर छत पर सूरज, हर घर में रोशनी | Srishti Solar Power',
  description: 'Bihar की #1 Solar Company Srishti Solar Power का official jingle 2026 देखें। बिहार की हर छत चमकेगी, अब बिजली खुद ही दमकेगी।',
  alternates: { canonical: `${SITE_URL}/jingle` },
  openGraph: {
    title: 'Srishti Solar — Official Jingle 2026',
    description: 'हर छत पर सूरज, हर घर में रोशनी — Official Jingle by Srishti Solar Power Bihar',
    url: `${SITE_URL}/jingle`,
    type: 'video.other',
    videos: [{
      url: 'https://res.cloudinary.com/dgifa4wgb/video/upload/v1772943166/f4d8fc7a-c497-4d75-83d8-52d71ee41ec7_t9a4lo.mp4',
      secureUrl: 'https://res.cloudinary.com/dgifa4wgb/video/upload/v1772943166/f4d8fc7a-c497-4d75-83d8-52d71ee41ec7_t9a4lo.mp4',
      type: 'video/mp4',
    }],
    images: [{
      url: 'https://res.cloudinary.com/dgifa4wgb/video/upload/so_15/v1772943166/f4d8fc7a-c497-4d75-83d8-52d71ee41ec7_t9a4lo.jpg',
      width: 1280, height: 720,
      alt: 'Srishti Solar Official Jingle 2026',
    }],
  },
}

export default function JingleWatchPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchema) }}
      />
      <JinglePage />
    </>
  )
}