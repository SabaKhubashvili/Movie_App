import Image from 'next/image'
import React from 'react'

interface Props{
  partner:string
}

export const CustomParnetsSlide = ({partner}:Props) => {
  return (
    <div className='bg-[#08080A] flex justify-center items-center rounded-[16px] px-[32px] py-[16px] !h-full w-full '>
        <Image
            src={`/Image/partners/${partner}.webp`}
            alt='partner'
            width={100}
            height={100}
            className=''
            loading="eager"
        />
    </div>
  )
}
