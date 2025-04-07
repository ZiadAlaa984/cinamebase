import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import { Movie } from "@/interface/Types";
import { ChevronRight } from "lucide-react";
import { RiStarSFill } from "react-icons/ri";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function ItemMovie({ Movie }: { Movie: Movie }) {
  return (
    <>
      {Movie?.poster_path && (
        <Link href={`/movieDetails/${Movie?.id}`}>
          <Card className="shadow p-0 gap-0 hover:scale-105 overflow-hidden  duration-200 ease-in transition-all  rounded-md">
            <CardHeader className="p-0 relative ">
              <div className="flex flex-col gap-1 md:gap-2 absolute z-10 top-1 md:top-3 right-1 md:right-3">
                <p className="bg-yellow-400 block rounded-full px-2 py-1 text-black text-[8px] sm:text-[12px] font-bold">
                  {Movie?.release_date}
                </p>
                {Movie.vote_average > 0 && (
                  <p className="bg-black/30 rounded-full px-2 py-1 text-white backdrop-blur-lg  text-[8px] sm:text-xs  justify-center flex items-center gap-[2px]">
                    <span>{Movie.vote_average.toFixed(1)}</span>{" "}
                    <RiStarSFill className="text-yellow-400" />
                  </p>
                )}
              </div>
              <Image
                src={`https://image.tmdb.org/t/p/w500/${Movie?.poster_path}`}
                alt={Movie?.title || "Unknown"}
                width={500}
                height={100}
                className="  object-fill object-bottom   w-full max-h-[300px]"
              />
            </CardHeader>
            <CardContent className="flex flex-col p-2 sm:p-3 gap-2  items-start">
              <h3 className="text-sm md:text-base text-nowrap font-semibold tracking-tight">
                {Movie?.title.split(" ").slice(0, 3).join(" ") || "Unknown"}
              </h3>
              <p className="text-xs  max-h-3  overflow-hidden sm:text-muted-foreground">
                {Movie?.overview.slice(0, 36) || "Unknown"} ...
              </p>
              <Button size={"sm"}>
                <Link
                  className="flex text-xs  items-center"
                  href={`/movieDetails/${Movie?.id}`}
                >
                  Read more <ChevronRight />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </Link>
      )}
    </>
  );
}
