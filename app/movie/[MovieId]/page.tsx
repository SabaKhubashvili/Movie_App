'use client'
import React from 'react'

import { SingleMovieBanner } from '@/app/components/Banners/SingleMovieBanner'
import { MovieDescription } from '@/app/components/SingleMovieComponents/MovieDescription'
import { Series } from '@/app/components/SingleMovieComponents/Series'
import { Container } from '@/app/Container'
import { SimilarMovies } from '@/app/components/SingleMovieComponents/SimilarMovies'

interface IParams{
    MovieId:string
}

const page = ({params}:{params:IParams}) => {
   
   
    

  return (
    <React.Fragment>
      <section className='h-[810px]'>
       <SingleMovieBanner links/>
      </section>
      <MovieDescription/>
      <Series/>
      <div className='w-full bg-[#FFFFFF1A] h-[1px]' />
      <Container rightSpace>
        <SimilarMovies/>
      </Container>
      <div className='w-full bg-[#FFFFFF1A] h-[1px]' />
    </React.Fragment>
  )
}

export default page