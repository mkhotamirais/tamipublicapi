"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useEffect, useState } from "react";
import { ProductSingle, url, urlImg } from "../constants";
import { FaExclamation } from "react-icons/fa6";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";

export default function ProductDetail({ id }: { id: string }) {
  const [data, setData] = useState<ProductSingle | null>(null);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(`${url}/hijja/single/${id}`);
      const data = await response.json();
      setData(data);
    };
    getData();
  }, [id]);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant={"outline"}
          size={"icon"}
          className={`z-10 absolute rounded-full top-2 left-2 -translate-x-16 group-hover:translate-x-0 transition`}
        >
          <FaExclamation />
        </Button>
      </DialogTrigger>
      <DialogContent
        style={{
          background: `linear-gradient(to top, rgba(0,0,0,.9), rgba(0,0,0,.1)), url(${urlImg + data?.product_img})`,
        }}
        className="max-h-screen max-w-3xl bg-cover bg-no-repeat border-none"
      >
        <DialogHeader>
          <DialogTitle className="mb-4 bg-black/60 text-white p-3 w-fit rounded-xl">{data?.product_name}</DialogTitle>
          <DialogDescription asChild>
            <div className="overflow-y-scroll bg-black/15 p-3 rounded-lg text-white h-[calc(100vh-14rem)] grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Image
                src={urlImg + data?.product_img ?? "https://placehold.co/600x400"}
                width={600}
                height={600}
                alt="omdbapi image"
                className="rounded-xl"
              />
              <div className="space-y-2">
                <div className="text-lg font-medium">{data?.product_name}</div>
                <div className="text-2xl font-bold">Rp{data?.product_price.split(".")[0]}</div>
                <div>
                  <Badge>{data?.product_status}</Badge>
                </div>
                <div>{data?.product_weight}gr</div>
                <div className="">Description: {data?.product_description}</div>
              </div>
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}

{
  /* <Button className="mt-8" onClick={onClick}>
  <FaCartPlus className="mr-2" /> Add to cart
</Button>; */
}
