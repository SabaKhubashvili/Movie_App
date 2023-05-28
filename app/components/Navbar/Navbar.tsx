"use client";

import React, { useEffect, useState } from "react";
import { Logo } from "../Images/Logo";
import { NavLinks } from "./NavLinks/NavLinks";
import { Menu } from "./Menu/Menu";
import useMediaQuery from "@/app/hooks/UseMediaQuery";
import { largeScreens } from "../MediaQueries";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { SmallScreenNavLinks } from "./NavLinks/SmallScreenNavLinks";
import { NavContact } from "../Contact/NavContact";

export const Navbar = () => {
  const isAboveLargeScrens = useMediaQuery(largeScreens);
  const [menuToggled, setMenuToggled] = useState<boolean>(false);
  const [isTopOfPage,setIsTopOfPage] = useState<boolean>(true)
  
  useEffect(()=>{
    const isScrolled = () =>{
      if(window.scrollY !== 0){
        setIsTopOfPage(false)
      }else{
        setIsTopOfPage(true)
      }

    }
    window.addEventListener('scroll',isScrolled)
    return () => window.addEventListener('scroll',isScrolled)
  },[])

  return (
    <React.Fragment>
      <div className={`${!isTopOfPage ? '!bg-[#121212]' : 'bg-transparent'} fixed left-0 right-0 z-[50] w-full h-fit  transition-colors duration-300`}>

      <nav
        className={`
        flex justify-between items-center mx-auto
        py-[38px] text-white 
        lg:px-[75px] md:px-[60px] sm:px-[40px] px-[20px] max-w-[1900px]
        `}
        >
        {!isAboveLargeScrens ? (
          <div className="cursor-pointer" onClick={() => setMenuToggled(true)}>
            <AiOutlineMenu size={32} />
          </div>
        ) : (
          <div className="w-[153.62px] h-[32px]">
            <Logo />
          </div>
        )}
        <NavLinks />
        <Menu />
      </nav>
      </div>

      {!isAboveLargeScrens && (
        <div
        className={` ${!menuToggled ? "-translate-x-[100%]" : "translate-x-0"}
             fixed instet-0 top-0 left-0 z-[99] sm:w-[400px] w-full h-full px-[20px] py-[40px]
             flex flex-col justify-between 
             transition-transform duration-300
             bg-black text-white`}
             >
          <div className="flex justify-between">
            <div className="w-40">
              <Logo />
            </div>
            <div
              className="ml-auto cursor-pointer"
              onClick={() => setMenuToggled(false)}
              >
              <AiOutlineClose size={28} />
            </div>
          </div>
          <SmallScreenNavLinks />
          <NavContact />
        </div>
      )}
    </React.Fragment>
  );
};
