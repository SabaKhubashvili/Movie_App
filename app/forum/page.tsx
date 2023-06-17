import React from 'react'
import { NormalBanner } from '../components/Banners/NormalBanner'
import { Forum } from '../components/sections/Forum/Forum'
import { HotMovieTopics } from '../components/sections/Forum/HotMovieTopics'
import { Container } from '../Container'
import { getForumTopics } from '../actions/getForumTopics'


export const metadata = {
    title:'Forum',
    description:'Change your opinions to other people',
    image:''
}

const Page = async() => {
  const topics = await getForumTopics()

  return (
    <React.Fragment>
        <NormalBanner 
            title='Become A Movie Influencer'
            description='Share your through about movie to people and become influencer'
            image='MoviesBanner'
        />  
      
            <Container>
                <HotMovieTopics/>
                <Forum topics={topics}/>
            </Container>
   
    </React.Fragment>
  )
}

export default Page