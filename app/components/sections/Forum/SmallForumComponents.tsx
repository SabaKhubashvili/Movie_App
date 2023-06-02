import { VoteDown, VoteUp } from '@/public/svg/icons/Icon'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Voting } from './Voting'

export const SmallForumComponents = () => {
  return (
    <div className='w-full flex gap-[20px] pt-[20px]'>
    <Voting/>
    <div className='flex gap-[20px] w-full h-full lg:flex-row flex-col'>

      <div className='h-full w-full flex flex-col justify-between '>
        <Link
        href={'/forum/sdad23dsa23sa'}
        className='font-bold md:text-[18px] text-[16px] leading-[26px] text-white flex gap-[7px] hover:text-[#33ae81] transition-colors duration-200'>Do you agree the Spiderman 3 is the worst movie? Why?</Link>
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
