"use client";

import { PuffLoader } from "react-spinners";
export default function Loader() {
  return (
    <div className="grow flex w-full justify-center mt-12">
      <PuffLoader color={"hsl(var(--primary))"} />
    </div>
  );
}
