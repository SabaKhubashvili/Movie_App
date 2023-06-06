'use client'

import { ArrowLeftIcon, ArrowRightIcon } from '@/public/svg/icons/Icon'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { AwardsBannerSlide } from '../../Sliders/AwardsBannerSlide'
import { Navigation } from 'swiper'
import "swiper/css";
import "swiper/css/navigation";

export const AwardsBanner = () => {

  return (
    <section className='w-full flex flex-col gap-[30px] pt-[40px]'>
        <div className='flex justify-between'>
        <h1 className='text-white font-bold text-[24px] leading-[32px]'>Movies on award</h1>

            <div className='flex gap-[10px]'>
            <button 
                className="custom_prev_awards
                lg:flex hidden items-center justify-center h-full outline-none cursor-pointer z-[10] ">
                <div className=" h-fit !py-[1.3rem] !px-[1.6rem]  bg-[#28262D]  rounded-full ">
                        <ArrowLeftIcon/>
                    </div>
            </button>
            <button 
                className="custom_next_awards
                lg:flex hidden items-center justify-center h-full outline-none cursor-pointer z-[10] ">
                <div className=" h-fit p-5 bg-[#28262D]  rounded-full ">
                        <ArrowRightIcon/>
                    </div>
            </button>
            </div>
        </div>
        <Swiper
          modules={[Navigation]}
          navigation={{
            nextEl:'.custom_next_awards',
            prevEl:'.custom_prev_awards'
          }}
          className='mySwiper'
          slidesPerView={1}
          spaceBetween={50}
        >
          <SwiperSlide className='!w-full'>
            <AwardsBannerSlide/>
          </SwiperSlide>
          <SwiperSlide className='!w-full'>
            <AwardsBannerSlide/>
          </SwiperSlide>
          <SwiperSlide className='!w-full'>
            <AwardsBannerSlide/>
          </SwiperSlide>

        </Swiper>
    </section>
  )
}
