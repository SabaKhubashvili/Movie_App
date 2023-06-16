"use client";

import React from "react";
import { QueryClientProvider, QueryClient } from "react-query";

interface Props{
    children:React.ReactNode
}

const client = new QueryClient()

export const ReactQueryProvider = ({children}:Props) =>{
    return(
    <QueryClientProvider client={client}>
        {children}
    </QueryClientProvider>
    )
}