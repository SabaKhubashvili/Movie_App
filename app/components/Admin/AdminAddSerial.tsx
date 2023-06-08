'use client'

import React, { useState } from 'react'
import { MainTextInput } from '../Inputs/MainTextInput'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import { ImageUpload } from '../Upload/ImageUpload'
import { MainTextArea } from '../Inputs/MainTextarea'
import { CheckBoxDropdown } from '../Dropdown/CheckBoxDropdown'
import { toast } from 'react-hot-toast'
import { CustomButton } from '../Buttons'
import axios from 'axios'
import { tag } from '@prisma/client'
import { MainFileUploadInput } from '../Inputs/MainFileUploadInput'

interface Props{
    tags:tag[]
}

export const AdminAddSerial = ({tags}:Props) => {

    
    const [isLoading,setIsLoading] = useState<boolean>(false)
    const {
        register,
        formState:{
            errors
        },
        handleSubmit,
        setValue,
        watch,
        reset
    } = useForm<FieldValues>({
        defaultValues:{
            title:'',
            description:'',
            serialBannerBig:'',
            serialBannerSmall:'',
            imbdRating:0,   
            tags:[],
            serie:''
        }
    })
    const imageBig = watch('movieBannerBig')
    const imageSmall = watch('movieBannerSmall')
    const formtags = watch('tags')

    const setCustomValue = (id: string, value: any) => {
        setValue(id, value, {
          shouldDirty: true,
          shouldTouch: true,
          shouldValidate: true,
        });
      };

    
    const addToTags = (tag:string) =>{
        
        if(formtags.includes(tag)){
           setCustomValue('tags',formtags.filter((singleTag:string) => singleTag !== tag ))
        }else{
            if(formtags.length <  5 ){
                setCustomValue('tags',[...formtags,tag])
            }else{
                toast.error('Cant attach more than 5 tags')
            }
        }
    }

    const onSubmit:SubmitHandler<FieldValues> = (data) =>{
      
        if(!isLoading){
            if(formtags.length == 0){
                return toast.error('At least one tag is required')
            }
            if(imageBig.length <= 0){
                return toast.error('Big Banner is required')
            }
            if(imageSmall.length <= 0){
                return toast.error('Small Banner is required')
            }
            
            
            setIsLoading(true)
            axios.post('/api/Serial/addSerial',data)
            .then(res=>{
                toast.success(res.data.message)
                reset()
            })
            .catch(error=>{
                toast.error(error.response.data.message)
            }).finally(()=>{
                setIsLoading(false)
            })
            
        }
    }
    


  return (
    <section className='w-full pt-[150px] flex flex-col gap-[30px]'>
        <h1 className='font-bold md:text-[30px] text-[24px] text-white'>Add a Serial</h1>
        <div className='flex justify-between gap-x-[50px] gap-y-[30px] sm:flex-nowrap flex-wrap'>
            <MainTextInput
                id='title'
                label='Title'
                placeholder='title'
                register={register}
                errors={errors}
                required 
                disabled={isLoading}
            />
        </div>

        <div className='w-full flex flex-col gap-[30px]'>
            <div className='flex justify-between gap-x-[50px] gap-y-[30px] sm:flex-nowrap flex-wrap'>
            <MainTextInput
                    id='imbdRating'
                    label='Imbd Rating'
                    type='number'
                    placeholder='Rating'
                    register={register}
                    errors={errors}
                    required 
                    disabled={isLoading}
                    />
            </div>
            <MainTextArea 
                id='description'
                label='Description'
                placeholder='description'
                errors={errors}
                register={register}
                required 
                disabled={isLoading}
                />
        </div>
        <div className='flex gap-x-[30px] gap-y-[20px] md:flex-nowrap flex-wrap items-center'>
            <div className=' flex gap-[20px]'>
                <ImageUpload label='Big banner' onChange={(image)=>setCustomValue('movieBannerBig',image)} value={imageBig}/>
                <ImageUpload label='small banner' onChange={(image)=>setCustomValue('movieBannerSmall',image)} value={imageSmall}/>
            </div>
            <div className='w-[15rem]'>
                <CheckBoxDropdown submitedTags={formtags} data={tags} onClick={(tag)=>addToTags(tag)} label='Choose tags'/>
            </div>
            <div>
            <MainFileUploadInput
                id='serie'
                placeholder='Video'
                register={register}
                errors={errors}
                required 
                disabled={isLoading}
            />
            </div>
        </div>
        <div className='sm:w-[10rem] w-[5rem] mx-auto'>
            <CustomButton full label='Create' onClick={handleSubmit(onSubmit)} disabled={isLoading}/>
        </div>
    </section>
  )
}
