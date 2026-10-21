import type { Metadata } from "next";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { getPayload } from "payload";
import config from "@payload-config";
import { HomepageLivePreview } from "@/components/homepage/HomepageLivePreview";

export const dynamic = "force-dynamic";
export const revalidate = 0;
export const metadata: Metadata = {
  title: "Homepage Preview",
  robots: { index: false, follow: false, noarchive: true },
};

export default async function HomepagePreviewPage() {
  const requestHeaders = await headers();
  const payload = await getPayload({ config });
  const { user } = await payload.auth({ headers: requestHeaders });

  if (!user || user.collection !== "cms-users") {
    redirect("/admin/login?redirect=%2Fadmin%2Fglobals%2Fhomepage");
  }

  const initialData = await payload.findGlobal({
    slug: "homepage",
    depth: 0,
    overrideAccess: false,
    user,
  });

  // Match the browser's origin, including localhost ports and Vercel preview domains.
  const host =
    requestHeaders.get("x-forwarded-host") || requestHeaders.get("host");
  const protocol = requestHeaders.get("x-forwarded-proto") || "http";
  const serverURL = `${protocol}://${host}`;

  return (
    <HomepageLivePreview initialData={initialData} serverURL={serverURL} />
  );
}
