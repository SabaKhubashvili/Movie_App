import prisma from '@/app/Libs/prismadb'

export async function getLatestMovies() {
    const movies = await prisma.movie.findMany({
        orderBy: {
            createdAt: 'desc'
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
