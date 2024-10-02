import { NavRight } from "@/components/home/header";
import { Metadata } from "next";
import Link from "next/link";
import React, { Suspense } from "react";
import { QuerySearch } from "./(components)/news-query";

export const metadata: Metadata = {
  title: "Newsapi",
  description: "Description newsapi",
};

export default function NewsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 bg-background z-50 border-b">
        <div className="container">
          <div className="h-16 flex items-center justify-between gap-6">
            <Link href="/newsapi" className="font-semibold text-lg">
              NEWS<span className="text-primary">API</span>
            </Link>
            <Suspense>
              <QuerySearch />
            </Suspense>
            <NavRight href="https://newsapi.org/" title="newsapi homepage" />
          </div>
        </div>
      </header>
      <main className="grow container">{children}</main>
    </div>
  );
}
