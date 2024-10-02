"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { menu } from "@/lib/menu";
import Link from "next/link";
import { MouseEvent, useState } from "react";

export function Projects({ className }: { className?: string }) {
  const [cari, setCari] = useState("");
  const [selectedBadge, setSelectedBadge] = useState<string[]>([]);

  const filteredMenu = menu.filter((item) => item.title.toLowerCase().includes(cari.toLowerCase()));

  const onBadge = (e: MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLDivElement;
    const badge: string = target?.innerText;
    if (selectedBadge.includes(badge)) {
      setSelectedBadge((prev) => prev.filter((p) => p !== badge));
    } else {
      setSelectedBadge((prev) => [...prev, badge]);
    }
  };

  return (
    <div id="projects" className={`${className}`}>
      <Input
        value={cari}
        onChange={(e) => setCari(e.target.value)}
        placeholder="Search project.."
        className="bg-cyan-100/15 mb-2"
      />
      <div className="pb-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-1">
        {filteredMenu.map((item, i) => (
          <div key={i} className="group relative flex flex-col overflow-hidden text-center">
            <div className="z-10 py-2 translate-y-full group-hover:translate-y-0 transition absolute bottom-0 flex items-center justify-center inset-x-0">
              <Button asChild className="rounded-full px-8 backdrop-blur bg-black/15">
                <Link href={item.href}>View</Link>
              </Button>
            </div>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
      {filteredMenu.length === 0 && (
        <div className="flex justify-center items-center flex-col gap-2 italic text-xl">
          <div>No Result</div>
          <Button
            onClick={() => {
              setCari("");
              setSelectedBadge([]);
            }}
            type="button"
            variant={"secondary"}
          >
            Reset
          </Button>
        </div>
      )}
    </div>
  );
}
