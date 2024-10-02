import React from "react";
import { NavRight } from "@/components/home/header";
import { JpLanding, NavContent } from "./(components)/jp-clients";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Jsonplaceholder",
  description: "Description jsonplaceholder",
};

export default function JpLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-50 bg-background border-b">
        <div className="container">
          <div className="h-16 flex items-center justify-between gap-8">
            <Link href="/jsonplaceholder" className="text-lg">
              JSON<span className="text-primary">PLACEHOLDER</span>
            </Link>
            <NavContent />
            <NavRight href="https://jsonplaceholder.typicode.com/" title="jsonplaceholder homepage" />
          </div>
        </div>
      </header>
      <JpLanding>{children}</JpLanding>
    </div>
  );
}
