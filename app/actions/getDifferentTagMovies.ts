import { safeMovie } from "@/app/types";
import prisma from '@/app/Libs/prismadb'

export async function getDifferentTagMovies(tags:string[]){
        const movies:safeMovie[] = []
        const uniqueMovieIds = new Set<string>()
        
        for(const tag of tags){
            const movie = await prisma.movie.findFirst({
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
                },
                
            },
            )
            
            if (movie && !uniqueMovieIds.has(movie.id)) {
                uniqueMovieIds.add(movie.id)
                movies.push(movie);
            }
        }
        return movies

        return movies
}