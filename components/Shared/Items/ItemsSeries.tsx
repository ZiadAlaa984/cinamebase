"use client";
import { TVSeries } from "@/interface/Types";
import ItemSerie from "./ItemSerie";
const ItemsSeries = ({
  Series,
  Main,
}: {
  Main?: string;
  Series: TVSeries[];
}) => {
  return (
    <div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {Series.map((Serie, index) =>
        Main === "Series" ? <ItemSerie Serie={Serie} key={index} /> : null
      )}
    </div>
  );
};

export default ItemsSeries;
