import Link from "next/link";
import { Container } from "../wrapper";

export function Header() {
  return (
    <header className="z-50 h-16 border-b sticky top-0 backdrop-blur bg-white/15">
      <Container>
        <div className="flex justify-between items-center h-full">
          <Link href="/">
            <span>TAMI</span>
            <span className="font-bold">PUBLICAPI</span>
          </Link>
          <div>nav</div>
          <div>public api</div>
        </div>
      </Container>
    </header>
  );
}
