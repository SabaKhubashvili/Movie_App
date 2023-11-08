import React from 'react'
import { Container } from './Container'

import { MainBanner } from './components/Banners/MainBanner'
import { PartnersSlider } from './components/Sliders/PartnersSlider'
import { PopularMovies } from './components/sections/Popular/PopularMovies'
import { LatestReleases } from './components/sections/latestReleases/LatestReleases'
import { SecondaryBanner } from './components/Banners/SecondaryBanner'
import { FeaturedBanner } from './components/Banners/FeaturedBanner'
import { MoviesbyTag } from './components/sections/MoviesByTag/MoviesByTag'

import { getLatestMovies, getMovieByTag, getRandomMovies } from './actions'
import { AllSeries } from './components/sections/Series/AllSeries'
import { getAllSerials } from './actions/getAllSerials'
import { getPopularMovies } from './actions/getPopularMovies'
import { getDifferentTagMovies } from './actions/getDifferentTagMovies'
import { differentMoviesTags } from './constants'
import { getMainBannerContent } from './actions/getMainBannerContent'

export const metadata = {
  title: 'Home',
  description: 'Free movie website, watch and enjoy all movies for fully free and that will never cost you cent',
  Image:'/Image/main/Logo.webp'
}

const Page = async() => {
  
  const mainBannerMovies = await getMainBannerContent()
  const latestMovies = await getLatestMovies()
  const movies = await getRandomMovies()
  const moviesByTag = await getMovieByTag('Animation')
  const differentTagsMovies = await getDifferentTagMovies()
  const serials = await getAllSerials()
  const popularMovies = await getPopularMovies()

  
  return (
    <React.Fragment>


        <MainBanner movies={mainBannerMovies}/>
        <PartnersSlider/>
        <Container rightSpace >
          <LatestReleases movies={latestMovies}/>
          <PopularMovies movies={popularMovies}/>
        </Container>
          <FeaturedBanner movies={latestMovies.slice(0,5)} />
        <Container rightSpace>
          <MoviesbyTag data={movies} label='Movies'/>
          <AllSeries data={serials}/>
          <MoviesbyTag data={moviesByTag} label='Animation'/>
        </Container>        
        <SecondaryBanner movies={differentTagsMovies} tags={differentMoviesTags} />
    </React.Fragment>
  )
}

export default Page