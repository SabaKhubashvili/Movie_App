import React from 'react'
import { MainBanner } from '../components/Banners/MainBanner'
import { Container } from '../Container'
import { PartnersSlider } from '../components/Sliders/PartnersSlider'
import { LatestReleases } from '../components/sections/latestReleases/LatestReleases'
import { FeaturedBanner } from '../components/Banners/FeaturedBanner'
import { PopularMovies } from '../components/sections/Popular/PopularMovies'
import { Movies } from '../components/sections/Movies/Movies'
import { AllSeries } from '../components/sections/Series/AllSeries'
import { SecondaryBanner } from '../components/Banners/SecondaryBanner'
import { getLatestMovies } from '../actions/getLatestMovies'
import { AwardsBanner } from '../components/sections/AwardsBanner/AwardsBanner'
import { MoviesbyTag } from '../components/sections/MoviesByTag/MoviesByTag'
import { getRandomMovies } from '../actions/getRandomMovies'
import { getAllSerials } from '../actions/getAllSerials'


export const metadata = {
  title: 'Discover',
  description: 'Discover all free movies',
  image: '/Image/main/Logo.webp'
};

const Page = async() => {

  const latestMovies = await getLatestMovies()
  const allMovies = await getRandomMovies()
  const serials = await getAllSerials()
  
  return (
    <React.Fragment>
      <MainBanner/>
      
        <PartnersSlider/>
      <Container rightSpace>
        <LatestReleases movies={latestMovies}/>
      </Container>
      <FeaturedBanner/>
      <Container rightSpace >
        <PopularMovies/>
        <MoviesbyTag label='Movies' data={allMovies}/>
        <AllSeries data={serials}/>
      </Container>
      <SecondaryBanner/>

      <Container>
        <AwardsBanner/>
      </Container>
    </React.Fragment>
  )
}

export default Page