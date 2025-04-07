import Filter from "@/components/Shared/Filter";
import LayoutBG from "@/components/Shared/LayoutBG/LayoutBG";
import Main from "@/components/Shared/Main/Main";

export default function SeriesPage() {
  return (
    <LayoutBG Trend={true} Next="Series" kind="tv">
      <Filter kind={"tv"} title={"Filter Series By Genres"} />
      <Main Main={"Series"} kind={"tv"} />
    </LayoutBG>
  );
}
