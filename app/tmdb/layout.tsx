import { NavRight } from "@/components/home/header";
import { Container } from "@/components/wrapper";
import Link from "next/link";
import React from "react";

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
      {children}
    </div>
  );
}
