import Link from "next/link";
const url = `https://dummyjson.com/posts?limit=10`;

export default async function DummyjsonList() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const response = await fetch(url);
  const data = await response.json();

  return (
    <div className="flex justify-center flex-col items-center gap-4">
      {data.posts.map((item: any, i: number) => (
        <Link key={i} href={`/dummyjson/${item.id}`} className="hover:underline font-medium text-center">
          {item.title}
        </Link>
      ))}
    </div>
  );
}
