import { MovieIcon, StarIcon } from '@/public/svg/icons/Icon'
import Image from 'next/image'
import React from 'react'

interface Props{
    isFirst?:boolean
}

export const PopularMovieComponent = ({isFirst}:Props) => {
  return (
    <div className={`${isFirst ? 'h-full' : 'h-2/3'} w-fit flex gap-[16px]  cursor-pointer`}>
                    <h1 className='text-[48px] leading-[64px] font-semibold text-white self-center'>
                        1
                    </h1>
                    <div className='h-full'>
                        <Image
                            src={'/Image/movies/lastofus.webp'}
                            alt='movie'
                            width={100}
                            height={300}
                            className='w-full h-full select-none'
                        />
                    </div>
                    <div className='flex flex-col gap-[12px]'>
                        <div className='bg-transparent border-[#28262D] 
                        border-[1px] border-solid rounded-[10px] w-fit
                        py-[4px] px-[8px] text-white uppercase text-center'>
                            PG-13
                        </div>
                        <h2 className='font-bold text-[22px] leading-[24px] text-white'>
                            Last of us
                        </h2>
                        <div className='flex-grow flex items-center justify-center gap-[10px]'>
                                <MovieIcon/>
                                <p className='text-[14px] font-medium leading-[20px] text-[#78828A]'>Horror • Thriller</p>
                        </div>
                        <div className='flex gap-[3px]'>
                            <StarIcon/>
                            <h5 className='text-[14px] font-semibold leading-[20px] text-white'>
                                4.3
                            </h5>
                            <p className='font-medium text-[12px] leading-[20px] text-[#78828A]'>
                                | Movie
                            </p>
                        </div>
                    </div>
                </div>
  )
}
