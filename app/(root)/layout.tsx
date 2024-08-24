import { Footer } from "@/components/home/footer";
import { Header } from "@/components/home/header";
import React from "react";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
