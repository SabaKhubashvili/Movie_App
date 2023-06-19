'use client'

import React from 'react'

interface Props{
    title:string
    description:string,
    smallPaddings?:boolean
}

export const EmptyClient = ({title,description,smallPaddings}:Props) => {
  return (
    <div className={`flex flex-col text-center w-full h-full justify-center items-center ${smallPaddings ? 'py-[150px]' : 'py-[350px]'} `}>
        <h1 className='font-bold text-white text-[40px]'>{title}</h1>
        <h5 className='text-[20px] font-medium text-white'>{description}</h5>
    </div>
  )
}
