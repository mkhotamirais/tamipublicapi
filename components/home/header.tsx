import Link from "next/link";
import { Container } from "../wrapper";
import { FaEnvelope, FaGithub, FaGlobe, FaHouse, FaLinkedin, FaUser } from "react-icons/fa6";

export function Header() {
  return (
    <header className="z-50 h-16 border-b sticky top-0 backdrop-blur bg-white/15">
      <Container>
        <div className="flex justify-between items-center h-full">
          <Logo />
          <Socials />
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

export function NavRight({ source }: { source: string }) {
  return (
    <div className="flex gap-4">
      <a title="dummyjson homepage" href={source}>
        <FaGlobe className="size-5" />
      </a>
      <Link href="/">
        <FaHouse className="size-5" />
      </Link>
    </div>
  );
}

export const Socials = () => {
  return (
    <div className="flex gap-4 sm:gap-5 items-center justify-center">
      <a title="My Portfolio" href="https://tamiporto.vercel.app">
        <FaUser className="size-5" />
      </a>
      <a title="Github account" href="https://github.com/mkhotamirais">
        <FaGithub className="size-5" />
      </a>
      <a title="Linked account" href="https://www.linkedin.com/in/mkhotami-rais">
        <FaLinkedin className="size-5" />
      </a>
      <a title="Send email" href="mailto:tami01.job@gmail.com">
        <FaEnvelope className="size-5" />
      </a>
    </div>
  );
};
