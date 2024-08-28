import { apiKey, NewsTypes, url } from "../constants";
import Image from "next/image";
import moment from "moment";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export async function NewsList({ par }: { par: Record<string, string> }) {
  let newPar = par;
  if (par.head === "top-headlines") {
    newPar = par;
  } else {
    if (!par.q) {
      newPar = { ...par, q: "jokowi" };
    } else {
      newPar = par;
    }
  }

  const params = new URLSearchParams(newPar).toString();
  const response = await fetch(`${url}/${par.head ? par.head : "everything"}?apiKey=${apiKey}&${params}`);

  const data = await response.json();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 py-4">
      {data?.articles.map((item: NewsTypes, i: number) => (
        <div key={i} className="flex flex-col rounded overflow-hidden space-y-3">
          <div>
            <Image
              src={item.urlToImage ?? "https://placehold.co/600x400/png"}
              width={500}
              height={500}
              className="object-cover object-center h-48 w-full"
              alt="newsapi image"
              priority
            />
            <figcaption className="text-xs text-muted-foreground">{item.description}</figcaption>
          </div>
          <div className="grow">
            <Link href={item.url} className="hover:underline">
              <h2 className="text-xl font-bold">{item.title}</h2>
            </Link>
            <p className="text-xs text-muted-foreground">
              Author: {item.author} - {moment(item.publishedAt).fromNow()}
            </p>
            <p className="text-sm">{item.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
