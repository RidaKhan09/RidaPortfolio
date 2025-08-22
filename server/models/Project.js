import mongoose from "mongoose";
const projectSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: String,
    image: String,
    link: String,
    github: String,
    tech: [String],  // ✅ added
  }, { timestamps: true });
  
  const Project = mongoose.model("Project", projectSchema);

export default Project;  // 👈 THIS IS IMPORTANT