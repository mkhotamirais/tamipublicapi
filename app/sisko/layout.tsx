import { NavRight } from "@/components/home/header";
import { Container } from "@/components/wrapper";
import Link from "next/link";
import React, { Suspense } from "react";
import { QuerySearch } from "./(components)/product-query";
import { Toaster } from "@/components/ui/sonner";
import { ProductCartBtnTop } from "./(components)/product-cart-button";

export default function SiskoLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Toaster position="top-center" richColors closeButton />
      <header className="z-50 sticky top-0 backdrop-blur bg-white/70 shadow">
        <Container>
          <div className="h-16 gap-6 flex items-center justify-between">
            <Link href="/sisko">Sisko</Link>
            <Suspense>
              <QuerySearch />
            </Suspense>
            <div className="flex gap-4 items-center">
              <ProductCartBtnTop />
              <NavRight source="https://documenter.getpostman.com/view/966202/2s9Xy2PsAa#69422121-97fc-4cc7-8845-2fcec8f257b5" />
            </div>
          </div>
        </Container>
      </header>
      <main>
        <Container>{children}</Container>
      </main>
    </div>
  );
}
