import { SecondaryBannerTagsInterface } from "@/app/types"
import Image from "next/image"

 interface Props extends SecondaryBannerTagsInterface{
    isActive?:boolean,
    onClick:()=>void
}

export const SecondaryBannerTag = ({image,label,isActive,onClick}:Props) => {
  return (
    <div className={`relative w-[210px] h-[99px] rounded-[12px] cursor-pointer ${isActive && 'border-[1px] border-[#00925D]'}`}
    onClick={onClick}
    >
        <Image
            src={`/Image/movies/${image}.webp`}
            alt="Tag"
            width={210}
            height={99}
            className={`w-full h-full object-cover`}
        />
        {
          isActive ?
          <div className="absolute top-0 w-full h-full bg-[#00925D29]" />
          :
          <div className="absolute top-0 w-full h-full bg-[#16181EB2]" />

        }
        <div className="absolute text-[18px] font-extrabold top-0 flex justify-center items-center h-full text-white w-full">
            {label}
        </div>
    </div>
  )
}