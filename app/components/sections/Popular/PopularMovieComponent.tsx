import { MovieIcon, StarIcon } from "@/public/svg/icons/Icon";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  isFirst?: boolean;
  movie: any;
  index:number
}

export const PopularMovieComponent = ({ isFirst, movie, index }: Props) => {

  
  return (
    <Link
      href={`/${movie.movieBannerBig ? 'movie' : 'serial'}/${movie.id}`}
      className={`${
        isFirst ? "h-full" : "h-2/3"
      } w-fit flex gap-[16px]  cursor-pointer`}
    >
      <h1 className="text-[48px] leading-[64px] font-semibold text-white self-center">
        {index + 1} 
      </h1>
      <div className="h-full w-fit">
        <Image
          src={movie.movieBannerSmall ? movie.movieBannerSmall : movie.serialBannerSmall}
          alt="movie"
          width={400}
          height={400}
          className=" h-full select-none rounded-xl w-fit"
        />
      </div>
      <div className="flex flex-col gap-[12px] max-w-[17rem]">
        <div
          className="bg-transparent border-[#28262D] 
                        border-[1px] border-solid rounded-[10px] w-fit
                        py-[4px] px-[8px] text-white uppercase text-center text-[14px] font-medium"
        >
         {movie.movieBannerSmall ? 'Movie' : 'Serial'}
        </div>
        <h2 className="font-bold text-[22px] leading-[24px] text-white">
          {movie.title}
        </h2>
        <div className="flex-grow flex items-center justify-start gap-[10px]">
             <MovieIcon />
          <p className="text-[14px] font-medium leading-[20px] text-[#78828A] w-full">
            |{" "}
            {
              movie.movieTags ?
            movie.movieTags.map((singleTag: any) => (
              <span key={singleTag.tag.id}>
                {singleTag.tag.name}{" "}
                {movie.movieTags[movie.movieTags.length - 1].tag.id !==
                  singleTag.tag.id && "•"}
              </span>
            ))
            :
            movie.serieTags.map((singleTag: any) => (
              <span key={singleTag.tag.id}>
                {singleTag.tag.name}{" "}
                {movie.serieTags[movie.serieTags.length - 1].tag.id !==
                  singleTag.tag.id && "•"}
              </span>
            ))
          }
          </p>
        </div>
        <div className="flex gap-[3px]">
          <StarIcon />
          <h5 className="text-[14px] font-semibold leading-[20px] text-white">
            {movie.imbdRating}
          </h5>
          <p className="font-medium text-[12px] leading-[20px] text-[#78828A]">
            | Movie
          </p>
        </div>
      </div>
    </Link>
  );
};
