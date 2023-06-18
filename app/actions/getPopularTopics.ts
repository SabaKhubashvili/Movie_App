import prisma from '@/app/Libs/prismadb'


export async function getPopularTopics(){
    const topics = await prisma.topic.findMany({
        orderBy:{
            clickCount:'desc'
        },
        include:{
            publisher:{
                select:{
                    id:true,
                    name:true
                }
            }
        },
        take:20
    })



    return topics
}