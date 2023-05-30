import { MovieInformationInterface } from '@/app/types'
import { StarIcon } from '@/public/svg/icons/Icon'
import Image from 'next/image'
import React from 'react'

interface Props extends MovieInformationInterface{
    isActive?:boolean
    onClick:(id:number)=>void
}

export const FeaturedMoviesSlideComponent = ({id,isActive,onClick,title,imdbRating,image}:Props) => {
  return (
    <div className={`h-full w-full relative rounded-xl cursor-pointer ${isActive && 'border-[1px] border-[#00925D]'}`} 
    onClick={()=>onClick(id)}>
    <Image
    src={`/Image/movies/${image}.webp`}
    alt='Movie'
    width={400}
    height={400}
    className='w-full h-full object-cover select-none rounded-xl'
    />
    <div className='bottom-0 absolute rounded-b-xl  bg-gradient-to-b from-transparent to-[#000000] p-[20px] flex flex-col gap-[4px]'>
        <h2 className='font-bold text-[16px] lienar-[24px]'>Dungeon & Dragons;  Honor Among Thief</h2>
        <div className='flex gap-[3px]'>
            <StarIcon/>
            <h5 className='text-[14px] font-semibold leading-[20px] text-white'>
                {imdbRating}
            </h5>
            <p className='font-medium text-[12px] leading-[20px] text-[#78828A]'>
                | Mystery • Movie
            </p>
        </div>
    </div>
    {
          isActive &&
          <div className="absolute top-0 left-0 w-full h-full bg-[#00925D29]" />
    }
</div>
  )
}
