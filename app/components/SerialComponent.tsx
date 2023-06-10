'use client'
import { StarIcon } from '@/public/svg/icons/Icon'

import Image from 'next/image'
import React from 'react'
import { safeSerial } from '../types'
import Link from 'next/link'

export const SerialComponent = ({
  id,
  serialBannerSmall,
  imbdRating,
  serieTags
}:safeSerial) => {
  return (
    <Link href={`/serial/${id}`} className='w-full h-fit flex flex-col gap-[12px]'>
        <Image
        src={serialBannerSmall}
        alt='movie'
        width={300}
        height={300}
        className='w-full h-full object-cover max-h-[183px] rounded-xl select-none'
        />
          <div className='flex gap-[3px]'>
                <StarIcon/>
                <h5 className='text-[14px] font-semibold leading-[20px] text-white'>
                    4.3
                </h5>
                <div className='font-medium text-[12px] leading-[20px] text-[#78828A]'>
                    | {serieTags.map((singleTag:any)=>(
                      <span key={singleTag.tag.id}>{singleTag.tag.name} { serieTags[serieTags.length -1].tag.id !== singleTag.tag.id && '•' }  </span>
                    ))}
                </div>
            </div>
    </Link>
  )
}
