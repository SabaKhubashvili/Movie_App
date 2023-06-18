'use client'

import React from 'react'
import { HotMovieSlide } from './HotMovieSlide'
import {BsFire} from 'react-icons/bs'

import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import useMediaQuery from '@/app/hooks/UseMediaQuery';
import { smallScreens } from '../../MediaQueries';
import { ArrowLeftIcon, ArrowRightIcon } from '@/public/svg/icons/Icon';

interface Props {
  topics: {
    id: string
    title: string
    description: string
    image: string
    authorId: string
    clickCount: number
    createdAt: Date
    updatedAt: Date
    publisher: {
      id: string;
      name: string;
    };
  }[];
}
export const HotMovieTopics = ({topics}:Props) => {

  
  const slicedForSlider:any[] = []
  const isAboveSmallScreens = useMediaQuery(smallScreens)


  for(let i=0; i < topics.length; i += isAboveSmallScreens ? 10 : 4){
    const slicedChunk = topics.slice(i,isAboveSmallScreens ? i+ 10 : i+4)
    slicedForSlider.push(slicedChunk)
  }


  return (
    <section className='w-full relative mt-[20px] pt-[56px] flex flex-col gap-[16px]'>
        <h2 className='font-bold text-[24px] leading-[26px] text-white flex gap-[7px]'> <BsFire /> Movie Topics</h2>

        <button 
            className="custom_next_HotMovies absolute  right-6 top-0 
            flex  items-start justify-center outline-none h-full cursor-pointer z-[10] ">
              <div className="  h-fit p-4 bg-[#28262D]  rounded-full ">
                <ArrowRightIcon/>
              </div>
        </button>
        <button 
            className="custom_prev_HotMovies absolute  right-[7rem] top-0 
            flex  items-start justify-center h-full outline-none cursor-pointer z-[10] ">
              <div className=" h-fit py-4 px-5 bg-[#28262D]  rounded-full ">
                <ArrowLeftIcon/>
              </div>
        </button>
        <Swiper 
            modules={[Navigation]}
            navigation={{
                nextEl:'.custom_next_HotMovies',
                prevEl:'.custom_prev_HotMovies'
            }}
            slidesPerView={1}
            spaceBetween={150}
            className='mySwiper flex flex-wrap w-full'
        >
          {slicedForSlider.map((slider:any,index)=>(
            
            <SwiperSlide className='!w-full' key={index} >
                <HotMovieSlide movies={slider} />
            </SwiperSlide>
              ))
            }

        </Swiper>
    </section>
  )
}
