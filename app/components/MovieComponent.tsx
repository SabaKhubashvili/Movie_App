"use client";
import { StarIcon } from "@/public/svg/icons/Icon";

import Image from "next/image";
import React from "react";
import { MoviesAndSerials, safeMovie } from "../types";
import Link from "next/link";

export const MovieComponent = ({
  id,
  movieBannerSmall,
  imbdRating,
  movieTags,
  serialBannerSmall,
  serieTags,
}: MoviesAndSerials) => {
  return (
    <Link
      href={`/movie/${id}`}
      className="w-full h-full flex flex-col gap-[12px]"
    >
      <Image
        src={movieBannerSmall || serialBannerSmall || ""}
        alt="movie"
        width={300}
        height={300}
        className="w-full h-full object-cover max-h-[183px] rounded-xl select-none"
      />
      <div className="flex gap-[3px]">
        <StarIcon />
        <h5 className="text-[14px] font-semibold leading-[20px] text-white">
          {imbdRating}
        </h5>
        <div className="font-medium text-[12px] leading-[20px] text-[#78828A]">
          |{" "}
          {movieTags
            ? movieTags.map((singleTag: any) => (
                <span key={singleTag.tag.id}>
                  {singleTag.tag.name}{" "}
                  {movieTags[movieTags.length - 1].tag.id !==
                    singleTag.tag.id && "•"}{" "}
                </span>
              ))
            : serieTags?.map((singleTag: any) => (
                <span key={singleTag.tag.id}>
                  {singleTag.tag.name}{" "}
                  {serieTags[serieTags.length - 1].tag.id !==
                    singleTag.tag.id && "•"}{" "}
                </span>
              ))}
        </div>
      </div>
    </Link>
  );
};
