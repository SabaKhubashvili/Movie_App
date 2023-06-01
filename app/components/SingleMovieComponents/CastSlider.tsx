'use client'
import Image from 'next/image'
import React from 'react'
import { FreeMode } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

export const CastSlider = () => {
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
            <SwiperSlide className='!w-[162px] !flex !gap-[12px]'>
                <Image
                    src={'/Image/actors/LastOfUsActor.webp'}
                    alt='Actor'
                    width={50}
                    height={50}
                    className='w-[48px] h-[48px]'
                />

                <div className='h-full flex flex-col justify-between'>
                    <h5 className='text-[#F9F9F9] text-[16px] font-semibold'>Pedro Pascal</h5>
                    <p className='text-[#9CA4AB] text-[12px] font-medium'>Joel Miller</p>
                </div>

            </SwiperSlide>
            <SwiperSlide className='!w-[162px] !flex !gap-[12px]'>
                <Image
                    src={'/Image/actors/LastOfUsActor.webp'}
                    alt='Actor'
                    width={50}
                    height={50}
                    className='w-[48px] h-[48px]'
                />

                <div className='h-full flex flex-col justify-between'>
                    <h5 className='text-[#F9F9F9] text-[16px] font-semibold'>Pedro Pascal</h5>
                    <p className='text-[#9CA4AB] text-[12px] font-medium'>Joel Miller</p>
                </div>

            </SwiperSlide>
            <SwiperSlide className='!w-[162px] !flex !gap-[12px]'>
                <Image
                    src={'/Image/actors/LastOfUsActor.webp'}
                    alt='Actor'
                    width={50}
                    height={50}
                    className='w-[48px] h-[48px]'
                />

                <div className='h-full flex flex-col justify-between'>
                    <h5 className='text-[#F9F9F9] text-[16px] font-semibold'>Pedro Pascal</h5>
                    <p className='text-[#9CA4AB] text-[12px] font-medium'>Joel Miller</p>
                </div>

            </SwiperSlide>
            
            

       </Swiper>

    </div>
  )
}
