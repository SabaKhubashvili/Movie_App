import { VoteDown, VoteUp } from '@/public/svg/icons/Icon'
import Image from 'next/image'
import React from 'react'

export const SmallForumComponents = () => {
  return (
    <div className='w-full flex gap-[20px] pt-[20px]'>
      <div className='h-full px-[14px] py-[10px] bg-[#08080a] border-[1px] border-solid border-[#FFFFFF1A] rounded-lg
      flex justify-center items-center flex-col gap-[10px]'>
        <div className='p-1 bg-[#28262D] w-6 rounded-3xl cursor-pointer'>
          <VoteUp/>
        </div>
        <p className='font-bold text-[16px] text-white'>22</p>
        <div className='p-1 bg-[#28262D] w-6 rounded-3xl cursor-pointer'>
          <VoteDown/>
        </div>
      </div>
    <div className='flex gap-[20px] w-full h-full lg:flex-row flex-col'>

      <div className='h-full w-full flex flex-col justify-between '>
        <h2 className='font-bold md:text-[18px] text-[16px] leading-[26px] text-white flex gap-[7px]'>Do you agree the Spiderman 3 is the worst movie? Why?</h2>
        <p className='font-medium md:text-[12px] text-[10px] leading-[20px] text-[#78828A] pt-[3px]'>
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
  )
}
