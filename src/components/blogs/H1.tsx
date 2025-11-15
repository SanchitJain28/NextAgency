import React from "react";

export default function Heading1({ children }: { children: React.ReactNode }) {
  return <h1 className="text-4xl font-bold mb-4">{children}</h1>;
}
