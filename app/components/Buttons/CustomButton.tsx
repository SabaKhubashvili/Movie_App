'use client'

interface Props{
    label:string,
    onClick?:()=>void
    alternative?:boolean
    full?:boolean
    disabled?:boolean
    fitContent?:boolean
}

export const CustomButton = ({label,onClick,alternative,full,disabled,fitContent}:Props) => {
  return (
    <button 
    className={`
    ${alternative ? 'bg-white text-[#d4d4d4]' : 'bg-[#00925D] text-white '}
    ${full ? 'w-full py-4' : 'lg:w-fit w-full'}
    ${fitContent && '!w-fit !h-fit'}
    disabled:cursor-not-allowed
     
    py-[12px] lg:px-[24px] px-[12px]  flex items-center justify-center rounded-[10px] gap-[10px]  `}
    onClick={onClick}
    disabled={disabled}
    >
        <p className="font-bold md:text-[14px] sm:text-[12px] text-[11px] lg:leading-[22px]">
            {label}
        </p>
    </button>
  )
}
