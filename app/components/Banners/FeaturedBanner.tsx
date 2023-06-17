'use client'

import React, { useRef, useState } from "react";
import { Swiper , SwiperRef, SwiperSlide } from "swiper/react";
import  {FreeMode } from "swiper";
import { FeaturedMoviesSlide } from "../Sliders/FeaturedMoviesSlide";
import { moviesAndSeries } from "@/app/constants";
import { FeaturedMoviesSlideComponent } from "../Sliders/FeaturedMoviesSlideComponent";
import useMediaQuery from "@/app/hooks/UseMediaQuery";
import { largeScreens } from "../MediaQueries";
import { safeMovie } from "@/app/types";

interface Props{
  movies:safeMovie[]
}

export const FeaturedBanner = ({movies}:Props) => {
  const mainSwiperRef = useRef<SwiperRef>(null)
  const [activeSlide,setActiveSlide] = useState<string>(movies[0]?.id)
  const isAboveLargeScreens = useMediaQuery(largeScreens)

  const handleSlide = (id:string) =>{
    const index = movies.findIndex(comp=> comp.id === id)
    if(index >= 0){
      mainSwiperRef.current?.swiper.slideTo(index,500)
      setActiveSlide(id)
    }
  }
  const handleSlideChange = () => {
    if (mainSwiperRef.current) {
      const activeSlideIndex = mainSwiperRef.current.swiper.activeIndex;
      const id = movies[activeSlideIndex].id;
      
      setActiveSlide(id)
    }
  };

  return (
    <section className="w-full h-full relative">
      <Swiper 
      className="relative flex items-start justify-center"
      onSlideChange={handleSlideChange}
      ref={mainSwiperRef}
      
      >
        {
            movies.map(component=>(

                <SwiperSlide key={component.id} className="!w-full !h-[700px]">
                    <FeaturedMoviesSlide  {...component}/>
                </SwiperSlide>
            ))
        }

      </Swiper>
      { isAboveLargeScreens &&

        <div className="absolute right-0 z-[12] text-white top-0 w-[40%]  h-full flex items-center justify-end min-h-[30rem] ">
        <Swiper
              modules={[FreeMode]}
              slidesPerView='auto'
              spaceBetween={15}
              freeMode={true}
              className='!rounded-xl xl:w-[70%] !w-[100%] !m-0'
              >
              { movies.map(movie=>(
                
                
                <SwiperSlide key={movie.id} className='!w-[280px] !h-[20rem]'>
                  <FeaturedMoviesSlideComponent {...movie} isActive={movie.id === activeSlide} onClick={(id:string)=>{handleSlide(id)}} />
              </SwiperSlide>
              ))
            }
          </Swiper>
        </div>
        }
    </section>
  );
};
