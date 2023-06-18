'use client'

import React, { useState, useRef, useEffect } from 'react';
import { Autoplay, FreeMode, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';
import { SecondaryBannerComponent } from '../Sliders/SecondaryBannerComponent';
import { SecondaryBannerTag } from '../Sliders/SecondaryBannerTag';
import { ArrowLeftIcon, ArrowRightIcon } from '@/public/svg/icons/Icon';
import { safeMovie } from '@/app/types';

interface Props {
  movies: safeMovie[];
  tags: string[];
}

export const SecondaryBanner = ({ movies, tags }: Props) => {
  const swiperRef = useRef<SwiperRef>(null);
  const [activeSlideIndex, setActiveSlideIndex] = useState<number>(0);
  const [filteredTags,setFilteredTags] = useState<string[]>([])
  const seenMovies = new Set();
  const seenTags = new Set();

  
  
  useEffect(()=>{
    movies.forEach(movie => {
      movie.movieTags.map((singleTag:any) => {
        const tagName = singleTag.tag.name;
        if (tags.includes(tagName) && !seenMovies.has(movie.id) && !seenTags.has(tagName)) {
          setFilteredTags(prev => [...prev, tagName]);
          seenTags.add(tagName)
          if(seenTags.has(tagName)){
            seenMovies.add(movie.id);
          }
        }
      });
    });
  },[])

  
  const handleClick = (index: number) => {
    setActiveSlideIndex(index);
    swiperRef.current?.swiper.slideTo(index);
  };

  const handleSlide = () => {
    if (swiperRef.current) {
      setActiveSlideIndex(swiperRef.current.swiper.activeIndex);
    }
  };

  return (
    <section className="w-full relative">
      <Swiper
        ref={swiperRef}
        autoplay={{
          delay: 5000,
          disableOnInteraction: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={{
          nextEl: '.custom_next_SecondaryBanner',
          prevEl: '.custom_prev_SecondaryBanner',
        }}
        modules={[Navigation, Pagination, Autoplay]}
        onSlideChange={handleSlide}
        className="h-[700px] mySwiper"
      >
        {movies.map((movie) => (
          <SwiperSlide className="h-full" key={movie.id}>
            <SecondaryBannerComponent {...movie} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="pt-[48px] absolute z-[8] flex gap-[24px] bottom-[10rem] lg:!left-14 !left-6">
        <button className="custom_prev_SecondaryBanner cursor-pointer">
          <div className="h-fit py-4 px-5 bg-[#28262D] rounded-full">
            <ArrowLeftIcon />
          </div>
        </button>
        <button className="custom_next_SecondaryBanner cursor-pointer">
          <div className="h-fit p-[0.8rem] bg-[#28262D] rounded-full">
            <ArrowRightIcon />
          </div>
        </button>
      </div>
      <Swiper
        modules={[FreeMode]}
        slidesPerView="auto"
        freeMode={true}
        spaceBetween={30}
        className="flex !absolute !bottom-4 z-[16] lg:!left-14 !left-6 w-[90%]"
      >
        {filteredTags?.map((tag, index) => (
          <SwiperSlide key={tag} className="!w-[210px] !h-[99px]">
            <SecondaryBannerTag
              onClick={() => handleClick(index)}
              isActive={index === activeSlideIndex}
              label={tag}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
