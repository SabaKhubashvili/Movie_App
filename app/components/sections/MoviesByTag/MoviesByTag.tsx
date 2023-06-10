'use client'

import React from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'


import "swiper/css";
import "swiper/css/free-mode";

import { Navigation,FreeMode } from 'swiper';
import {ArrowRightIcon } from '@/public/svg/icons/Icon';
import { MovieComponent } from '../../MovieComponent';
import { safeMovie } from '@/app/types';

interface Props{
    data:safeMovie[]
    label:string
}
export const MoviesbyTag = ({label,data}:Props) => {


  return (
    <section className='w-full py-[40px]'>
        <h1 className='text-white font-bold text-[24px] leading-[32px]'>{label}</h1>
        <div className='pt-[24px] relative'>
        
        <button 
            className="custom_next_watchlist absolute  right-6 
            lg:flex hidden items-center justify-center outline-none h-full cursor-pointer z-[10] ">
              <div className="  h-fit py-4 px-5 bg-[#28262D]  rounded-full ">
                <ArrowRightIcon/>
              </div>
            </button>
        <Swiper
            slidesPerView='auto'
            spaceBetween={16}
            navigation={{
                nextEl:'.custom_next_watchlist',
         }}
            freeMode={true}
            modules={[Navigation,FreeMode]}
            className='w-full'  
            >
                {data.map(movie=>(

                    
                        <SwiperSlide key={movie.id} className='!w-[280px]'>
                            <MovieComponent {...movie} />
                        </SwiperSlide>
                    ))
                }
               

            </Swiper>
            <div className='sm:w-[167px] w-[40px]  h-full absolute top-0 right-0 z-[8]  bg-gradient-to-r from-transparent to-[#0D0C0F]'/>
        </div>
    </section>
  )
}
