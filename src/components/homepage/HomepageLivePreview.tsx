"use client";

import { useLivePreview } from "@payloadcms/live-preview-react";
import type { Homepage } from "@/payload-types";
import { homepagePreviewRequest } from "@/lib/cms/preview-data";
import { resolveHomepage } from "@/lib/cms/homepage-data";
import { HomepageSections } from "./HomepageSections";

export function HomepageLivePreview({
  initialData,
  serverURL,
}: {
  initialData: Homepage;
  serverURL: string;
}) {
  const { data } = useLivePreview<Homepage>({
    initialData,
    serverURL,
    apiRoute: "/api/cms",
    depth: 0,
    requestHandler: homepagePreviewRequest,
  });

  return <HomepageSections content={resolveHomepage(data)} />;
}
