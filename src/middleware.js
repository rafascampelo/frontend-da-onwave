import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function middleware(req) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
  const { pathname } = req.nextUrl;

  if (!token && pathname !== "/login" && pathname !== "/") {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  if (token && (pathname === "/" || pathname === "/login")) {
    return NextResponse.redirect(new URL("/homeScreen", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon\\.ico).*)"],
};
