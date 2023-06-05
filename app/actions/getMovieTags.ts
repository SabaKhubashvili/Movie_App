import prisma from '@/app/Libs/prismadb'

export async function getMovieTags() {
    const tags = await prisma.tag.findMany({
        orderBy: {
            createdAt: 'desc'
        },
    })

    return tags
}
