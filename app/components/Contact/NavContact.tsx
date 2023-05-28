import React from 'react'
import {AiOutlineMail,AiOutlineGithub,AiFillLinkedin} from 'react-icons/ai'


export const NavContact = () => {
  return (
    <div className="pt-[17px] pb-[30px] border-t-[1px] border-t-[#333333] border-solid text-[#6E6E6E] gap-2
    flex items-center flex-col">
      <p className=" font-bold">
        Made By Saba Khubashvili
      </p>
      <div className="flex gap-[10px] items-center">

        <a href="mailto:khubashvili.saba12@gmail.com" className="w-10 block">
          <AiOutlineMail size={30}/>
        </a>
        <a href="https://github.com/SabaKhubashvili" target="_blank"  className="w-8">
          <AiOutlineGithub size={30}/>
        </a>
        <a href="https://www.linkedin.com/in/sabakhubashvili/" target="_blank" className="w-8">
          <AiFillLinkedin size={30}/>
        </a>
      </div>
    </div>
  )
}
