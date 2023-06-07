'use client'

import { Container } from '@/app/Container'
import React, { useState } from 'react'
import { CastSlider } from './CastSlider'
import { actor } from '@prisma/client'

interface Props{
    description:string
    cast:actor[]
}

export const MovieDescription = ({description,cast}:Props) => {
    const [showFullDesc,setShowFullDesc] = useState<boolean>(description.length <= 700)
  
    return (
    <section className='flex flex-col gap-[24px] pt-[20px] pb-[40px]'>
        <Container>
            <div className='flex flex-col gap-[16px] text-white'>
                    <h2 className='font-bold text-[18px] leading-[26px]'>Story Line</h2>

                    <p className='text-[#9CA4AB] text-[16px] font-medium leading-[24px]'>
                        { !showFullDesc ?
                        <React.Fragment>
                            {description.slice(0,700)}
                            <span>....</span>
                            <span className='text-[#00925D] cursor-pointer' onClick={()=>setShowFullDesc(true)}> More</span>
                        </React.Fragment>
                        :
                        description
                        
                    }
                    </p>
            </div>
        </Container>
        <Container rightSpace>
            <CastSlider/>
        </Container>
    </section>
  )
}
