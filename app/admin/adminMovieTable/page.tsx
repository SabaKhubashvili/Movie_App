import { Container } from '@/app/Container'
import { getAllMovies } from '@/app/actions'
import { AdminAllMoviesTable } from '@/app/components/Admin/AdminAllMoviesTable'
import Image from 'next/image'
import React from 'react'


export const metadata = {
  title:'All movies'
}

const Page = async() => {

  const movies = await getAllMovies()

  return (
    <section className='pt-[150px]'>

      <Container>
        <AdminAllMoviesTable movies={movies}/>
      </Container>
    </section>
  )
}

export default Page