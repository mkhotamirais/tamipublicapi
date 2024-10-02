"use client";

import { FaCircleMinus, FaCirclePlus, FaTrashCan } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import { useSisko } from "../useSisko";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function CartPage() {
  const { cartItems, setCartPlus, setCartMinus } = useSisko();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null; // atau render sesuatu yang minimal seperti loading spinner
  }

  const totalPrice = cartItems?.reduce((acc, cur) => {
    const price = Number(cur.price.split(".").join(""));
    return acc + price * cur.qty;
  }, 0);

  if (cartItems.length === 0) {
    return (
      <div className="italic text-center mt-4 flex flex-col">
        <div>Cart Kosong</div>
        <Button variant={"link"} asChild className="w-fit mx-auto">
          <Link href="/sisko">Mulai Belanja</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="relative min-h-[calc(100vh-8rem)]">
      <div>
        <div className="grid grid-cols-3 gap-2 text-muted-foreground capitalize text-center py-2 border-b">
          <div>image</div>
          <div>qty</div>
          <div>price</div>
        </div>
        {cartItems
          .sort((a, b) => a.createdAt.localeCompare(b.createdAt))
          .map((item) => (
            <div key={item.id} className="grid grid-cols-3 gap-2 items-center my-2 py-1 justify-items-center">
              <Link
                href={`/sisko/product/${item.id}`}
                className="relative group rounded-lg overflow-hidden size-20 flex justify-center"
              >
                <Image
                  src={item.photo}
                  width={100}
                  height={100}
                  alt="sisko image"
                  className="object-cover object-center"
                  priority
                />
                <div className="z-10 bg-black/15 absolute bottom-0 text-xs text-center w-full text-white">
                  {item.name}
                </div>
              </Link>
              <div className="flex gap-2">
                <button title="cart minus" type="button" onClick={() => setCartMinus(item.id)}>
                  {item.qty === 1 ? <FaTrashCan /> : <FaCircleMinus />}
                </button>
                <div>{item.qty}</div>
                <button title="cart plus" type="button" onClick={() => setCartPlus(item.id)}>
                  <FaCirclePlus />
                </button>
              </div>
              <div>Rp{(parseInt(item?.price.split(".").join("")) * item.qty).toLocaleString("id-ID")}</div>
            </div>
          ))}
      </div>
      <div className="mt-8 w-full p-2 flex justify-between items-center rounded-xl">
        <div className="text-lg">
          Total: <b>Rp{totalPrice.toLocaleString("id-ID")}</b>
        </div>
        <Button asChild>
          <Link href="/sisko/checkout">Checkout</Link>
        </Button>
      </div>
    </div>
  );
}
