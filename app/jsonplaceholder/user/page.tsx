import { JpUserType, url } from "../constants";

export default async function JpUserPage() {
  const response = await fetch(`${url}/users`);
  const data = await response.json();

  return (
    <div className="py-4">
      <h2 className="text-primary mb-2 text-lg">User List</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
        {data.map((item: JpUserType) => (
          <div key={item.id} className="border rounded p-2">
            <div>{item.name}</div>
            <div>{item.address.city}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
