'use client'

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Container } from "@/app/Container";
import { ArrowLeftIcon, ArrowRightIcon } from "@/public/svg/icons/Icon";
import { CustomParnetsSlide } from "./CustomParnetsSlide";
import { Parnters } from "@/app/constants";



export  function PartnersSlider() {
  return (
    <div className="h-full relative ">
            <button 
            className="custom_next absolute  right-6 
            lg:flex hidden items-center justify-center h-full cursor-pointer z-[10] ">
              <div className="h-fit p-5 bg-[#28262D]  rounded-full ">
                <ArrowRightIcon/>
              </div>
            </button>
     <Container>

      <Swiper
        spaceBetween={16}
        freeMode={true}
        slidesPerView='auto'
        navigation={{
            nextEl: ".custom_next",
        }}
        modules={[Navigation,FreeMode]}
        className="mySwiper w-full !py-[20px] h-[100px]"
        >
        
        {
          Parnters.map((partner:string)=>(
            <SwiperSlide key={partner} className="!w-[10rem] h-full">
              <CustomParnetsSlide partner={partner}/>
            </SwiperSlide>
          ))
        }
      </Swiper>
    </Container>
    </div>
  );
}
