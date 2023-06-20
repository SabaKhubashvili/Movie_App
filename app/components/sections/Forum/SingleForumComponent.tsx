'use client'

import React, { useEffect, useState } from 'react'
import { Voting } from './Voting'
import Image from 'next/image'
import { safeTopic } from '@/app/types'
import axios from 'axios'
import { toast } from 'react-hot-toast'
import { useSession } from 'next-auth/react'
import { Comment } from './Comment'
import Link from 'next/link'



export const SingleForumComponent = ({
    id,
    title,
    description,
    dislikes,
    likes,
    createdAt,
    publisher ,
    comments,
    image
}:safeTopic) => {
  const {data} = useSession()
  const [isLiked,setIsLiked] = useState<boolean>()
  const [isDisliked,setIsDisliked] = useState<boolean>()
  const [isLoading,setIsLoading] = useState<boolean>(false)
  const [reactCount,setReactCount] = useState<number>(likes.length - dislikes.length)
  useEffect(()=>{
    const isLiked = likes.some(like=>like.user.id === data?.user.id)
    const isDisliked = dislikes.some(dislike=>dislike.user.id === data?.user.id)

    setIsLiked(isLiked)
    setIsDisliked(isDisliked)
    
  },[data?.user,dislikes,likes])

  const createDate = new Date(createdAt)
  const currentDate = new Date();
  const timeDifference = currentDate.getTime() - createDate.getTime();
  
  const hoursDifference = Math.floor(timeDifference / (1000 * 60 * 60));
  
  const handleLike = () =>{
      if(!isLoading){
        setIsLoading(true)

        axios.post('/api/forum/onLike',{topicId:id})
              .then(res=>{
                setIsLiked(res.data.upvoted)  
                setReactCount(prev=> res.data.upvoted ? isDisliked ? prev+2 : prev+1 : prev-1)
                setIsDisliked(false)
              }).catch(error=>{
                toast.error('Something wrong happened')
              }).finally(()=>{
                setIsLoading(false)
              })
      }
  }


  const handleDislike = () =>{
    if(!isLoading){
      setIsLoading(true)

      axios.post('/api/forum/onDislike',{topicId:id})
            .then(res=>{
              setIsDisliked(res.data.downVoted)  
              setIsLiked(false)
              setReactCount(prev=> res.data.downVoted ? isLiked ? prev-2 : prev-1 : prev+1)
            }).catch(error=>{
                toast.error('Something wrong happened')
            }).finally(()=>{
              setIsLoading(false)
            })
    }
  }


  return (
    <section className='w-full'>
        <div className='w-full flex gap-[20px] pt-[20px]'>
            <Voting
                reactCount={reactCount}
                onLike={handleLike}
                isLiked={isLiked}
                onDislike={handleDislike}
                isDisliked={isDisliked}
            />
            <div className='flex gap-[20px] w-full h-full lg:flex-row flex-col'>

            <div className='h-full w-full flex flex-col justify-between '>
                <Link
                href={`/forum/${id}`}
                className='font-bold md:text-[24px] text-[20px] leading-[26px] text-white flex gap-[7px] hover:text-[#33ae81] transition-colors
                duration-200'>
                    {title}
                </Link>
                <p className={`font-medium ${comments ? ' md:text-[16px] text-[14px]' : ' md:text-[12px] text-[10px]'} leading-[20px] text-[#78828A] pt-[3px]`}>
                {description}
                </p>
                <div className='pt-[7px] text-[#78828A] md:text-[11px] text-[9px] '>
                  @{publisher.name} | {hoursDifference <= 24 ? hoursDifference + " hours ago" : Math.floor(hoursDifference / 24) + ' Days ago' } 
                </div>
            </div>
            <Image
                src={image}
                alt='MovieImage'
                width={400}
                height={400}
                className='lg:w-[7rem] lg:h-[7rem] w-[3.5rem] h-[3.5rem] object-cover rounded-xl lg:order-none order-first'
                />
            </div>
        </div>
        { comments &&

          <div className='pt-[30px]'>
            <h1 className='text-white font-bold text-[16px] leading-[32px]'>Comments 20</h1>

            <div className='lg:w-[95%] ml-auto pt-[20px] flex flex-col gap-[20px]'>
              {
                comments.map((comment:any)=>(
                  <Comment key={comment.id} {...comment}/>
                ))
              }
            </div>

            
        </div>
        }
    </section>
  )
}
