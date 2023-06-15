import { Container } from '@/app/Container'
import { StarIcon } from '@/public/svg/icons/Icon'
import Image from 'next/image'
import React from 'react'
import { AddWatchlist, PlayButton } from '../Buttons'
import { safeMovie } from '@/app/types'
import useMediaQuery from '@/app/hooks/UseMediaQuery'
import { largeScreens } from '../MediaQueries'
import Link from 'next/link'

export const FeaturedMoviesSlide = ({
    id,
    title,
    imbdRating,
    movieBannerBig,
    duration,
    movieTags,
    description
}:safeMovie) => {
    
    const isAboveLargeScreens = useMediaQuery(largeScreens)
  return (
    <div className='w-full h-full relative basis-1/2'>
        <Image
            src={movieBannerBig}
            alt='slide'
            width={1600}
            height={1600}
            className='w-full h-full object-cover absolute select-none'
        />
        <Image
            src={'/Image/movies/overlay.webp'}
            alt='slide'
            width={1600}
            height={1600}
            className='w-full h-full  absolute z-[2] select-none'
        />

        <Container rightSpace={isAboveLargeScreens}>
            <div className='relative z-[5] text-white py-[100px] mt-auto w-full flex items-end justify-between h-full '>
                <div className=' flex flex-col gap-[50px] lg:basis-1/2 select-none '>
                    <div className='flex flex-col gap-[10px]'>
                        <h2 className='lg:text-[40px] md:text-[32px] text-[26px] font-bold'>Featured in SaintStream</h2>
                        <p className='lg:text-[24px] md:text-[18px] text-[15px] font-light'>Best featured for you today</p>
                    </div>
                    <div 
                        className="px-[16px] py-[4px] bg-[#0d0c0fa0] text-white 
                        rounded-[16px] font-medium text-[16px] w-fit  ">
                        Season 3
                    </div>
                    <div className='flex flex-col gap-[20px]'>
                        <h1 className="font-bold lg:text-[48px] md:text-[41px] text-[35px] leading-[54px] text-white">
                            {title}
                        </h1>
                        <div className="flex gap-[3px]">
                            <StarIcon />
                            <h5 className="text-[14px] font-semibold leading-[20px] text-white">
                                {imbdRating}
                            </h5>
                            <p className="font-medium text-[12px] leading-[20px] text-[#78828A]">
                                | {duration} • {
                                    movieTags.map((tag:any)=>(
                                        <span key={tag.tag.id}>{tag.tag.name} {movieTags[movieTags.length - 1].tag.name !== tag.tag.name ? '•' : ''} </span>
                                    ))
                                    }
                            </p>
                        </div>
                        <p className='text-[#9CA4AB] text-[16px] font-medium leading-[24px]'>{description}.</p>
                        <div className='flex gap-[20px]'>
                            <Link href={`/movie/${id}`}>
                                <PlayButton label='Play now'/>
                            </Link>
                            <AddWatchlist label='Add Watchlist'/>
                        </div>
                    </div>
                </div>
          
            </div>
        </Container>

    </div>
  )
}
