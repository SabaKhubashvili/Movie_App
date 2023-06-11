'use client'

import React from 'react'
import { PopularMovieComponent } from './PopularMovieComponent'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode } from 'swiper'
import { safeMovie } from '@/app/types'


interface Props{
    movies:any[]
}

export const PopularMovies = ({movies}:Props) => {
  return (
    <section className='w-full pb-[40px]'>

        <div className=' relative'>

          <h1 className='text-[24px] font-bold leading-[32px] pb-[24px] text-white '>Popular of the week</h1>
          <Swiper
              slidesPerView='auto'
              spaceBetween={40}
                freeMode={true}
                modules={[FreeMode]}
                className='w-full h-[260px]'  
                >
                { movies.map((movie,index)=>(

                    
                  <SwiperSlide className='!w-fit' key={movie.id}>
                      <PopularMovieComponent index={index} movie={movie} isFirst={movie === movies[0]}/>
                  </SwiperSlide>
                    ))
                }
                

              </Swiper>
            <div className='w-[167px] sm:inline hidden h-full absolute top-0 right-0 z-[8]  bg-gradient-to-r from-transparent to-[#0D0C0F]'/>
        </div>
    </section>
  )
}
