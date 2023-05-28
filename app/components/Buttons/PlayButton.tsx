import { PlayIcon } from "@/public/svg/icons/Icon/PlayIcon"

interface Props{
    label:string,
    onClick?:()=>void
    alternative?:boolean
}

export const PlayButton = ({label,onClick,alternative}:Props) => {
  return (
    <button 
    className={`
    ${alternative ? 'bg-[#28262D]':' bg-[#00925D]' }
    py-[12px] lg:px-[24px] px-[12px]  flex items-center rounded-[10px] gap-[10px] text-white lg:w-fit w-full`}
    onClick={onClick}
    >
        <PlayIcon/>
        <p className="font-bold md:text-[14px] sm:text-[12px] text-[11px] lg:leading-[22px]">
            {label}
        </p>
    </button>
  )
}
