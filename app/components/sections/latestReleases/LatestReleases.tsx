'use client'

import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";


import "swiper/css";
import "swiper/css/free-mode";

import { Navigation,FreeMode } from 'swiper';
import { LatestReleaseComponent } from './LatestReleaseComponent';
import { ArrowRightIcon } from '@/public/svg/icons/Icon';
import { safeMovie } from '@/app/types';

interface Props{
    movies:safeMovie[]
}

export  const LatestReleases = ({movies}:Props) => {

      

  return (
    <section className='flex flex-col gap-[24px] mt-[20px] mb-[40px] text-white  '>
        <h1 className='text-[24px] font-bold leading-[32px]'>
            Just Released
        </h1>

        <div className='h-fit relative'>

        <button 
            className="custom_next_latest absolute  right-6 
            lg:flex hidden items-center justify-center outline-none h-full cursor-pointer z-[10] ">
              <div className="  h-fit p-5 bg-[#28262D]  rounded-full ">
                <ArrowRightIcon/>
              </div>
            </button>

            <Swiper
            slidesPerView='auto'
            spaceBetween={16}
            navigation={{
                nextEl:'.custom_next_latest',
            }}
        
            freeMode={true}
            modules={[Navigation,FreeMode]}
            className='w-full h-[412px]'  
            >
                {movies.map(movie=>(

                    <SwiperSlide className='text-white !w-[280px] !h-full' key={movie.id}>
                        <LatestReleaseComponent {...movie}/>
                    </SwiperSlide>
                    
                    ))
                }
               

            </Swiper>

            <div className='sm:w-[167px] w-[40px] h-full absolute top-0 right-0 z-[8]  bg-gradient-to-r from-transparent to-[#0D0C0F]'/>
        </div>
    </section>
  )
}
