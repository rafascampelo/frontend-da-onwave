import { NextResponse, NextRequest } from "next/server";

export default function middleware(request) {
  const token = request.cookies.get("auth_token").value;

  const signinURL = new URL("/sign_in", request.url);

  if (!token) {
    if (request.nextUrl.pathname === "/sign_in") {
      return NextResponse.next();
    }

    return NextResponse.redirect(signinURL);
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/", "/screens/:path*"],
};
