import { Show } from "@/interface/Series";
import Image from "next/image";
import React from "react";
import { FaYoutube } from "react-icons/fa";
export default function Details({
  series,
  englishLogo,
  video,
}: {
  video: string;
  series: Show;
  englishLogo: {
    file_path: string;
  };
}) {
  interface item {
    name: string;
    id: number;
  }
  const posterSrc = englishLogo?.file_path
    ? `https://image.tmdb.org/t/p/w500/${englishLogo?.file_path}`
    : "";

  return (
    <div className="min-h-[93vh] flex justify-center items-center">
      <div className="w-full grid grid-cols-3  h-auto gap-6 pt-12 lg:gap-48 ">
        <div className="flex col-span-3 lg:col-span-2 gap-2 justify-start w-full order-2   relative items-start flex-col">
          <div className="items-center lg:items-start w-full flex flex-col py-1">
            {posterSrc ? (
              <>
                <Image
                  src={posterSrc}
                  alt={series.name}
                  className="w-fit object-contain"
                  width={500}
                  height={100}
                />
              </>
            ) : (
              <p className="text-3xl lg:text-5xl pb-4 mBlur borderGlass rounded-3xl inline-block text-white font-extrabold pt-2">
                {series.name}
              </p>
            )}
          </div>
          <div className="w-full lg:w-auto mb-3 text-center lg:text-start">
            {series.tagline && (
              <p className="text-[12px] bg-transparent text-2xl backdrop-blur-3xl border border-white/30 px-4 py-1 lg:text-sm mBlur borderGlass rounded-3xl inline-block text-white font-medium">
                {series.tagline}
              </p>
            )}
          </div>
          <div className="flex gap-3 mb-2 w-full justify-center lg:justify-start flex-wrap gap-y-2">
            <p className="text-[12px] bg-transparent text-2xl backdrop-blur-3xl border border-white/30 px-4 py-1 lg:text-sm mBlur borderGlass rounded-3xl inline-block text-white font-medium">
              {series.first_air_date?.slice(0, 4)}
            </p>
            {series.genres.map((item: item) => (
              <p key={item.id}>
                <span className="text-[12px] bg-transparent text-2xl backdrop-blur-3xl border border-white/30 px-4 py-1 lg:text-sm mBlur borderGlass rounded-3xl inline-block text-white font-medium">
                  {item.name}
                </span>
              </p>
            ))}
          </div>

          <div className="flex gap-2 items-center justify-center lg:items-start flex-col w-full">
            <div className=" w-full mBlur flex lg:block justify-center items-center borderGlass rounded-3xl ">
              <p className="bg-transparent capitalize    max-w-2xl backdrop-blur-3xl border border-white/30 px-5 py-2 lg:text-sm mBlur borderGlass rounded-3xl inline-block text-white font-medium">
                {series?.overview || "No overview"}
              </p>
            </div>
            <div className="flex flex-row gap-2  flex-wrap items-center xl:items-start justify-center lg:justify-start w-full">
              <p className="bg-transparent backdrop-blur-3xl border border-white/30 px-5 py-2 lg:text-sm mBlur borderGlass rounded-3xl inline-block text-white font-medium">
                Status: {series?.status}
              </p>
              <p className="bg-transparent backdrop-blur-3xl border border-white/30 px-5 py-2 lg:text-sm mBlur borderGlass rounded-3xl inline-block text-white font-medium">
                Original Language: {series.original_language}
              </p>
            </div>
            <p className="bg-transparent  backdrop-blur-3xl border border-white/30 px-5 py-2 lg:text-sm mBlur borderGlass rounded-3xl inline-block text-white font-medium">
              There are no streaming services currently available for this in
              your country
            </p>
            <div className="flex flex-col lg:flex-row gap-2 items-center lg:items-start w-full">
              <div className="bg-transparent backdrop-blur-3xl border border-white/30 px-5 py-2 lg:text-sm mBlur borderGlass rounded-3xl inline-block text-white font-medium">
                <div className="flex w-full gap-2 flex-col md:flex-row items-center justify-center">
                  <span>Production Companies:</span>
                  <div className="flex ">
                    {series?.production_companies?.map((company) =>
                      company.logo_path ? (
                        <Image
                          key={company.id}
                          width={300}
                          height={200}
                          src={`https://image.tmdb.org/t/p/w500/${company.logo_path}`}
                          alt="company logo"
                          className="w-8 h-8 rounded-full object-cover mx-2"
                        />
                      ) : null
                    )}
                  </div>
                </div>
              </div>
              <p className="bg-transparent text-nowrap gap-3 flex items-center backdrop-blur-3xl border border-white/30 px-5 py-2 lg:text-sm mBlur borderGlass rounded-3xl  text-white font-medium">
                Watch her :
                <span className="p-1 hover:scale-105 shadow duration-300 transition-all cursor-pointer bg-white rounded-full">
                  <a
                    href={`https://www.youtube.com/watch?v=${video}`}
                    target="_blank"
                    className="text-inherit "
                  >
                    <FaYoutube className="text-xl text-red-600 " />
                  </a>
                </span>
              </p>
            </div>
            <div className="hidden lg:block mBlur borderGlass rounded-3xl ">
              <p className="bg-transparent text-4xl backdrop-blur-3xl border border-white/30 px-4 py-1 mBlur borderGlass rounded-3xl inline-block text-white font-bold">
                {series?.vote_average?.toFixed(1)}{" "}
                <span className="ml-[-3px] text-base font-medium">/10</span>
              </p>
            </div>
          </div>
        </div>
        <div className=" col-span-3 flex lg:col-span-1  order-3 justify-center  items-center  w-full relative ">
          <Image
            width={400}
            height={400}
            alt={series.name}
            src={`https://image.tmdb.org/t/p/w500/${series?.poster_path}`}
            className=" object-cover w-full rounded-xl "
          />
        </div>
      </div>
    </div>
  );
}
