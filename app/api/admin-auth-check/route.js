import { NextResponse } from "next/server";

export async function GET(req) {
  const adminCookie = req.cookies.get("admin")?.value; // ✅ FIXED

  if (adminCookie === "true") {
    return NextResponse.json({ isAdmin: true });
  }

  return NextResponse.json({ isAdmin: false });
}
