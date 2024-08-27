import Image from "next/image";
import { apiKey, NewsType, url } from "../constants";
import moment from "moment";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export async function NewsList() {
  const response = await fetch(`${url}?access_key=${apiKey}`);
  const data = await response.json();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 gap-y-6 py-4">
      {data?.data.map((item: NewsType, i: number) => (
        <div key={i} className="flex flex-col rounded overflow-hidden space-y-2">
          <Image
            src={item.image ?? "https://placehold.co/400x600/png"}
            width={500}
            height={500}
            alt="mediastack image"
            className="object-center object-cover h-48"
            priority
          />
          <div className="space-y-2 flex flex-col grow">
            <h2 className="text-xl font-bold">
              {item.title.substring(0, 50)}
              {item.title.length > 75 ? ".." : ""}
            </h2>
            <div>
              <Badge>{item.category}</Badge>
            </div>

            <div>
              <p className="text-xs text-muted-foreground">
                Author: {item.author ?? ""} - {moment(item.published_at).fromNow()}
              </p>
              <p className="text-xs text-muted-foreground">
                Source: {item.source} - {item.country} - {item.language}
              </p>
            </div>
            <p className="text-sm grow">{item.description.substring(0, 200)}</p>
            <Button asChild variant={"secondary"}>
              <Link href={item.url}>Read</Link>
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
}
