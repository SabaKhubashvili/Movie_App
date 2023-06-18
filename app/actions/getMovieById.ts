import prisma from "@/app/Libs/prismadb";

export async function getMovieById(id: string) {
  try {
    const movie = await prisma.movie.findUnique({
      where: {
        id: id,
      },
      include: {
        movieTags: {
          select: {
            tag: {
              select: {
                id: true,
                name: true,
              },
            },
          },
        },
      },
    });
    if(movie){

        await prisma.movie.update({
            where: {
                id,
      },
      data: {
          clickCount: movie.clickCount + 1,
        },
    });
}
    
    return movie
  } catch (error) {
    return { message: "Something wrong happened" };
  }
}
