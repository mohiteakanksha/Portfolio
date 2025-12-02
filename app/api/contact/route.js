import { connectDB } from "../../../lib/mongodb";
import mongoose from "mongoose";

// Schema
const ContactSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
});

// Prevent model overwrite error in Next.js
const Contact =
  mongoose.models.Contact || mongoose.model("Contact", ContactSchema);

// GET Request Handler — fetch all contacts
export async function GET() {
  try {
    await connectDB();
    const contacts = await Contact.find().sort({ createdAt: -1 });
    return new Response(JSON.stringify(contacts), { status: 200 });
  } catch (error) {
    console.error("Error in GET /api/contact:", error);
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      { status: 500 }
    );
  }
}

// POST Request Handler — save contact
export async function POST(req) {
  try {
    console.log("API HIT");

    await connectDB();

    const { name, email, message } = await req.json();

    const newContact = await Contact.create({ name, email, message });

    return new Response(JSON.stringify({ success: true, data: newContact }), {
      status: 201,
    });
  } catch (error) {
    console.error("Error in POST /api/contact:", error);
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      { status: 500 }
    );
  }
}
