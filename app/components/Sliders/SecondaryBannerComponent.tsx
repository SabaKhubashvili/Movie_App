import { Container } from "@/app/Container";
import {
  StarIcon,
} from "@/public/svg/icons/Icon";
import Image from "next/image";
import React from "react";
import { PlayButton } from "../Buttons/PlayButton";
import { AddWatchlist } from "../Buttons/AddWatchlist";

interface Props {
  handleClick: (value: string) => void;
}

export const SecondaryBannerComponent = ({handleClick }: Props) => {
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
        <div className="flex flex-col justify-end h-full w-full gap-[20px] relative z-[8] pb-[250px]">
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

        </div>
      </Container>
    </div>
  );
};
