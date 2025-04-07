import LayoutBG from "@/components/Shared/LayoutBG/LayoutBG";
import React from "react";
import Details from "../Details";
import Heading from "@/components/Shared/Heading";
import ItemSerie from "@/components/Shared/Items/ItemSerie";
import { Season, TVSeries } from "@/interface/Types";
import SliderCast from "@/components/Shared/sliders/SliderCast/SliderCast";
import {
  CastData,
  getImageLogo,
  Recommended,
  SearchById,
  Video,
} from "@/APIS/APIS";
import CardSeason from "../CardSeason";
export default async function Page({
  params,
}: {
  params: Promise<{
    id: string;
  }>;
}) {
  const { id } = await params;
  const data = await SearchById(id, "tv");
  const imageData = await getImageLogo(id, "tv");
  const recommendData = await Recommended(id);
  const cast = await CastData(id, "tv");
  const videoData = await Video(id, "tv");
  const seasons = data.seasons;
  console.log("🚀 ~ seasons:", seasons);
  interface logo {
    iso_639_1: string;
  }
  const englishLogo = imageData.logos.find(
    (logo: logo) => logo.iso_639_1 === "en"
  );
  return (
    <LayoutBG
      gap="gap-0"
      details={"true"}
      Next={data.name}
      specific={id}
      kind="tv"
    >
      <div className="flex flex-col gap-12">
        <Details
          video={videoData?.results[1]?.key}
          englishLogo={englishLogo}
          series={data}
        />
        <div className="sliderCast">
          <Heading text="Movie Cast" />
          <div className="mt-4 flex justify-center items-center">
            <SliderCast cast={cast.crew} />
          </div>
        </div>
        <div className="Seasons">
          <Heading text="Seasons" />
          <div className="mt-4 grid grid-cols-2  sm:grid-cols-3 lg:grid-cols-5 gap-2 sm:gap-3">
            {seasons?.length > 0 ? (
              seasons?.map(
                (
                  season: Season // Changed 'Season' to lowercase 'season' to match the usage below
                ) =>
                  season?.poster_path && (
                    <CardSeason
                      key={season.id}
                      date={season.air_date}
                      overview={season.overview
                        .split(" ")
                        .slice(0, 60)
                        .join(" ")}
                      star={season.vote_average}
                      src={season.poster_path}
                      name={season.name.split(" ").slice(0, 3).join(" ")}
                    />
                  )
              )
            ) : (
              <p className="text-white">No seasons available.</p>
            )}
          </div>
        </div>
        <div className="Recommended">
          <Heading text="RECOMMENDATIONS" />
          <div className="mt-4 grid grid-cols-2  sm:grid-cols-3 lg:grid-cols-5 gap-2 sm:gap-3">
            {recommendData?.results.length > 0 ? (
              recommendData?.results.map(
                (recommend: TVSeries, index: number) => (
                  <ItemSerie Serie={recommend} key={index} />
                )
              )
            ) : (
              <p className="text-white">No recommendations available.</p>
            )}
          </div>
        </div>
      </div>
    </LayoutBG>
  );
}
