'use client'
import { StarIcon } from '@/public/svg/icons/Icon'
import Image from 'next/image'
import React, { useState } from 'react'
import { AddWatchlist, PlayButton } from '../Buttons'

export const AwardsBannerSlide = () => {
    const [showFullDesc,setShowFullDesc] = useState<boolean>(false)
    const description = 'The Last of Us is an American post-apocalyptic drama television series created by Craig Mazin and Neil Druckmann for HBO. Based on the 2013 video game developed by Naughty Dog, the series is set in 2023, twenty years into a pandemic caused by a mass fungal infection, which causes its hosts to transform into zombie-like creatures and collapses society. The series follows Joel (Pedro Pascal), a smuggler tasked with escorting the immune teenager Ellie (Bella Ramsey) across a post-apocalyptic United States in hopes of finding a group known as the Fireflies who may have a potential cure for the infection. The television adaptation of The Last of Us is a remarkable achievement that successfully captures the essence and emotional depth of the original video game. Mazin and Druckmann have crafted a compelling narrative that explores themes of survival, humanity, and the lengths people are willing to go to protect those they care about.'
     

  return (
    <div className='w-full flex flex-col gap-[20px] pt-[20px]'>
    <Image
      src={'/Image/movies/manymoviesbannerbatman.webp'}
      alt='AwardBanner'
      width={1600}
      height={1600}
      className='w-full h-full max-h-[30rem] bg-center object-cover rounded-xl'
    />
    <div className='flex flex-col gap-[15px] '>
      <div 
        className="px-[16px] py-[4px] bg-[#030303] text-white 
        rounded-[16px] font-medium  w-fit border-[1px] border-[#FFFFFF1A] text-[17px] ">
            Company name
        </div>
        <div className='font-bold text-[34px] text-white'>
          Batman
        </div>
        <div className='flex gap-[3px]'>
          <StarIcon/>
          <h5 className='text-[14px] font-semibold leading-[20px] text-white'>
              4.3
          </h5>
          <p className='font-medium text-[12px] leading-[20px] text-[#78828A]'>
          | 2h 50m • 2022 • Mystery • Movie
          </p>
      </div>
      <div className='text-white '>

      { !showFullDesc ?
              <React.Fragment>
                  {description.slice(0,700)}
                  <span>....</span>
                  <span className='text-[#00925D] cursor-pointer' onClick={()=>setShowFullDesc(true)}> More</span>
              </React.Fragment>
              :
              description
              
          }
        </div>
        <div className='flex gap-[10px] lg:flex-row flex-col'>
            <PlayButton label='Play Now'/>
            <AddWatchlist label='Add  Watchlist'/>
        </div>
    </div>
</div>
  )
}
