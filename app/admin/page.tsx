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
            <div className='w-full flex pt-[150px]'>
                <Link href={'admin/addMovie'} className='bg-[#00925D] rounded-xl text-[20px] font-bold text-white px-4 py-2'>
                    Add movie
                </Link>
            </div>
        </Container>
    </React.Fragment>
  )
}

export default page