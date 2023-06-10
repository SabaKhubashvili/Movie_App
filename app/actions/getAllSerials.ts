import prisma from '@/app/Libs/prismadb'

export async function getAllSerials(){

    const serials = await prisma.serials.findMany({
        orderBy:{
            createdAt:'desc'
        },
        include:{
            serieTags:{
                select:{
                    tag:{
                        select:{
                            id:true,
                            name:true
                        }
                    }
                }
            }
        }
    })

    return serials
}