'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React, { useMemo } from 'react'

interface Props{
    label:string,
    to:string,
    smallScreen?:boolean,
    onClick?:(value:boolean)=>void
}

export const NavLink = ({label,to,smallScreen,onClick}:Props) => {
  const pathname = usePathname();

  return (
    <Link href={`${to}`}
    onClick={()=>onClick && onClick(false)}
    className={`
    ${pathname === to && ' font-extrabold'}
    ${smallScreen && 'text-[22px]'}
    text-[16px] leading-[19px]`}>
        {label}
    </Link>
  )
}
