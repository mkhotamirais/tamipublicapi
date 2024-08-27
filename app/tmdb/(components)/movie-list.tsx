import Image from "next/image";
import { imagePrefix, tmdbApiKey, TmdbMovie, url } from "../constants";

export async function MovieList() {
  const response = await fetch(`${url}/movie/top_rated?api_key=${tmdbApiKey}&language=en-US&page=1`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  const results: TmdbMovie[] = await data.results;

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
      {results.map((item) => (
        <div key={item.id} className="border rounded">
          <div>{item.title}</div>
          <Image
            src={`${imagePrefix}${item?.backdrop_path || item?.poster_path}`}
            width={500}
            height={500}
            alt="tmdb image"
            className="h-48 object-contain object-center"
            priority
          />
        </div>
      ))}
    </div>
  );
}
