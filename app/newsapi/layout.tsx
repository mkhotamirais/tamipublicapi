import { NavRight } from "@/components/home/header";
import { Container } from "@/components/wrapper";
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
      <header className="">
        <Container>
          <div className="h-16 flex items-center justify-between border-b gap-6">
            <Link href="/newsapi">Newsapi</Link>
            <Suspense>
              <QuerySearch />
            </Suspense>
            <NavRight source="https://newsapi.org/" />
          </div>
        </Container>
      </header>
      <main>
        <Container>{children}</Container>
      </main>
    </div>
  );
}
