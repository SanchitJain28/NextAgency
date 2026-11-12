"use client";

import type { ComponentPropsWithoutRef } from "react";
import { useGeo } from "@/hooks/useGeo";

export function RegionalPrice({ region, ...props }: ComponentPropsWithoutRef<"span"> & { region: "in" | "intl" }) {
  const { isIndia } = useGeo();
  return (region === "in") === isIndia ? <span {...props} /> : null;
}
