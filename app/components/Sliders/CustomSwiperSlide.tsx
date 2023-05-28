import { Container } from '@/app/Container'
import Image from 'next/image'
import React from 'react'
import { PlayButton } from '../Buttons/PlayButton'
import { AddWatchlist } from '../Buttons/AddWatchlist'
import useMediaQuery from '@/app/hooks/UseMediaQuery'
import { largeScreens } from '../MediaQueries'

export const CustomSwiperSlide = () => {
    const isAboveLargeScreens = useMediaQuery(largeScreens)

  return (
    <div className=" w-full h-full relative select-none">
        <Image
        src={'/Image/movies/Mandalorian.webp'}
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
                    Season 3
                </div>
                <div className="flex flex-col gap-[8px] w-full sm:w-[506px]">
                <h2 className="font-bold text-[32px] leading-[40px]">
                    {/* Title */}
                    The Mandalorian
                </h2>
                <p className="text-[#9CA4AB] text-[14px]">
                    {/* Description */}
                    2h40m • 2022 • Fantasy • Actions
                </p>
                <p className="text-[14px] w-full">
                    {/* Description */}
                    The third season of the American television
                    series The Mandalorian stars Pedro Pascal as 
                    the title character, a bounty hunter traveling to Mandalore to redeem his
                    past transgressions with his adopted son Grogu and
                    being aided on their journey by fellow Mandalorian Bo-Katan Kryze.
                </p>
                </div>

                <div className="flex gap-[24px] lg:w-fit w-full lg:justify-normal justify-between">
                <PlayButton  label="Play Now"/>
                {isAboveLargeScreens &&
                    <PlayButton alternative label="Watch Trailer"/>
                }
                <AddWatchlist label="Add Watchlist"/>
                </div>
            </div>
        </Container>
    </div>
    )
}
