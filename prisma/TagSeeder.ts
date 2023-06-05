const { PrismaClient } = require('@prisma/client');
const prismadb = new PrismaClient();

const movieTags = [
  "Horror",
  "Animation",
  "Action",
  "Comedy",
  "Thriller",
  "Sci-Fi",
  "Drama",
  "Adventure",
  "Fantasy",
  "Romance"
];

async function main() {
  try {
    for (const tag of movieTags) {
      await prismadb.tag.create({
        data: {
          name: tag
        }
      });
    }
  } catch (error) {
    console.error(error);
  } finally {
    await prismadb.$disconnect();
  }
}

main();
