"use client";

import { Suspense } from "react";
import React, { useState } from "react";
import { useSearchParams } from "next/navigation";

import { Movie, TVSeries } from "@/interface/Types";
import Heading from "../Heading";
import ItemsSeries from "../Items/ItemsSeries";
import { Data, searchByGenres } from "@/APIS/APIS";
import { useInfiniteQuery } from "@tanstack/react-query";
import SelectShared from "../Select";
import Loader from "../loader";
import ItemsMovie from "../Items/ItemsMovie";
import SelectType from "../Selects/SelectType";
import SelectGenres from "../Selects/SelectGenres";

// ✨ This child component is now safe to use `useSearchParams`
function MainContent({
  Main,
  kind,
  explore,
}: {
  explore?: boolean;
  Main?: string;
  kind?: string;
}) {
  const searchParams = useSearchParams();
  const [type, setType] = useState("top_rated");
  const [Title, setTitle] = useState(
    searchParams.get("kind") || kind || "movie"
  );
  const [Genres, setGenres] = useState(searchParams.get("id") || "");

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    isError,
  } = useInfiniteQuery({
    queryKey: ["mediaData", Title, type, Genres],
    queryFn: ({ pageParam = 1 }) => {
      if (Genres) {
        return searchByGenres(Title, Genres, pageParam);
      }
      return Data(pageParam, type, Title);
    },
    getNextPageParam: (lastPage, allPages) =>
      lastPage.page < lastPage.total_pages ? allPages.length + 1 : undefined,
    initialPageParam: 1,
  });

  const handleTypeChange = (newType: string) => setType(newType);
  const handleKindChange = (newKind: string) => {
    setGenres("");
    setTitle(newKind);
  };
  const handleGenresChange = (newGenres: string) => setGenres(newGenres);

  const allMedia = data?.pages.flatMap((page) => page.results) || [];
  const movies = Title === "movie" ? (allMedia as Movie[]) : [];
  const series = Title === "tv" ? (allMedia as TVSeries[]) : [];

  const handleLoadMore = () => {
    if (hasNextPage && !isFetchingNextPage) fetchNextPage();
  };

  return (
    <div>
      <div
        className={`flex items-start flex-col ${
          explore ? "md:pt-8" : ""
        } sm:flex-row sm:items-center justify-between`}
      >
        <Heading text={Title || Main || ""} />
        {explore ? (
          <div className="flex items-center flex-col md:flex-row gap-3">
            <SelectType kind={Title || "movie"} setKind={handleKindChange} />
            <SelectGenres
              kind={Title || "movie"}
              value={Genres}
              Title={Title}
              setType={handleGenresChange}
            />
          </div>
        ) : (
          <SelectShared kind={kind || "movie"} setType={handleTypeChange} />
        )}
      </div>

      {isLoading && <Loader />}
      {isError && <div>Error loading data</div>}

      {!isLoading && !isError && (
        <>
          {Title === "movie" && <ItemsMovie Movies={movies} />}
          {Title === "tv" && <ItemsSeries Series={series} />}
          <Loader setPage={handleLoadMore} />
        </>
      )}
    </div>
  );
}

// ✅ Top-level component wrapped in Suspense
export default function MainWrapper(props: {
  explore?: boolean;
  Main?: string;
  kind?: string;
}) {
  return (
    <Suspense fallback={<Loader />}>
      <MainContent {...props} />
    </Suspense>
  );
}
