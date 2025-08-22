// components/ProjectsSection.jsx
import React from "react";
import { projects } from "../../../data/index";
import { ExternalLink, Github } from "lucide-react";

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-16 sm:py-20 bg-black">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 text-center">
        
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-extrabold text-pink-500 mb-12 sm:mb-16">
          🚀 Latest Projects
        </h2>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative bg-gradient-to-br from-gray-900 to-gray-800 p-6 sm:p-8 rounded-2xl shadow-lg border border-gray-700 hover:border-pink-500 transition group"
            >
              {/* Title */}
              <h3 className="text-xl sm:text-2xl font-semibold text-white mb-3 group-hover:text-pink-400 transition">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 mb-6 text-sm sm:text-base leading-relaxed">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap justify-center gap-2 mb-6">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="text-xs sm:text-sm bg-gray-800 text-pink-400 px-3 py-1 rounded-full border border-gray-600"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex justify-center gap-6">
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-sm sm:text-base text-pink-400 hover:text-white transition"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-sm sm:text-base text-gray-400 hover:text-white transition"
                  >
                    <Github size={16} />
                    GitHub
                  </a>
                )}
              </div>

              {/* Glow hover effect */}
              <div className="absolute inset-0 rounded-2xl bg-pink-500 opacity-0 group-hover:opacity-10 blur-xl transition"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
