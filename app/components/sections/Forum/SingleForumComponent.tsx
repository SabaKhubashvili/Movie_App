import React from 'react'
import { Voting } from './Voting'
import Image from 'next/image'
import { Comment } from './Comment'

export const SingleForumComponent = () => {
  return (
    <section className='w-full'>
        <div className='w-full flex gap-[20px] pt-[20px]'>
            <Voting/>
            <div className='flex gap-[20px] w-full h-full lg:flex-row flex-col'>

            <div className='h-full w-full flex flex-col justify-between '>
                <div
                className='font-bold md:text-[24px] text-[20px] leading-[26px] text-white flex gap-[7px]'>Do you agree the Spiderman 3 is the worst movie? Why?</div>
                <p className='font-medium md:text-[16px] text-[14px] leading-[20px] text-[#78828A] pt-[3px]'>
                Description Some Random ThingsDescription Some Random ThingsDescription Some Random ThingsDescription Some Random Things
                </p>
                <div className='pt-[7px] text-[#78828A] md:text-[11px] text-[9px] '>
                @Saba Khubashvili | 3 hours ago
                </div>
            </div>
            <Image
                src={'/Image/movies/enolaholmes.webp'}
                alt='MovieImage'
                width={400}
                height={400}
                className='lg:w-[7rem] lg:h-[7rem] w-[3.5rem] h-[3.5rem] object-cover rounded-xl lg:order-none order-first'
                />
            </div>
        </div>
        <div className='pt-[30px]'>
            <h1 className='text-white font-bold text-[16px] leading-[32px]'>Comments 20</h1>

            <div className='lg:w-[95%] ml-auto pt-[20px] flex flex-col gap-[20px]'>
                <Comment/>
                <Comment/>
                <Comment/>
                <Comment/>
                <Comment/>
            </div>
        </div>
    </section>
  )
}
