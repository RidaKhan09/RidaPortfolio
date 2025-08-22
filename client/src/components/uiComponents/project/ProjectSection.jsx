import React, { useState, useEffect } from "react";
import axios from "axios";
import { ExternalLink, Github } from "lucide-react";

const techFilters = ["All", "MERN Stack", "HTML", "MongoDB", "Express",];

const ProjectsPage = () => {
  const [projects, setProjects] = useState([]);
  const [filter, setFilter] = useState("All");
  const [expanded, setExpanded] = useState({}); // for Read More toggle

  // Fetch projects from backend
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/projects")
      .then((res) => setProjects(res.data))
      .catch((err) => console.error("Error fetching projects:", err));
  }, []);

  // Filter logic
  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((p) => p.tech && p.tech.includes(filter));

  const toggleExpand = (index) => {
    setExpanded((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <section className="bg-black text-white py-20 px-6 sm:px-10 md:px-16 min-h-screen">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl font-bold text-pink-500 mb-8">
          My Projects
        </h1>
        <p className="text-gray-400 text-sm sm:text-base mb-12">
          Here’s a collection of some of my latest works and projects.
        </p>

        {/* Tech Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {techFilters.map((tech, i) => (
            <button
              key={i}
              className={`px-4 py-2 rounded-full text-sm sm:text-base border ${
                filter === tech
                  ? "bg-pink-500 border-pink-500 text-white"
                  : "border-gray-600 text-gray-300"
              }`}
              onClick={() => setFilter(tech)}
            >
              {tech}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => {
            const isExpanded = expanded[index] || false;
            const shortDesc =
              project.description && project.description.length > 100
                ? project.description.slice(0, 100) + "..."
                : project.description;

            return (
              <div
                key={index}
                className="relative flex flex-col bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl shadow-lg border border-gray-700 overflow-hidden"
              >
                {/* Image */}
                {project.image && (
                  <img
                    src={`http://localhost:5000${project.image}`}
                    alt={project.title}
                    className="w-full h-48 object-cover rounded-t-2xl"
                  />
                )}

                <div className="p-6 sm:p-8 flex flex-col flex-grow">
                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-semibold text-white mb-3">
                    {project.title}
                  </h3>

                  {/* Description with Read More */}
                  <p className="text-gray-400 mb-4 text-sm sm:text-base leading-relaxed">
                    {isExpanded ? project.description : shortDesc}
                  </p>
                  {project.description &&
                    project.description.length > 100 && (
                      <button
                        onClick={() => toggleExpand(index)}
                        className="text-pink-400 text-sm underline mb-4"
                      >
                        {isExpanded ? "Read Less" : "Read More"}
                      </button>
                    )}

                  {/* Tech Stack */}
                  {project.tech && (
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
                  )}

                  {/* Links */}
                  <div className="flex justify-center gap-6 mt-auto">
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 text-sm sm:text-base text-pink-400"
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
                        className="flex items-center gap-2 text-sm sm:text-base text-gray-400"
                      >
                        <Github size={16} />
                        GitHub
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsPage;
