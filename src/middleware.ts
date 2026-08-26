import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const queryCountry = request.nextUrl.searchParams.get("country");

  const headerCountry =
    request.headers.get("x-vercel-ip-country") ||
    request.headers.get("cf-ipcountry") ||
    request.headers.get("x-country-code");

  const cookieCountry = request.cookies.get("user-country")?.value;

  const country = (
    queryCountry ||
    cookieCountry ||
    headerCountry ||
    "IN"
  ).toUpperCase();

  const response = NextResponse.next();

  if (!cookieCountry || queryCountry) {
    response.cookies.set("user-country", country, {
      path: "/",
      maxAge: 60 * 60 * 24 * 30,
      sameSite: "lax",
    });
  }
  response.headers.set("x-user-country", country);

  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for:
     * - api routes (/api/*)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - metadata/icon files (favicon.ico, robots.txt, sitemap.xml, etc.)
     */
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|icons|logo|images).*)",
  ],
};
