import { NavRight } from "@/components/home/header";
import { Container } from "@/components/wrapper";
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
      <header className="">
        <Container>
          <div className="h-16 flex items-center justify-between border-b">
            <Link href="/dummyjson">Dummyjson</Link>
            <NavRight source="https://dummyjson.com/" />
          </div>
        </Container>
      </header>
      {children}
    </div>
  );
}
