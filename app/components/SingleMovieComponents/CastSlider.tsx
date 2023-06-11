'use client'
import Image from 'next/image'
import React from 'react'
import { FreeMode } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { ImbdCast } from '@/app/types'
import { ActorComponent } from '../Actor/ActorComponent'

interface Props{
    cast:ImbdCast[]
}

export const CastSlider = ({cast}:Props) => {
  return (
    <div className='w-full  flex-col gap-[16px]'>
        <h2 className='font-bold text-[18px] leading-[26px] text-white'>Top Cast</h2>

       <Swiper
       modules={[FreeMode]}
       freeMode={true}
       spaceBetween={16}
       slidesPerView='auto'
       className='mySwiper !w-full !pt-[20px]'
       >
        { cast.map((actor,index)=>(

            
            <SwiperSlide className='!w-fit !flex !gap-[12px]' key={index}>
                <ActorComponent {...actor}/>
            </SwiperSlide>
            ))
        }

            

       </Swiper>

    </div>
  )
}
