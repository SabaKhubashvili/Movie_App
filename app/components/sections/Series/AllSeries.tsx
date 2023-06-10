'use client'

import React from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'


import "swiper/css";
import "swiper/css/free-mode";

import { Navigation,FreeMode } from 'swiper';
import { ArrowRightIcon } from '@/public/svg/icons/Icon';
import { safeSerial } from '@/app/types';
import { SerialComponent } from '../../SerialComponent';

interface Props{
    data:safeSerial[]
}

export const AllSeries = ({data}:Props) => {
  return (
    <section className='w-full py-[40px]'>
        <h1 className='text-white font-bold text-[24px] leading-[32px]'>Serials</h1>
        <div className='pt-[24px] relative'>
        
        <button 
            className="custom_next_allseries absolute  right-6 
            lg:flex hidden items-center justify-center outline-none h-full cursor-pointer z-[10] ">
              <div className="  h-fit p-5 bg-[#28262D]  rounded-full ">
                <ArrowRightIcon/>
              </div>
            </button>

        <Swiper
            slidesPerView='auto'
            spaceBetween={16}
            navigation={{
                nextEl:'.custom_next_allseries',
            }}
            freeMode={true}
            modules={[Navigation,FreeMode]}
            className='w-full'  
            >
        {
            data.map(singleSerial=>(

                
                <SwiperSlide key={singleSerial.id} className='!w-[280px]'>
                    <SerialComponent {...singleSerial}/>
                </SwiperSlide>
                ))

            }

            </Swiper>
            <div className='sm:w-[167px] w-[40px]  h-full absolute top-0 right-0 z-[8]  bg-gradient-to-r from-transparent to-[#0D0C0F]'/>
        </div>
    </section>
  )
}
