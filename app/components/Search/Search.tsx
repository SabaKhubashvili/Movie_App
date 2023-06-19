'use client'

import React from 'react'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import { CustomButton } from '../Buttons'
import queryString from 'query-string'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { MainSearchInput } from '../Inputs/MenuSearchInput'


interface Props{
    targetUrl?:string
}

export const Search = ({targetUrl}:Props) => {
    const router = useRouter()
    const params = useSearchParams()
    const pathname = usePathname()
    
    const {
        register,
        formState:{
            errors
        },
        handleSubmit
    } = useForm<FieldValues>({
        defaultValues:{
            searchTitle: params && queryString.parse(params.toString()).searchTitle
        }
    })

    const onSubmit:SubmitHandler<FieldValues> = (data) =>{
        
        const url = queryString.stringifyUrl({
            query:data,
            url: targetUrl ?  `/${targetUrl}` : pathname || ''
        })

        router.push(url)
    }

  return (
    <section className='pt-[10rem] mb-[5rem] text-white w-full flex flex-col gap-[10px]'>
        <div className='flex items-center gap-[10px]'>
            <MainSearchInput
                id='searchTitle'
                placeholder='...Search'
                required
                register={register}
                errors={errors}
                onSubmit={handleSubmit(onSubmit)}
            />
            <CustomButton
                label='Search'
                fitContent
                onClick={handleSubmit(onSubmit)}
            />
        </div>
            <CustomButton
                label='Reset'
                fitContent
                onClick={()=>router.push(targetUrl || pathname || '/')}
            />
    </section>
  )
}
