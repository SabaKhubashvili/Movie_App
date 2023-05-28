'use client'
import React from "react"


export const ClientOnly = ({children}:{children:React.ReactNode}) => {
    const [hasMounted,setHasMounted] = React.useState<boolean>(false)

    React.useEffect(()=>{
        setHasMounted(true)
    },[])

    if(!hasMounted){
        return null
    }
  return (
    <div>
        {children}
    </div>
  )
}
