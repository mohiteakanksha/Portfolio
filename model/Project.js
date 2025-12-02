import mongoose from "mongoose";

const ProjectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  image: String,
  tags: [String],
  desc: { type: String, required: true },
  codeLink: String,
  liveLink: String,
}, { timestamps: true });

// Prevent model overwrite issue in Next.js dev
export default mongoose.models.Project || mongoose.model("Project", ProjectSchema);
