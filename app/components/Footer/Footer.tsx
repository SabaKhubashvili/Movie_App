import { FacebookIcon, InstagramIcon } from '@/public/svg/icons/Social network'
import {AiFillGithub, AiFillLinkedin, AiFillMail} from 'react-icons/ai'
import Link from 'next/link'
import React from 'react'

export const Footer = () => {
  return (
    <footer className='flex flex-col gap-[60px] pt-[70px] pb-[40px]'>
        <div className='flex justify-between h-full lg:flex-row flex-col'>
            <h1 className='md:text-[40px] text-[34px] font-medium leading-[48px] text-white xl:basis-1/3 lg:basis-2/3'>
                Our platform is trusted by millions & features best updated movies all around the world.
            </h1>
            <div className='h-full flex flex-col lg:gap-[50px] gap-[20px] lg:pt-0 pt-[20px] '>
                <div className='text-white flex sm:flex-nowrap flex-wrap gap-[7px] lg:order-1 order-2'>
                    <Link
                        href={'/'}>
                        Home 
                    </Link>
                    <p>
                        /
                    </p>
                    <Link
                        href={'/discover'}>
                        Discover 
                    </Link>
                    <p>
                        /
                    </p>
                    <Link
                        href={'/influence'}>
                        Influence 
                    </Link>
                    <p>
                        /
                    </p>
                    <Link
                        href={'/release'}>
                        Release
                    </Link>
                </div>
                <div className='flex gap-[40px]  items-center sm:flex-nowrap flex-wrap'>
                    <Link href={'https://www.linkedin.com/in/sabakhubashvili/'} target='_blank'> 
                        <AiFillLinkedin  size={40} color='#FFF'/>
                    </Link>
                    <Link href={'https://github.com/SabaKhubashvili'} target='_blank'> 
                        <AiFillGithub size={40} color='#FFF'/>
                    </Link>
                    <Link href={'https://www.facebook.com/profile.php?id=100011187067102'} target='_blank'> 
                        <FacebookIcon/>
                    </Link>
                    <Link href={'mailto:khubashvili.saba12@gmail.com'} target='_blank'> 
                        <AiFillMail size={40} color='#FFF'/>
                    </Link>
                </div>
            </div>
        </div>

        <div className='w-full flex justify-between text-white sm:flex-row flex-col'>
            <div className='flex gap-[26px] sm:flex-nowrap flex-wrap'>
                <Link href={'/privacypolicy'}> 
                    Privacy policy
                </Link>
                <Link href={'/terms'}> 
                    Term of service
                </Link>
                <Link href={'/language'}> 
                    Language
                </Link>
            </div>
            <p className='text-[17px] leading-[25px]'>© 2023</p>
        </div>
    </footer>
  )
}
