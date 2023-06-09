import { NextResponse } from "next/server"
import prisma from '@/app/Libs/prismadb'
import { getServerSession } from "next-auth"
import { authOptions } from "@/pages/api/auth/[...nextauth]"


export  async function POST(request:Request){
    const data  = await request.json()
    const{
        title,
        description,
        duration,
        movieBannerBig,
        movieBannerSmall,
        tags,
        imbdRating
    } = data
    if(!title || !description  || !duration  || !movieBannerSmall || !movieBannerBig || !tags || !imbdRating){
        return NextResponse.json({message:'All fields are required'},{status:404})
    }
    
    const currentUser = await getServerSession(authOptions)
    
    if(!currentUser?.user.email){
        return NextResponse.json({message:'Unauthorized'},{status:401})
    }
    const user = await prisma.user.findFirst({
        where:{
            isAdmin:true,
            email:currentUser.user.email
        },
        select:{
            isAdmin:true
        }
    })
    
    if(!user?.isAdmin){
        return NextResponse.json({message:'Unauthorized'},{status:401})
    }
    
    try{
        const movie = await prisma.movie.create({
            data:{
                title,
                description,
                duration,
                movieBannerSmall,
                movieBannerBig,
                imbdRating:parseInt(imbdRating)
            }
        })
        
        const tagsData = tags.map((tag: string) => ({
            movieId: movie.id,
            tagId: tag
        }))
        
        const createTags = await prisma.movieTags.createMany({
            data:tagsData
        })
        
        return NextResponse.json({id:movie.id,message:'Sucesfully created movie'},{status:201})
    }catch(error){
        console.log(error);
        
        return NextResponse.json({message:'Something wrong happened api',error},{status:500})
    }
}