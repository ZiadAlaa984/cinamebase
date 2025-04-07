import Details from "../Details";
import {
  CastData,
  getImageLogo,
  Recommended,
  SearchById,
  Video,
} from "@/APIS/APIS";
import { Movie } from "@/interface/Types";
import Heading from "@/components/Shared/Heading";
import ItemMovie from "@/components/Shared/Items/ItemMovie";
import LayoutBG from "@/components/Shared/LayoutBG/LayoutBG";
import SliderCast from "@/components/Shared/sliders/SliderCast/SliderCast";
export default async function Page({
  params,
}: {
  params: Promise<{
    id: string;
  }>;
}) {
  const { id } = await params;
  const data = await SearchById(id, "movie");
  const imageData = await getImageLogo(id, "movie");
  const recommendData = await Recommended(id, "movie");
  const videoData = await Video(id, "movie");
  const castArray = await CastData(id, "movie");
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
      kind="movie"
    >
      <div className="flex flex-col gap-12">
        <Details
          video={videoData?.results[1]?.key}
          englishLogo={englishLogo}
          Movie={data}
        />
        <div className="sliderCast">
          <Heading text="Movie Cast" />
          <div className="mt-4 flex justify-center items-center">
            <SliderCast cast={castArray} />
          </div>
        </div>
        <div className="Recommended">
          <Heading text="RECOMMENDATIONS" />
          <div className="mt-4 grid grid-cols-2  sm:grid-cols-3 lg:grid-cols-5 gap-2 sm:gap-3">
            {recommendData?.results.length > 0 ? (
              recommendData?.results.map((recommend: Movie, index: number) => (
                <ItemMovie Movie={recommend} key={index} />
              ))
            ) : (
              <p className="text-white">No recommendations available.</p>
            )}
          </div>
        </div>
      </div>
    </LayoutBG>
  );
}
