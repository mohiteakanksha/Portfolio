import mongoose from "mongoose";

const SkillSchema = new mongoose.Schema({
  frontend: [String],
  backend: [String],
  database: [String],
  tools: [String],
});

export default mongoose.models.Skill || mongoose.model("Skill", SkillSchema);
