'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React, { useMemo } from 'react'

interface Props{
    label:string,
    to:string,
    smallScreen?:boolean
}

export const NavLink = ({label,to,smallScreen}:Props) => {
  const pathname = usePathname();
 
  
  const isActive = useMemo(()=>{
    
  },[])

  return (
    <Link href={`${to}`}
    className={`
    ${pathname === to && ' font-extrabold'}
    ${smallScreen && 'text-[22px]'}
    text-[16px] leading-[19px]`}>
        {label}
    </Link>
  )
}
