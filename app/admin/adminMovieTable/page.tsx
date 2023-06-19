import { Container } from '@/app/Container'
import { getAllMovies } from '@/app/actions'
import { AdminAllMoviesTable } from '@/app/components/Admin/AdminAllMoviesTable'
import { Search } from '@/app/components/Search/Search'
import React from 'react'


export const metadata = {
  title:'All movies'
}

const Page = async() => {

  const movies = await getAllMovies()

  return (
    <section className='pt-[50px]'>

      <Container>
          <Search />
        <div className='overflow-x-auto'>
          <AdminAllMoviesTable movies={movies}/>
        </div>
      </Container>
    </section>
  )
}

export default Page