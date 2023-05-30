'use client'

import React from 'react'
import { MainBanner } from '../components/Banners/MainBanner'
import { Container } from '../Container'
import { PartnersSlider } from '../components/Sliders/PartnersSlider'
import { LatestReleases } from '../components/sections/latestReleases/LatestReleases'
import { FeaturedBanner } from '../components/Banners/FeaturedBanner'
import { PopularMovies } from '../components/sections/Popular/PopularMovies'
import { Movies } from '../components/sections/Movies/Movies'
import { AllSeries } from '../components/sections/Series/Series'
import { SecondaryBanner } from '../components/Banners/SecondaryBanner'

const page = () => {
  return (
    <React.Fragment>
      <MainBanner/>
      
      <Container rightSpace>
        <PartnersSlider/>
        <LatestReleases/>
      </Container>
      <FeaturedBanner/>
      <Container rightSpace >
        <PopularMovies/>
        <Movies/>
        <AllSeries/>
      </Container>
      <SecondaryBanner/>
    </React.Fragment>
  )
}

export default page