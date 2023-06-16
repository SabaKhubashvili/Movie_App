import { safeMovie } from "@/app/types";
import prisma from "@/app/Libs/prismadb";

export async function getDifferentTagMovies(): Promise<safeMovie[]> {
  const movies: safeMovie[] = [];
  const uniqueMovieIds = new Set<string>();

  const gotTags = await prisma.tag.findMany({
    take:5
  })

  for (const tag of gotTags) {
    const movie = await prisma.movie.findFirst({
      where: {
        movieTags: {
          some: {
            tag: {
              name:tag.name
            },
          },
        },
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

    if (movie && !uniqueMovieIds.has(movie.id)) {
      uniqueMovieIds.add(movie.id);
      movies.push(movie);
    }
  }

  return movies;
}
