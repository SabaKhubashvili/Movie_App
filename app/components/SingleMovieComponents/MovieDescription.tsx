'use client'

import { Container } from '@/app/Container'
import React, { useEffect, useState } from 'react'
import { CastSlider } from './CastSlider'
import axios from 'axios'
import { toast } from 'react-hot-toast'
import { ImbdCast } from '@/app/types'

interface Props{
    description:string
    imbdId:string
    isSeries?:boolean
}

export const MovieDescription = ({description,imbdId,isSeries}:Props) => {
    const [showFullDesc,setShowFullDesc] = useState<boolean>(description.length <= 700)
    const [cast,setCast] = useState<ImbdCast[]>()

    useEffect(()=>{
        axios.get(`https://moviesminidatabase.p.rapidapi.com/${isSeries ? 'series'  : 'movie'}/id/${imbdId}/cast/`,{
          headers:{
            'X-RapidAPI-Key': 'c2cfc8e7a5msh5b9279984adefe3p1f2178jsn2149674d6173',
            'X-RapidAPI-Host': 'moviesminidatabase.p.rapidapi.com'
          }
        }).then(res=>{
          setCast(res.data.results.roles);
          
        }).catch(error=>{})
      },[])
      
    return (
    <section className='flex flex-col gap-[24px] pt-[20px] pb-[40px]'>
        <Container>
            <div className='flex flex-col gap-[16px] text-white'>
                    <h2 className='font-bold text-[18px] leading-[26px]'>Story Line</h2>

                    <p className='text-[#9CA4AB] text-[16px] font-medium leading-[24px]'>
                        { !showFullDesc ?
                        <React.Fragment>
                            {description.slice(0,700)}
                            <span>....</span>
                            <span className='text-[#00925D] cursor-pointer' onClick={()=>setShowFullDesc(true)}> More</span>
                        </React.Fragment>
                        :
                        description
                        
                    }
                    </p>
            </div>

        </Container>
        { cast &&

            <Container rightSpace>
                <CastSlider cast={cast} />
            </Container>
        }
    </section>
  )
}
