import prisma from '@/app/Libs/prismadb'

export async function getAllMoviesSerials(){
    const movies = await prisma.movie.findMany({
        include:{
            movieTags:{
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
    const serials = await prisma.serials.findMany({
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

    return [...movies,...serials]
}