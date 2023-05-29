
import Image from 'next/image'
import React from 'react'

interface Props{
  onClick:()=>void
}

export const Serie = ({onClick}:Props) => {

    const serieDescription = 'The chapter about geuinea just want to go out fromhis palace to get freedom and more also '
    

  return (
    <div className='h-full w-full relative cursor-pointer' onClick={onClick}>
            <Image
                src={'/Image/series/LastOfUs.webp'}
                alt='Serie'
                width={200}
                height={200}
                className='w-full h-full object-cover rounded-[16px]'
            />

            <div className='absolute bottom-0 pb-[8px] z-[2] w-full flex justify-center flex-col px-[20px] 
            bg-gradient-to-b from-transparent to-[#000000] rounded-[16px]' >
                <h3 className='font-bold text-[16px] leading-[24px] text-white'>Chapter 2</h3>
                <p className='text-[#78828A] text-[12px] leading-[20px]'>{serieDescription.slice(0,75)}...</p>
            </div>
    </div>
  )
}
