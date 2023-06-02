import { VoteDown, VoteUp } from '@/public/svg/icons/Icon'
import React from 'react'

export const Voting = () => {
  return (
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
  )
}
