"use client";
import { Movie } from "@/interface/Types";
import ItemMovie from "./ItemMovie";
const ItemsMovie = ({ Movies }: { Movies: Movie[] }) => {
  return (
    <div className="mt-4 grid grid-cols-2  sm:grid-cols-3 lg:grid-cols-5 gap-2 sm:gap-3">
      {Movies.map((Movie, index) => (
        <ItemMovie Movie={Movie} key={index} />
      ))}
    </div>
  );
};

export default ItemsMovie;
