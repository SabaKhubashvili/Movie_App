import { NextResponse } from "next/server"
import prisma from '@/app/Libs/prismadb'

export async function POST(request:Request){
    const data = await request.json()

    const{
        userId,
        name,
        description,
        gender,
        image
    } = data

    if(!userId){
        return NextResponse.json({message:'Not enough data'},{status:404})
    }

    try{
        const user = await prisma.user.update({
            where:{
                id:userId
            },
            data:{
                name,
                description,
                gender,
                image
            }
      
        })
        return NextResponse.json({message:'Sucesfully updated'},{status:200})
    }catch(error){
        return NextResponse.json({message:'Something wrong happened'},{status:500})
    }
}