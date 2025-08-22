/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";

const educationData = [
  {
    degree: "BSc in Computer Science",
    institution: "Superior University University, Pakistan",
    duration: "2021 - 2025",
    desc: "Focused on full-stack web development, data structures, and software engineering principles.",
  },
  {
    degree: "FSC PRE ENGINEERING",
    institution: "Superior College, Pakistan",
    duration: "2019 - 2021",
    desc: "Specialized in Computer Science and Mathematics, with extracurricular coding projects.",
  },
];

const Education = () => (
  <section className="bg-black text-white py-20 px-6 sm:px-10 md:px-16">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl sm:text-4xl font-bold text-pink-500 mb-12 text-center">
        Education
      </h2>

      <div className="relative border-l border-gray-700 ml-4">
        {educationData.map((edu, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
            className="mb-10 ml-6"
          >
            <span className="absolute -left-5 w-3 h-3 bg-pink-500 rounded-full mt-2"></span>
            <h3 className="text-xl sm:text-2xl font-semibold">{edu.degree}</h3>
            <span className="text-gray-400">{edu.institution} | {edu.duration}</span>
            <p className="text-gray-300 mt-2">{edu.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Education;
