/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    role: "Associate Software Engineer",
    company: "IIFA Tech",
    duration: "2025 - Present",
    desc: "Developed full-stack web applications using MERN stack, optimized frontend performance, and implemented secure authentication.",
  },
  {
    role: "Intern",
    company: "Blue IT Technologies",
    duration: "2024 - 2025",
    desc: "Worked on WordPress projects, learned professional coding standards, and contributed to client web solutions.",
  },
];

const Experience = () => (
  <section className="bg-black text-white py-20 px-6 sm:px-10 md:px-16">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl sm:text-4xl font-bold text-pink-500 mb-12 text-center">
        Experience
      </h2>

      <div className="relative border-l border-gray-700 ml-4">
        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
            className="mb-10 ml-6"
          >
            <span className="absolute -left-5 w-3 h-3 bg-pink-500 rounded-full mt-2"></span>
            <h3 className="text-xl sm:text-2xl font-semibold">{exp.role}</h3>
            <span className="text-gray-400">{exp.company} | {exp.duration}</span>
            <p className="text-gray-300 mt-2">{exp.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Experience;
