import { OmdbType, url } from "../constants";
import OmdbListClient from "./omdb-list-client";

export default async function OmdbList({ par }: { par: Record<string, string> }) {
  let newPar = !par.s ? { ...par, s: "naruto" } : par;
  const params = new URLSearchParams(newPar).toString();

  await new Promise((resolve) => setTimeout(resolve, 1000));
  const response = await fetch(`${url}&${params}`);
  const data = await response.json();

  return (
    <div>
      {par.s && (
        <div>
          Result for{" "}
          <i>
            <b>{par.s}</b>
          </i>
        </div>
      )}
      {data?.Search || data?.Search?.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-1 py-2">
          {data.Search.map((item: OmdbType, i: number) => (
            <OmdbListClient key={i} item={item} />
          ))}
        </div>
      ) : (
        <div className="italic text-xl text-center mt-12">Not found</div>
      )}
    </div>
  );
}
