'use client'

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination,Autoplay } from "swiper";
import { CustomSwiperSlide } from "../Sliders/CustomSwiperSlide";

export  function MainBanner() {
  return (
    <>
      <Swiper pagination={{
        clickable:true,
      }} 
      modules={[Pagination,Autoplay]} 
      autoplay={{
        delay:3000,
        disableOnInteraction:true
      }}      
      className="mySwiper w-full h-[810px] max-w-full">
        <SwiperSlide>
          <CustomSwiperSlide/>
        </SwiperSlide>
        <SwiperSlide>
          <CustomSwiperSlide/>
        </SwiperSlide>
        <SwiperSlide>
          <CustomSwiperSlide/>
        </SwiperSlide>
        <SwiperSlide>
          <CustomSwiperSlide/>
        </SwiperSlide>
        <SwiperSlide>
          <CustomSwiperSlide/>
        </SwiperSlide>
        <SwiperSlide>
          <CustomSwiperSlide/>
        </SwiperSlide>
        <SwiperSlide>
          <CustomSwiperSlide/>
        </SwiperSlide>
      </Swiper>
    </>

  )
}