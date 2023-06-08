import React from 'react'
import { Container } from '../Container'
import Link from 'next/link'

export const metadata = {
    title:'Admin Control Panel'
}

const page = () => {
        
  return (
    <React.Fragment>
        <Container>
            <div className='w-full pt-[170px]'>
                <h1 className='font-bold text-[29px] text-white'>Movies</h1>
                <div className='flex gap-[40px] pt-[40px]'>

                <Link href={'admin/adminMovieTable'} className='bg-[#00925D] rounded-xl text-[20px] font-bold text-white px-4 py-2'>
                    All movies
                </Link>
                <Link href={'admin/addMovie'} className='bg-[#00925D] rounded-xl text-[20px] font-bold text-white px-4 py-2'>
                    Add movie
                </Link>
                </div>
            </div>
            <div className='w-full bg-[#FFFFFF1A] h-[1px] my-[2rem]' />
            
            <div className='w-full'>
                <h1 className='font-bold text-[29px] text-white'>Serials</h1>
                <div className='flex gap-[40px] pt-[40px]'>
                    <Link href={'admin/adminSerialsTable'} className='bg-[#00925D] rounded-xl text-[20px] font-bold text-white px-4 py-2'>
                        All Serials
                    </Link>
                    <Link href={'admin/addSerial'} className='bg-[#00925D] rounded-xl text-[20px] font-bold text-white px-4 py-2'>
                        Add Serial
                    </Link>
                </div>
            </div>

        </Container>
    </React.Fragment>
  )
}

export default page