import React from "react";

export default function Heading3({ children }: { children: React.ReactNode }) {
  return <h1 className="text-2xl font-bold mb-4">{children}</h1>;
}
