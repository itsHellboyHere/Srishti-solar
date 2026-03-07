'use client'

import SolutionsHero   from '../components/SolutionsHero'
import HowItWorks from './HowItWorks'
import SolutionsCTA from './SolutionsCTA'
import SolutionsGrid from './SolutionsGrid'
import SolutionsScroll from './SolutionsScroll'
import SubsidyStrip from './SubsidyStrip'
import TechnologySpecs from './TechnologySpecs'


export default function SolutionsContent() {
  return (
    <div>
      <SolutionsHero />
      <SolutionsGrid />
      <TechnologySpecs/>
      <SolutionsScroll />
      <HowItWorks />
      <SubsidyStrip/>
      <SolutionsCTA />
    </div>
  )
}