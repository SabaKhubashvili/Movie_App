import { MovieIcon, StarIcon } from '@/public/svg/icons/Icon'
import Image from 'next/image'
import React from 'react'
import { smallMovieInterface } from '../types'



export const SmallMovieComponent = ({
    title
}:smallMovieInterface) => {
  return (
    <div className='w-full h-fit  flex justify-start gap-[10px]'>
        <Image
            src={'/Image/movies/dungeonsdragon.png'}
            alt='Movie'
            width={100}
            height={100}
            className=' min-w-[6rem] h-24 object-cover rounded-xl'
        />
        <div className='flex h-full justify-between flex-col gap-[10px]'>
            <h5 className='font-bold text-white'>{title}</h5>
            
            <div className='flex-grow flex items-center justify-start gap-[10px]'>
                                <MovieIcon/>
                                <p className='text-[14px] font-medium leading-[20px] text-[#78828A]'>Horror • Thriller</p>
            </div>

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
    </div>  
  )
}
