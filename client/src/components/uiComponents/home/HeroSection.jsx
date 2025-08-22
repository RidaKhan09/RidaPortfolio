/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { FaEnvelope, FaBehance, FaLinkedin, FaGithub } from "react-icons/fa";
import pic from "../../../assets/images/pic.png";
import mycv from "../../../assets/pdf/mycv.pdf"; // Ensure this path is correct

function Hero() {
  return (
    <section className="bg-black text-white px-6 py-4 shadow-mdr  sm:px-10 md:px-16 py-12">
      <div className="max-w-6xl mx-auto flex justify-between items-center md:grid-cols-2 gap-12 items-center">
        
        {/* LEFT CONTENT */}
        <div className="space-y-6 text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            Hi! I'm <span className="text-pink-500">Rida Maham</span>
          </h1>
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold">
            And I'm a{" "}
            <span className="text-pink-500">Software Engineer</span>
          </h2>
          <p className="text-gray-300 max-w-md mx-auto md:mx-0 text-sm sm:text-base">
            I am a Full Stack Web Developer specializing in the MERN stack
            (MongoDB, Express.js, React, Node.js) with 1 year of hands-on
            experience.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href={mycv} // Ensure this path is correct
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-pink-500 text-white font-semibold rounded-lg shadow-lg hover:bg-pink-600 transition text-sm sm:text-base"
            >
              Download CV
            </a>
            <a
              href="mailto:krida2686@gmail.com"
              className="px-6 py-3 bg-transparent border-2 border-pink-500 text-pink-500 font-semibold rounded-lg shadow-lg hover:bg-pink-600 hover:text-white transition text-sm sm:text-base"
            >
              Hire Me Now!
            </a>
          </div>

          {/* SOCIAL ICONS */}
          <div className="flex gap-4 justify-center md:justify-start pt-4 flex-wrap">
            <a
              href="mailto:krida2686@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 border-2 border-pink-500 rounded-lg hover:bg-pink-500 hover:text-white transition"
            >
              <FaEnvelope size={20} />
            </a>
            <a
              href="https://www.behance.net/riakhan1"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 border-2 border-pink-500 rounded-lg hover:bg-pink-500 hover:text-white transition"
            >
              <FaBehance size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/rida-maham-908700278/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 border-2 border-pink-500 rounded-lg hover:bg-pink-500 hover:text-white transition"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="https://github.com/RidaKhan09"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 border-2 border-pink-500 rounded-lg hover:bg-pink-500 hover:text-white transition"
            >
              <FaGithub size={20} />
            </a>
          </div>
        </div>

        {/* RIGHT IMAGE (hidden on mobile, visible from md+) */}
        <div className="hidden md:flex justify-center md:justify-end relative">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -inset-6 sm:-inset-8 bg-pink-500 rounded-full blur-3xl opacity-30 animate-pulse"></div>
            <img
              src={pic}
              alt="Rida Maham"
              className="relative z-10 rounded-2xl w-64 sm:w-80 md:w-[26rem] shadow-lg"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
