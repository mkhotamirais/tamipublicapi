import { NavRight } from "@/components/home/header";
import { Metadata } from "next";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: "Fakestoreapi",
  description: "Description fakestoreapi",
};

export default function FksLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 bg-background z-50 border-b">
        <div className="container">
          <div className="h-16 flex items-center justify-between">
            <Link href="/fakestoreapi" className="text-lg font-semibold">
              FAKESTORE<span className="text-primary">API</span>
            </Link>
            <NavRight href="https://fakestoreapi.com/" title="homepage fakestoreapi" />
          </div>
        </div>
      </header>
      <main className="grow container">{children}</main>
    </div>
  );
}
