import React from 'react'
import { Container } from '../Container'
import { Profile } from '../components/Profile/Profile'

export const metadata = {
    title:'Profile',
    description:'Edit or create your profile to create topics and talk about movies'
}

const page = () => {
  return (
    <React.Fragment>
        <Container>
            <Profile/>
        </Container>
    </React.Fragment>
  )
}

export default page