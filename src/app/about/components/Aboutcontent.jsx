'use client'

import AboutHero from './Abouthero'
import AboutTimeline from './Abouttimeline'
import AboutMission from './Aboutmission'
import AboutAwards from './Aboutawards'
import AboutTeam from './Aboutteam'
import AboutCTA from './Aboutcta'
import MediaGallery from '@/components/MediaGallery'

export default function AboutContent() {
  return (
    <div>
      <AboutHero />
      <AboutTimeline />
      <AboutMission />
      <AboutTeam />
      <AboutAwards />
      <MediaGallery/>
      <AboutCTA />
    </div>
  )
}