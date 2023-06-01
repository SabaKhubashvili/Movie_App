import React from 'react'
import { NormalBanner } from '../components/Banners/NormalBanner'
import { Forum } from '../components/sections/Forum/Forum'
import { HotMovieTopics } from '../components/sections/Forum/HotMovieTopics'
import { Container } from '../Container'


export const metadata = {
    title:'Forum',
    description:'Change your opinions to other people',
    image:''
}

const Page = () => {
  return (
    <React.Fragment>
        <NormalBanner 
            title='Become A Movie Influencer'
            description='Share your through about movie to people and become influencer'
            image='MoviesBanner'
        />  
      
            <Container>
                <HotMovieTopics/>
                <Forum/>
            </Container>
   
    </React.Fragment>
  )
}

export default Page