import React from "react";
import { Movie } from "@/interface/Types";
import { Data, SearchById, Trending } from "@/APIS/APIS";

export default async function LayoutBG({
  children,
  kind,
  Trend,
  specific,
  gap = " gap-8",
}: {
  gap?: string;
  details?: string;
  specific?: string;
  Next?: string;
  kind: string;
  Trend?: boolean;
  children: React.ReactNode;
}) {
  let backgroundImageUrl = "";
  let data: { results: Movie[]; backdrop_path?: string };

  if (specific) {
    data = await SearchById(specific, kind);
    backgroundImageUrl = `url(https://image.tmdb.org/t/p/original/${data.backdrop_path})`;
  } else {
    if (Trend) {
      data = await Trending(1, "day", kind);
    } else {
      data = await Data(1, "top_rated", kind);
    }

    const randomIndex = Math.floor(Math.random() * data.results.length);
    backgroundImageUrl = `url(https://image.tmdb.org/t/p/original/${data.results[randomIndex].backdrop_path})`;
  }

  return (
    <>
      <div
        className="bg-fixed min-h-screen  p-main object-center"
        style={{
          backgroundImage: backgroundImageUrl,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          position: "relative",
        }}
      >
        {/* Dark overlay for better readability */}
        <div
          className="backdrop-blur-sm"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.7)",
          }}
        />
        <div className={`main relative z-10 ${gap}`}>
          {/* {!Trend && (
            <BreadcrumbsSteps details={details || ""} Next={Next || ""} />
          )} */}
          {children}
        </div>
      </div>
    </>
  );
}
