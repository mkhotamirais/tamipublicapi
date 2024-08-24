"use client";

export default function List({ data }: { data: any }) {
  return (
    <div>
      {data.posts.map((item: any) => (
        <div key={item.id}>{item.title}</div>
      ))}
    </div>
  );
}
