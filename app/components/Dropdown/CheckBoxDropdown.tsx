import { DropdownIcon } from '@/public/svg/icons/Icon'
import { tag } from '@prisma/client'
import { AnimatePresence, motion } from 'framer-motion'
import React, { useEffect, useRef, useState } from 'react'

interface Props{
    label:string
    data:tag[]
    onClick:(value:string)=>void
    submitedTags:string[]
}

export const CheckBoxDropdown = ({label,data,onClick,submitedTags}:Props) => {
    const [isOpen,setIsOpen] = useState<boolean>()
    const dropdownRef = useRef<HTMLDivElement>(null)

    
    useEffect(()=>{
        if(isOpen){
            const handleOutsideClick = (event:MouseEvent) =>{
                if(dropdownRef.current && !dropdownRef.current.contains(event.target as Node)){
                    setIsOpen(false)
                }
            }

            window.addEventListener('click',handleOutsideClick)
            return () => window.addEventListener('click',handleOutsideClick)
        }
    },[isOpen])

  return (
    <div className='relative' ref={dropdownRef}>
        <div className=' px-3 py-4  rounded-xl
            border-[1px] border-[#FFFFFF1A] border-solid
            cursor-pointer flex justify-between items-center select-none'
            onClick={()=>{setIsOpen(prev=>!prev)}}
            >
            <h5 className='text-white font-medium'>
                {label}
            </h5>
            <p>
                <DropdownIcon/>
            </p>
        </div>  
        {
            isOpen &&
            (
                <AnimatePresence>

                    <motion.div 
                        className='absolute w-full px-3 py-4 text-white z-[20] -bottom-15 bg-neutral-950
                         rounded-b-lg flex flex-col gap-[5px] h-[10rem] overflow-y-auto'
                        initial={{opacity:0}}
                        animate={{opacity:100}}
                        exit={{opacity:0}}
                        transition={{ duration: 0.2 }}
                        >
                            {
                                data.map((singleData:tag)=>(
                                    <div className='flex gap-[10px] items-center cursor-pointer' key={singleData.id} 
                                    onClick={()=>onClick(singleData.id)}>

                                        <input type='checkbox' 
                                        disabled={submitedTags.length >= 5}
                                        checked={submitedTags.includes(singleData.id)}
                                        onChange={()=>onClick(singleData.id)}
                                        className='cursor-pointer'
                                        id={singleData.id}
                                        />
                                        {singleData.name}
                                    </div>
                                
                                ))
                            }
                    </motion.div>
                </AnimatePresence>
            )
        }   
    </div>
  )
}
