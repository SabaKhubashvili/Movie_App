import Image from 'next/image'
import React from 'react'

export const Logo = () => {
  return (
        <Image
            src={'/Image/main/Logo.webp'}
            alt='Logo'
            width={100}
            height={100}
            draggable={false}
            className='w-full h-full'
            priority
        />
  )
}
