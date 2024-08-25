import { Footer } from "@/components/home/footer";
import { Container } from "@/components/wrapper";
import { Globe } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function DummyjsonLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="">
        <Container>
          <div className="h-16 flex items-center justify-between border-b">
            <Link href="/dummyjson">Dummyjson</Link>
            <a title="dummyjson homepage" href="https://dummyjson.com/">
              <Globe />
            </a>
          </div>
        </Container>
      </header>
      {children}
    </div>
  );
}
