import { Container } from '@/app/Container'
import Image from 'next/image'
import React from 'react'

interface Props{
    title:string,
    description:string,
    image:string
}

export const NormalBanner = ({title,description,image}:Props) => {
  return (
    <section className='h-[500px] relative'>
        <Image
            src={`/Image/movies/${image}.webp`}
            alt='Banner'
            width={1600}
            height={1600}
            className='w-full h-full object-cover inset-0 bg-center bg-cover absolute'
        />
        <Image
            src={'/Image/movies/overlay.webp'}
            alt="SwiperSlide"
            width={1200}
            height={1200}
            className="w-full h-full object-cover absolute inset-0 bg-center bg-cover"
        />
        <Container>

            <div className='pb-[40px] flex flex-col justify-end h-full relative bottom-0 gap-[20px]'>
                <h1 className='font-bold text-[48px] leading-[40px] text-white'>{title}</h1>
                <p className='text-[#9CA4AB] text-[14px] leading-[22px]'>{description}</p>
            </div>
        
        </Container>
    </section>
  )
}
