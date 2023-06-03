'use client'

import React, { useState } from 'react'
import { Modal } from './Modal'
import { Logo } from '../Images/Logo'
import { MainTextInput } from '../Inputs/MainTextInput'
import { CustomButton, CustomIconButton } from '../Buttons'
import{
    SubmitHandler,
    useForm,
    FieldValues
} from 'react-hook-form'
import { UseRegisterModal } from '@/app/hooks/UseRegisterModal'
import { UseLoginModal } from '@/app/hooks/UseLoginModal'
import axios from 'axios'
import { MainDropdown } from '../Dropdown/MainDropdown'
import toast from 'react-hot-toast'


export const RegisterModal = () => {

    const [isLoading,setIsLoading] = useState<boolean>(false)

    const registerModal = UseRegisterModal()
    const loginModal = UseLoginModal()

    const handleToLogin = () =>{
        if(!isLoading){
            registerModal.onClose()
            loginModal.onOpen()
        }
    }

    const{
        register,
        handleSubmit,
        formState:{
            errors
        },
        watch,
        setValue
    } = useForm<FieldValues>({
        defaultValues:{
            username:'',
            email:'',
            password:'',
            gender:''
        }
    })
    const gender = watch('gender')

    const onSubmit:SubmitHandler<FieldValues> = (data) =>{
        if(!isLoading){
            
            if(gender.length <= 0){
              return  toast.error('Gender Is Required')
            }
            setIsLoading(true)
            axios.post('/api/auth/register',data)
            .then(res=>{
                toast.success(res.data.message)
                loginModal.onOpen()
                registerModal.onClose()
            })
            .catch(error=>{
                toast.error(error.response.data.message)
            }).finally(()=>{
                setIsLoading(false)
            })
        }
            
    }

    
    const setCustomValue = (id: string, value: any) => {
        setValue(id, value, {
          shouldDirty: true,
          shouldTouch: true,
          shouldValidate: true,
        });
      };



    const header = (
        <div className='flex justify-between items-center'>
            <div className='flex flex-col gap-[5px]'>
                <div className='sm:w-[10rem] w-[8rem]'>
                    <Logo/>
                </div>
                <p className='text-[#78828A] sm:text-[17px] text-[12px]'>Create new Accaunt</p>
            </div>
            <div className='max-w-[5rem]'>
                <CustomIconButton label='Close' showAll transparent onClick={()=>registerModal.onClose()} />
            </div>
        </div>
    )
    const body = (
        <div className='flex flex-col gap-[10px]'>
            <MainTextInput 
             id='username' 
             label='Username'
             placeholder='Enter Username'
             required
             register={register} 
             errors={errors}
             disabled={isLoading}
             />
            <MainTextInput 
             id='email' 
             label='Email'
             type='email'
             placeholder='Enter Email'
             required
             register={register} 
             errors={errors}
             disabled={isLoading}
             />
            <MainTextInput 
             id='password' 
             label='Password'
             type='password'
             placeholder='Enter Password'
             required
             register={register} 
             errors={errors}
             disabled={isLoading}
             />
             <MainDropdown
                label={gender ? gender : 'Gender'}
                data={['Male','Female']}
                onClick={(value:string)=>{
                    setCustomValue('gender',value)
                }}
             />
        </div>
    )
    const footer = (
        <div className='flex flex-col gap-[10px] w-full'>
            <CustomButton disabled={isLoading} alternative label='Login' full onClick={handleSubmit(onSubmit)}/>
            <p className='text-[#78828A] text-center'>Already have accaunt? <span className='text-white cursor-pointer' onClick={handleToLogin}>Log in</span></p>
        </div>
    )
  return (
    <Modal  
        isOpen={registerModal.isOpen}
        onClose={()=>registerModal.onClose()}
        header={header}
        body={body}
        footer={footer}
        paddings
        small
        darkBg
        disabled={isLoading}
        
    />
  )
}
