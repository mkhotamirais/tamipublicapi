"use client";

import React from "react";
import { useJp } from "../useJp";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FaBars, FaXmark } from "react-icons/fa6";
import { usePathname } from "next/navigation";
import { navMenu } from "../constants";

export const JpLanding = ({ children }: { children: React.ReactNode }) => {
  const { nav, closeNav } = useJp();
  const onClick = () => {
    if (nav) closeNav();
  };
  return (
    <main onClick={onClick} className="grow container">
      {children}
    </main>
  );
};

export const NavBtn = () => {
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

export const NavContent = () => {
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
