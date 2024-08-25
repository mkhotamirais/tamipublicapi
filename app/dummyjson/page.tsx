import { Container } from "@/components/wrapper";
import { Suspense } from "react";
import Loader from "@/components/loader";
import DummyjsonList from "./(components)/dummyjson-list";

export default async function DummyjsonPage() {
  return (
    <main className="grow">
      <Container>
        <div className="flex items-center justify-center py-12">
          <Suspense fallback={<Loader />}>
            <DummyjsonList />
          </Suspense>
        </div>
      </Container>
    </main>
  );
}
