"use client";

import { Genres } from "@/APIS/Filter";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useEffect, useState } from "react";
export default function SelectGenres({
  setType,
  Title,
  kind,
  value,
}: {
  value?: string;
  Title: string;
  kind: string;
  setType: (value: string) => void;
}) {
  interface genres {
    id: string;
    name: string;
  }
  const [genres, setGenres] = useState<genres[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await Genres(Title || kind);
        setGenres(res.genres);
        console.log("🚀 ~ fetchData ~ res.genres:", res.genres);
      } catch {
        console.log("Error fetching genres. Please try again later.");
      }
    }

    fetchData();
  }, [kind, Title]);
  return (
    <>
      <Select onValueChange={(value: string) => setType(value)}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder={value || `Select a Genres`} />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Genres</SelectLabel>
            {genres.map((genre: genres, index) => (
              <SelectItem key={index} value={genre.id}>
                {genre.name}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </>
  );
}
