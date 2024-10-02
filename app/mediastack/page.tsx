import React from "react";
import { NewsList } from "./(components)/news-list";

export default function MediastackPage() {
  return (
    <div className="py-4">
      <h2 className="text-primary text-lg mb-2">Mediastack List</h2>
      <NewsList />
    </div>
  );
}
