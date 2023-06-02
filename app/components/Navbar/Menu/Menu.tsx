
import { UseLoginModal } from '@/app/hooks/UseLoginModal'
import { CustomButton, CustomIconButton } from '../../Buttons'
import { UserPlaceholder } from '../../Images/UserPlaceholder'
import {SearchIcon } from '@/public/svg/icons/Icon'
import { UseRegisterModal } from '@/app/hooks/UseRegisterModal'
import Link from 'next/link'
import { useState } from 'react'
import {AnimatePresence,motion} from 'framer-motion'
import { MainTextInput } from '../../Inputs/MainTextInput'
import { FieldValues, useForm } from 'react-hook-form'
import useMediaQuery from '@/app/hooks/UseMediaQuery'
import {smallScreens } from '../../MediaQueries'

export const Menu = () => {
  const loginModal = UseLoginModal()
  const registerModal = UseRegisterModal()
  const [isSearchOpen,setIsSearchOpen] = useState<boolean>(false)  
  const isAboveLargeScreens = useMediaQuery(smallScreens)

  const{
    register,
    formState:{
      errors
    },
    handleSubmit
  } = useForm<FieldValues>({
    defaultValues:{
      search:''
    }
  })
  return (
    <div className='flex gap-[23px] items-center justify-end outline-none'>  
    <div className='xs:inline hidden relative '>
      {
        isAboveLargeScreens ?
      <div onClick={()=>setIsSearchOpen(prev=>!prev)} className='cursor-pointer'>
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
          initial={{y:'-100%',opacity:0}}
          animate={{y:'0',opacity:100}}
          exit={{y:'-100%',opacity:0}}
          transition={{duration:0.2}}
          className='absolute right-0'>
              <MainTextInput
                id='search'
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
          {false ?

            <Link className='w-[32px]' href={'/profile'}>
                <UserPlaceholder/>
            </Link>
            :
            <div className='flex gap-[10px] outline-none min-w-[11.5rem]'>
              <CustomIconButton onClick={()=>registerModal.onOpen()} label='Sign up' transparent showAll/>
              <CustomButton onClick={()=>loginModal.onOpen()} label='Login' />
            </div>
            }
        </div>
    </div>
  )
}     