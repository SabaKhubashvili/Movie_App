
import { EyeHidden, EyeShown } from '@/public/svg/icons/Icon'
import { useState } from 'react'
import{
  UseFormRegister,
  FieldValues,
  FieldErrors
} from 'react-hook-form'

interface Props{
    id:string
    label?:string
    placeholder:string
    type?:string
    required?:boolean
    disabled?:boolean
    register:UseFormRegister<FieldValues>
    errors:FieldErrors

}

export const MainTextInput = ({
  id,
  label,
  placeholder,
  type = 'text',
  register,
  errors,
  required,
  disabled,
}:Props) => {

  const [currentType,setCurrentType] = useState<string>(type)

  const handleToggleVisibility = (event: React.MouseEvent) => {
    event.stopPropagation();
    setCurrentType(currentType === 'password' ? 'text' : 'password');
  };
  
  return (
    <div className={`relative w-full flex flex-col gap-[7px]`}>
        <label htmlFor={id} className={`${errors[id] ? ' text-rose-400' : 'text-white'} font-bold`}>
            {label}
        </label>
        <div className='relative w-full h-full'>


            <input type={currentType} 
            placeholder={placeholder} 
            id={id} 
            disabled={disabled}
            className={`py-4 px-2 border-[1px] w-full
            bg-neutral-950 rounded-xl outline-none text-white 
            ${errors[id] ? ' border-rose-400 placeholder:text-rose-400' : 'border-[#FFFFFF1A] placeholder:text-[#FFFFFF1A]' }
            disabled:cursor-not-allowed
            `}
            {...register(id,{
              required,
              pattern: type === 'email'
              ? /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
              : undefined
            })}
            />
          { type === 'password' &&

          <div className='absolute right-3 h-full flex justify-center items-center top-0 '>

            <div className='bg-[#171717] w-[2rem] h-[2rem] p-1 rounded-xl cursor-pointer' onClick={handleToggleVisibility}>
              { currentType === 'password' ?

                <EyeHidden/>
                :
                <EyeShown/>
              }
            </div>
          
          </div>
          }
        </div>
        
    </div>
  )
}
