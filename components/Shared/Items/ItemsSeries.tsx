"use client";
import { TVSeries } from "@/interface/Types";
import ItemSerie from "./ItemSerie";
const ItemsSeries = ({ Series }: { Series: TVSeries[] }) => {
  return (
    <div className="mt-4 grid grid-cols-2  sm:grid-cols-3 lg:grid-cols-5 gap-2 sm:gap-3">
      {Series.map((Serie, index) => (
        <ItemSerie Serie={Serie} key={index} />
      ))}
    </div>
  );
};

export default ItemsSeries;
