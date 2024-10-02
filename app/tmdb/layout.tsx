import { NavRight } from "@/components/home/header";
import { Metadata } from "next";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: "Tmdb",
  description: "Description tmdb",
};

export default function TmdbLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-50 bg-background border-b">
        <div className="container">
          <div className="h-16 flex items-center justify-between">
            <Link href="/tmdb" className="text-lg font-semibold">
              TM<span className="text-primary">DB</span>
            </Link>
            <NavRight href="https://www.themoviedb.org/" title="tmdb homepage" />
          </div>
        </div>
      </header>
      <main className="grow container">{children} </main>
    </div>
  );
}
