import { Container } from "@/components/wrapper";
import { Globe, House } from "lucide-react";
import Link from "next/link";
import React from "react";
import { OmdbSearch } from "./(components)/omdb-query";
import { Suspense } from "react";

export default function OmdbLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-slate-700 text-white">
      <header className="z-50 bg-slate-800 sticky top-0">
        <Container>
          <div className="gap-3 sm:gap-12 h-16 flex items-center justify-between">
            <Logo />{" "}
            <Suspense>
              <OmdbSearch />
            </Suspense>
            <div className="flex gap-4">
              <a title="dummyjson homepage" href="https://www.omdbapi.com/">
                <Globe />
              </a>
              <Link href="/">
                <House />
              </Link>
            </div>
          </div>
        </Container>
      </header>
      <main>
        <Container>{children}</Container>
      </main>
    </div>
  );
}

const Logo = () => {
  return (
    <Link href="/omdbapi" className="text-lg">
      OMDB<b>API</b>
    </Link>
  );
};
