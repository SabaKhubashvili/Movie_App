'use client'

import Image from 'next/image'
import React, { useCallback, useState } from 'react'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'

import {BsFillCameraFill} from 'react-icons/bs'
import { MainTextInput } from '../Inputs/MainTextInput'
import { MainTextArea } from '../Inputs/MainTextarea'
import { MainDropdown } from '../Dropdown/MainDropdown'
import { CustomButton } from '../Buttons'
import { signOut, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { CldUploadWidget } from 'next-cloudinary'
import axios from 'axios'
import { toast } from 'react-hot-toast'



export const Profile = () => {
    const router = useRouter()
    const {data:userData} = useSession()
    const [userImage,setUserImage] = useState<string | null | undefined>()
    const [isLoading,setIsLoading] = useState<boolean>(false)
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
            name:  userData?.user.name,
            description:'',
            gender:''
        }
    })
    const gender = watch('gender')
    console.log(userData);
    
    React.useEffect(() => {
        if (userData) {
          setCustomValue('name', userData.user.name);
          setUserImage(userData.user.image)
        }
      }, [userData]);
    
    const setCustomValue = (id: string, value: any) => {
        setValue(id, value, {
          shouldDirty: true,
          shouldTouch: true,
          shouldValidate: true,
        });
      };

      const handleUpload = useCallback((result:any)=>{
        setUserImage(result.info.secure_url)
    },[])

    
    const onSubmit:SubmitHandler<FieldValues> = (data) =>{
        if(!isLoading){
            setIsLoading(true)

            axios.post('/api/profile/updateProfile',{userId:userData?.user.id,...data,image:userImage})
                .then(res=>{
                    toast.success('Sucesfully updated')
                    router.refresh()
                    signOut()
                }).catch(error=>{
                    toast.error('Something went wrong')
                }).finally(()=>{
                    setIsLoading(false)
                })
        }
    } 

  return (
    <div className={`lg:w-[60%] h-full flex flex-col justify-center items-center gap-[40px] 
    mx-auto pt-[150px] relative  transition-all duration-300${isLoading && 'opacity-75'}`}>
                <div className='flex flex-col gap-[15px]'>
                    <h3 className='font-bold text-white text-center'>Upload Image</h3>
                    <div className='relative md:w-[8rem] md:h-[8rem] w-[6rem] h-[6rem]  p-1 border-[1px] border-[#dbd8d8] border-solid rounded-full cursor-pointer '>
                  
        <CldUploadWidget
                onUpload={handleUpload}
                uploadPreset='cwyyjcnj'
                options={{
                maxFiles:1,
                resourceType:'image'
                
                }}
                
                >
                {({open})=>(
                    <Image
                    onClick={()=>!isLoading && open()}
                    src={userImage ? userImage :'/Image/user/userplaceholder2.webp'}
                    alt='UserPlaceholder2'
                    width={600}
                    height={600}
                    className='rounded-full select-none w-full h-full object-cover'
                />
                )}

            </CldUploadWidget>
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
                    disabled={isLoading}
                    />
                    <MainTextArea
                    id='description'
                    label='Description'
                    placeholder='Description...'
                    register={register} 
                    errors={errors}
                    disabled={isLoading}
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
                        disabled={isLoading}
                    />
                </div>
                <div className='absolute top-[10rem] sm:left-10 left-4'>
                <CustomButton  label='Logout' onClick={()=>{
                    signOut()
                    router.push('/')
                    }}/>
              </div>
            </div>
  )
}
