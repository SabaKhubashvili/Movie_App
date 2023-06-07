'use client'

import { movie } from '@prisma/client'
import axios from 'axios'
import Image from 'next/image'
import React, { useState } from 'react'
import { toast } from 'react-hot-toast'

interface Props{
    movies:movie[]
}

export const AdminAllMoviesTable = ({movies}:Props) => {
    const [movieList, setMovieList] = useState<movie[]>(movies);
    const [isLoading,setIsLoading] = useState<boolean>(false)

    const onDelete = (id:string) =>{
      if(!isLoading){
        setIsLoading(true)

        axios.delete(`/api/movie/deleteMovie/${id}`)
        .then(res=>{
          toast.success(res.data.message)
          setMovieList(movieList.filter(movie=>movie.id !== id))
        }).catch(error=>{
          console.log(error)
        }).finally(()=>{
          setIsLoading(false)
        })
      }
    }

  return (
    <table className={`w-full ${isLoading && 'opacity-80'}`}>
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
                    <td className='whitespace-nowrap px-6 py-4 '>{movie.description.slice(0,400)}</td>
                    <td className='whitespace-nowrap px-6 py-4 '>{movie.imbdRating}</td>
                    <td className='whitespace-nowrap px-6 py-4 '>
                      <Image
                        src={movie.movieBanner}
                        alt='movie'
                        width={200}
                        height={200}
                        className='max-w-[4rem] max-h-[4rem] object-cover rounded-xl'
                      />
                    </td>
                    <td className='whitespace-nowrap px-6 py-4 '>{movie.movieLink}</td>
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
