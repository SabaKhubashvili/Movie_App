import React from 'react'
import { Container } from '../../Container'
import { AdminAddMovie } from '../../components/Admin/AdminAddMovie'
import { getMovieTags } from '../../actions/getMovieTags'

export const metadata = {
  title:'Admin create movie'
}

const Page = async() => {
 
  const tags = await getMovieTags()
  return (
    <Container>
      <AdminAddMovie tags={tags}/>
    </Container>
  )
}

export default Page