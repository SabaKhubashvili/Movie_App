'use client'

import React from 'react'
import { BsStar } from 'react-icons/bs'
import { CustomButton } from '../../Buttons'
import { UseLoginModal } from '@/app/hooks/UseLoginModal'
import { useSession } from 'next-auth/react'
import { AddCommentComponent } from '../../Comment/AddComment'    
import { safeTopic } from '@/app/types'
import { SingleForumComponent } from './SingleForumComponent'

interface Props{
  topics:safeTopic[]
}

export const Forum = ({topics}:Props) => {
  const loginModal = UseLoginModal()
  const userData = useSession()

  return (
    <section className='w-full flex flex-col gap-[10px] pt-[40px]'>
          <h2 className='font-bold text-[24px] leading-[26px] text-white flex gap-[7px]'> <BsStar /> Popular Discussion</h2>

          <div className='w-full'>
            {topics.map(topic=>(
              <SingleForumComponent key={topic.id} {...topic}/>
              ))
          }
            
          </div>
          { !userData.data ?

            <div className='flex flex-col items-center justify-between text-wite pt-[30px] gap-[15px]'>
            <h1 className='uppercase font-bold text-white lg:text-[35px] text-[20px] text-center'>Want to make a movie influence profile?</h1>
            <CustomButton label='Login' onClick={()=>loginModal.onOpen()}  />
          </div>
          :
          <AddCommentComponent/>
          } 
    </section>
  )
}
