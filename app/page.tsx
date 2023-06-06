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

export const metadata = {
  title: 'Home',
  description: 'Free movie website, watch and enjoy all movies for fully free and that will never cost you cent',
  Image:'/Image/main/Logo.webp'
}

const Page = async() => {
  const latestMovies = await getLatestMovies()
  const movies = await getRandomMovies()
  const moviesByTag = await getMovieByTag('Animation')

  return (
    <React.Fragment>


        <MainBanner/>
        <PartnersSlider/>
        <Container rightSpace >
          <LatestReleases movies={latestMovies}/>
          <PopularMovies/>
        </Container>
          <FeaturedBanner/>
        <Container rightSpace>
          <MoviesbyTag data={movies} label='Movies'/>
          <MoviesbyTag data={[]} label='Series'/>
          <MoviesbyTag data={moviesByTag} label='Animation'/>
        </Container>        
        <SecondaryBanner/>
    </React.Fragment>
  )
}

export default Page