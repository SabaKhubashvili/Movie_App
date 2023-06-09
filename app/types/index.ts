import { Comment, Topic, User, movie, movieTags, serials, series } from "@prisma/client";
import { DefaultSession } from "next-auth";


declare module 'next-auth' {
    interface Session {
      user: {
        id: string;
      } & DefaultSession['user'];
    }
  }

  
// export interface SecondaryBannerTagsInterface{
//     id:number
//     image:string,
//     label:string,
// }

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

export interface safeMovie extends movie{
    movieTags:any
    watchlisted?:any
}

export interface safeSerial extends serials{
  serieTags:any
}

export interface safeSerialSinglePage extends safeSerial{
  series:any
}

export interface ImbdCast{
  role:string,
  actor:{
    imdb_id:string,
    name:string
  }
}

export interface MoviesByMonth{
  month:string,
  movies:any
}

export interface safeTopic extends Topic{
  likes:{
     user: { id: string };
  }[],
  dislikes:{
    user:{ id:string }
  }[]
  publisher:{
    id:string,
    name:string
  },
  comments?:safeComments[]
}
export interface safeComments extends Comment{
  user:User
}

export interface MoviesAndSerials{
    id: string;
    title: string;
    duration?: string;
    description: string;
    movieBannerSmall?: string;
    movieBannerBig?: string;
    serialBannerSmall?: string;
    serialBannerBig?: string;
    movieTags?:{
        tag:{
          id:string,
          name:string
        }
    }[]
    serieTags?:{
        tag:{
          id:string,
          name:string
        }
    }[]
    imbdRating: number;
    imbdId: string;
    clickCount: number;
    createdAt: Date;
    updatedAt: Date;
}