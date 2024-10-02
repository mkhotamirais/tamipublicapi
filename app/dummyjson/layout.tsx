import { NavRight } from "@/components/home/header";
import { Metadata } from "next";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: "Dummyjson",
  description: "Description dummyjson",
};

export default function DummyjsonLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="z-50 border-b sticky top-0 bg-background">
        <div className="container">
          <div className="h-16 flex items-center justify-between">
            <Link href="/dummyjson" className="text-lg font-semibold">
              DUMMY<span className="text-primary">JSON</span>
            </Link>
            <NavRight href="https://dummyjson.com/" title="homepage dummyjson" />
          </div>
        </div>
      </header>
      <div className="grow">{children}</div>
    </div>
  );
}
