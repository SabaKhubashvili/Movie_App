import prisma from '@/app/Libs/prismadb'

export async  function getRandomMovies(){
    const movies = await prisma.movie.findMany({
            orderBy: {
                id: 'desc',
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