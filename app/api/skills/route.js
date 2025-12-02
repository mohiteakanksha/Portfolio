import { connectDB } from "../../../lib/mongodb";
import Skill from "../../../model/Skill";

export async function GET() {
  try {
    await connectDB();
    const skills = await Skill.findOne();
    return Response.json(skills || {});
  } catch (error) {
    return Response.json({ error: "Failed to load skills" }, { status: 500 });
  }
}

export async function POST(req) {
  try {
    await connectDB();
    const body = await req.json();

    let skills = await Skill.findOne();
    if (skills) {
      skills.frontend = body.frontend || [];
      skills.backend = body.backend || [];
      skills.database = body.database || [];
      skills.tools = body.tools || [];
      await skills.save();
    } else {
      skills = await Skill.create(body);
    }

    return Response.json({ message: "Skills saved!", skills });
  } catch (error) {
    return Response.json({ error: "Failed to save skills" }, { status: 500 });
  }
}
