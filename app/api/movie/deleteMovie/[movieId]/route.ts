import { checkIfIsAdmin } from "@/app/actions"
import { NextResponse } from "next/server"
import prisma from '@/app/Libs/prismadb'
interface IParams{
    movieId:string
}

export async function DELETE(req:Request,{params}:{params:IParams}){

    const{
        movieId
    } = params

    const isAdmin = await checkIfIsAdmin()
    if(!isAdmin){
        return NextResponse.json({message:'Unauthorized'},{status:501})
    }

    try{
        const deletePost = await prisma.movie.delete({
            where:{
                id:movieId
            }
        })
        return NextResponse.json({message:'Sucesfully deleted'},{status:200})
    }catch(error){
        return NextResponse.json({message:'Something wrong happened',error},{status:500})
    }
}