import React from 'react'

interface Props{
    children:React.ReactNode
    rightSpace?:boolean
}

export const Container = ({children,rightSpace}:Props) => {
  return (
    <section className={`max-w-[2610px] h-full w-full relative
    ${rightSpace ? ' lg:pl-[75px] md:pl-[60px] sm:pl-[40px] pl-[20px]' : ' lg:px-[75px] md:px-[60px] sm:px-[40px] px-[20px]'} mx-auto`}>
        {children}
    </section>
  )
}
