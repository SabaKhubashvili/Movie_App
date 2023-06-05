import React from 'react'
import { checkIfIsAdmin } from '../actions/checkIfIsAdmin'
import { redirect } from 'next/navigation'
import { Container } from '../Container'
import { AdminAddMovie } from '../components/Admin/AdminAddMovie'
import { getMovieTags } from '../actions/getMovieTags'

export const metadata = {
  title:'Admin'
}

const Page = async() => {
  const isAdmin = await checkIfIsAdmin()
  if(!isAdmin){
    redirect('/404')
  }
  const tags = await getMovieTags()
  return (
    <Container>
      <AdminAddMovie tags={tags}/>
    </Container>
  )
}

export default Page