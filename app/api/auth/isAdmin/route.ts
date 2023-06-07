import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

import prisma from "@/app/Libs/prismadb";

export async function POST(
  request: Request, 
) {
  const data = await request.json()
    const { 
        email,
    } = data


  try{
   const user = await prisma.user.findUnique({
    where:{
        email
    }
   })
   if(!user){
    return NextResponse.json({message:'Unauthorized',isAdmin:false},{status:501})
   }
  return NextResponse.json({message:'Sucesfully got',isAdmin:user.isAdmin},{status:200});
}catch(error){
  return NextResponse.json({message:'Something wrong happened',isAdmin:false},{status:500})
}
}