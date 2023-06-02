import { Container } from '@/app/Container'
import { CustomIconButton } from '@/app/components/Buttons'
import { SingleForumComponent } from '@/app/components/sections/Forum/SingleForumComponent'
import Head from 'next/head'
import Link from 'next/link'
import React from 'react'

interface Iparams{
    TopicId:string
}

// export const metadata = {
//     title:'Forum Topic'

// }

export async function generateMetadata({ params }:{params:Iparams}){

    return {
      title: 'Form Topic',
      description: 'Description',
    };
  }
  
const page = ({params}:{params:Iparams}) => {
    
    
  return (
    <React.Fragment>
        <Container>

        <section className='pt-[150px] w-full'>
            <Link
            href={'/forum'}
            className='w-[4rem] inline-block'
            >
                <CustomIconButton showAll label='Back' transparent/>
            </Link>
          <div className='pt-[40px]'>
            <SingleForumComponent/>
          </div>
        </section>
        </Container>
    </React.Fragment>
  )
}

export default page