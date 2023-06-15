import Image from "next/image"

 interface Props {
    label:string,
    isActive?:boolean,
    onClick:()=>void,
}

export const SecondaryBannerTag = ({label,isActive,onClick}:Props) => {
  return (
    <div className={`relative w-[210px] h-[99px] rounded-[12px] cursor-pointer ${isActive && 'border-[1px] border-[#00925D]'}`}
    onClick={onClick}
    >
        <Image
            src={`/Image/tags/${label.toLowerCase()}.webp`}
            alt="Tag"
            width={210}
            height={99}
            className={`w-full h-full object-cover rounded-xl`}
        />
        {
          isActive ?
          <div className="absolute top-0 w-full h-full bg-[#00925D29] rounded-xl" />
          :
          <div className="absolute top-0 w-full h-full bg-[#16181EB2] rounded-xl" />

        }
        <div className="absolute text-[18px] font-extrabold top-0 flex justify-center items-center h-full text-white w-full">
            {label}
        </div>
    </div>
  )
}
