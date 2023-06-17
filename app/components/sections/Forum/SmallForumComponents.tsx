//! NOT USED

// 'use client'

// import Image from 'next/image'
// import Link from 'next/link'
// import React, { useState } from 'react'
// import { Voting } from './Voting'
// import { safeTopic } from '@/app/types'
// import { useSession } from 'next-auth/react'
// import axios from 'axios'
// import { toast } from 'react-hot-toast'

// export const SmallForumComponents = ({
//   id,
//   title,
//   description,
//   publisher,
//   image,
//   likes,
//   dislikes,
//   createdAt
// }:safeTopic) => {
//   const {data} = useSession()
//   const [isLiked,setIsLiked] = useState<boolean>(likes.some(like=>like.user.id === data?.user.id))
//   const [isDisliked,setIsDisliked] = useState<boolean>(dislikes.some(dislike=>dislike.user.id === data?.user.id))
//   const [isLoading,setIsLoading] = useState<boolean>(false)
//   const [reactCount,setReactCount] = useState<number>(likes.length - dislikes.length)
  
//   const createDate = new Date(createdAt)
//   const currentDate = new Date();
//   const timeDifference = currentDate.getTime() - createDate.getTime();
  
//   const hoursDifference = Math.floor(timeDifference / (1000 * 60 * 60));
  
//   const handleLike = () =>{
//       if(!isLoading){
//         setIsLoading(true)

//         axios.post('/api/forum/onLike',{topicId:id})
//               .then(res=>{
//                 setIsLiked(res.data.upvoted)  
//                 setReactCount(prev=> res.data.upvoted ? isDisliked ? prev+2 : prev+1 : prev-1)
//                 setIsDisliked(false)
//               }).catch(error=>{
//                 toast.error('Something wrong happened')
//               }).finally(()=>{
//                 setIsLoading(false)
//               })
//       }
//   }


//   const handleDislike = () =>{
//     if(!isLoading){
//       setIsLoading(true)

//       axios.post('/api/forum/onDislike',{topicId:id})
//             .then(res=>{
//               setIsDisliked(res.data.downVoted)  
//               setIsLiked(false)
//               setReactCount(prev=> res.data.downVoted ? isLiked ? prev-2 : prev-1 : prev+1)
//             }).catch(error=>{
//                 toast.error('Something wrong happened')
//             }).finally(()=>{
//               setIsLoading(false)
//             })
//     }
//   }

//   return (
//     <div className='w-full flex gap-[20px] pt-[20px]'>
//     <Voting 
//     reactCount={reactCount}
//     isLiked={isLiked} onLike={handleLike}
//     isDisliked={isDisliked}  onDislike={handleDislike}
//     />
//     <div className='flex gap-[20px] w-full h-full lg:flex-row flex-col'>

//       <div className='h-full w-full flex flex-col justify-between '>
//         <Link
//         href={`/forum/${id}`}
//         className='font-bold md:text-[18px] text-[16px] leading-[26px]
//          text-white flex gap-[7px] hover:text-[#33ae81] transition-colors
//           duration-200'>
//             {title}
//           </Link>
//         <p className='font-medium md:text-[12px] text-[10px] leading-[20px] text-[#78828A] pt-[3px]'>
//           {description.length >= 200 ?  description.slice(0,200) + '...' : description }
//         </p>
//         <div className='pt-[7px] text-[#78828A] md:text-[11px] text-[9px] '>
//           @{publisher.name} | {hoursDifference <= 24 ? hoursDifference + " hours ago" : Math.floor(hoursDifference / 24) + ' Days ago' } 
//         </div>
//       </div>
//       <Image
//         src={image}
//         alt='MovieImage'
//         width={400}
//         height={400}
//         className='lg:w-[7rem] lg:h-[7rem] w-[3.5rem] h-[3.5rem] object-cover rounded-xl lg:order-none order-first'
//         />
//       </div>
//     </div>
//   )
// }


