'use client'

import React, { useState } from 'react'
import { MainTextInput } from '../Inputs/MainTextInput'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import { CustomButton} from '../Buttons'
import { MainTextArea } from '../Inputs/MainTextarea'
import { ImageUpload } from '../Upload/ImageUpload'
import { toast } from 'react-hot-toast'
import axios from 'axios'
import { useRouter } from 'next/navigation'

interface Props{
    isComment?:boolean
    topicId?:string
}

export const AddCommentComponent = ({isComment,topicId}:Props) => {
    const [isLoading,setIsLoading] = useState<boolean>(false)
    const router = useRouter()
    const{
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
            image:''
        }
    })

    const imageValue = watch('image')
    const setCustomValue = (id: string, value: any) => {
        setValue(id, value, {
          shouldDirty: true,
          shouldTouch: true,
          shouldValidate: true,
        });
      };
      
      const onSubmit:SubmitHandler<FieldValues> = (data) =>{
        if(!isLoading){
            if(!isComment && imageValue.length < 1){
                return toast.error('Image is Required')
            }
            setIsLoading(true)            
            axios.post(`/api/forum/${isComment ? 'addTopicComment' : 'createForumTopic'}`,{...data,topicId})
            .then(res=>{
                reset()
                toast.success(res.data.message)
                router.refresh()
            }).catch(error=>(
                toast.error(error.response.data.message)
            )).finally(()=>{
                    setIsLoading(false)
            })
        
      }
      
    }
  return (
    <section className='w-full pt-[10px]'>
        <div className='w-full flex gap-[10px] items-center'>
            <MainTextInput
                id='title'
                placeholder='Title'
                disabled={isLoading}
                register={register}
                errors={errors}
                required
            />

            <CustomButton 
                label='Submit'
                fitContent
                onClick={handleSubmit(onSubmit)}

                disabled={isLoading}
            />
        </div>
        <div className='flex flex-col gap-[10px]'>

        <MainTextArea
            id='description'
            placeholder='Description'
            required
            disabled={isLoading}

            register={register}
            errors={errors}
            />
            { !isComment &&

                <ImageUpload
                label='Upload Image'
                onChange={(value:string)=>setCustomValue('image',value)}
                value={imageValue}
                disabled={isLoading}
                />
            }
        </div>
    </section>
  )
}
