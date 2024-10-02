import Image from "next/image";
import { ProductType, url } from "../constants";
import ProductDetail from "./product-detail";
import { ProductCartBtnList } from "./product-cart-button";

export async function ProductList({ par }: { par: Record<string, string> }) {
  const params = new URLSearchParams(par).toString();
  const response = await fetch(`${url}/${par.type || "hijja"}/product?${params}`);
  const data = await response.json();

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-1 py-3">
      {data?.aaData.map((item: ProductType, i: number) => (
        <div key={i} className="group flex flex-col relative rounded overflow-hidden shadow">
          <Image
            src={item.photo}
            width={500}
            height={500}
            alt="sisko image"
            className="object-center object-cover h-48"
            priority
          />
          <div className="p-3 grow flex flex-col">
            <h2 className="font-bold grow text-muted-foreground">{item.name}</h2>
            <h3 className="text-xl">Rp{item.price}</h3>
          </div>
          <ProductCartBtnList item={item} />
          <ProductDetail id={item.id} />
        </div>
      ))}
    </div>
  );
}
