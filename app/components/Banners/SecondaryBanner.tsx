'use client'

import React, { useState,useRef } from 'react'
import { Autoplay, Navigation, Pagination } from 'swiper'
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react'
import { SecondaryBannerComponent } from '../Sliders/SecondaryBannerComponent'
import { secondaryBannerTags } from '@/app/constants'

export const SecondaryBanner = () => {
    const SwiperRef = useRef<SwiperRef>(null);
    const [activeSlideIndex, setActiveSlideIndex] = useState<number>(0);

    const handleClick = (tagName:string) => {
      const index = secondaryBannerTags.findIndex((tag) => tag.label === tagName);
      if (index !== -1) {
        setActiveSlideIndex(index);
        SwiperRef.current?.swiper.slideTo(index, 300);
      }
    };

  return (
   <section className='w-full relative'>
        <Swiper
        ref={SwiperRef}
        autoplay={{
            delay:5000,
            disableOnInteraction:true
        }}
        pagination={{
            clickable:true
        }}
        navigation={{
            nextEl:'.custom_next_SecondaryBanner',
            prevEl:'.custom_prev_SecondaryBanner'
        }}
        modules={[Navigation,Pagination,Autoplay]}
        className='h-[700px] mySwiper'
        >
            <SwiperSlide className='h-full'>
                <SecondaryBannerComponent tagName='Superhero' handleClick={(value:string)=>handleClick(value)}/>
            </SwiperSlide>
            <SwiperSlide className='h-full'>
                <SecondaryBannerComponent tagName='Drama'  handleClick={(value:string)=>handleClick(value)}/>
            </SwiperSlide>
            <SwiperSlide className='h-full'>
                <SecondaryBannerComponent tagName='Sitcom'  handleClick={(value:string)=>handleClick(value)}/>
            </SwiperSlide>
            <SwiperSlide className='h-full'>
                <SecondaryBannerComponent tagName='Thriller'  handleClick={(value:string)=>handleClick(value)}/>
            </SwiperSlide>
            <SwiperSlide className='h-full'>
                <SecondaryBannerComponent tagName='Comedy'  handleClick={(value:string)=>handleClick(value)}/>
            </SwiperSlide>
            <SwiperSlide className='h-full'>
                <SecondaryBannerComponent tagName='Fantasy'  handleClick={(value:string)=>handleClick(value)}/>
            </SwiperSlide>
        </Swiper>
   </section>
  )
}
