'use client'

import React from 'react'
import { BsStar } from 'react-icons/bs'
import { SmallForumComponents } from './SmallForumComponents'
import { CustomButton } from '../../Buttons'
import { UseLoginModal } from '@/app/hooks/UseLoginModal'

export const Forum = () => {
  const loginModal = UseLoginModal()

  return (
    <section className='w-full flex flex-col gap-[10px] pt-[40px]'>
          <h2 className='font-bold text-[24px] leading-[26px] text-white flex gap-[7px]'> <BsStar /> Popular Discussion</h2>

          <div className='w-full'>
              <SmallForumComponents/>
              <SmallForumComponents/>
              <SmallForumComponents/>
              <SmallForumComponents/>
              <SmallForumComponents/>
          </div>
          <div className='flex flex-col items-center justify-between text-wite pt-[30px] gap-[15px]'>
            <h1 className='uppercase font-bold text-white lg:text-[35px] text-[20px] text-center'>Want to make a movie influence profile?</h1>
            <CustomButton label='Login' onClick={()=>loginModal.onOpen()}  />
          </div>
    </section>
  )
}
