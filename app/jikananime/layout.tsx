import { NavRight } from "@/components/home/header";
import { Metadata } from "next";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: "Jikananime",
  description: "Description jikananime",
};

export default function JikanLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-50 bg-background border-b">
        <div className="container">
          <div className="h-16 flex items-center justify-between">
            <Link href="/jikananime" className="text-lg">
              JIKAN<span className="text-primary">ANIME</span>
            </Link>
            <NavRight href="https://jikan.moe/" title="jikan anime homepage" />
          </div>
        </div>
      </header>
      <main className="grow container">{children} </main>
    </div>
  );
}
