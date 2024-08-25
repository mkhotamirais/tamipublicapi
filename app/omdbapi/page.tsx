import { Suspense } from "react";
import Loader from "@/components/loader";
import OmdbList from "./(components)/omdb-list";
import { OmdbType, OmdbY, OmdbPlot } from "./(components)/omdb-query";

export default function OmdbapiPage({ searchParams }: { searchParams: Record<string, string> }) {
  const { s, type, y, plot } = searchParams;
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2">
        <Suspense fallback="Loading..">
          <div className="py-3 grid grid-cols-3 gap-1">
            <OmdbType />
            <OmdbY />
            <OmdbPlot />
          </div>
        </Suspense>
      </div>
      <Suspense key={`${s}-${type}-${y}-${plot}`} fallback={<Loader />}>
        <OmdbList par={searchParams} />
      </Suspense>
    </div>
  );
}
