import prisma from '@/app/Libs/prismadb'

export async function getForumTopics(){
    const topics = prisma.topic.findMany({
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
            }
        }
    })

    return topics;
}