'use client'

import { serials } from '@prisma/client'
import axios from 'axios'
import Image from 'next/image'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import queryString from 'query-string'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-hot-toast'
import { AiFillEdit } from 'react-icons/ai'

interface Props{
    serials:serials[]
}

export const AdminAllSerialsTable = ({serials}:Props) => {
    const [serialList, setSerialList] = useState<serials[]>(serials);
    const [isLoading,setIsLoading] = useState<boolean>(false)
    const params = useSearchParams()

    const onDelete = (id:string) =>{
      if(!isLoading){
        setIsLoading(true)

        axios.delete(`/api/movie/deleteSerial/${id}`)
        .then(res=>{
          toast.success(res.data.message)
          setSerialList(serialList.filter(movie=>movie.id !== id))
        }).catch(error=>{
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
          setSerialList(prev=>prev.filter(serial=>serial.title.includes(searchTitle)))
        }else{
          setSerialList(serials)   
        }
      }
    },[params,serials])

  return (
    <table className={`w-full ${isLoading && 'opacity-80'} `}>
            <thead className='text-white bg-neutral-800/75 h-[4rem] border-b font-medium dark:border-neutral-500'>
              <tr className='w-full'>
                <th className='whitespace-nowrap px-6 py-4 text-start'>Id</th>
                <th className='whitespace-nowrap px-6 py-4 text-start'>Title</th>
                <th className='whitespace-nowrap px-6 py-4 text-start'>Description</th>
                <th className='whitespace-nowrap px-6 py-4 text-start'>imbdRating</th>
                <th className='whitespace-nowrap px-6 py-4 text-start'>Banner</th>
                <th className='whitespace-nowrap px-6 py-4 text-start'>Edit</th>
                <th className='whitespace-nowrap px-6 py-4 text-start'>Delete</th>
              </tr>
            </thead>
            <tbody className='mt-[10rem] w-full'>
              { serialList.map((serial)=>(

                
                <tr className='text-white w-full' key={serial.id}>
                    <td className='whitespace-nowrap px-6 py-4 '>{serial.id}</td>
                    <td className='whitespace-nowrap px-6 py-4 '>{serial.title}</td>
                    <td className=' px-6 py-4 !min-w-[20rem] '>{serial.description.slice(0,400)}</td>
                    <td className='whitespace-nowrap px-6 py-4 '>{serial.imbdRating}</td>
                    <td className='whitespace-nowrap px-6 py-4 '>
                      <Image
                        src={serial.serialBannerSmall}
                        alt='movie'
                        width={200}
                        height={200}
                        className='max-w-[4rem] max-h-[4rem] object-cover rounded-xl'
                      />
                    </td>
                    <td>
                      <Link 
                      href={`/admin/editSerial/${serial.id}`}
                      className={`whitespace-nowrap px-6 py-[3rem]  cursor-pointer w-full h-full flex justify-center items-center
                      ${isLoading && 'cursor-not-allowed '}`}>
                          <AiFillEdit size={27} color='#0492C2'/>
                      </Link>
                    </td>
                    <td onClick={()=>onDelete(serial.id)} 
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
