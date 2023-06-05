import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

import prisma from "@/app/Libs/prismadb";

export async function POST(
  request: Request, 
) {
    const { 
        email,
        username,
        password,
        gender
    } = await request.json();

  const hashedPassword = await bcrypt.hash(password, 12);
  
  try{
    
    const alreadyExists = await prisma.user.findUnique({
      where:{
        email
      }
    })
  
    if(alreadyExists){
      return NextResponse.json({message:'Already registered'},{status:409})
    }

  const user = await prisma.user.create({
    data: {
      email,
      name:username,
      hashedPassword,
      gender
    }
  });
  
  return NextResponse.json({message:'Sucesfully registered'},{status:200});
}catch(error){
  return NextResponse.json({message:'Something wrong happened'},{status:500})
}
}