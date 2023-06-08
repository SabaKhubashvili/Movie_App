import { EyeHidden, EyeShown } from '@/public/svg/icons/Icon';
import { useState, ChangeEvent } from 'react';
import {
  UseFormRegister,
  FieldValues,
  FieldErrors
} from 'react-hook-form';

interface Props {
  id: string;
  label?: string;
  placeholder: string;
  required?: boolean;
  disabled?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
}

export const MainFileUploadInput = ({
  id,
  label,
  placeholder,
  register,
  errors,
  required,
  disabled,
}: Props) => {

  return (
    <div className={`relative w-full flex flex-col gap-[7px]`}>
      <label
        htmlFor={id}
        className={`${errors[id] ? ' text-rose-400' : 'text-white'} font-bold`}
      >
        {label}
      </label>
      <div className="relative w-full h-full">
        <input
          type="file"
          placeholder={placeholder}
          id={id}
          disabled={disabled}
          className={`py-4 px-2 border-[1px] w-full
          bg-neutral-950 rounded-xl outline-none text-white 
          ${errors[id] ? ' border-rose-400 placeholder:text-rose-400' : 'border-[#FFFFFF1A] placeholder:text-[#FFFFFF1A]'}
          disabled:cursor-not-allowed
          `}
          {...register(id, { required })}
        />
      </div>
    </div>
  );
};
