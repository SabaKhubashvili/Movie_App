import { movieTags } from "@prisma/client";
import { DefaultSession } from "next-auth";


declare module 'next-auth' {
    interface Session {
      user: {
        id: string;
      } & DefaultSession['user'];
    }
  }

  
export interface SecondaryBannerTagsInterface{
    id:number
    image:string,
    label:string,
}

export interface MovieInformationInterface{
    id:number
    title:string,
    imdbRating:number,
    duration:string,
    year:number,
    tags:string[]
    description:string,
    image:string
}

export interface smallMovieInterface{
    title:string
    imdbRating:number
    reviews?:number
    rating:number
    img:string
}

export interface safeMovie{
    id: string
    title: string | null
    duration: string
    description: string
    movieBanner: string
    movieLink: string
    imbdRating: number
    createdAt: Date
    updatedAt: Date

    movieTags:any
}