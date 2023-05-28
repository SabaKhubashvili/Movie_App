import React from 'react'

interface Props{
    icon:React.ReactElement
    label:string
}

export const CustomIconButton = ({icon,label}:Props) => {
  return (
    <button className='py-[12px] md:px-[24px] px-[12px] flex gap-[10px] bg-[#0D0C0F] border-[#28262D] border-[1px] border-solid rounded-[10px]'>
        {icon}
        <p className='font-bold text-[14px] leading-[22px] md:inline hidden'>
            {label}
        </p>
    </button>
  )
}
