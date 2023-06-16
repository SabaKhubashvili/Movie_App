import React from 'react'
import { MainBanner } from '../components/Banners/MainBanner'
import { Container } from '../Container'
import { PartnersSlider } from '../components/Sliders/PartnersSlider'
import { LatestReleases } from '../components/sections/latestReleases/LatestReleases'
import { FeaturedBanner } from '../components/Banners/FeaturedBanner'
import { PopularMovies } from '../components/sections/Popular/PopularMovies'
import { AllSeries } from '../components/sections/Series/AllSeries'
import { SecondaryBanner } from '../components/Banners/SecondaryBanner'
import { getLatestMovies } from '../actions/getLatestMovies'
import { AwardsBanner } from '../components/sections/AwardsBanner/AwardsBanner'
import { MoviesbyTag } from '../components/sections/MoviesByTag/MoviesByTag'
import { getRandomMovies } from '../actions/getRandomMovies'
import { getAllSerials } from '../actions/getAllSerials'
import { getPopularMovies } from '../actions/getPopularMovies'
import { differentMoviesTags } from '../constants'
import { getDifferentTagMovies } from '../actions/getDifferentTagMovies'
import { getMainBannerContent } from '../actions/getMainBannerContent'


export const metadata = {
  title: 'Discover',
  description: 'Discover all free movies',
  image: '/Image/main/Logo.webp'
};

const Page = async() => {
  const mainBannerMovies = await getMainBannerContent()
  const latestMovies = await getLatestMovies()
  const allMovies = await getRandomMovies()
  const serials = await getAllSerials()
  const popularMovies = await getPopularMovies()
  const differentTagsMovies = await getDifferentTagMovies()

  return (
    <React.Fragment>
      <MainBanner movies={mainBannerMovies}/>
      
        <PartnersSlider/>
      <Container rightSpace>
        <LatestReleases movies={latestMovies}/>
      </Container>
      <FeaturedBanner movies={latestMovies.slice(0,5)}/>
      <Container rightSpace >
        <PopularMovies movies={popularMovies}/>
        <MoviesbyTag label='Movies' data={allMovies}/>
        <AllSeries data={serials}/>
      </Container>
      <SecondaryBanner movies={differentTagsMovies} tags={differentMoviesTags}/>

      <Container>
        <AwardsBanner/>
      </Container>
    </React.Fragment>
  )
}

export default Page