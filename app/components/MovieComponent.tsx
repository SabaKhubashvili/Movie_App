import { StarIcon } from '@/public/svg/icons/Icon'
import Image from 'next/image'
import React from 'react'

export const MovieComponent = () => {
  return (
    <div className='w-full h-fit flex flex-col gap-[12px]'>
        <Image
        src={'/Image/movies/topgun.webp'}
        alt='movie'
        width={300}
        height={300}
        className='w-full h-full object-cover max-h-[183px] rounded-xl select-none'
        />
          <div className='flex gap-[3px]'>
                <StarIcon/>
                <h5 className='text-[14px] font-semibold leading-[20px] text-white'>
                    4.3
                </h5>
                <p className='font-medium text-[12px] leading-[20px] text-[#78828A]'>
                    | Mystery • Movie
                </p>
            </div>
    </div>
  )
}
