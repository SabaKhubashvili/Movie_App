import prisma from '@/app/Libs/prismadb'

export async function getSerialById(id:string) {
    const serial = await prisma.serials.findUnique({
        where: {
            id:id
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
            },
            series:{
                select:{
                    serie:true
                }
            }
        }
    })

    return serial
}
