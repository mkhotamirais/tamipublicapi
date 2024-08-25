import { menu } from "@/lib/menu";
import { Container } from "../wrapper";
import { Logo } from "./header";
import Link from "next/link";
import { Button } from "../ui/button";

export function Footer() {
  return (
    <footer className="items-center justify-center">
      <Container>
        <div className="flex gap-4 flex-col w-full h-full justify-center items-center border-t py-6">
          <Logo />
          <div className="flex flex-wrap justify-center items-center">
            {menu.map((item, i) => (
              <Button key={i} asChild variant={"link"} className="text-sm">
                <Link href={item.href} key={i}>
                  {item.title}
                </Link>
              </Button>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
