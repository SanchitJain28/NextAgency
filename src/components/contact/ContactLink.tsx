"use client";

import type { ComponentProps } from "react";
import { useContact } from "@/hooks/useContact";

type Props = Omit<ComponentProps<"a">, "href"> & {
  channel: "whatsapp" | "email" | "phone";
};

export function ContactLink({ channel, ...props }: Props) {
  const { waBase, email, telInternational } = useContact();
  const href =
    channel === "whatsapp"
      ? waBase
      : channel === "email"
        ? `mailto:${email}`
        : `tel:${telInternational}`;
  return <a {...props} href={href} />;
}
