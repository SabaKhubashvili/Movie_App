'use client'

import Image from 'next/image'
import React from 'react'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'

import {BsFillCameraFill} from 'react-icons/bs'
import { MainTextInput } from '../Inputs/MainTextInput'
import { MainTextArea } from '../Inputs/MainTextarea'
import { MainDropdown } from '../Dropdown/MainDropdown'
import { CustomButton } from '../Buttons'

export const Profile = () => {

    const dropdownData = [
        'Man',
        'Woman'
    ]
    const{
        register,
        formState:{
            errors
        },
        handleSubmit,
        watch,
        setValue
    } = useForm<FieldValues>({
        defaultValues:{
            name:'',
            description:'',
            gender:''
        }
    })
    const gender = watch('gender')
    
    const setCustomValue = (id: string, value: any) => {
        setValue(id, value, {
          shouldDirty: true,
          shouldTouch: true,
          shouldValidate: true,
        });
      };

      const onSubmit:SubmitHandler<FieldValues> = (data) =>{
        console.log(data)
      }

  return (
    <div className='lg:w-[60%] h-full flex flex-col justify-center items-center gap-[40px] mx-auto pt-[150px]'>
                <div className='flex flex-col gap-[15px]'>
                    <h3 className='font-bold text-white text-center'>Upload Image</h3>
                    <div className='relative md:w-[8rem] md:h-[8rem] w-[6rem] h-[6rem]  p-1 border-[1px] border-[#dbd8d8] border-solid rounded-full cursor-pointer '>
                        <Image
                            src={'/Image/user/userplaceholder2.webp'}
                            alt='UserPlaceholder2'
                            width={600}
                            height={600}
                            className='rounded-full select-none w-full h-full'
                        />
                        <div className='p-2 absolute bg-[#00925D] rounded-full right-1 bottom-0'>
                            <BsFillCameraFill color='#FFF' size={18}/>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col w-full gap-[20px]'>
                    <MainTextInput
                    id='name'
                    label='Name'
                    placeholder='John Doe'
                    register={register} 
                    errors={errors}
                    />
                    <MainTextArea
                    id='description'
                    label='Description'
                    placeholder='Description...'
                    register={register} 
                    errors={errors}
                    />
                    <MainDropdown
                        label={gender ? gender : 'Gender'}
                        data={dropdownData}
                        onClick={(value:string)=>{setCustomValue('gender',value)}}
                    />
                </div>
                <div className='sm:w-[20rem] w-[10rem]'>
                    <CustomButton
                        label='Submit'
                        onClick={handleSubmit(onSubmit)}
                        full
                    />
                </div>
            </div>
  )
}
