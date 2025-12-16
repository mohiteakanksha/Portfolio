import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Project from "@/model/Project";

// 🔹 GET SINGLE PROJECT (FOR EDIT)
export async function GET(req, { params }) {
  try {
    await connectDB();

    const project = await Project.findById(params.id);

    if (!project) {
      return NextResponse.json(
        { message: "Project not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(project, { status: 200 });
  } catch (error) {
    console.error("GET PROJECT ERROR:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}

// 🔹 UPDATE PROJECT
export async function PUT(req, { params }) {
  try {
    await connectDB();
    const body = await req.json();

    const updatedProject = await Project.findByIdAndUpdate(
      params.id,
      body,
      { new: true }
    );

    return NextResponse.json(updatedProject, { status: 200 });
  } catch (error) {
    console.error("UPDATE PROJECT ERROR:", error);
    return NextResponse.json(
      { message: "Update failed" },
      { status: 500 }
    );
  }
}
