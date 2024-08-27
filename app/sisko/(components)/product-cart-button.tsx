"use client";

import { toast } from "sonner";
import { useSisko } from "../useSisko";
import { ProductType } from "../constants";
import { Button } from "@/components/ui/button";
import { FaCartPlus, FaCartShopping } from "react-icons/fa6";
import Link from "next/link";
import { useEffect, useState } from "react";

export function ProductCartBtnTop() {
  const { cartItems } = useSisko();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null; // atau render sesuatu yang minimal seperti loading spinner
  }

  return (
    <Link href="/sisko/cart">
      <Button variant={"secondary"} size={"icon"} className="relative rounded-full">
        <div className="absolute z-10 -right-1 -top-1 text-xs bg-red-500 p-1 leading-none rounded-full text-white">
          {cartItems?.reduce((acc, cur) => acc + cur.qty, 0)}
        </div>
        <FaCartShopping className="size-5" />
      </Button>
    </Link>
  );
}

export function ProductCartBtnList({ item }: { item: ProductType }) {
  const { setCartItems } = useSisko();

  const onClick = () => {
    const qty = 1;
    const checked = true;
    const createdAt = new Date().toISOString();
    const { id, name, photo, price, weight } = item;
    setCartItems({ id, name, photo, price, qty, weight, checked, createdAt });
    toast.success(`Add ${item.name} success`);
  };

  return (
    <Button
      onClick={onClick}
      variant={"outline"}
      size={"icon"}
      className={`z-10 absolute rounded-full top-2 right-2 translate-x-16 group-hover:translate-x-0 transition`}
    >
      <FaCartPlus />
    </Button>
  );
}
