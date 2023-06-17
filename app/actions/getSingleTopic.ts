import prisma from '@/app/Libs/prismadb'

export async function getSingleTopic(topicId:string){
    const topic = await prisma.topic.findUnique({
        where:{id:topicId},
        include:{
            likes:{
                select:{
                    user:{
                       select:{
                            id:true
                       }
                    }
                }
            },
            dislikes:{
                select:{
                    user:{
                        select:{
                            id:true
                        }
                    }
                }
            },
            publisher:{
                select:{
                    id:true,
                    name:true,
                }
            },
            comments:{
                include:{
                    user:true
                },
                orderBy:{
                    createdAt:'desc'
                }
            }
        }
    })

    return topic
}