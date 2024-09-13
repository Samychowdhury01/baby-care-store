import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(req: NextRequest) {
  const token = req.cookies.get("token");
  const { pathname } = req.nextUrl;

  // If there's no token and the user is trying to access a protected route
  if (!token && pathname.startsWith("/dashboard")) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  // If the user is already logged in, prevent them from accessing the login page
  if (token && pathname === "/login") {
    return NextResponse.redirect(new URL("/", req.url));
  }
  if (token && pathname === "/register") {
    return NextResponse.redirect(new URL("/", req.url));
  }

  return NextResponse.next(); // Proceed with the request
}

export const config = {
  matcher: ["/dashboard/:path*", "/login", "/register"], // Apply the middleware to these routes
};
