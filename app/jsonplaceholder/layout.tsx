import { Container } from "@/components/wrapper";
import React from "react";
import { NavRight } from "@/components/home/header";
import { JpLanding, Logo, NavContent } from "./(components)/jp-clients";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jsonplaceholder",
  description: "Description jsonplaceholder",
};

export default function JpLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 backdrop-blur bg-white/15">
        <Container>
          <div className="h-16 flex items-center justify-between border-b gap-8">
            <Logo />
            <NavContent />
            <NavRight source="https://jsonplaceholder.typicode.com/" />
          </div>
        </Container>
      </header>
      <JpLanding>{children}</JpLanding>
    </div>
  );
}
