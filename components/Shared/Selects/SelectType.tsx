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
export default function SelectType({
  setKind,
  kind,
}: {
  kind: string;
  setKind: (value: string) => void;
}) {
  return (
    <>
      <Select onValueChange={(value: string) => setKind(value)}>
        <SelectTrigger className="w-[180px]">
          <SelectValue className="capitalize" placeholder={kind} />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Types</SelectLabel>
            {DATA.kind.map((kind, index) => (
              <SelectItem key={index} value={kind.value}>
                {kind.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </>
  );
}
