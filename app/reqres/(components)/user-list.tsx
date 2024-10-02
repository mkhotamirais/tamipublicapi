import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ReqresUserType, url } from "../constants";

export async function UserList() {
  const response = await fetch(`${url}`);
  const data = await response.json();

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2">
      {data.data.map((item: ReqresUserType) => (
        <div key={item.id} className="p-3 shadow rounded-xl flex items-center justify-center flex-col gap-3">
          <Avatar>
            <AvatarImage src={item.avatar} />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>

          <div>
            {item.first_name} {item.last_name}
          </div>
        </div>
      ))}
    </div>
  );
}
