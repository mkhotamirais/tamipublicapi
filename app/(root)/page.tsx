"use client";

import { Projects } from "@/components/home/projects";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/wrapper";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <main>
        <Container>
          <div className="h-[calc(100vh-4rem)] flex items-center justify-center">
            <div className="flex justify-center flex-col gap-8 items-center text-center">
              <div className="space-y-2">
                <h1 className="text2xl sm:text-3xl">
                  WELCOME{" "}
                  <b>
                    <i>WHO</i>
                  </b>{" "}
                  TO TAMI<b>PUBLICAPI</b>
                </h1>
                <p className="text-muted-foreground">
                  website ini berisi beberapa publci api yang ditampilkan dalam bentuk grid system dan tabel
                </p>
              </div>
              <div>
                <Button asChild className="rounded-full" variant={"default"} size={"lg"}>
                  <Link href="#projects">Explore</Link>
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </main>
      <section>
        <Container>
          <Projects />
        </Container>
      </section>
    </>
  );
}
