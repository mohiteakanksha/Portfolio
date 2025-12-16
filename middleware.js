import { NextResponse } from "next/server";

export function middleware(req) {
  const adminAuth = req.cookies.get("admin-auth")?.value;
  const pathname = req.nextUrl.pathname;

  // 🔒 Protect admin dashboard
  if (pathname.startsWith("/admin-dashboard") && adminAuth !== "true") {
    return NextResponse.redirect(
      new URL("/x7h9-admin-secret-login", req.url)
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin-dashboard/:path*"],
};
