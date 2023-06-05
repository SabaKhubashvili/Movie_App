import prisma from '@/app/Libs/prismadb'
export async function getLatestMovies(){
   
        const movies = await prisma.movie.findMany({
                orderBy:{
                        createdAt:'desc'
                }
        })
        
        return movies

}