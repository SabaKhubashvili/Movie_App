import { authOptions } from "@/pages/api/auth/[...nextauth]"
import { getServerSession } from "next-auth"
import { NextResponse } from "next/server"
import prisma from '@/app/Libs/prismadb'

export  async function POST(request:Request){
    const body = await request.json()

    const{
        id,
        title,
        description,
        imbdRating,
        imbdId,
        serialBannerBig,
        serialBannerSmall,
        tags,

        serieTitle,
        serieDescription,
    } = body

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
try{

    
    
    const updatedSerial = await prisma.serials.update({
        where: {
            id: id,
        },
        data: {
            title,
            description,
            imbdRating: JSON.parse(imbdRating),
            imbdId,
            serialBannerBig,
            serialBannerSmall,
        },
    });
    
    const tagsData = tags.map((tag:string) => ({
        serialId: updatedSerial.id,
        tagId: tag,
    }));
    const newSerie = await prisma.serie.create({
        data: {
            title: serieTitle,
            description: serieDescription,
        },
    });
    await prisma.serieTags.deleteMany({
        where:{
            serialId:updatedSerial.id
        }
    })
    const createTags = await prisma.serieTags.createMany({
        data:tagsData
    })
    await prisma.series.create({
        data: {
          serialId: updatedSerial.id,
          serieId: newSerie.id,
        },
      });
 
    
      return NextResponse.json({ id: newSerie.id, message: 'Successfully created serial' },{status:201});
    }catch(error){
        return NextResponse.json({ message: 'Something wrong happened',error },{status:500});
    }
      
    }