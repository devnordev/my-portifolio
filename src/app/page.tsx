import React from 'react'
import { HeroSection } from '../components/pages/home/hero-section/page'
import { KnownTechs } from '@/components/pages/home/known-techs/page'
import { HighlightedProjects } from '@/components/pages/home/highlighted-projects/page'
import { WorkExperience } from '@/components/pages/home/work-experience/page'

export default function HomePage() {
  return (
    <>
      <HeroSection/>
      <KnownTechs/>
      <HighlightedProjects/>
      <WorkExperience/>
    </>
  )
}
