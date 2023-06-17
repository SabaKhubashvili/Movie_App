import { VoteDown, VoteUp } from '@/public/svg/icons/Icon'
import React from 'react'

interface Props{
  isLiked?:boolean
  onLike:()=>void,
  isDisliked?:boolean
  onDislike:()=>void
  reactCount:number
}

export const Voting = ({isLiked, isDisliked,onLike,onDislike,reactCount}:Props) => {
  return (
    <div className='h-full px-[14px] py-[10px] bg-[#08080a] border-[1px] border-solid border-[#FFFFFF1A] rounded-lg 
    flex justify-center items-center flex-col gap-[10px]'>
      <div className={`p-1 ${isLiked ? 'bg-white' : 'bg-[#28262D]'} w-6 rounded-3xl cursor-pointer`} onClick={onLike}>
        <VoteUp/>
      </div>
      <p className='font-bold text-[16px] text-white'>{reactCount}</p>
      <div className={` ${isDisliked ? 'bg-red-700' : 'bg-[#28262D]'} p-1   w-6 rounded-3xl cursor-pointer`} onClick={onDislike}>
        <VoteDown/>
      </div>
    </div>
  )
}
