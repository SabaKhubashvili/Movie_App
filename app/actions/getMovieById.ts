import prisma from '@/app/Libs/prismadb'

export async function getMovieById(id:string) {
    const movies = await prisma.movie.findUnique({
        where: {
            id:id
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
