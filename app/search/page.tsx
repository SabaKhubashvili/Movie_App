import React from 'react'
import { Search } from '../components/Search/Search'
import { Container } from '../Container'
import { SearchItems } from './SearchItems'
import { getAllMoviesSerials } from '../actions/getAllMoviesSerials'

export const metadata={
  title:'Search',
  description:'Find your favorite movies and watch them here'
}

const Page = async() => {
  const moviesAndSerials = await getAllMoviesSerials()

  return (
    <React.Fragment>
      <Container>
        <Search targetUrl='search'/>
        <SearchItems moviesAndSerials={moviesAndSerials} />
      </Container>
    </React.Fragment>
  )
}

export default Page 