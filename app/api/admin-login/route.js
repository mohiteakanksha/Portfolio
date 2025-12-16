import { NextResponse } from "next/server";

export async function POST(req) {
  const { email, password } = await req.json();

  const ADMIN_EMAIL = process.env.ADMIN_EMAIL;
  const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;

  if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
    const res = NextResponse.json({ success: true });

    res.cookies.set("admin-auth", "true", {
      httpOnly: true,
      path: "/",
      maxAge: 60 * 60 * 24, // 1 day
    });

    return res;
  }

  return NextResponse.json(
    { message: "Invalid admin credentials" },
    { status: 401 }
  );
}

export async function GET(req) {
  const isAdmin = req.cookies.get("admin-auth")?.value === "true";
  return NextResponse.json({ isAdmin });
}
