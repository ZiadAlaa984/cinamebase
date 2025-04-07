import Hero from "@/components/hero-07/Hero";
import Filter from "@/components/Shared/Filter";
import Main from "@/components/Shared/Main/Main";

export default function Home() {
  return (
    <div className="main">
      <div className="p-main">
        <Hero />
        <Filter kind={"tv"} title={"Filter Series By Genres"} />
        <Filter kind={"movie"} title={"Filter Movies By Genres"} />
        <Main Main={"Movies"} kind={"movie"} />
      </div>
    </div>
  );
}
