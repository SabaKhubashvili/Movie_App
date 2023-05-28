import { Container } from "@/app/Container";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  StarIcon,
} from "@/public/svg/icons/Icon";
import Image from "next/image";
import React from "react";
import { PlayButton } from "../Buttons/PlayButton";
import { AddWatchlist } from "../Buttons/AddWatchlist";
import { SecondaryBannerTag } from "./SecondaryBannerTag";
import { secondaryBannerTags } from "@/app/constants";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation } from "swiper";

interface Props {
  tagName: string;
  handleClick: (value: string) => void;
}

export const SecondaryBannerComponent = ({ tagName, handleClick }: Props) => {
  return (
    <div className="relative w-full h-full">
      <Image
        src={"/Image/movies/guardiansofgalaxybanner.webp"}
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
        <div className="flex flex-col justify-end h-full w-full gap-[20px] relative z-[8] pb-[60px]">
          <div className="px-[16px] py-[8px] rounded-[16px] bg-[#000000] text-white w-fit">
            Explore by the genre
          </div>
          <div className="flex flex-col gap-[8px]">
            <h1 className="font-bold text-[48px] leading-[54px] text-white">
              Guardian Of The Galaxy; Volume 3
            </h1>
            <div className="flex gap-[3px]">
              <StarIcon />
              <h5 className="text-[14px] font-semibold leading-[20px] text-white">
                4.3
              </h5>
              <p className="font-medium text-[12px] leading-[20px] text-[#78828A]">
                | 2h40m • 2022 • Superhero • Actions
              </p>
            </div>
          </div>
          <div className="flex gap-[24px]">
            <PlayButton label="Play Now" />
            <AddWatchlist label="Add Watchlist" />
          </div>
          <div className="pt-[48px] relative z-[8] flex gap-[24px]">
            <button
              className="custom_prev_SecondaryBanner 
                 cursor-pointer  "
            >
              <div className="h-fit py-4 px-5 bg-[#28262D]  rounded-full ">
                <ArrowLeftIcon />
              </div>
            </button>
            <button
              className="custom_next_SecondaryBanner  
                cursor-pointer  "
            >
              <div className="h-fit p-[0.8rem] bg-[#28262D]  rounded-full ">
                <ArrowRightIcon />
              </div>
            </button>
          </div>
          <div className="relative">
            <div className="absolute -bottom-[60px] flex gap-[24px] z-[10] ">
              <button
                className="custom_prev_SecondaryBanner_tags 
                 cursor-pointer "
              >
                <div className="h-fit py-4 px-5 bg-[#28262D]  rounded-full ">
                  <ArrowLeftIcon />
                </div>
              </button>
              <button
                className="custom_next_SecondaryBanner_tags
                cursor-pointer  "
              >
                <div className="h-fit p-[0.8rem] bg-[#28262D]  rounded-full ">
                  <ArrowRightIcon />
                </div>
              </button>
            </div>
            <Swiper
              modules={[FreeMode, Navigation]}
              slidesPerView="auto"
              navigation={{
                nextEl: ".custom_next_SecondaryBanner_tags",
                prevEl: ".custom_prev_SecondaryBanner_tags ",
              }}
              freeMode={true}
              spaceBetween={30}
              className="flex gap-[16px] relative z-[16]"
            >
              {secondaryBannerTags.map((tag) => (
                <SwiperSlide key={tag.label} className=" !w-[210px] !h-[99px]">
                  <SecondaryBannerTag
                    onClick={() => handleClick(tag.label)}
                    isActive={tag.label === tagName}
                    {...tag}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </Container>
    </div>
  );
};
