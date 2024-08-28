import { Suspense } from "react";
import { NewsList } from "./(components)/news-list";
import Loader from "@/components/loader";
import { QueryCountry, QueryHead } from "./(components)/news-query";

export default function NewsapiPage({ searchParams }: { searchParams: { q: string } }) {
  const { q } = searchParams;
  return (
    <div>
      <div className="py-2 grid gap-2 grid-cols-2">
        <QueryHead />
        <QueryCountry />
      </div>
      <Suspense key={`${q}`} fallback={<Loader />}>
        <NewsList par={searchParams} />
      </Suspense>
    </div>
  );
}
