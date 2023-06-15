import { Container } from '@/app/Container'
import { getMovieTags } from '@/app/actions'
import { getSerialById } from '@/app/actions/getSerialById'
import { AdminEditSerial } from '@/app/components/Admin/AdminEditSerial'
import { EmptyClient } from '@/app/components/EmptyClient'
import React from 'react'

interface Iparams{
    serialId:string
}

export async function generateMetadata({params}:{params:Iparams}){
    const data = await getSerialById(params.serialId)

    if(!data){
        return {
            title:'Serial not found',
        }
    }
    return {
        title:`${data.title} | Serial`,
        description:data.description,
        image:data.serialBannerBig
      }


}

const Page = async({params}:{params:Iparams}) => {
    const {
        serialId
    } = params

    const data = await getSerialById(serialId)
    const tags = await getMovieTags()
    if(!data){
        return <EmptyClient
            title='Error 404'
            description='Serial not found'
        />
    }

  return (
    <Container>
        <AdminEditSerial tags={tags} serial={data}/>
    </Container>
  )
}

export default Page