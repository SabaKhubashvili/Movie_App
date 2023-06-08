import { Container } from '@/app/Container'
import { getMovieTags } from '@/app/actions'
import { AdminAddSerial } from '@/app/components/Admin/AdminAddSerial'
import React from 'react'

export const metadata={
    title:'Add a serial'
}

const Page = async() => {
  const tags =  await getMovieTags()
  return (
    <Container>
        <AdminAddSerial tags={tags}/>
    </Container>
  )
}

export default Page