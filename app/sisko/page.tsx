import { Suspense } from "react";
import { ProductList } from "./(components)/product-list";
import Loader from "@/components/loader";
import { QuerySearch, QuerySort, QueryType } from "./(components)/product-query";

export default function SiskoPage({
  searchParams,
}: {
  searchParams: { search_name: string; sorting: string; type: string };
}) {
  const { search_name, sorting, type } = searchParams;

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 py-3">
        <Suspense>
          <div className="grid grid-cols-2 gap-2">
            <QuerySearch />
            <QuerySort />
            {/* <QueryType /> */}
          </div>
        </Suspense>
      </div>
      <Suspense key={`${search_name}-${sorting}-${type}`} fallback={<Loader />}>
        <ProductList par={searchParams} />
      </Suspense>
    </div>
  );
}
