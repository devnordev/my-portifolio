import React from 'react'
import { HeroSection } from '../components/pages/home/hero-section/page'
import { KnownTechs } from '@/components/pages/home/known-techs/page'
import { HighlightedProjects } from '@/components/pages/home/highlighted-projects/page'
import { WorkExperience } from '@/components/pages/home/work-experience/page'
import { fetchHygraphQuery } from '@/utils/fetch-hygraph-query'
import { HomePageData } from '@/types/page-info'

const getPageData = async (): Promise<HomePageData> => {
  const query = `query QueryPage {
    page(where: {slug: "home"}) {
      introduction {
        raw
      }
      knownTechs {
        iconSvg
        name
        startDate
      }
      technologies {
        name
      }
      social {
        iconSvg
        name
      }
      profilePicture {
        url
      }
    }
  }`
  return fetchHygraphQuery(
    query,
    60 * 60 * 24
  )
}

export default async function HomePage() {
  const {page: pageData} = await getPageData()
    return (
      <>
        <HeroSection homeInfo={pageData}/>
        <KnownTechs/>
        <HighlightedProjects />
        <WorkExperience />
      </>
    );
}
