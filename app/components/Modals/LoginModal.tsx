'use client'

import React, { useState } from 'react'
import { Modal } from './Modal'
import { UseLoginModal } from '@/app/hooks/UseLoginModal'
import { Logo } from '../Images/Logo'
import { MainTextInput } from '../Inputs/MainTextInput'
import { CustomButton, CustomIconButton } from '../Buttons'
import{
    SubmitHandler,
    useForm,
    FieldValues
} from 'react-hook-form'
import { UseRegisterModal } from '@/app/hooks/UseRegisterModal'

export const LoginModal = () => {
    const [isLoading,setIsLoading] = useState<boolean>(false)

    const loginModal = UseLoginModal()
    const registerModal = UseRegisterModal()

    const handleToRegister = () =>{
        if(!isLoading){
            registerModal.onOpen()
            loginModal.onClose()
        }
    }
    const{
        register,
        handleSubmit,
        formState:{
            errors
        },
    } = useForm<FieldValues>({
        defaultValues:{
            email:'',
            password:'',
        }
    })

    const onSubmit:SubmitHandler<FieldValues> = (data) =>{
        console.log(data);
        
    }


    const header = (
        <div className='flex justify-between items-center'>
            <div className='flex flex-col gap-[5px]'>
                <div className='sm:w-[10rem] w-[8rem]'>
                    <Logo/>
                </div>
                <p className='text-[#78828A] sm:text-[17px] text-[12px]'>Login to your accaunt</p>
            </div>
            <div className='max-w-[5rem]'>
                <CustomIconButton label='Close' showAll transparent onClick={()=>loginModal.onClose()} />
            </div>
        </div>
    )
    const body = (
        <div className='flex flex-col gap-[10px]'>
            <MainTextInput 
             id='email' 
             label='Email'
             type='email'
             placeholder='Enter Email'
             required
             register={register} 
             errors={errors}
             />
            <MainTextInput 
             id='password' 
             label='Password'
             placeholder='Enter Password'
             required
             register={register} 
             errors={errors}
             />
        </div>
    )
    const footer = (
        <div className='flex flex-col gap-[10px] w-full'>
            <CustomButton alternative label='Login' full onClick={handleSubmit(onSubmit)}/>
            <p className='text-[#78828A] text-center'>Don't have accaunt? 
            <span className='text-white cursor-pointer' onClick={handleToRegister}> Sign up</span> </p>
        </div>
    )
  return (
    <Modal  
        isOpen={loginModal.isOpen}
        onClose={()=>loginModal.onClose()}
        header={header}
        body={body}
        footer={footer}
        paddings
        small
        darkBg
        
    />
  )
}
