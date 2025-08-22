/* eslint-disable no-unused-vars */
import { useState } from "react";
import axios from "axios";

const Dashboard = () => {
  const [form, setForm] = useState({
    title: "",
    description: "",
    image: "",
    link: "",
    github: "",
    tech: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // convert tech string -> array
      const payload = { ...form, tech: form.tech.split(",").map((t) => t.trim()) };
      await axios.post("http://localhost:5000/api/projects", payload);
      alert("✅ Project added!");
      setForm({
        title: "",
        description: "",
        image: "",
        link: "",
        github: "",
        tech: "",
      });
    } catch (err) {
      console.error(err);
      alert("❌ Error adding project");
    }
  };

  return (
    <div className="p-6 bg-gradient-to-br from-gray-900 to-black text-white min-h-screen">
      <div className="max-w-2xl mx-auto bg-gray-800/50 backdrop-blur-md rounded-2xl p-8 shadow-lg border border-gray-700">
        <h1 className="text-3xl font-bold text-pink-500 mb-6 text-center">
          🚀 Admin Dashboard
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Project Title */}
          <input
            name="title"
            value={form.title}
            onChange={handleChange}
            placeholder="Project Title"
            className="w-full p-3 rounded-lg bg-gray-900 border border-gray-700 focus:border-pink-500 focus:ring-2 focus:ring-pink-500 outline-none"
            required
          />

          {/* Description */}
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            placeholder="Project Description"
            rows="3"
            className="w-full p-3 rounded-lg bg-gray-900 border border-gray-700 focus:border-pink-500 focus:ring-2 focus:ring-pink-500 outline-none"
            required
          />

          {/* Image URL */}
          <input
            name="image"
            value={form.image}
            onChange={handleChange}
            placeholder="Image URL"
            className="w-full p-3 rounded-lg bg-gray-900 border border-gray-700 focus:border-pink-500 focus:ring-2 focus:ring-pink-500 outline-none"
          />

          {/* Project Link */}
          <input
            name="link"
            value={form.link}
            onChange={handleChange}
            placeholder="Live Project Link"
            className="w-full p-3 rounded-lg bg-gray-900 border border-gray-700 focus:border-pink-500 focus:ring-2 focus:ring-pink-500 outline-none"
          />

          {/* GitHub Link */}
          <input
            name="github"
            value={form.github}
            onChange={handleChange}
            placeholder="GitHub Repo Link"
            className="w-full p-3 rounded-lg bg-gray-900 border border-gray-700 focus:border-pink-500 focus:ring-2 focus:ring-pink-500 outline-none"
          />

          {/* Tech Stack */}
          <input
            name="tech"
            value={form.tech}
            onChange={handleChange}
            placeholder="Tech Stack (comma separated e.g. React, Node.js, MongoDB)"
            className="w-full p-3 rounded-lg bg-gray-900 border border-gray-700 focus:border-pink-500 focus:ring-2 focus:ring-pink-500 outline-none"
          />

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-pink-500 hover:bg-pink-600 transition font-semibold"
          >
            ➕ Add Project
          </button>
        </form>
      </div>
    </div>
  );
};

export default Dashboard;
