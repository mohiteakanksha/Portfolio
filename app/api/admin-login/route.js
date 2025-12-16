import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { email, password } = await req.json();

    const ADMIN_EMAIL = process.env.ADMIN_EMAIL;
    const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;

    if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
      const res = NextResponse.json({ success: true });

      // ✅ SET COOKIE
     res.cookies.set("admin-auth", "true", {
  httpOnly: true,
  path: "/",
  sameSite: "lax",
  maxAge: 60 * 60 * 2,
});


      return res;
    }

    return NextResponse.json({ success: false }, { status: 401 });
  } catch (err) {
    return NextResponse.json(
      { success: false, error: "Server error" },
      { status: 500 }
    );
  }
}
