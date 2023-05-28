'use client'

import { ArrowLeftIcon, ArrowRightIcon} from '@/public/svg/icons/Icon'
import React from 'react'
import { PopularMovieComponent } from './PopularMovieComponent'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, Navigation } from 'swiper'
import { Container } from '@/app/Container'

export const PopularMovies = () => {
  return (
    <section className='w-full pt-[40px]'>

        <div className='pt-[24px] relative'>

          <h1 className='text-[24px] font-bold leading-[32px] pb-[24px] text-white '>Popular of the week</h1>
          <Swiper
              slidesPerView='auto'
              spaceBetween={40}
                freeMode={true}
                modules={[FreeMode]}
                className='w-full h-[260px]'  
                >
            
                  <SwiperSlide className='!w-[340px]'>
                      <PopularMovieComponent isFirst/>
                  </SwiperSlide>
                  <SwiperSlide className='!w-[340px]'>
                      <PopularMovieComponent />
                  </SwiperSlide>
                  <SwiperSlide className='!w-[340px]'>
                      <PopularMovieComponent />
                  </SwiperSlide>
                  <SwiperSlide className='!w-[340px]'>
                      <PopularMovieComponent />
                  </SwiperSlide>
                  <SwiperSlide className='!w-[340px]'>
                      <PopularMovieComponent />
                  </SwiperSlide>
                  <SwiperSlide className='!w-[340px]'>
                      <PopularMovieComponent />
                  </SwiperSlide>
                

              </Swiper>
            <div className='w-[167px] sm:inline hidden h-full absolute top-0 right-0 z-[8]  bg-gradient-to-r from-transparent to-[#0D0C0F]'/>
        </div>
    </section>
  )
}
