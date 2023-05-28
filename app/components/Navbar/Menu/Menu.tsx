
import { UserPlaceholder } from '../../Images/UserPlaceholder'
import { DropdownIcon, NotificationIcon, SearchIcon } from '@/public/svg/icons/Icon'

export const Menu = () => {
  return (
    <div className='flex gap-[23px] items-center justify-end'>  
        <SearchIcon/>
        <NotificationIcon/>
        <div className='flex gap-[6px] items-center cursor-pointer'>
            <div className='w-[32px]'>
                <UserPlaceholder/>
            </div>
            <DropdownIcon/>
        </div>
    </div>
  )
}     