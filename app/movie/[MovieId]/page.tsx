import React from 'react'

import { SingleMovieBanner } from '@/app/components/Banners/SingleMovieBanner'
import { MovieDescription } from '@/app/components/SingleMovieComponents/MovieDescription'
import { Container } from '@/app/Container'
import { SimilarMovies } from '@/app/components/SingleMovieComponents/SimilarMovies'
import { getMovieById } from '@/app/actions/getMovieById'
import prisma from '@/app/Libs/prismadb'
import { EmptyClient } from '@/app/components/EmptyClient'
import { safeMovie } from '@/app/types'
import { getSimilarMovies } from '@/app/actions/getSimilarMovies'
import { MoviesbyTag } from '@/app/components/sections/MoviesByTag/MoviesByTag'

interface IParams{
    MovieId:string
}


export async function generateMetadata({ params }:{params:IParams}) {
  const movie = await prisma.movie.findUnique({
    where:{
      id:params.MovieId
    }
  })
  if(movie){
    return {
      title:`${movie.title} | Movie`,
      description:movie.description,
      image:movie.movieBannerBig
    }
  }

  return{
    title:'Movie not found',
    description:'404 Movie not found'
  }

}

const page = async({params}:{params:IParams}) => {
  
    const movie = await getMovieById(params.MovieId) as safeMovie
    const similarMovies = await getSimilarMovies(movie.movieTags,movie.id) as safeMovie[]


    if(!movie){
      return <EmptyClient
        title='Movie not found'
        description='Error code 404'
      />
    }

  return (
    <React.Fragment>
      <section className='h-[810px]'>
       <SingleMovieBanner links movie={movie} />
      </section>
      
      <MovieDescription description={movie.description} cast={[]}/>

      <div className='w-full bg-[#FFFFFF1A] h-[1px]' />
      <Container rightSpace>
        <MoviesbyTag data={similarMovies} label='Similar movies' />
      </Container>
      <div className='w-full bg-[#FFFFFF1A] h-[1px]' />
    </React.Fragment>
  )
}

export default page