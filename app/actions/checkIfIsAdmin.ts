import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";
import prisma from '@/app/Libs/prismadb'
export async function checkIfIsAdmin(){
    const currentUser = await getServerSession(authOptions)
    if(!currentUser?.user.email){
        return false
    }

    const user = await prisma.user.findFirst({
        where:{
            email:currentUser?.user.email,
            isAdmin:true
        },
        select:{
            isAdmin:true
        }
    })
    if(!user){
        return false
    }
    return user?.isAdmin
}