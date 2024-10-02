"use client";

import { Header } from "@/components/home/header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { menu } from "@/lib/menu";
import Link from "next/link";
import { useState } from "react";

export default function HomePage() {
  const [cari, setCari] = useState("");

  let data = menu.sort((a, b) => a.title.toLowerCase().localeCompare(b.title.toLowerCase()));
  data = data.filter((item) => item.title.toLowerCase().includes(cari.toLowerCase()));

  return (
    <>
      <Header />
      <div id="projects" className="container py-6">
        <Input value={cari} onChange={(e) => setCari(e.target.value)} placeholder="Search project.." className="mb-2" />
        <div className="pb-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
          {data.map((item, i) => (
            <Link
              href={item.href}
              key={i}
              className="hover:scale-105 transition flex flex-col overflow-hidden text-center border shadow p-4 rounded"
            >
              <h2 className="text-primary">{item.title}</h2>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </Link>
          ))}
        </div>
        {data.length === 0 && (
          <div className="flex justify-center items-center flex-col gap-2 italic text-xl">
            <i>No Result</i>
            <Button onClick={() => setCari("")} variant={"link"}>
              Reset
            </Button>
          </div>
        )}
      </div>
    </>
  );
}
