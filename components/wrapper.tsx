"use client";

import React from "react";

export const Container = ({ children }: { children: React.ReactNode }) => {
  return <div className="max-w-6xl mx-auto h-full w-full px-2">{children}</div>;
};
