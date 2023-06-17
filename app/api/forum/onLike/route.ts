import { NextResponse } from "next/server"
import prisma from '@/app/Libs/prismadb'
import { getServerSession } from "next-auth"
import { authOptions } from "@/pages/api/auth/[...nextauth]"
export async function POST(request:Request){
    const body = await request.json()

    const {
        topicId
    } = body

    const user = await getServerSession(authOptions)

    if(!user){
        return NextResponse.json({message:"Unauthorized"},{status:401})
    }

    try{
        const deleteIfExists = await prisma.topicDislikes.deleteMany({
            where:{
                topicId,
                userId:user.user.id
            }
        })
        const isLiked = await prisma.topicLikes.findFirst({
            where:{
                topicId,
                userId:user.user.id
            }
        })
        if(isLiked){
            await prisma.topicLikes.deleteMany({
                where:{
                    topicId,
                    userId:user.user.id
                }
            })

            
            return NextResponse.json({message:'Sucesfully unvoted',upvoted:false,isLiked},{status:200})
        }else{
            await prisma.topicLikes.create({
                data:{
                    topicId,
                    userId:user.user.id
                }
            })

            return NextResponse.json({message:'Sucesfully upvoted',upvoted:true},{status:200})
        }
    }catch(error){
        return NextResponse.json({message:"Something wrong happened"},{status:500})
    }

}