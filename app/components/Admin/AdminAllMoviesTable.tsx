'use client'

import { movie } from '@prisma/client'
import axios from 'axios'
import Image from 'next/image'
import { useSearchParams } from 'next/navigation'
import queryString from 'query-string'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-hot-toast'

interface Props{
    movies:movie[]
}

export const AdminAllMoviesTable = ({movies}:Props) => {
    const [movieList, setMovieList] = useState<movie[]>(movies);
    const [isLoading,setIsLoading] = useState<boolean>(false)
    const params = useSearchParams()
    const onDelete = (id:string) =>{
      if(!isLoading){
        setIsLoading(true)

        axios.delete(`/api/movie/deleteMovie/${id}`)
        .then(res=>{
          toast.success(res.data.message)
          setMovieList(movieList.filter(movie=>movie.id !== id))
        }).catch(error=>{
          return toast.error('Can not remove movie')
        }).finally(()=>{
          setIsLoading(false)
        })
      }
    }

    useEffect(()=>{
      if(params){
        const filteredBy = queryString.parse(params.toString())
        const {
          searchTitle
        } = filteredBy
        if (
          typeof searchTitle === "string" &&
          searchTitle !== null &&
          searchTitle !== undefined
        ) {
        setMovieList(prev=>prev.filter(movie=>movie.title.includes(searchTitle)))
        }else{
          setMovieList(movies)
   
        }
      }
    },[params,movies])

  return (
    <table className={`w-full ${isLoading && 'opacity-80'} `}>
            <thead className='text-white bg-neutral-800/75 h-[4rem] border-b font-medium dark:border-neutral-500'>
              <tr className='w-full'>
                <th className='whitespace-nowrap px-6 py-4 text-start'>Id</th>
                <th className='whitespace-nowrap px-6 py-4 text-start'>Title</th>
                <th className='whitespace-nowrap px-6 py-4 text-start'>Description</th>
                <th className='whitespace-nowrap px-6 py-4 text-start'>imbdRating</th>
                <th className='whitespace-nowrap px-6 py-4 text-start'>Banner</th>
                <th className='whitespace-nowrap px-6 py-4 text-start'>Movie Link</th>
                <th className='whitespace-nowrap px-6 py-4 text-start'>Delete</th>
              </tr>
            </thead>
            <tbody className='mt-[10rem] w-full'>
              { movieList.map((movie)=>(

                
                <tr className='text-white w-full' key={movie.id}>
                    <td className='whitespace-nowrap px-6 py-4 '>{movie.id}</td>
                    <td className='whitespace-nowrap px-6 py-4 '>{movie.title}</td>
                    <td className=' px-6 py-4 !min-w-[20rem] '>{movie.description.slice(0,400)}</td>
                    <td className='whitespace-nowrap px-6 py-4 '>{movie.imbdRating}</td>
                    <td className='whitespace-nowrap px-6 py-4 '>
                      <Image
                        src={movie.movieBannerSmall}
                        alt='movie'
                        width={200}
                        height={200}
                        className='max-w-[4rem] max-h-[4rem] object-cover rounded-xl'
                      />
                    </td>
                    <td className='whitespace-nowrap px-6 py-4 '>

                    <a target='_blank' className='hover:underline hover:text-blue-200' href={`${process.env.AWS_Cloudfront_Link}movies/${movie.id}.mp4`} >
                      {`${process.env.AWS_Cloudfront_Link}movies/${movie.id}.mp4`.slice(0,20)}....
                      </a>
                    </td>
                    <td onClick={()=>onDelete(movie.id)} 
                    className={`whitespace-nowrap px-6 py-4 text-rose-500 cursor-pointer ${isLoading && 'cursor-not-allowed '}`}>
                        Delete
                    </td>
                  </tr>
              ))
              }
            </tbody>
        </table>
  )
}
