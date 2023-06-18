import { safeMovie } from "../types";
import prisma  from '@/app/Libs/prismadb'

let cachedMovies:safeMovie[] | null = null

export async function getMainBannerContent(): Promise<any[]> {
    if(cachedMovies){
        return cachedMovies
    }

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
            },
            watchlisted:{
                select:{
                    user:{
                        select:{
                            id:true
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
            },
            watchlisted:{
                select:{
                    user:{
                        select:{
                            id:true
                        }
                    }
                }
            }
        }
    })

    // const shuffledMovies = shuffleArray([...movies,...serials])
    // const randomMovies = shuffledMovies.slice(0,5)
    // cachedMovies = randomMovies
    return [...movies,...serials]
}

// function shuffleArray (array:any[]) :any[] {
//     const newArray = [...array]

//     for(let i = newArray.length - 1; i > 0 ; i--){
//         const j = Math.floor(Math.random() * (i+1));
//         const temp = newArray[i]
//         newArray[i] = newArray[j]
//         newArray[j] = temp
//     }
//     return newArray


// }