import React from 'react'
import { Container } from '../Container'
import { Profile } from '../components/Profile/Profile'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/pages/api/auth/[...nextauth]'
import { MoviesbyTag } from '../components/sections/MoviesByTag/MoviesByTag'
import { getWatchlistedMovies } from '../actions/getWatchlistedMovies'
import { Watchlist } from '../components/sections/Watchlist/Watchlist'
import { SerialsWatchlist } from '../components/sections/Watchlist/SerialsWatchlist'
import { getWatchlistedSerials } from '../actions/getWatchlistedSerials'


export async function generateMetadata(){
  const currentUser =  await getServerSession(authOptions)

  return {
    title: `${currentUser?.user.name} Profile`,
    description: `Here is your profile page, you can edit profile and change description, image, name and more`,
    Image: `${currentUser?.user.image}`
  };
}

const page = async() => {
  const watchlistMovies = await getWatchlistedMovies()
  const watchlistSerials = await getWatchlistedSerials()

  return (

    <React.Fragment>
        <Container>
            <Profile />
            <Watchlist data={watchlistMovies}/>
            <SerialsWatchlist data={watchlistSerials}/>
        </Container>
    </React.Fragment>
  )
}

export default page