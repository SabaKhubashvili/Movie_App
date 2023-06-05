import React from 'react'
import { checkIfIsAdmin } from '../actions/checkIfIsAdmin'
import { redirect } from 'next/navigation'
import { Container } from '../Container'
import { AdminAddMovie } from '../components/Admin/AdminAddMovie'

export const metadata = {
  title:'Admin'
}

const Page = async() => {
  const isAdmin = await checkIfIsAdmin()
  if(!isAdmin){
    redirect('/404')
  }
  return (
    <Container>
      <AdminAddMovie/>
    </Container>
  )
}

export default Page