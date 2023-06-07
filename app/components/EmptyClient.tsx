'use client'

import React from 'react'

interface Props{
    title:string
    description:string
}

export const EmptyClient = ({title,description}:Props) => {
  return (
    <div className='flex flex-col text-center w-full h-full justify-center items-center py-[350px]'>
        <h1 className='font-bold text-white text-[40px]'>{title}</h1>
        <h5 className='text-[20px] font-medium text-white'>{description}</h5>
    </div>
  )
}
