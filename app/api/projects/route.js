import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Project from "@/model/Project";

// 🔹 GET ALL PROJECTS
export async function GET() {
  try {
    await connectDB();
    const projects = await Project.find().sort({ createdAt: -1 });
    return NextResponse.json({ projects });
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch" }, { status: 500 });
  }
}

// 🔹 ADD PROJECT
export async function POST(req) {
  try {
    await connectDB();
    const body = await req.json();
    const project = await Project.create(body);
    return NextResponse.json(project);
  } catch (error) {
    return NextResponse.json({ error: "Failed to create" }, { status: 500 });
  }
}

// 🔹 DELETE PROJECT
export async function DELETE(req) {
  try {
    await connectDB();
    const { id } = await req.json();
    await Project.findByIdAndDelete(id);
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: "Delete failed" }, { status: 500 });
  }
}
