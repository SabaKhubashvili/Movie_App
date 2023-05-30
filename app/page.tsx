import React from 'react'
import { MainBanner } from './components/Banners/MainBanner'
import { PartnersSlider } from './components/Sliders/PartnersSlider'
import { Container } from './Container'
import { PopularMovies } from './components/sections/Popular/PopularMovies'
import { LatestReleases } from './components/sections/latestReleases/LatestReleases'
import { Watchlist } from './components/sections/Watchlist'
import { YourLikes } from './components/sections/yourLikes/YourLikes'
import { SecondaryBanner } from './components/Banners/SecondaryBanner'

export default function Home() {
  return (
    <React.Fragment>
        <MainBanner/>
        <PartnersSlider/>
        <Container rightSpace >
          <LatestReleases/>
          <PopularMovies/>
          <Watchlist/>
          <YourLikes/>
        </Container>
        
        <SecondaryBanner/>
    </React.Fragment>
  )
}
