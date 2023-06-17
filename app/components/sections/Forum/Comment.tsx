'use client'

import React from 'react'
import { safeComments } from '@/app/types'
import { UserPlaceholder } from '../../Images/UserPlaceholder'
import Image from 'next/image'

interface Props extends safeComments{

}

export const Comment = ({
  title,
  description,
  user,
  createdAt
}:Props) => {
  
  const createDate = new Date(createdAt)
  const currentDate = new Date();
  const timeDifference = currentDate.getTime() - createDate.getTime();
  
  const hoursDifference = Math.floor(timeDifference / (1000 * 60 * 60));

  return (
    <div className='w-full text-white flex gap-[20px]'>
      {
        user.image ? 
        <div className='w-8 h-8'>
          <Image
          src={user.image}
          alt='userPlaceholder'
          width={100}
          height={100}
          className='w-full h-full rounded-full ' />
        </div>
        :
      <div className='w-8 h-8'>
        <UserPlaceholder/> 
      </div>
      }
      
      <div className='h-full w-full flex flex-col justify-between '>
        <div
        className='font-bold md:text-[18px] text-[16px] leading-[26px] text-white flex gap-[7px]'>{title}</div>
        <p className='font-medium md:text-[12px] text-[10px] leading-[20px] text-[#78828A] pt-[3px]'>
          {description}
        </p>
        <div className='pt-[7px] text-[#78828A] md:text-[11px] text-[9px] '>
          @{user.name}| {hoursDifference <= 24 ? hoursDifference + " hours ago" : Math.floor(hoursDifference / 24) + ' Days ago' } 
        </div>
      </div>
    </div>
  )
}
