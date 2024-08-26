"use client";

import { Container } from "@/components/wrapper";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function JpPage() {
  return (
    <main className="grow h-full">
      <Container>
        <div className="flex flex-col space-y-8 items-center justify-center py-12 h-full">
          <div>
            <h1 className="text-2xl font-bold text-center mb-8">Jsonplaceholder</h1>
            <div className="flex flex-col items-center gap-2">
              <Button asChild className="rounded-full w-32" size={"lg"}>
                <Link href="/jsonplaceholder/user">User</Link>
              </Button>
              <Button asChild className="rounded-full w-32" size={"lg"}>
                <Link href="/jsonplaceholder/post">Post</Link>
              </Button>
              <Button asChild className="rounded-full w-32" size={"lg"}>
                <Link href="/jsonplaceholder/todo">Todo</Link>
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}
