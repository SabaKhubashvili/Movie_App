'use client'

import React, { useState,useRef } from 'react'
import { Autoplay, FreeMode, Navigation, Pagination } from 'swiper'
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react'
import { SecondaryBannerComponent } from '../Sliders/SecondaryBannerComponent'
import { secondaryBannerTags } from '@/app/constants'
import { SecondaryBannerTag } from '../Sliders/SecondaryBannerTag'
import { Container } from '@/app/Container'
import { ArrowLeftIcon, ArrowRightIcon } from '@/public/svg/icons/Icon'

export const SecondaryBanner = () => {
    const SwiperRef = useRef<SwiperRef>(null);   
    const [activeSlideIndex, setActiveSlideIndex] = useState<number>(0);

    const handleClick = (tagName:string) => {
      const index = secondaryBannerTags.findIndex((tag) => tag.label === tagName);
      if (index >= 0) {
        setActiveSlideIndex(index);
        SwiperRef.current?.swiper.slideTo(index, 300);
      }
    };

    const handleSlide = () =>{
        if(SwiperRef.current){
            setActiveSlideIndex(SwiperRef.current.swiper.activeIndex)
        }
    }

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
        onSlideChange={handleSlide}
        className='h-[700px] mySwiper'
        >
            <SwiperSlide className='h-full'>
                <SecondaryBannerComponent handleClick={(value:string)=>handleClick(value)}/>
            </SwiperSlide>
            <SwiperSlide className='h-full'>
                <SecondaryBannerComponent   handleClick={(value:string)=>handleClick(value)}/>
            </SwiperSlide>
            <SwiperSlide className='h-full'>
                <SecondaryBannerComponent  handleClick={(value:string)=>handleClick(value)}/>
            </SwiperSlide>
            <SwiperSlide className='h-full'>
                <SecondaryBannerComponent   handleClick={(value:string)=>handleClick(value)}/>
            </SwiperSlide>
            <SwiperSlide className='h-full'>
                <SecondaryBannerComponent   handleClick={(value:string)=>handleClick(value)}/>
            </SwiperSlide>
            <SwiperSlide className='h-full'>
                <SecondaryBannerComponent  handleClick={(value:string)=>handleClick(value)}/>
            </SwiperSlide>
        </Swiper>
        <div className="pt-[48px] absolute z-[8] flex gap-[24px] bottom-[10rem] lg:!left-14 !left-6">
            <button
              className="custom_prev_SecondaryBanner 
                 cursor-pointer  "
            >
              <div className="h-fit py-4 px-5 bg-[#28262D]  rounded-full ">
                <ArrowLeftIcon />
              </div>
            </button>
            <button
              className="custom_next_SecondaryBanner  
                cursor-pointer  "
            >
              <div className="h-fit p-[0.8rem] bg-[#28262D]  rounded-full ">
                <ArrowRightIcon />
              </div>
            </button>
          </div>
            <Swiper
                modules={[FreeMode]}
                slidesPerView="auto"
                freeMode={true}
                spaceBetween={30}
                className="flex  !absolute !bottom-4 z-[16] lg:!left-14 !left-6 w-[80%]"
                >
                {secondaryBannerTags.map((tag) => (
                    <SwiperSlide key={tag.label} className=" !w-[210px] !h-[99px]">
                        <SecondaryBannerTag
                            onClick={() => handleClick(tag.label)}
                            isActive={tag.id === activeSlideIndex}
                            {...tag}
                            />
                    </SwiperSlide>
                ))}
                </Swiper>
   </section>
  )
}
