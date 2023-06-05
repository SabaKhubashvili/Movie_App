import { StarIcon } from '@/public/svg/icons/Icon'
import { movie } from '@prisma/client'
import Image from 'next/image'
import React from 'react'


export const LatestReleaseComponent = ({
    title,
    movieBanener,
    tags
}:movie) => {
  return (
    <div className='h-full w-full relative rounded-xl'>
        <Image
        src={'/Image/movies/barbie.png'}
        alt='Movie'
        width={300}
        height={400}
        className='w-full h-full object-cover select-none'
        />
        <div className='bottom-0 w-full absolute rounded-b-xl  bg-gradient-to-b from-transparent to-[#000000] p-[20px] flex flex-col gap-[4px]'>
            <h2 className='font-bold text-[16px] lienar-[24px]'>{title}</h2>
            <div className='flex gap-[3px]'>
                <StarIcon/>
                <h5 className='text-[14px] font-semibold leading-[20px] text-white'>
                    4.3
                </h5>
                <p className='font-medium text-[12px] leading-[20px] text-[#78828A]'>
                    {tags}
                </p>
            </div>
        </div>
    </div>
  )
}
