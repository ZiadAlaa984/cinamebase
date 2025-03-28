import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import { TVSeries } from "@/interface/Types";
import { Button } from "../../ui/button";
import { ChevronRight } from "lucide-react";
import { RiStarSFill } from "react-icons/ri";
import Link from "next/link";

export default function ItemSerie({ Serie }: { Serie: TVSeries }) {
  return (
    <>
      {Serie?.poster_path && (
        <Card className="shadow p-0 hover:scale-105   duration-200 ease-in transition-all overflow-hidden rounded-md">
          <CardHeader className="p-0 relative h-[350px]">
            <div className="flex flex-col gap-2 absolute z-10 top-3 right-3">
              <p className="bg-yellow-400 block rounded-full px-2 py-1 text-black text-[12px] font-bold">
                {Serie.first_air_date}
              </p>
              <p className="bg-black/30 rounded-full px-2 py-1 text-white backdrop-blur-lg  text-md justify-center flex items-center gap-[2px]">
                <span>{Serie.vote_average.toFixed(1)}</span>{" "}
                <RiStarSFill className="text-yellow-400" />
              </p>
            </div>
            <Image
              src={`https://image.tmdb.org/t/p/w500/${Serie?.poster_path}`}
              alt={Serie?.name || "Unknown"}
              width={500}
              height={100}
              className="object-cover object-center w-full h-full"
            />
          </CardHeader>
          <CardContent className="flex flex-col p-4 gap-2 items-start">
            <h3 className="text-[1.35rem] text-nowrap font-semibold tracking-tight">
              {Serie?.name.split(" ").slice(0, 2).join(" ") || "Unknown"}
            </h3>
            <p className="text-muted-foreground">
              {Serie?.overview.slice(0, 28) || "Unknown"} ...
            </p>
            <Button variant="outline" className=" shadow-none">
              <Link
                className="flex items-center"
                href={`/seriesDetails/${Serie?.id}`}
              >
                Read more <ChevronRight />
              </Link>
            </Button>
          </CardContent>
        </Card>
      )}
    </>
  );
}
