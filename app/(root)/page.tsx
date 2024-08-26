"use client";

import { Header } from "@/components/home/header";
import { Projects } from "@/components/home/projects";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/wrapper";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="py-8">
        <Container>
          <div className="text-center py-6">
            <h1 className="text-2xl sm:text-3xl mb-3">
              WELCOME{" "}
              <b>
                <i></i>
              </b>{" "}
              TO TAMI<b>PUBLICAPI</b>
            </h1>
            <p className="text-muted-foreground">
              This website features various public APIs displayed in a grid layout and table format.
            </p>
          </div>
          <Projects />
        </Container>
      </main>
    </>
  );
}
