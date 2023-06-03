
import React from 'react'
import { Container } from '../Container'
import { Profile } from '../components/Profile/Profile'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/pages/api/auth/[...nextauth]'



export async function generateMetadata(){
  const currentUser =  await getServerSession(authOptions)

  return {
    title: `${currentUser?.user.name} Profile`,
    description: `Here is your profile page, you can edit profile and change description, image, name and more`,
    Image: `${currentUser?.user.image}`
  };
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