import { Container } from "@/app/Container";
import {
  StarIcon,
} from "@/public/svg/icons/Icon";
import Image from "next/image";
import React from "react";
import { PlayButton } from "../Buttons/PlayButton";
import { AddWatchlist } from "../Buttons/AddWatchlist";
import { safeMovie } from "@/app/types";
import Link from "next/link";



export const SecondaryBannerComponent = ({ 
  id,
  movieBannerBig,
  title,
  imbdRating,
  duration,
  movieTags
 }: safeMovie) => {
  return (
    <div className="relative w-full h-full">
      <Image
        src={movieBannerBig}
        alt="slider"
        width={1600}
        height={1600}
        className="absolute w-full h-full object-cover"
      />
      <Image
        src={"/Image/movies/overlay.webp"}
        alt="SwiperSlide"
        width={1200}
        height={1200}
        className="w-full h-full object-cover absolute inset-0 bg-center bg-cover"
      />
      <Container>
        <div className="flex flex-col justify-end h-full w-full gap-[20px] relative z-[8] pb-[250px]">
          <div className="px-[16px] py-[8px] rounded-[16px] bg-[#000000] text-white w-fit">
            Explore by the genre
          </div>
          <div className="flex flex-col gap-[8px]">
            <h1 className="font-bold text-[48px] leading-[54px] text-white">
              {title}
            </h1>
            <div className="flex gap-[3px]">
              <StarIcon />
              <h5 className="text-[14px] font-semibold leading-[20px] text-white">
                {imbdRating}
              </h5>
              <p className="font-medium text-[12px] leading-[20px] text-[#78828A]">
                | {duration} • 2022 • {
                  movieTags.map((tag:any)=>(
                    <span key={tag.tag.id}>{tag.tag.name} {movieTags[movieTags.length - 1].tag.name !== tag.tag.name ? '•' : ''} </span>
                  ))
                }
              </p>
            </div>
          </div>
          <div className="flex gap-[24px] sm:flex-nowrap flex-wrap">
            <Link href={`/movie/${id}`} className="min-w-[8rem]">
              <PlayButton label="Play Now" />
            </Link>
            <AddWatchlist label="Add Watchlist" />
          </div>

        </div>
      </Container>
    </div>
  );
};
