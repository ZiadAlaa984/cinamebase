"use client";

import { useMemo, useState } from "react";
import { Input } from "../ui/input";
import { SearchData } from "@/APIS/APIS";
import debounce from "debounce";
import Image from "next/image";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import { SearchItem } from "@/interface/Types";
import { cn } from "@/lib/utils";

export const Search = ({
  className,
  kind,

  setModel,
}: {
  className?: string;
  kind: string;

  setModel: (value: boolean) => void;
}) => {
  const [value, setValue] = useState("");

  // Use useQuery directly for search
  const { data, isLoading, error } = useQuery<{ results: SearchItem[] }>({
    queryKey: ["search", kind, value],
    queryFn: () => SearchData(value, kind),
    enabled: value.trim().length > 0,
    staleTime: 1000 * 60 * 5, // 5 minutes
  });

  // Debounce input changes
  const handleInputChange = useMemo(
    () =>
      debounce((searchTerm: string) => {
        setValue(searchTerm);
      }, 600),
    []
  );

  return (
    <div className="relative">
      <Input
        type="text"
        className="placeholder:ps-4 placeholder:text-white dark:text-white  my-2"
        placeholder={`Search ${kind}`}
        onChange={(e) => handleInputChange(e.target.value)}
      />

      {isLoading && (
        <div className="flex justify-center items-center py-4">
          <span className="loader"></span>
        </div>
      )}
      {error && <div>Error: {error.message}</div>}

      <div
        className={cn(
          "grid grid-cols-2 sm:grid-cols-3  custom-scrollbar overflow-y-auto md:max-h-[400px] max-h-[300px] gap-4 mt-1",
          className
        )}
      >
        {data?.results?.map((item) => {
          if (!item.poster_path) return null;

          return (
            <div key={item.id}>
              <Link
                onClick={() => setModel(false)}
                href={`/${item.title ? "movieDetails" : "seriesDetails"}/${
                  item.id
                }`}
                className="flex flex-col rounded-md overflow-hidden border shadow justify-center col-span-1 items-center"
              >
                <Image
                  src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
                  alt={item.title || item.name || "Unknown"}
                  width={400}
                  height={100}
                  className="w-full h-[200px] object-cover"
                />
                <div className="p-1 text-[10px] line-clamp-1">
                  {item.title || item.name}
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};
