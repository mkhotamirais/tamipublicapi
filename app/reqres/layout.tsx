import { NavRight } from "@/components/home/header";
import { Metadata } from "next";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: "Reqres",
  description: "Description reqres",
};

export default function ReqresLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-50 bg-background border-b">
        <div className="container">
          <div className="h-16 flex items-center justify-between">
            <Link href="/reqres" className="text-lg font-semibold">
              REQ<span className="text-primary">RES</span>
            </Link>
            <NavRight href="https://reqres.in/" title="reqres homepage" />
          </div>
        </div>
      </header>
      <main className="grow container">{children} </main>
    </div>
  );
}
