import React from 'react'
import { NavLink } from './NavLink'


interface Props{
  onClick?:(value:boolean)=>void
}

export const NavLinks = ({onClick}:Props) => {
  return (
    <div className='lg:flex hidden gap-[32px] items-center justify-center '>
        <NavLink label='Home' to='/' onClick={onClick}/>
        <NavLink label='Discover' to='/discover' onClick={onClick}/>
        <NavLink label='Movie Release' to='/releases' onClick={onClick}/>
        <NavLink label='Forum' to='/forum' onClick={onClick}/>
    </div>
  )
}
