'use client'

import SolutionsHero   from '../components/SolutionsHero'
import HowItWorks from './HowItWorks'
import SolutionsCTA from './SolutionsCTA'
import SolutionsGrid from './SolutionsGrid'
import SolutionsScroll from './SolutionsScroll'
import SubsidyStrip from './SubsidyStrip'


export default function SolutionsContent() {
  return (
    <div>
      <SolutionsHero />
      <SolutionsGrid />
      <SolutionsScroll />
      <HowItWorks />
      <SubsidyStrip/>
      <SolutionsCTA />
    </div>
  )
}