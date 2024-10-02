import { JpPostType, url } from "../constants";

export default async function JpPostPage() {
  const response = await fetch(`${url}/posts`);
  const data = await response.json();

  return (
    <div className="py-4">
      <h2 className="text-primary mb-2 text-lg">Post List</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
        {data.map((item: JpPostType, i: number) => (
          <div key={i} className="border rounded p-2">
            {item.title}
          </div>
        ))}
      </div>
    </div>
  );
}
