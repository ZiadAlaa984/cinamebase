import LayoutBG from "@/components/Shared/LayoutBG/LayoutBG";
import Main from "@/components/Shared/Main/Main";
import { Suspense } from "react";

export default function ExplorePage() {
  return (
    <Suspense>
      <LayoutBG Trend={true} Next="Movies" kind="movie">
        <Main Main={"Movies"} explore={true} kind={"movie"} />
      </LayoutBG>
    </Suspense>
  );
}
