import React from 'react'
import { NavLink } from './NavLink'


interface Props{
  onClick:(value:boolean)=>void
}

export const SmallScreenNavLinks = ({onClick}:Props) => {
  return (
    <div className='flex flex-col gap-[20px] '>
        <NavLink smallScreen label='Home' to='/' onClick={(value:boolean)=>onClick(value)}/>
        <NavLink smallScreen label='Discover' to='/discover'  onClick={(value:boolean)=>onClick(value)}/>
        <NavLink smallScreen label='Movie Release' to='/releases'  onClick={(value:boolean)=>onClick(value)}/>
        <NavLink smallScreen label='Forum' to='/forum'  onClick={(value:boolean)=>onClick(value)}/>  
    </div>
  )
}
