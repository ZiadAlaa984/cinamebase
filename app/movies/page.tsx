import Filter from "@/components/Shared/Filter";
import LayoutBG from "@/components/Shared/LayoutBG/LayoutBG";
import Main from "@/components/Shared/Main/Main";

export default function MoviePage() {
  return (
    <LayoutBG Trend={true} Next="Movies" kind="movie">
      <Filter kind={"movie"} title={"Filter Series By Genres"} />
      <Main Main={"Movies"} kind={"movie"} />
    </LayoutBG>
  );
}
