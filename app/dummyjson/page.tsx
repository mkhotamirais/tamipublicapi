import { Container } from "@/components/wrapper";
import List from "./list";
import Link from "next/link";
import { Globe } from "lucide-react";

export default async function DummyjsonPage() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const response = await fetch("https://dummyjson.com/posts?limit=10");
  const data = await response.json();

  return (
    <div className="bg-slate-100">
      <Container>
        <div className="bg-white min-h-screen px-3">
          <header className="h-16 flex items-center justify-between">
            <Link href="/dummyjson">Dummyjson</Link>
            <a title="dummyjson homepage" href="https://dummyjson.com/">
              <Globe />
            </a>
          </header>
          <List data={data} />
        </div>
      </Container>
    </div>
  );
}
