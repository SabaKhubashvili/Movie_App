import prisma from '@/app/Libs/prismadb'


export async function getPopularMovies(){
    const movies = await prisma.movie.findMany({
        orderBy:{
            clickCount:'desc'
        },
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
        },
        take:4
    })

    const serials = await prisma.serials.findMany({
        orderBy:{
            clickCount:'desc'
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
        },
        take:4
    })

    const content = [...movies, ...serials];
    content.sort((a, b) => b.clickCount - a.clickCount);


    return content
}