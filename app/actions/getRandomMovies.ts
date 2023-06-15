import prisma from '@/app/Libs/prismadb'
import { safeMovie } from '../types'

export async  function getRandomMovies(){
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

    const shuffledMovies = shuffleArray(movies)

    return shuffledMovies
}

function shuffleArray(array:safeMovie[]) {

    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        const temp = array[i]
        array[i] = array[j]
        array[j] = temp
    }
    return array
}