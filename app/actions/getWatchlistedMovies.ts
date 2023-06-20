import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";
import prisma from '@/app/Libs/prismadb'
export async function getWatchlistedMovies(){
    const currentUser = await getServerSession(authOptions)

    if(!currentUser){
        return {message:"Unauthorized"}
    }
    const movies = await prisma.watchlistMovie.findMany({
        where:{
            userId:currentUser.user.id
        },
        select:{
            movie:{
                include:{
                    movieTags:{
                        select:{
                            tag:true
                        }
                    }
                }
            }
        }
    })

    return movies
}