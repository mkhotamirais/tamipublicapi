import { JpType, url } from "../constants";

export default async function JpUserPage() {
  const response = await fetch(`${url}/users`);
  const data = await response.json();

  return (
    <div>
      <div>Users</div>
      <div>
        {data.map((item: JpType) => (
          <div key={item.id}>{item.name}</div>
        ))}
      </div>
    </div>
  );
}
