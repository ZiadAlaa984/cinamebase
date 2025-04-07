"use client";
import React, { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import { RiStarSFill } from "react-icons/ri";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { IoCloseSharp } from "react-icons/io5";

const CardSeason = ({
  src,
  name,
  date,
  star,
  overview,
}: {
  src: string;
  name: string;
  date: string;
  star: number;
  overview: string;
}) => {
  const [showOverlay, setShowOverlay] = useState(false);

  return (
    <Card className="shadow p-0 gap-0  overflow-hidden rounded-md relative">
      {showOverlay && (
        <div className="absolute inset-0 h-full w-full z-50 flex flex-col justify-center items-center bg-black/70 text-white p-4">
          <Button
            onClick={() => setShowOverlay(false)}
            variant="ghost"
            size="icon"
            className="absolute top-2 right-2 text-white hover:bg-white/10"
          >
            <IoCloseSharp size={30} className="text-2xl" />
          </Button>
          <h5 className="text-xl font-bold text-center mb-2">{name}</h5>
          <p className="text-sm text-white overflow-y-auto max-h-64">
            {overview || "No Overview"}
          </p>
        </div>
      )}
      <CardHeader className="p-0 relative">
        <div className="flex flex-col gap-2 absolute z-10 top-3 right-3">
          <p className="bg-yellow-400 block rounded-full px-2 py-1 text-black text-[10px] sm:text-[12px] font-bold">
            {date}
          </p>
          {star > 0 && (
            <p className="bg-black/30 rounded-full px-2 py-1 text-white backdrop-blur-lg text-[12px] sm:text-md justify-center flex items-center gap-[2px]">
              <span>{star.toFixed(1)}</span>{" "}
              <RiStarSFill className="text-yellow-400" />
            </p>
          )}
        </div>
        <Image
          src={`https://image.tmdb.org/t/p/w500/${src}`}
          alt={name || "Unknown"}
          width={500}
          height={100}
          className="object-cover object-bottom w-full max-h-[300px]"
        />
      </CardHeader>
      <CardContent className="flex flex-col p-2 sm:p-3 gap-2 items-start">
        <h3 className="sm:text-[1.35rem] text-sm text-nowrap font-semibold tracking-tight">
          {name.split(" ").slice(0, 3).join(" ") || "Unknown"}
        </h3>
        <Button
          onClick={() => setShowOverlay(true)}
          className="flex text-xs mt-[2px] items-center"
        >
          Read more <ChevronRight />
        </Button>
      </CardContent>
    </Card>
  );
};

export default CardSeason;
