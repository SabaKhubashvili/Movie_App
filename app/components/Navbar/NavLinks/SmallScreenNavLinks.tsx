import React from 'react'
import { NavLink } from './NavLink'

export const SmallScreenNavLinks = () => {
  return (
    <div className='flex flex-col gap-[20px] '>
        <NavLink smallScreen label='Home' to='/'/>
        <NavLink smallScreen label='Discover' to='/discover'/>
        <NavLink smallScreen label='Movie Release' to='/releases'/>
        <NavLink smallScreen label='Forum' to='/forum'/>
        <NavLink smallScreen label='About' to='/about'/>    
    </div>
  )
}
