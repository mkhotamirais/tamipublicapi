import { url } from "./constants";

export default async function JpUserList() {
  const response = await fetch(`${url}/users`);
  const data = await response.json();
  console.log(data);
  return <div>JpList</div>;
}
