import React, { useCallback, useEffect } from 'react'
import { CldUploadWidget } from 'next-cloudinary'
import Image from 'next/image'
import { TbPhotoPlus } from "react-icons/tb"
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form'

declare global {
    var cloudinary:any
}

interface Props{
    onChange:(value:string)=>void,
    value:string,
    isAboveSmallScreens?:boolean
    disabled?:boolean,
    label:string
}

export const ImageUpload = ({
    onChange,
    value,
    isAboveSmallScreens,
    disabled,
    label
}:Props) => {
    const handleUpload = useCallback((result:any)=>{
        onChange(result.info.secure_url)
    },[onChange])
    
  return (
    <CldUploadWidget
    onUpload={handleUpload}
    uploadPreset='cwyyjcnj'
    options={{
      maxFiles:1,
      resourceType:'image'
    
    }}
    
    >
      {({open})=>(
        <div
        onClick={()=> !disabled && open()}
        className="h-full"
      >
        <div className={`h-full cursor-pointer sm:px-[27px] sm:py-[12px] px-[16px] py-[12px] dark:bg-[#07543721] bg-[#F9F9F9] 
        flex gap-[10px] w-fit rounded-[88px] items-center
        ${disabled && 'cursor-not-allowed'}
        ${value && 'dark:bg-[#54ffbd2c] bg-[#ecebeb]'}
        `}>
            <TbPhotoPlus color='#FFF'/>
            <div className='dark:text-white text-[#24B47E] font-medium text-[14px] whitespace-nowrap'>
                {label}
            </div>
        </div>
      </div>
      )}

    </CldUploadWidget>
  )
}
