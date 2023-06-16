import React from 'react'
import { NormalBanner } from '../components/Banners/NormalBanner'
import { Container } from '../Container'
import { UpComingReleases } from '../components/sections/UpComingReleases/UpComingReleases'

export const metadata = {
  title:"Releases",
  description: 'Check out latest releases here',
  image: '/Image/main/Logo.webp'
}
const page = () => {

  return (
    <React.Fragment>
        <NormalBanner
            title='Shedule Release All Movie Around The World'
            description='Get up to date to movie schedule relase all around world'
            image='manymoviesbannerbatman'
        />
        <Container>
          <UpComingReleases/>
        </Container>
    </React.Fragment>
  )
}

export default page