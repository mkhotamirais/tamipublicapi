import { NavRight } from "@/components/home/header";
import { Container } from "@/components/wrapper";
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
      <header className="">
        <Container>
          <div className="h-16 flex items-center justify-between border-b">
            <Link href="/tmdb">Tmdb</Link>
            <NavRight source="https://www.themoviedb.org/" />
          </div>
        </Container>
      </header>
      <main>
        <Container>{children}</Container>
      </main>
    </div>
  );
}
