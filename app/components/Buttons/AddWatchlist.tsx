import { AddWatchlistIcon } from "@/public/svg/icons/Icon"
import { PlayIcon } from "@/public/svg/icons/Icon/PlayIcon"

interface Props{
    label:string,
    onClick?:()=>void
}

export const AddWatchlist = ({label,onClick}:Props) => {
  return (
    <button 
    className={`
    bg-transparent border-[1px] border-solid border-[#FFF] lg:w-fit w-full
    py-[12px] px-[24px]  flex items-center rounded-[10px] gap-[10px] text-white`}
    onClick={onClick}
    >
        <AddWatchlistIcon/>
        <p className="font-bold  md:text-[14px] sm:text-[12px] text-[11px] lg:leading-[22px]">
            {label}
        </p>
    </button>
  )
}
