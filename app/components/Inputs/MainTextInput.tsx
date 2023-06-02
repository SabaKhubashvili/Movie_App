
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
}:Props) => {
  return (
    <div className={`relative w-full flex flex-col gap-[7px]`}>
        <label htmlFor={id} className={`${errors[id] ? ' text-rose-400' : 'text-white'} font-bold`}>
            {label}
        </label>
        <input type={type} placeholder={placeholder} id={id} 
        className={`py-4 px-2 border-[1px]
         bg-neutral-950 rounded-xl outline-none text-white
         ${errors[id] ? ' border-rose-400 placeholder:text-rose-400' : 'border-[#FFFFFF1A] placeholder:text-[#FFFFFF1A]' }
         `}
         {...register(id,{
          required,
          pattern: type === 'email'
                ? /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
                : undefined
        })}
        />
    </div>
  )
}
