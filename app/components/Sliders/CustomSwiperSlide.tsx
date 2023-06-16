import { Container } from '@/app/Container'
import Image from 'next/image'
import React from 'react'
import { PlayButton } from '../Buttons/PlayButton'
import { AddWatchlist } from '../Buttons/AddWatchlist'
import useMediaQuery from '@/app/hooks/UseMediaQuery'
import { largeScreens } from '../MediaQueries'
import { safeMovie } from '@/app/types'
import Link from 'next/link'

export const CustomSwiperSlide = ({
    id,
    movieBannerBig,
    title,
    duration,
    movieTags,
    description
}:safeMovie) => {
    const isAboveLargeScreens = useMediaQuery(largeScreens)

  return (
    <div className=" w-full h-full relative select-none">
        <Image
        src={movieBannerBig}
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
        className="w-full h-full object-cover absolute inset-0 bg-center bg-cover"
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
                    {title}
                </h2>
                <p className="text-[#9CA4AB] text-[14px]">
                    {/* Description */}
                    {duration}  • {
                  movieTags.map((tag:any)=>(
                    <span key={tag.tag.id}>{tag.tag.name} {movieTags[movieTags.length - 1].tag.name !== tag.tag.name ? '•' : ''} </span>
                  ))
                }
                </p>
                <p className="text-[14px] w-full">
                    {/* Description */}
                    {description.length >= 400 ? description.slice(0,400) + '...' : description }
                </p>
                </div>

                <div className="flex gap-[24px] lg:w-fit w-full lg:justify-normal justify-between">
                <Link href={`/movie/${id}`}>
                    <PlayButton  label="Play Now"/>
                </Link>
                {isAboveLargeScreens &&
                  <Link href={`/movie/${id}`}>
                    <PlayButton alternative label="Watch Trailer"/>
                  </Link>
                }
                <AddWatchlist label="Add Watchlist"/>
                </div>
            </div>
        </Container>
    </div>
    )
}
