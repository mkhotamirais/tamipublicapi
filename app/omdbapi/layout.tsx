import Link from "next/link";
import React from "react";
import { OmdbSearch } from "./(components)/omdb-query";
import { Suspense } from "react";
import { NavRight } from "@/components/home/header";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Omdbapi",
  description: "Description omdbapi",
};

export default function OmdbLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-slate-700 text-white">
      <header className="z-50 bg-background sticky top-0 border-b">
        <div className="container">
          <div className="gap-3 sm:gap-12 h-16 flex items-center justify-between">
            <Link href="/omdbapi" className="text-lg font-semibold">
              OMDB<span className="text-primary">API</span>
            </Link>
            <Suspense>
              <OmdbSearch />
            </Suspense>
            <NavRight href="https://www.omdbapi.com/" title="omdbapi homepage" />
          </div>
        </div>
      </header>
      <main className="grow container">{children} </main>
    </div>
  );
}
