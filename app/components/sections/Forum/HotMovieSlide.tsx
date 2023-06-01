'use client'

import React from 'react'
import { SmallMovieComponent } from '../../SmallMovieComponent'
import { smallMovieInterface } from '@/app/types'

interface Props{
    movies:smallMovieInterface[]
}

export const HotMovieSlide = ({movies}:Props) => {
  return (
    <div className='w-full h-full flex flex-wrap gap-y-[20px]'>
        { movies.map(movie=>(

            
        <div className='2xl:basis-1/5 lg:basis-1/3 sm:basis-1/2 w-full' key={movie.title}>
            <SmallMovieComponent {...movie}/>
        </div>
        ))
        }
    </div>  
  )
}
