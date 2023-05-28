import { Container } from '@/app/Container'
import React, { useState } from 'react'
import { FreeMode, Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Serie } from './Serie'
import {ArrowRightIcon } from '@/public/svg/icons/Icon'
import { Modal } from '../Modals/Modal'
import { MoviePlayer } from '../VideoPlayer/MoviePlayer'

export const Series = () => {
    
    const [openSerieData,setOpenSerieData] = useState({
        isOpen:false,
        serieLink:''
    })
    let bodyContent = (
        <MoviePlayer/>
    )
  return (
    <React.Fragment>
        <section className='py-[40px]'>
            <Container>

                <div className='flex justify-between'>
                    <h1 className='font-bold text-[24px] leading-[32px] flex-grow text-white'>1-9 Episode</h1>
                    <p className='text-white'>Season 3</p>
                </div>
            </Container>
        <div className='relative w-full'>

            <button 
                className="custom_next_series absolute  right-6 
                lg:flex hidden items-center justify-center h-full cursor-pointer z-[10] ">
                <div className="h-fit p-5 bg-[#28262D]  rounded-full ">
                    <ArrowRightIcon/>
                </div>
                </button>

                <Container rightSpace>
                <Swiper
                modules={[FreeMode,Navigation]}
                navigation={{
                    nextEl:'.custom_next_series',
                }}
                freeMode={true}
                slidesPerView='auto'
                spaceBetween={16}
                className='!pt-[24px] !w-full'
                >
                    <SwiperSlide className='!w-[301px] !h-[197px]'>
                        <Serie onClick={()=>setOpenSerieData(prev=>({...prev,isOpen:true}))}/>
                    </SwiperSlide>
                    <SwiperSlide className='!w-[301px] !h-[197px]'>
                        <Serie onClick={()=>setOpenSerieData(prev=>({...prev,isOpen:true}))}/>
                    </SwiperSlide>
                    <SwiperSlide className='!w-[301px] !h-[197px]'>
                        <Serie onClick={()=>setOpenSerieData(prev=>({...prev,isOpen:true}))}/>
                    </SwiperSlide>
                    <SwiperSlide className='!w-[301px] !h-[197px]'>
                        <Serie onClick={()=>setOpenSerieData(prev=>({...prev,isOpen:true}))}/>
                    </SwiperSlide>
                    <SwiperSlide className='!w-[301px] !h-[197px]'>
                        <Serie onClick={()=>setOpenSerieData(prev=>({...prev,isOpen:true}))}/>
                    </SwiperSlide>
                    <SwiperSlide className='!w-[301px] !h-[197px]'>
                        <Serie onClick={()=>setOpenSerieData(prev=>({...prev,isOpen:true}))}/>
                    </SwiperSlide>
                    <SwiperSlide className='!w-[301px] !h-[197px]'>
                        <Serie onClick={()=>setOpenSerieData(prev=>({...prev,isOpen:true}))}/>
                    </SwiperSlide>
                    <SwiperSlide className='!w-[301px] !h-[197px]'>
                        <Serie onClick={()=>setOpenSerieData(prev=>({...prev,isOpen:true}))}/>
                    </SwiperSlide>
                    <SwiperSlide className='!w-[301px] !h-[197px]'>
                        <Serie onClick={()=>setOpenSerieData(prev=>({...prev,isOpen:true}))}/>
                    </SwiperSlide>
                    <SwiperSlide className='!w-[301px] !h-[197px]'>
                        <Serie onClick={()=>setOpenSerieData(prev=>({...prev,isOpen:true}))}/>
                    </SwiperSlide>
                    <SwiperSlide className='!w-[301px] !h-[197px]'>
                        <Serie onClick={()=>setOpenSerieData(prev=>({...prev,isOpen:true}))}/>
                    </SwiperSlide>
                </Swiper>
            </Container>
                <div className='w-[167px] sm:inline hidden h-full absolute top-0 right-0 z-[8]  bg-gradient-to-r from-transparent to-[#0D0C0F]'/>   
            </div>
        </section>  

        <Modal
            isOpen={openSerieData.isOpen}
            onClose={()=>setOpenSerieData(prev=>({...prev,isOpen:false}))}     
            link=''
            body={bodyContent}
        />
    </React.Fragment>
  )
}
