'use client'

import { Container } from '@/app/Container'
import Image from 'next/image'
import React from 'react'
import { AddWatchlist, CustomIconButton, PlayButton } from '../Buttons'
import {  LikeIcon, ShareIcon } from '@/public/svg/icons/Icon'
import { largeScreens } from '../MediaQueries'
import useMediaQuery from '@/app/hooks/UseMediaQuery'
import { safeSerial } from '@/app/types'

interface Props{
    links?:boolean
    serial:safeSerial
    movieLink:string
}

export const SingleSerialBanner = ({links,serial,movieLink}:Props) => {

    const isAboveLargeScreens = useMediaQuery(largeScreens)
  return (
    <div className=" w-full h-full relative select-none">
    <Image
    src={serial.serialBannerBig}
    alt="SwiperSlide"
    width={1700}
    height={1700}
    className="w-full h-full object-cover absolute inset-0 bg-center bg-cover"
    />
    <Image
    src={'/Image/movies/overlay.webp'}
    alt="SwiperSlide"
    width={1200}
    height={1200}
    className="w-full h-full object-cover absolute inset-0 top-0 bg-center bg-cover"
    />
    <Container>
        <div className="relative text-white 
        flex flex-col justify-end gap-[24px]
        w-full h-full pb-[64px] ">
            
            <div 
            className="px-[16px] py-[4px] bg-[#0D0C0F] text-white 
            rounded-[16px] font-medium text-[16px] w-fit  ">
                Movie
            </div>
            <div className="flex flex-col gap-[8px] w-full sm:w-[506px]">
            <h2 className="font-bold text-[32px] leading-[40px]">
                {/* Title */}
               {serial.title}
            </h2>
            <p className="text-[#9CA4AB] text-[14px]">
                {/* Description */}
                {serial.serieTags.map((singleTag:any)=>(
                    <span key={singleTag.tag.id}> • {singleTag.tag.name}</span>
                ))}
            </p>
            </div>
            <div className='flex justify-between items-center w-full gap-5 sm:flex-nowrap flex-wrap'>
                <div className="flex gap-[24px] w-fit g:justify-normal justify-between items-center lg:grow-0 flex-grow">
                    <a href="#series">
                        <PlayButton  label="Play Now" />
                    </a>
                    {isAboveLargeScreens &&

                        <AddWatchlist label="Add Watchlist"/>
                    }
                </div>
                { links &&

                <div className='flex lg:gap-[24px] gap-[12px] items-center'>
                    <CustomIconButton label='Share' icon={<ShareIcon/>} />
                    <CustomIconButton label='Like' icon={<LikeIcon/>} />
                </div>
                }
            </div>
        </div>
    </Container>      
</div>
  )
}
