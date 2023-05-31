
import { UseLoginModal } from '@/app/hooks/UseLoginModal'
import { CustomButton, CustomIconButton } from '../../Buttons'
import { UserPlaceholder } from '../../Images/UserPlaceholder'
import {SearchIcon } from '@/public/svg/icons/Icon'
import { UseRegisterModal } from '@/app/hooks/UseRegisterModal'

export const Menu = () => {
  const loginModal = UseLoginModal()
  const registerModal = UseRegisterModal()
  
  return (
    <div className='flex gap-[23px] items-center justify-end outline-none'>  
    <div className='xs:inline hidden'>
        <SearchIcon/>
    </div>
        <div className='flex gap-[6px] items-center cursor-pointer'>
          {false ?

            <div className='w-[32px]'>
                <UserPlaceholder/>
            </div>
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