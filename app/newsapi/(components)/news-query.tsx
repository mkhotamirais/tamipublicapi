"use client";

import { Input } from "@/components/ui/input";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CountryList } from "../constants";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import { HeadType, useNewsapi } from "../useNewsapi";

export const QuerySearch = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const onChange = useDebouncedCallback((e: string) => {
    const params = new URLSearchParams(searchParams);
    if (e) {
      if (searchParams.get("head")) {
        params.delete("head");
        params.delete("country");
        params.set("q", e);
      } else {
        params.delete("q");
      }
    } else {
      params.delete("q");
    }
    replace(`${pathname}?${params.toString()}`);
  }, 500);
  return (
    <Input
      defaultValue={searchParams.get("q") ?? ""}
      placeholder="Search here.."
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

export const QueryHead = () => {
  const { head, setHead, setCountry, country } = useNewsapi();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  useEffect(() => {
    if (!searchParams.get("q")) {
      setHead(searchParams.get("head") as HeadType);
      setCountry(searchParams.get("country") as string);
    }
  }, [searchParams, setHead, setCountry]);

  useEffect(() => {
    const params = new URLSearchParams(searchParams);
    if (head === "top-headlines" && !searchParams.get("q")) {
      if (!searchParams.get("country")) params.set("country", "id");
      if (searchParams.get("q")) params.delete("q");
      params.set("head", head);
    } else {
      params.delete("country");
      params.delete("head");
    }
    replace(`${pathname}?${params.toString()}`);
  }, [head, pathname, replace, searchParams]);

  return (
    <Button
      onClick={() => {
        if (head === "everything") {
          setHead("top-headlines");
        } else setHead("everything");
      }}
    >
      {searchParams.get("head") === "top-headlines" ? "Top Headlines" : "Everything"}
    </Button>
  );
};

export const QueryCountry = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const onChange = (e: string) => {
    const params = new URLSearchParams(searchParams);
    if (e) {
      if (e === "none") {
        params.delete("country");
        params.delete("head");
      } else {
        if (searchParams.get("q")) params.delete("q");
        params.set("head", "top-headlines");
        params.set("country", e);
      }
    } else {
      params.delete("country");
      params.delete("head");
    }
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <Select defaultValue={searchParams.get("country") || ""} onValueChange={onChange}>
      <SelectTrigger>
        <SelectValue placeholder="Country" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="none">Country</SelectItem>
        {CountryList.map((item, i: number) => (
          <SelectItem key={i} value={item.symbol}>
            {item.country}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};
