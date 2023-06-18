'use client'

import React from 'react'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import { MainTextInput } from '../Inputs/MainTextInput'
import { CustomButton, PlayButton } from '../Buttons'
import queryString from 'query-string'
import { useRouter, useSearchParams } from 'next/navigation'

export const Search = () => {
    const router = useRouter()
    const params = useSearchParams()

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
            url:'/search'
        })
        router.push(url)
    }

  return (
    <section className='pt-[10rem] mb-[5rem] text-white w-full'>
        <div className='flex items-center gap-[10px]'>
            <MainTextInput
                id='searchTitle'
                placeholder='...Search'
                required
                onSubmit={handleSubmit(onSubmit)}
                register={register}
                errors={errors}
            />
            <CustomButton
                label='Search'
                fitContent
                onClick={handleSubmit(onSubmit)}
            />
        </div>
    </section>
  )
}
