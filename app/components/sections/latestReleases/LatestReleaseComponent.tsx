import { MoviesAndSerials, safeMovie } from '@/app/types'
import { StarIcon } from '@/public/svg/icons/Icon'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


export const LatestReleaseComponent = ({
    id,
    title,
    movieBannerSmall,
    movieTags,
    imbdRating,
    serialBannerSmall,
    serialTags
}:MoviesAndSerials) => {
    return (
    <Link href={`/movie/${id}`} className='h-full w-full relative rounded-xl'>
        <Image
        src={movieBannerSmall ? movieBannerSmall : serialBannerSmall ? serialBannerSmall : 'Image/movies/ImageNotFound'}
        alt='Movie'
        width={300}
        height={400}
        className='w-full h-full object-cover select-none rounded-2xl'
        />
        <div className='bottom-0 w-full absolute rounded-b-xl  bg-gradient-to-b from-transparent to-[#000000] p-[20px] flex flex-col gap-[4px]'>
            <h2 className='font-bold text-[16px] lienar-[24px] text-white'>{title}</h2>
            <div className='flex gap-[3px]'>
                <StarIcon/>
                <h5 className='text-[14px] font-semibold leading-[20px] text-white'>
                    {imbdRating}
                </h5>
                <div className='font-medium text-[12px] leading-[20px] text-[#78828A] flex flex-wrap gap-[2px]'>
                    | { movieTags ? 
                        movieTags.map((singleTag:any)=>(
                           <p key={singleTag.tag.id}>{singleTag.tag.name} | </p>      
                        ))
                        :
                        serialTags?.map((singleTag:any)=>(
                            <p key={singleTag.tag.id}>{singleTag.tag.name} | </p>      
                         ))
                    }
                </div>
            </div>
        </div>
    </Link>
  )
}
