import prisma from '@/app/Libs/prismadb'

export async function getMovieByTag(tag:string) {
    const movies = await prisma.movie.findMany({
        where:{
            movieTags:{
                some:{
                    tag:{
                        name:tag
                    }
                }
            }
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
        }
    })

    return movies
}
