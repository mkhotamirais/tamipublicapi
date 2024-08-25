"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { omdbUrl } from "@/lib/constants";
import { useEffect, useState } from "react";
import { OmdbType } from "./omdb-list";
import Image from "next/image";

export default function OmdbDetail({ imdbID }: { imdbID: string }) {
  const [data, setData] = useState<OmdbType | null>(null);
  useEffect(() => {
    const getData = async () => {
      const response = await fetch(`${omdbUrl}&i=${imdbID}`);
      const data = await response.json();
      setData(data);
    };
    getData();
  }, [imdbID]);

  return (
    <Dialog>
      <div className="z-20 scale-0 group-hover:scale-100 absolute inset-0 flex items-center justify-center transition">
        <DialogTrigger asChild>
          <Button className="rounded-full" size={"lg"}>
            Visit
          </Button>
        </DialogTrigger>
      </div>
      <DialogContent
        style={{ background: `linear-gradient(to top, rgba(0,0,0,.9), rgba(0,0,0,.1)), url(${data?.Poster})` }}
        className="max-h-screen max-w-3xl bg-cover bg-no-repeat"
      >
        <DialogHeader>
          <DialogTitle className="mb-4 bg-black/60 text-white p-3 w-fit rounded-xl">{data?.Title}</DialogTitle>
          <DialogDescription asChild>
            <div className="overflow-y-scroll text-white h-[calc(100vh-10rem)] grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Image
                src={data?.Poster ?? "https://placehold.co/600x400"}
                width={600}
                height={600}
                alt="omdbapi image"
                className="rounded-xl"
              />
              <div className="bg-black/60 p-4 rounded-xl space-y-2">
                <div>
                  <b>Title: </b>
                  {data?.Title}
                </div>
                <div>
                  <b>IMDB Rating: </b>
                  {data?.imdbRating}
                </div>
                <div>
                  <b>Year: </b>
                  {data?.Year}
                </div>
                <div>
                  <b>Released: </b>
                  {data?.Released}
                </div>
                <div>
                  <b>Genre: </b>
                  {data?.Genre}
                </div>
                <div>
                  <b>Type: </b>
                  {data?.Type}
                </div>
                <div>
                  <b>Actors: </b>
                  {data?.Actors}
                </div>
                <div>
                  <b>Country: </b>
                  {data?.Country}
                </div>
                <div>
                  <b>Duration: </b>
                  {data?.Runtime}
                </div>
                <div>
                  <b>Writer</b>
                  {data?.Writer}
                </div>
                <div>
                  <b>Plot: </b>
                  {data?.Plot}
                </div>
              </div>
            </div>
          </DialogDescription>
        </DialogHeader>
        {/* <DialogFooter>
        </DialogFooter> */}
      </DialogContent>
    </Dialog>
  );
}
