import { NextResponse } from "next/server";

export async function GET(req) {
  const adminCookie = req.cookies.get("admin-auth")?.value;
  if (adminCookie === "true") {
    return NextResponse.json({ isAdmin: true });
  } else {
    return NextResponse.json({ isAdmin: false });
  }
}
