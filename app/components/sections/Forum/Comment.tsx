import React from 'react'
import { Voting } from './Voting'

export const Comment = () => {
  return (
    <div className='w-full text-white flex gap-[20px]'>
       <Voting/>
       
      <div className='h-full w-full flex flex-col justify-between '>
        <div
        className='font-bold md:text-[18px] text-[16px] leading-[26px] text-white flex gap-[7px]'>Do you agree the Spiderman 3 is the worst movie? Why?</div>
        <p className='font-medium md:text-[12px] text-[10px] leading-[20px] text-[#78828A] pt-[3px]'>
          Description Some Random ThingsDescription Some Random ThingsDescription Some Random ThingsDescription Some Random Things
        </p>
        <div className='pt-[7px] text-[#78828A] md:text-[11px] text-[9px] '>
          @Saba Khubashvili | 3 hours ago
        </div>
      </div>
    </div>
  )
}
