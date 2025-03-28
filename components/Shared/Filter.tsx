"use client";
import React from "react";
import Link from "next/link";
import { Button } from "../ui/button";
import { Genres } from "@/APIS/Filter";
import { useQuery } from "@tanstack/react-query";
import Heading from "./Heading";

interface Genre {
  id: number;
  name: string;
}

// Extract the fetch function for better reusability
const fetchGenres = async (kind?: string): Promise<{ genres: Genre[] }> => {
  return await Genres(kind);
};

export default function Filter({
  kind,
  title,
}: {
  kind?: string;
  title?: string;
}) {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["genres", kind],
    queryFn: () => fetchGenres(kind),
    staleTime: Infinity,
  });

  const genres = data?.genres || [];

  return (
    <div className="py-4">
      <Heading text={title || ""} />

      {/* Loading state */}
      {isLoading && (
        <div className="flex justify-center py-4">
          <div className="animate-pulse text-gray-400">Loading genres...</div>
        </div>
      )}

      {/* Error state */}
      {isError && (
        <div className="error-message text-red-500 py-2">
          Error fetching genres. Please try again later.
        </div>
      )}

      {/* Display genres */}
      <div className="flex flex-wrap justify-start gap-4 items-center">
        {genres.map((genre) => (
          <Link
            key={genre.id}
            href={`/explore?kind=${kind}&id=${genre.id}&name=${genre.name}`}
            passHref
          >
            <Button
              variant="outline"
              className="px-3 py-2 xl:px-12 xl:py-4 text-sm md:text-xl font-medium rounded-full"
            >
              {genre.name}
            </Button>
          </Link>
        ))}
      </div>
    </div>
  );
}
