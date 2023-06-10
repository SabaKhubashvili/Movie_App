import prisma from '@/app/Libs/prismadb'

export async function getSimilarSerials(tags:any[],id:string){
    const serials = await prisma.serials.findMany({
        where:{
            serieTags:{
                some:{
                    tag:{
                        name:{
                            in:tags.map(singleTag=>singleTag.tag.name)
                        }
                    }
                }
            },
            NOT:{
                id
            }
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

    if(serials.length < 8){
        const alreadyRetrievedSerialIds = serials.map((serial) => serial.id);
        const anotherLayer = await prisma.serials.findMany({
            where:{
                    NOT:{
                    id:{
                        in:[...alreadyRetrievedSerialIds, id],
                    }
                }
            },
            orderBy:{
                title:'desc'
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
        serials.push(...anotherLayer)
    }

    return serials
}