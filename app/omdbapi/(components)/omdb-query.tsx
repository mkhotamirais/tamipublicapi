"use client";

import { Input } from "@/components/ui/input";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export const OmdbSearch = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const onChange = useDebouncedCallback((e: string) => {
    const params = new URLSearchParams(searchParams);
    if (e) {
      params.set("s", e);
    } else params.delete("s");
    replace(`${pathname}?${params.toString()}`);
  }, 300);

  return (
    <Input
      defaultValue={searchParams?.get("s") as string}
      placeholder="Search movie.."
      onChange={(e) => onChange(e.target.value)}
      className="bg-slate-500 border-none placeholder:text-white"
    />
  );
};

export const OmdbType = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const onChange = useDebouncedCallback((e: string) => {
    const params = new URLSearchParams(searchParams);
    if (e) {
      if (e === "none") {
        params.delete("type");
      } else params.set("type", e);
    } else params.delete("type");
    replace(`${pathname}?${params.toString()}`);
  }, 300);

  return (
    <Select defaultValue={searchParams.get("type") ?? ""} onValueChange={onChange}>
      <SelectTrigger className="bg-slate-500 border-none">
        <SelectValue placeholder="Type" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="none">Type</SelectItem>
        <SelectItem value="movie">Movie</SelectItem>
        <SelectItem value="series">Series</SelectItem>
        <SelectItem value="episode">Episode</SelectItem>
      </SelectContent>
    </Select>
  );
};

export const OmdbY = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const onChange = useDebouncedCallback((e: string) => {
    const params = new URLSearchParams(searchParams);
    if (e) {
      if (e === "none") {
        params.delete("y");
      } else params.set("y", e);
    } else params.delete("y");
    replace(`${pathname}?${params.toString()}`);
  }, 300);

  const tahun = [];
  const tahunIni = new Date().getFullYear();
  for (let i = tahunIni; i >= 1990; i--) {
    tahun.push(i.toString());
  }
  return (
    <Select onValueChange={onChange}>
      <SelectTrigger className="bg-slate-500 border-none">
        <SelectValue placeholder="Year" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="none">Year</SelectItem>
        {tahun.map((item, i) => (
          <SelectItem key={i} value={item}>
            {item}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export const OmdbPlot = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const onChange = useDebouncedCallback((e: string) => {
    const params = new URLSearchParams(searchParams);
    if (e) {
      if (e === "none") {
        params.delete("plot");
      } else params.set("plot", e);
    } else params.delete("plot");
    replace(`${pathname}?${params.toString()}`);
  }, 300);

  return (
    <Select onValueChange={onChange}>
      <SelectTrigger className="bg-slate-500 border-none">
        <SelectValue placeholder="Plot" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="none">Plot</SelectItem>
        <SelectItem value={"short"}>Short</SelectItem>
        <SelectItem value={"full"}>Full</SelectItem>
      </SelectContent>
    </Select>
  );
};
