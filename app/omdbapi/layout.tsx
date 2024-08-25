import { Container } from "@/components/wrapper";
import { Globe } from "lucide-react";
import Link from "next/link";
import React from "react";
import { OmdbSearch } from "./(components)/omdb-query";
import { Suspense } from "react";

export default function OmdbLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="">
        <Container>
          <div className="gap-3 sm:gap-12 h-16 flex items-center justify-between border-b">
            <Link href="/omdbapi">Omdbapi</Link>
            <Suspense>
              <OmdbSearch />
            </Suspense>
            <a title="dummyjson homepage" href="https://www.omdbapi.com/">
              <Globe />
            </a>
          </div>
        </Container>
      </header>
      <main>
        <Container>{children}</Container>
      </main>
    </div>
  );
}
