import { authOptions } from "@/pages/api/auth/[...nextauth]"
import { getServerSession } from "next-auth"
import { NextResponse } from "next/server"
import prisma from '@/app/Libs/prismadb'
export async function POST(request:Request){
    const body = await request.json()

    const{
        id
    } = body

    if(!id){
        return NextResponse.json({message:'Not enough data'},{status:404})
    }

    const currentUser = await getServerSession(authOptions)

    if(!currentUser || !currentUser.user.id){
        return NextResponse.json({message:"Unauthorized"},{status:401})
    }
    try{
        const isWatchlisted = await prisma.watchlistMovie.findFirst({
            where:{
                userId:currentUser.user.id,
                movieId:id
            }
        })
        if(isWatchlisted){
            const removeWatchlist = await prisma.watchlistMovie.deleteMany({
                where:{
                    userId:currentUser.user.id,
                    movieId:id
                }}
                )
            
                return NextResponse.json({message:"Sucesfully removed wachlist",watchlisted:false},{status:200})
            }else{

            const addWatchlist = await prisma.watchlistMovie.create({
                data:{
                userId:currentUser.user.id,
                movieId:id
            }
        })
        return NextResponse.json({message:"Sucesfully Watchlisted",watchlisted:true},{status:201})
    }
    }catch(error){
        return NextResponse.json({message:"Something went wrong"},{status:500})
    }
}