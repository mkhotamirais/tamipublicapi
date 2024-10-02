import Link from "next/link";
import { FaGlobe, FaHouse } from "react-icons/fa6";
import { ModeToggle } from "../theme/mode-toggle";

export function Header() {
  return (
    <header className="z-50 border-b sticky top-0 backdrop-blur">
      <div className="container">
        <div className="flex justify-between items-center h-16">
          <Logo />
          <div>
            <ModeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}

export function Logo() {
  return (
    <Link href="/" className="text-lg font-semibold">
      TAMI<span className="text-primary">PUBLICAPI</span>
    </Link>
  );
}

export function NavRight({ href, title }: { href: string; title: string }) {
  return (
    <div className="flex items-center gap-4">
      <Link title={title} href={href}>
        <FaGlobe className="size-5" color="hsl(var(--primary))" />
      </Link>
      <Link href="/" title="Homepage">
        <FaHouse className="size-5" color="hsl(var(--primary))" />
      </Link>
      <div>
        <ModeToggle />
      </div>
    </div>
  );
}
