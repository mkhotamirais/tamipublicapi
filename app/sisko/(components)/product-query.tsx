"use client";

import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

export const QuerySearch = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const onChage = useDebouncedCallback((e: string) => {
    const params = new URLSearchParams(searchParams);
    if (e) {
      params.set("search_name", e);
    } else params.delete("search_name");
    replace(`${pathname}?${params.toString()}`);
  }, 300);

  return (
    <Input
      defaultValue={searchParams?.get("search_name") as string}
      placeholder="Search here.."
      className="bg-inherit"
      onChange={(e) => onChage(e.target.value)}
    />
  );
};

export function QuerySort() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const onChange = (e: string) => {
    const params = new URLSearchParams(searchParams);
    if (e) {
      if (e === "none") {
        params.delete("sorting");
      } else params.set("sorting", e);
    } else params.delete("sorting");
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <Select defaultValue={searchParams?.get("sorting") as string} onValueChange={onChange}>
      <SelectTrigger>
        <SelectValue className="text-red-500" placeholder="hasdlf" />
      </SelectTrigger>
      <SelectContent align="end">
        <SelectItem value="none">Sort</SelectItem>
        <SelectItem value="Lates">Latest</SelectItem>
        <SelectItem value="cheapest">Cheapest</SelectItem>
        <SelectItem value="expensive">Expensive</SelectItem>
      </SelectContent>
    </Select>
  );
}

export function QueryType() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const onChange = (e: string) => {
    const params = new URLSearchParams(searchParams);
    if (e) {
      if (e === "none") {
        params.delete("type");
      } else params.set("type", e);
    } else params.delete("type");
    replace(`${pathname}?${params.toString()}`);
  };
  return (
    <Select defaultValue={searchParams?.get("type") as string} onValueChange={onChange}>
      <SelectTrigger>
        <SelectValue placeholder="Type" />
      </SelectTrigger>
      <SelectContent align="end">
        <SelectGroup>
          <SelectItem value="none">Type</SelectItem>
          <SelectItem value="hijja">Hijja</SelectItem>
          <SelectItem value="demo">Demo</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
