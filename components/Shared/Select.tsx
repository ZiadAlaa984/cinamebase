"use client";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { DATA } from "@/constant";

export default function SelectShared({
  setType,
  kind,
}: {
  kind: string;
  setType: (type: string) => void;
}) {
  const Types = kind == "movie" ? DATA.movie : DATA.tv;
  return (
    <>
      <Select onValueChange={(value: string) => setType(value)}>
        <SelectTrigger className="w-[180px] bg-white">
          <SelectValue placeholder="Select a Type" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Types</SelectLabel>
            {Types.map((item, index) => (
              <SelectItem key={index} value={item.value}>
                {item.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </>
  );
}
