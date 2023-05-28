import React from 'react'
import { NavLink } from './NavLink'

export const NavLinks = () => {
  return (
    <div className='lg:flex hidden gap-[32px] items-center justify-center '>
        <NavLink label='Home' to='/'/>
        <NavLink label='Discover' to='/discover'/>
        <NavLink label='Movie Release' to='/releases'/>
        <NavLink label='Forum' to='/forum'/>
        <NavLink label='About' to='/about'/>
    </div>
  )
}
