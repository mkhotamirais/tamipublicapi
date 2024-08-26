import { menu } from "@/lib/menu";
import { Container } from "../wrapper";
import { Logo, Socials } from "./header";
import Link from "next/link";
import { Button } from "../ui/button";

export function Footer() {
  return (
    <footer className="items-center justify-center text-white bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-950 to-slate-600">
      <Container>
        <div className="flex gap-4 flex-col w-full h-full justify-center items-center py-6">
          <Logo />
          <div className="flex flex-wrap justify-center items-center">
            {menu.map((item, i) => (
              <Button key={i} asChild variant={"link"} className="text-sm text-white">
                <Link href={item.href} key={i}>
                  {item.title}
                </Link>
              </Button>
            ))}
          </div>
          <Socials />
        </div>
      </Container>
    </footer>
  );
}
