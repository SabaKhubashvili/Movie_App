
import { serie } from '@prisma/client'
import Image from 'next/image'
import React from 'react'

interface Props extends serie{
  onClick:(value:string)=>void
}

export const Serie = ({onClick,id,description,title}:Props) => {


  return (
    <div className='h-full w-full relative cursor-pointer' onClick={()=>onClick(`${process.env.AWS_Cloudfront_Link}series/${id}.mp4`)}>
            <Image
                src={'/Image/series/LastOfUs.webp'}
                alt='Serie'
                width={200}
                height={200}
                className='w-full h-full object-cover rounded-[16px]'
            />

            <div className='absolute bottom-0 pb-[8px] z-[2] w-full flex justify-center flex-col px-[20px] 
            bg-gradient-to-b from-transparent to-[#000000] rounded-[16px]' >
                <h3 className='font-bold text-[16px] leading-[24px] text-white'>{title}</h3>
                {
                  description &&
                  <p className='text-[#78828A] text-[12px] leading-[20px]'>{description.slice(0,75)}...</p>
                }
            </div>
    </div>
  )
}
