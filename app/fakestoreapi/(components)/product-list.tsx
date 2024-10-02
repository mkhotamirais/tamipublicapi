import React from "react";
import { FksProductType, url } from "../constants";
import Image from "next/image";

export async function ProductList() {
  const response = await fetch(`${url}/products`);
  const data = await response.json();
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
      {data.map((item: FksProductType) => (
        <div key={item.id} className="border rounded p-2">
          <Image
            src={item.image}
            width={500}
            height={500}
            alt="image fakstore api"
            priority
            className="h-48 aspect-square object-center object-cover"
          />
          <div className="text-center text-primary py-2">{item.title}</div>
        </div>
      ))}
    </div>
  );
}
