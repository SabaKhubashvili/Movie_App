import { NextResponse } from "next/server"
import prisma from '@/app/Libs/prismadb'

export async function POST(request:Request){

    const data = await request.json()
    const{
        title,
        description,
        imbdRating,
        serialBannerSmall,
        serialBannerBig,
        serie
    } = data
    return NextResponse.json({serie})
    const newSerial = await prisma.serials.create({
        data:{
            title,
            description,
            imbdRating,
            serialBannerBig,
            serialBannerSmall
        },
    })

    return NextResponse.json({data})
}