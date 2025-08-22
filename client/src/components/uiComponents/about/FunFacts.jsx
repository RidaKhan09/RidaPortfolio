/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";

const facts = [
  { number: 12, label: "Projects Completed" },
  { number: 1, label: "Years of Experience" },
  { number: 5, label: "Certifications Earned" },
  { number: 8, label: "Happy Clients" },
];

const FunFacts = () => (
  <section className="bg-black text-white py-20 px-6 sm:px-10 md:px-16">
    <div className="max-w-6xl mx-auto text-center">
      <h2 className="text-3xl sm:text-4xl font-bold text-pink-500 mb-12">
        Fun Facts & Achievements
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
        {facts.map((fact, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
            className="bg-gray-900 p-6 rounded-2xl shadow-lg border border-gray-700 hover:border-pink-500 transition cursor-pointer"
          >
            <h3 className="text-3xl sm:text-4xl font-bold text-pink-500 mb-2">
              {fact.number}
            </h3>
            <p className="text-gray-300 text-sm sm:text-base">{fact.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default FunFacts;
