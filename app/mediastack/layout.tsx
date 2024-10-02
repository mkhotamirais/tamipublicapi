import { NavRight } from "@/components/home/header";
import { Metadata } from "next";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: "Mediastack",
  description: "Description mediastack",
};

export default function MediastackLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-50 bg-background border-b">
        <div className="container">
          <div className="h-16 flex items-center justify-between">
            <Link href="/mediastack" className="text-lg font-semibold">
              MEDIA<span className="text-primary">STACK</span>
            </Link>
            <NavRight href="https://mediastack.com/" title="mediastack homepage" />
          </div>
        </div>
      </header>
      <main className="grow container">{children}</main>
    </div>
  );
}
