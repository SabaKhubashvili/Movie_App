'use client'

import React from 'react'
import { MainTextInput } from '../Inputs/MainTextInput'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import { ImageUpload } from '../Upload/ImageUpload'
import { MainTextArea } from '../Inputs/MainTextarea'
import { CheckBoxDropdown } from '../Dropdown/CheckBoxDropdown'
import { toast } from 'react-hot-toast'
import { movieTags } from '@/app/constants'
import { CustomButton } from '../Buttons'

export const AdminAddMovie = () => {

    const {
        register,
        formState:{
            errors
        },
        handleSubmit,
        setValue,
        watch
    } = useForm<FieldValues>({
        defaultValues:{
            title:'',
            description:'',
            duration:'',
            movieLink:'',
            tags:[],
            movieBanner:''
        }
    })
    const image = watch('movieBanner')
    const tags = watch('tags')

    const setCustomValue = (id: string, value: any) => {
        setValue(id, value, {
          shouldDirty: true,
          shouldTouch: true,
          shouldValidate: true,
        });
      };
    
    const addToTags = (tag:string) =>{
        
        if(tags.includes(tag)){
           setCustomValue('tags',tags.filter((singleTag:string) => singleTag !== tag ))
        }else{
            if(tags.length <  5 ){

                setCustomValue('tags',[...tags,tag])
            }else{
                toast.error('Cant attach more than 5 tags')
            }
        }
    }

    const onSubmit:SubmitHandler<FieldValues> = (data) =>{
        if(tags.length == 0){
            return toast.error('At least one tag is required')
        }
        if(image.length <= 0){
            return toast.error('Banner is required')
        }
        console.log(data);
        
    }
    


  return (
    <section className='w-full pt-[150px] flex flex-col gap-[30px]'>
        <h1 className='font-bold md:text-[30px] text-[24px] text-white'>Add a movie</h1>
        <div className='flex justify-between gap-x-[50px] gap-y-[30px] sm:flex-nowrap flex-wrap'>
            <MainTextInput
                id='title'
                label='Title'
                placeholder='title'
                register={register}
                errors={errors}
                required
            />
            <MainTextInput
                id='duration'
                label='Duration'
                placeholder='duration'
                register={register}
                errors={errors}
                required
            />
        </div>

        <div className='w-full flex flex-col gap-[30px]'>
            <MainTextInput
                    id='movieLink'
                    label='Movie link'
                    placeholder='link'
                    register={register}
                    errors={errors}
                    required
            />
            <MainTextArea 
                id='description'
                label='Description'
                placeholder='description'
                errors={errors}
                register={register}
                required
                />
        </div>
        <div className='flex gap-x-[80px] gap-y-[20px] sm:flex-nowrap flex-wrap'>
            <div className='w-[5rem]'>
                <ImageUpload onChange={(image)=>setCustomValue('movieBanner',image)} value={image}/>
            </div>
            <div className='w-[15rem]'>
                <CheckBoxDropdown submitedTags={tags} data={movieTags} onClick={(tag)=>addToTags(tag)} label='Choose tags'/>
            </div>
        </div>
        <div className='sm:w-[10rem] w-[5rem] mx-auto'>
            <CustomButton full label='Create' onClick={handleSubmit(onSubmit)}/>
        </div>
    </section>
  )
}
