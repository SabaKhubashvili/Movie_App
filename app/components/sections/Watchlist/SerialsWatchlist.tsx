'use client'

import React from 'react'

import { MovieComponent } from '../../MovieComponent';

interface Props{
    data:any
}

export const SerialsWatchlist = ({data}:Props) => {

  return (
    <section className='w-full py-[40px]'>
        <h1 className='text-white font-bold text-[24px] leading-[32px]'>Your Watchlisted Serials</h1>
        <div className='pt-[24px] relative flex gap-[10px]'>
          
           {data.map((serialComponent:any)=>(
               <div key={serialComponent.serial.id} className='2xl:w-[300px]  xl:w-[240px] lg:w-[200px] md:w-2/5 w-[100%] '>
               <MovieComponent 
               {...serialComponent.serial} 
              />
               </div>
            ))
           }
         </div>
    </section>
  )
}
