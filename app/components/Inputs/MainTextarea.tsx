
import{
    UseFormRegister,
    FieldValues,
    FieldErrors
  } from 'react-hook-form'
  
  interface Props{
      id:string
      label?:string
      placeholder:string
      required?:boolean
      disabled?:boolean

      register:UseFormRegister<FieldValues>
      errors:FieldErrors
  
  }
  
  export const MainTextArea = ({
    id,
    label,
    placeholder,
    register,
    errors,
    required,
    disabled
  }:Props) => {
    return (
      <div className={`relative w-full flex flex-col gap-[7px] h-[10rem]`}>
          <label htmlFor={id} className={`${errors[id] ? ' text-rose-400' : 'text-white'} font-bold`}>
              {label}
          </label>
          <textarea  placeholder={placeholder} id={id}  disabled={disabled}
          className={`py-4 px-2 border-[1px] h-full
           bg-neutral-950 rounded-xl outline-none text-white
           ${errors[id] ? ' border-rose-400 placeholder:text-rose-400' : 'border-[#FFFFFF1A] placeholder:text-[#FFFFFF1A]' }
           `}
           {...register(id,{required})}
          />
      </div>
    )
  }
  