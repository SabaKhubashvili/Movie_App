'use client'

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination,Autoplay } from "swiper";
import { CustomSwiperSlide } from "../Sliders/CustomSwiperSlide";


interface Props{
  movies:any[]
}

export  function MainBanner({movies}:Props) {

  
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
        {movies.map(movie=>(          
          <SwiperSlide key={movie.id}>
            <CustomSwiperSlide {...movie} />
          </SwiperSlide>
            ))
        }

      </Swiper>
    </>

  )
}