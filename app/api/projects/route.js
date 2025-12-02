import { connectDB } from "../../../lib/mongodb";
import Project from "../../../model/Project";

// GET: fetch all projects
export async function GET() {
  try {
    await connectDB();
    const projects = await Project.find().sort({ createdAt: -1 });
    return new Response(JSON.stringify({ projects }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Failed to fetch projects" }), { status: 500 });
  }
}

// POST: add new project
export async function POST(req) {
  try {
    await connectDB();
    const data = await req.json();
    const newProject = new Project(data);
    await newProject.save();
    return new Response(JSON.stringify({ message: "Project added successfully" }), { status: 201 });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Failed to add project" }), { status: 500 });
  }
}

// PUT: edit existing project
export async function PUT(req) {
  try {
    await connectDB();
    const { id, ...data } = await req.json();
    await Project.findByIdAndUpdate(id, data, { new: true });
    return new Response(JSON.stringify({ message: "Project updated successfully" }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Failed to update project" }), { status: 500 });
  }
}

// DELETE: delete project
export async function DELETE(req) {
  try {
    await connectDB();
    const { id } = await req.json();
    await Project.findByIdAndDelete(id);
    return new Response(JSON.stringify({ message: "Project deleted successfully" }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Failed to delete project" }), { status: 500 });
  }
}
