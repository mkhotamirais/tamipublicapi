import { JpTodoType, url } from "../constants";

export default async function JpTodosPage() {
  const response = await fetch(`${url}/todos`);
  const data = await response.json();

  return (
    <div>
      <div>Todo</div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
        {data?.map((item: JpTodoType, i: number) => (
          <div key={i} className="border rounded p-2">
            {item.title}
          </div>
        ))}
      </div>
    </div>
  );
}
