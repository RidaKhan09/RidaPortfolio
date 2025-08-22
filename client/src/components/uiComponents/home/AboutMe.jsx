/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import pic from "../../../assets/images/pic.png";

const AboutMe = () => {
  return (
    <section className="bg-black text-white py-16 px-6 sm:px-10 md:px-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center md:justify-start"
        >
          <img
            src={pic}
            alt="Profile"
            className="w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 object-cover rounded-2xl shadow-lg border-2 border-pink-500"
          />
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-pink-500">
            About Me
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed mb-4">
            Hi, I’m <span className="text-pink-400 font-semibold">Rida</span> — 
            a passionate <span className="text-pink-400">MERN Stack Developer</span> 
            with a knack for building modern, scalable and visually appealing 
            web applications. I love blending creativity with functionality to 
            deliver meaningful digital experiences.
          </p>

          <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed mb-6">
            With experience in <span className="text-pink-400">React, Node.js, MongoDB,</span> 
            and <span className="text-pink-400">Express</span>, I thrive on creating 
            full-stack solutions that solve real-world problems. 
          </p>

          <div className="flex justify-center md:justify-start">
            <button className="bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 px-6 rounded-full shadow-md transition-all text-sm sm:text-base">
              Download CV
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMe;
