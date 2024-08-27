import { apiKey, NewsTypes, url } from "../constants";
import Image from "next/image";
import moment from "moment";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export async function NewsList() {
  const response = await fetch(`${url}/everything?apiKey=${apiKey}&q=bitcoin`);
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
              className="object-cover object-center h-48"
              alt="newsapi image"
            />
            <figcaption className="text-xs text-muted-foreground">{item.description}</figcaption>
          </div>
          <div className="grow">
            <h2 className="text-xl font-bold">{item.title}</h2>
            <p className="text-xs text-muted-foreground">
              Author: {item.author} - {moment(item.publishedAt).fromNow()}
            </p>
            <p className="text-sm">{item.content}</p>
          </div>
          <Button asChild variant={"secondary"}>
            <Link href={item.url}>Visit</Link>
          </Button>
        </div>
      ))}
    </div>
  );
}
