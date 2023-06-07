import prisma from '@/app/Libs/prismadb'

export async function getSimilarMovies(tags:any[],id:string){
    const movies = await prisma.movie.findMany({
        where:{
            movieTags:{
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

    if(movies.length < 8){
        const anotherLayer = await prisma.movie.findMany({
            where:{
                NOT:{id}
            },
            orderBy:{
                title:'desc'
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
        movies.push(...anotherLayer)
    }

    return movies
}