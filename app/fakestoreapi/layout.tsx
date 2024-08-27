import { NavRight } from "@/components/home/header";
import { Container } from "@/components/wrapper";
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
      <header className="">
        <Container>
          <div className="h-16 flex items-center justify-between border-b">
            <Link href="/fakestoreapi">FakestoreApi</Link>
            <NavRight source="https://fakestoreapi.com/" />
          </div>
        </Container>
      </header>
      <main>
        <Container>{children}</Container>
      </main>
    </div>
  );
}
