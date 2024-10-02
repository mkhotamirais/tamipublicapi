import Image from "next/image";
import { AnimeListData, url } from "../constants";

export async function AnimeList() {
  const response = await fetch(`${url}/top/anime`);
  const data = await response.json();

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 xl:grid-cols-8 gap-1">
      {data?.data?.map((item: AnimeListData) => (
        <div key={item.mal_id} className="border rounded">
          <Image
            src={item.images.jpg.image_url}
            width={500}
            height={500}
            alt="jikan image"
            className="h-48 object-cover object-center"
          />
          <div className="p-2">{item.title}</div>
        </div>
      ))}
    </div>
  );
}
