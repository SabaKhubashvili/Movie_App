import React from 'react'

import { MovieDescription } from '@/app/components/SingleMovieComponents/MovieDescription'
import prisma from '@/app/Libs/prismadb'
import { EmptyClient } from '@/app/components/EmptyClient'
import { safeSerialSinglePage } from '@/app/types'
import { getSerialById } from '@/app/actions/getSerialById'
import { SingleSerialBanner } from '@/app/components/Banners/SingleSerialBanner'
import { Series } from '@/app/components/SingleMovieComponents/Series'
import { getSimilarSerials } from '@/app/actions/getSimilarSerials'
import { MoviesbyTag } from '@/app/components/sections/MoviesByTag/MoviesByTag'
import { Container } from '@/app/Container'
import { AllSeries } from '@/app/components/sections/Series/AllSeries'

interface IParams{
    SerialId:string
}


export async function generateMetadata({ params }:{params:IParams}) {
  const movie = await prisma.serials.findUnique({
    where:{
      id:params.SerialId
    }
  })
  if(movie){
    return {
      title:`${movie.title} | Movie`,
      description:movie.description,
      image:movie.serialBannerBig
    }
  }

  return{
    title:'Movie not found',
    description:'404 Movie not found'
  }

}

const Page = async({params}:{params:IParams}) => {
  
    const serial = await getSerialById(params.SerialId) as safeSerialSinglePage
    const similarSerials = await getSimilarSerials(serial.serieTags,serial.id)
    if(!serial){
      return <EmptyClient
        title='Movie not found'
        description='Error code 404'
      />
    }
    
    
  return (
    <React.Fragment>
      <section className='h-[810px]'>
       <SingleSerialBanner links serial={serial} movieLink={`${process.env.AWS_Cloudfront_Link}movies/${serial.id}.mp4`} />
      </section>
      
      <MovieDescription description={serial.description} cast={[]}/>
      <Series series={serial.series} />
      <div className='w-full bg-[#FFFFFF1A] h-[1px]' />
      <Container rightSpace>
        <AllSeries data={similarSerials}/>
      </Container>
      <div className='w-full bg-[#FFFFFF1A] h-[1px]' />
      

    </React.Fragment>
  )
}

export default Page