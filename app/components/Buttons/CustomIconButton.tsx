import React from 'react'

interface Props{
    icon?:React.ReactElement
    label:string,
    transparent?:boolean
    onClick?:()=>void
    showAll?:boolean
}

export const CustomIconButton = ({icon,label,transparent,onClick,showAll}:Props) => {
  return (
    <button className={`py-[12px] lg:px-[24px] px-[12px] flex gap-[10px]  border-[1px] border-solid rounded-[10px] w-full text-center justify-center items-center
     ${transparent ? 'bg-transparent text-white border-white' : 'bg-[#0D0C0F] border-[#28262D]'}
     `}
     onClick={onClick}>
        {icon}
        <p className={`font-bold text-[14px] leading-[22px]  ${!showAll && 'md:inline hidden'}`}>
            {label}
        </p>
    </button>
  )
}
