import Image from 'next/image'
import React from 'react'
import Link from 'next/link'



export const SmallMovieComponent = ({
    id,
    title,
    description,
    image
}:any) => {
  return (
    <Link href={`/forum/${id}`} className='w-full h-fit  flex justify-start gap-[10px]'>
        <Image
            src={image}
            alt='Movie'
            width={100}
            height={100}
            className=' min-w-[6rem] h-24 object-cover rounded-xl'
        />
        <div className='flex h-full justify-between flex-col gap-[10px]'>
            <h5 className='font-bold text-white'>{title}</h5>

            <div className='flex gap-[3px]'>
                <h5 className='text-[14px] font-semibold leading-[20px] text-neutral-400'>
                    {description.slice(0,50) + ' ...' }
                </h5>
            </div>
        </div>
    </Link>  
  )
}
