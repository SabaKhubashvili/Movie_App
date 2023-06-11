import { NextResponse } from 'next/server';
import prisma from '@/app/Libs/prismadb';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/pages/api/auth/[...nextauth]';

export async function POST(request:Request) {
  try {
    const { title, description, serialBannerBig, serialBannerSmall, imbdRating, tags,serieTitle, serieDescription, imbdId } = await request.json()

    const currentUser = await getServerSession(authOptions)
    
    if(!currentUser?.user.email){
        return NextResponse.json({message:'Unauthorized'},{status:401})
    }
    const user = await prisma.user.findFirst({
        where:{
            isAdmin:true,
            email:currentUser.user.email
        },
        select:{
            isAdmin:true
        }
    })

    if(!user?.isAdmin){
        return NextResponse.json({message:'Unauthorized'},{status:401})
    }

    
    const newSerial = await prisma.serials.create({
      data:{
        title,
        description,
        serialBannerBig,
        serialBannerSmall,
        imbdRating:parseInt(imbdRating),
        imbdId
      }
    })
 

    const newSerie = await prisma.serie.create({
      data: {
        title:serieTitle,
        description:serieDescription,
      },
    });
    const tagsData = tags.map((tag: string) => ({
      serialId: newSerial.id,
      tagId: tag
    }))

  const createTags = await prisma.serieTags.createMany({
      data:tagsData
  })
    await prisma.series.create({
      data: {
        serialId: newSerial.id,
        serieId: newSerie.id,
      },
    });

    return NextResponse.json({ id: newSerie.id, message: 'Successfully created serial' },{status:201});
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Something wrong happened' },{status:500});
  }
}
