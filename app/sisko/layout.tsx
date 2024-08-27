import { NavRight } from "@/components/home/header";
import { Container } from "@/components/wrapper";
import Link from "next/link";
import React from "react";

export default function SiskoLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="">
        <Container>
          <div className="h-16 flex items-center justify-between border-b">
            <Link href="/sisko">Sisko</Link>
            <NavRight source="https://documenter.getpostman.com/view/966202/2s9Xy2PsAa#69422121-97fc-4cc7-8845-2fcec8f257b5" />
          </div>
        </Container>
      </header>
      {children}
    </div>
  );
}
