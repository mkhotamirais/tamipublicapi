import Link from "next/link";
import { Container } from "../wrapper";
import { FaGithub } from "react-icons/fa6";

export function Header() {
  return (
    <header className="z-50 h-16 border-b sticky top-0 backdrop-blur bg-white/15">
      <Container>
        <div className="flex justify-between items-center h-full">
          <Logo />
          <a href="https://github.com/mkhotamirais/tamipublicapi" title="source code">
            <FaGithub className="size-5" />
          </a>
        </div>
      </Container>
    </header>
  );
}

export function Logo() {
  return (
    <Link href="/">
      <span>TAMI</span>
      <span className="font-bold">PUBLICAPI</span>
    </Link>
  );
}
