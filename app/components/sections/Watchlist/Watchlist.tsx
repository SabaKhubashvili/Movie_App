'use client'

import React from 'react'

import { MovieComponent } from '../../MovieComponent';

interface Props{
    data:any
}

export const Watchlist = ({data}:Props) => {

  return (
    <section className='w-full py-[40px]'>
        <h1 className='text-white font-bold text-[24px] leading-[32px]'>Your Watchlisted Movies</h1>
        <div className='pt-[24px] relative flex gap-[10px]'>
          
           {data.map((movieComponent:any)=>(
               <div key={movieComponent.movie.id} className='2xl:w-[300px]  xl:w-[240px] lg:w-[200px] md:w-2/5 w-[100%] '>
               <MovieComponent 
               {...movieComponent.movie} 
              />
               </div>
            ))
           }
         </div>
    </section>
  )
}
