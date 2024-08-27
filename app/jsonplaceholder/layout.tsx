"use client";

import { Container } from "@/components/wrapper";
import Link from "next/link";
import React from "react";
import { Button } from "@/components/ui/button";
import { FaBars, FaGithub, FaXmark } from "react-icons/fa6";
import { useJp } from "./useJp";
import { Globe } from "lucide-react";
import { usePathname } from "next/navigation";
import { NavRight } from "@/components/home/header";

const navMenu = [
  { href: "/jsonplaceholder/user", label: "User" },
  { href: "/jsonplaceholder/post", label: "Post" },
  { href: "/jsonplaceholder/todo", label: "Todo" },
];

export default function JpLayout({ children }: { children: React.ReactNode }) {
  const { nav, closeNav } = useJp();
  const onClick = () => {
    if (nav) closeNav();
  };
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
      <main onClick={onClick}>
        <Container>{children}</Container>
      </main>
    </div>
  );
}

const Logo = () => {
  return (
    <Link href="/jsonplaceholder" className="text-lg">
      Json<b>Placeholder</b>
    </Link>
  );
};

const NavBtn = () => {
  const { nav, closeNav, openNav } = useJp();
  const onClick = () => {
    if (nav) {
      closeNav();
    } else openNav();
  };
  return (
    <Button onClick={onClick} className="inline-block sm:hidden" size={"sm"} variant={"secondary"}>
      <div className={`${nav ? "rotate-180" : ""} transition`}>
        {nav ? <FaXmark className="size-4" /> : <FaBars className="size-4" />}
      </div>
    </Button>
  );
};

const NavContent = () => {
  const { nav } = useJp();
  const pathname = usePathname();
  const path2 = pathname.split("/")[2];
  return (
    <nav
      className={`${
        nav ? "scale-y-100" : "scale-y-0"
      } origin-top transition sm:scale-100 w-full clear-none flex flex-col sm:flex-row text-sm fixed gap-0 sm:gap-6 left-0 right-0 p-3 sm:p-0 sm:static top-16 bg-white sm:bg-inherit border-b sm:border-none`}
    >
      {navMenu.map((item, i) => (
        <Link
          key={i}
          href={item.href}
          className={`py-3 sm:py-0 hover:text-primary ${
            path2 === item.href.split("/")[2] ? "font-semibold text-primary" : "text-muted-foreground"
          }`}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
};
