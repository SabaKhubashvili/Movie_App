'use client'

import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";


import "swiper/css";
import "swiper/css/free-mode";

import { Navigation,FreeMode } from 'swiper';
import { LatestReleaseComponent } from './LatestReleaseComponent';
import { ArrowLeftIcon, ArrowRightIcon } from '@/public/svg/icons/Icon';
import Link from 'next/link';

export const LatestReleases = () => {
  return (
    <Link href={'/movie/23dasda32das'} className='flex flex-col gap-[24px] pt-[20px] pb-[40px] text-white cursor-pointer '>
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
            <button 
            className="custom_prev_latest absolute  left-6 
            lg:flex hidden items-center justify-center h-full outline-none cursor-pointer z-[10] ">
              <div className=" h-fit py-4 px-5 bg-[#28262D]  rounded-full ">
                <ArrowLeftIcon/>
              </div>
        </button>

            <Swiper
            slidesPerView='auto'
            spaceBetween={16}
            navigation={{
                nextEl:'.custom_next_latest',
                prevEl:'.custom_prev_latest',
            }}
        
            freeMode={true}
            modules={[Navigation,FreeMode]}
            className='w-full'  
            >
                <SwiperSlide className='text-white !w-[280px]'>
                    <LatestReleaseComponent/>
                </SwiperSlide>
                <SwiperSlide className='text-white !w-[280px]'>
                    <LatestReleaseComponent/>
                </SwiperSlide>
                <SwiperSlide className='text-white !w-[280px]'>
                    <LatestReleaseComponent/>
                </SwiperSlide>
                <SwiperSlide className='text-white !w-[280px]'>
                    <LatestReleaseComponent/>
                </SwiperSlide>
                <SwiperSlide className='text-white !w-[280px]'>
                    <LatestReleaseComponent/>
                </SwiperSlide>
                <SwiperSlide className='text-white !w-[280px]'>
                    <LatestReleaseComponent/>
                </SwiperSlide>
                <SwiperSlide className='text-white !w-[280px]'>
                    <LatestReleaseComponent/>
                </SwiperSlide>
                <SwiperSlide className='text-white !w-[280px]'>
                    <LatestReleaseComponent/>
                </SwiperSlide>

               

            </Swiper>

            <div className='sm:w-[167px] w-[40px] h-full absolute top-0 right-0 z-[8]  bg-gradient-to-r from-transparent to-[#0D0C0F]'/>
        </div>
    </Link>
  )
}
