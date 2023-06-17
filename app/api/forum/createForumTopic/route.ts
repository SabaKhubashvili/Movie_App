import { NextResponse } from "next/server"
import prisma from '@/app/Libs/prismadb'
import { getServerSession } from "next-auth"
import { authOptions } from "@/pages/api/auth/[...nextauth]"

export async function POST(request:Request){
    const body = await request.json()

    const{
        title,
        description,
        image
    } = body

    if(!title || !description || !image){
        return NextResponse.json({message:'Not enough data'},{status:404})
    }

    const currentUser = await getServerSession(authOptions)

    if(!currentUser || !currentUser.user.id){
        return NextResponse.json({message:"Unauthorized"},{status:401})
    }
    try{

    const forum = await prisma.topic.create({
        data:{
            title,
            description,
            image,
            
            authorId:currentUser.user.id
        }
    })

    return NextResponse.json({message:"Sucesfully posted"},{status:200})
    }catch(error){
        console.log(error);
        
        return NextResponse.json({message:'Something wrong happened',error},{status:500})
    }
}