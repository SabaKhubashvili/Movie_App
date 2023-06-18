'use client'

import { UseLoginModal } from '@/app/hooks/UseLoginModal'
import { CustomButton, CustomIconButton } from '../../Buttons'
import { UserPlaceholder } from '../../Images/UserPlaceholder'
import {SearchIcon } from '@/public/svg/icons/Icon'
import { UseRegisterModal } from '@/app/hooks/UseRegisterModal'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import {AnimatePresence,motion} from 'framer-motion'
import { MainTextInput } from '../../Inputs/MainTextInput'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import useMediaQuery from '@/app/hooks/UseMediaQuery'
import {smallScreens } from '../../MediaQueries'
import { useSession } from 'next-auth/react'
import queryString from 'query-string'
import { useRouter } from 'next/navigation'

export const Menu = () => {
  const user = useSession()
  const loginModal = UseLoginModal()
  const router = useRouter()
  const registerModal = UseRegisterModal()
  const [isSearchOpen,setIsSearchOpen] = useState<boolean>(false)  
  const isAboveLargeScreens = useMediaQuery(smallScreens)
  const searchRef = useRef<HTMLDivElement>(null)

  useEffect(()=>{
    if(isSearchOpen){
      const handleOutClick = (event:MouseEvent) =>{
        if(searchRef.current && !searchRef.current.contains(event.target as Node)){
          setIsSearchOpen(false)
        }
      }
      window.addEventListener('click',handleOutClick)

      return () => window.addEventListener('click',handleOutClick)
    }
  },[isSearchOpen])

  
  const{
    register,
    formState:{
      errors
    },
    reset,
    handleSubmit
  } = useForm<FieldValues>({
    defaultValues:{
      searchTitle:''
    }
  })

  const onSubmit:SubmitHandler<FieldValues> = (data) =>{
    const query = data

    const url = queryString.stringifyUrl({
      query,
      url:'/search'
    })
    setIsSearchOpen(false)
    router.push(url)    
    reset()
  }
  
  return (
    <div className='flex gap-[23px] items-center justify-end outline-none'>  
    <div className='xs:inline hidden relative' ref={searchRef}>
      {
        isAboveLargeScreens ?
      <div onClick={()=>setIsSearchOpen(prev=>!prev)} className='cursor-pointer'  >
        <SearchIcon/>
      </div>
      :
      <Link href={'/search'} className='cursor-pointer'>
       <SearchIcon/>
      </Link>
      }
      {
        isSearchOpen && isAboveLargeScreens &&
          <AnimatePresence>
          <motion.div
          initial={{y:'-100%',x:'-100%',opacity:0}}
          animate={{y:'0',x:'0',opacity:100}}
          exit={{y:'-100%',x:'0',opacity:0}}
          transition={{duration:0.2}}
          className='absolute right-0 w-[12rem]'>
              <MainTextInput
                onSubmit={handleSubmit(onSubmit)}
                id='searchTitle'
                placeholder='Search'
                required
                register={register}
                errors={errors}
              />
          </motion.div>
        </AnimatePresence>
      }
    </div>
        <div className='flex gap-[6px] items-center cursor-pointer'>
          { user.status !== 'loading' ?

            user.data ?
              
              <Link className='w-[32px] select-none' href={'/profile'} >
                <UserPlaceholder/>
            </Link>
            :
            <div className='flex gap-[10px] outline-none min-w-[11.5rem]'>
              <CustomIconButton onClick={()=>registerModal.onOpen()} label='Sign up' transparent showAll/>
              <CustomButton onClick={()=>loginModal.onOpen()} label='Login' />
            </div>
            
            :
            ''
          }
        </div>
    </div>
  )
}     