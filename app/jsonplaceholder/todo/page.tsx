import { JpTodoType, url } from "../constants";

export default async function JpTodosPage() {
  const response = await fetch(`${url}/todos`);
  const data = await response.json();

  return (
    <div className="py-4">
      <h2 className="text-primary mb-2 text-lg">Todo List</h2>
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
