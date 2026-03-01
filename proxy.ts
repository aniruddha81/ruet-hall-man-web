import { type NextRequest, NextResponse } from "next/server";

const PROTECTED_ROUTE_PREFIXES = ["/dashboard"];

export function proxy(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  const isProtectedRoute = PROTECTED_ROUTE_PREFIXES.some((route) =>
    pathname.startsWith(route),
  );

  if (!isProtectedRoute) {
    return NextResponse.next();
  }

  const token = request.cookies.get("auth_token")?.value;

  if (!token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
  ],
};
