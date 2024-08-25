import { Globe } from "lucide-react";
import React from "react";

export default function TmdbLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <header className="h-16 flex justify-between border-b">
        <div>Tmdb</div>
        <div>
          <Globe />
        </div>
      </header>
      <div>{children}</div>
    </div>
  );
}
