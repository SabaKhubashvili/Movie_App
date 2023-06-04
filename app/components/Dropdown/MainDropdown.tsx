import { DropdownIcon } from '@/public/svg/icons/Icon'
import { AnimatePresence,motion } from 'framer-motion'
import React, { useState,useRef,useEffect } from 'react'

interface Props{
    label:string
    data:string[]
    onClick:(value:string)=>void
}

export const MainDropdown = ({
    label,
    data,
    onClick
}:Props) => {

    const [isOpen,setIsOpen] = useState<boolean>(false)
    const dropdownRef = useRef<HTMLDivElement>(null)

    useEffect(()=>{
        if(isOpen){
            
            const handleOutsideClick = (event:MouseEvent) => {
                if(dropdownRef.current && !dropdownRef.current.contains(event.target as Node)){
                        setIsOpen(false)
                    }

                }
                window.addEventListener('click',handleOutsideClick)

                return () => window.addEventListener('click',handleOutsideClick)
        }
    },[isOpen])
    const handleToggleVisibility = (event: React.MouseEvent,value:string) => {
        event.stopPropagation();
        setIsOpen(false)
        onClick(value)
      };

  return (
    <div className='w-full relative' ref={dropdownRef}>
        <div className=' px-3 py-4  rounded-xl
        border-[1px] border-[#FFFFFF1A] border-solid
        cursor-pointer flex justify-between items-center select-none
        '
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
                        className='absolute w-full px-3 py-4 text-white -bottom-15 bg-neutral-950 rounded-b-lg flex flex-col gap-[5px]'
                        initial={{opacity:0}}
                        animate={{opacity:100}}
                        exit={{opacity:0}}
                        transition={{ duration: 0.2 }}
                        >
                            {
                                data.map((singleData:string)=>(
                                    <div key={singleData} className='cursor-pointer' onClick={(event: React.MouseEvent<Element, MouseEvent>)=>handleToggleVisibility(event,singleData)}>
                                        {singleData}
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
