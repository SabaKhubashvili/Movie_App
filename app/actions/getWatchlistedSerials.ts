import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";
import prisma from '@/app/Libs/prismadb'
export async function getWatchlistedSerials(){
    const currentUser = await getServerSession(authOptions)

    if(!currentUser){
        return {message:"Unauthorized"}
    }
    const serials = await prisma.watchlistSerial.findMany({
        where:{
            userId:currentUser.user.id
        },
        select:{
            serial:{
                include:{
                    serieTags:{
                        select:{
                            tag:true
                        }
                    }
                }
            }
        }
    })

    return serials
}