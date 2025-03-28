"use client";

import { Movie, TVSeries } from "@/interface/Types";
import React, { useState } from "react";
import Heading from "../Heading";
import ItemsSeries from "../Items/ItemsSeries";
import { Data } from "@/APIS/APIS";
import { useInfiniteQuery } from "@tanstack/react-query";
import SelectShared from "../Select";
import Loader from "../loader";
import ItemsMovie from "../Items/ItemsMovie";

export default function Main({
  Main,
  kind,
  title,
}: {
  Main?: string;
  title?: string;
  kind?: string;
}) {
  const [type, setType] = useState("popular");

  // Use infinite query for pagination
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    isError,
  } = useInfiniteQuery({
    queryKey: ["mediaData", kind, type],
    queryFn: ({ pageParam = 1 }) => Data(pageParam, type, kind),
    getNextPageParam: (lastPage, allPages) => {
      // Return the next page number, or undefined to indicate the end
      return lastPage.page < lastPage.total_pages
        ? allPages.length + 1
        : undefined;
    },
    initialPageParam: 1,
  });

  // Reset query when type changes
  const handleTypeChange = (newType: string) => {
    setType(newType);
  };

  // Extract all movies or TV series from the paginated data
  const allMedia = data?.pages.flatMap((page) => page.results) || [];
  const movies = kind === "movie" ? (allMedia as Movie[]) : [];
  const series = kind === "tv" ? (allMedia as TVSeries[]) : [];

  // Custom loader that triggers loading next page
  const handleLoadMore = () => {
    if (hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  };

  return (
    <div>
      <div className="flex items-center justify-between">
        <Heading text={title || Main || ""} />
        <SelectShared kind={kind || "movie"} setType={handleTypeChange} />
      </div>

      {isLoading && <Loader />}
      {isError && <div>Error loading data</div>}

      {!isLoading && !isError && (
        <>
          {kind === "movie" && <ItemsMovie Movies={movies} />}
          {kind === "tv" && <ItemsSeries Series={series} />}
          <Loader setPage={handleLoadMore} />
          {isFetchingNextPage && <div>Loading more...</div>}
        </>
      )}
    </div>
  );
}
