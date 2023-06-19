"use client";

import React, { useEffect, useState } from "react";
import { MoviesAndSerials } from "../types";
import { LatestReleaseComponent } from "../components/sections/latestReleases/LatestReleaseComponent";
import { useSearchParams } from "next/navigation";
import queryString from "query-string";
import { EmptyClient } from "../components/EmptyClient";

interface Props {
  moviesAndSerials: MoviesAndSerials[];
}

export const SearchItems = ({ moviesAndSerials }: Props) => {

  const [filteredMoviesAndSerials, setFilteredMoviesAndSerials] = useState<MoviesAndSerials[]>();

  const params = useSearchParams();
  useEffect(() => {
    if (params) {
      const query = queryString.parse(params.toString());
      const searchTitle = query.searchTitle;

      if (
        typeof searchTitle === "string" &&
        searchTitle !== null &&
        searchTitle !== undefined
      ) {
        const filteredMoviesAndComponents = moviesAndSerials.filter(
          (component) => component.title.includes(searchTitle)
        );
        setFilteredMoviesAndSerials(filteredMoviesAndComponents);
      }
    }
  }, [params]);
  if(filteredMoviesAndSerials && filteredMoviesAndSerials?.length < 1){
    return <EmptyClient
        title="Movie or serial not found"
        description="Maybe we didn't upload movie yet"
        smallPaddings
    />
  }
  return (
    <section className="flex  gap-[10px] justify-center flex-wrap w-full  ">
      {filteredMoviesAndSerials?.map((component) => (
        <div
          className=" 2xl:w-[300px]  xl:w-[240px] lg:w-[200px] md:w-2/5 w-[100%] "
          key={component.id}
        >
          <LatestReleaseComponent {...component} />
        </div>
      ))}
    </section>
  );
};
