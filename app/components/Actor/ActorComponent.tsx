import { ImbdCast } from '@/app/types'
import axios from 'axios'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-hot-toast'



export const ActorComponent = ({actor,role}:ImbdCast) => {
    const [image,setImage] = useState<string>()

    useEffect(()=>{
        axios.get(`https://moviesminidatabase.p.rapidapi.com/actor/id/${actor.imdb_id}/`,{
            headers:{
                'X-RapidAPI-Key': 'c2cfc8e7a5msh5b9279984adefe3p1f2178jsn2149674d6173',
                'X-RapidAPI-Host': 'moviesminidatabase.p.rapidapi.com'
            }
        }).then(res=>{
            setImage(res.data.results.image_url)
            
        }).catch(error=>{
            toast.error('Something went wrong getting actor image')
        })
    },[])
  return (
    <React.Fragment>
                { image &&

                    <Image
                    src={image}
                    alt='Actor'
                    width={50}
                    height={50}
                    className='!w-[48px] !h-[48px] rounded-full object-cover'
                    />
                }

                    <div className='h-full flex flex-col justify-between'>
                    <h5 className='text-[#F9F9F9] text-[16px] font-semibold'>{actor.name}</h5>
                    <p className='text-[#9CA4AB] text-[12px] font-medium'>{role}</p>
                </div>
    </React.Fragment>
  )
}
