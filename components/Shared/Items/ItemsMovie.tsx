"use client";
import { Movie } from "@/interface/Types";
import ItemMovie from "./ItemMovie";
const ItemsMovie = ({ Movies }: { Movies: Movie[] }) => {
  return (
    <div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {Movies.map((Movie, index) => (
        <ItemMovie Movie={Movie} key={index} />
      ))}
    </div>
  );
};

export default ItemsMovie;
