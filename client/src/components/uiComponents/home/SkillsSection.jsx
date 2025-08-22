/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { technicalSkills, professionalSkills } from "../../../data/index";

const Skills = () => {
  return (
    <section className="bg-black text-white py-16 px-6 sm:px-10 md:px-16">
      <div className="max-w-6xl mx-auto">
        
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-pink-500">
            My Skills
          </h2>
          <p className="text-gray-400 text-sm sm:text-base">
            Technical and Professional
          </p>
        </div>

        {/* Skills Wrapper */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Technical Skills */}
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold mb-6">
              Technical Skills
            </h3>
            <div className="space-y-6">
              {technicalSkills.map((s) => (
                <div key={s.name}>
                  <div className="flex justify-between text-sm sm:text-base mb-1">
                    <span>{s.name}</span>
                    <span>{s.level}%</span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-3">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${s.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1 }}
                      className="bg-pink-500 h-3 rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Professional Skills */}
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold mb-6">
              Professional Skills
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
              {professionalSkills.map((s) => (
                <div
                  key={s.name}
                  className="flex flex-col items-center text-center"
                >
                  <div className="w-20 h-20 sm:w-24 sm:h-24">
                    <CircularProgressbar
                      value={s.level}
                      text={`${s.level}%`}
                      styles={buildStyles({
                        textColor: "#fff",
                        pathColor: "#ec4899", // pink-500
                        trailColor: "#1f2937", // gray-800
                      })}
                    />
                  </div>
                  <p className="mt-3 text-sm sm:text-base">{s.name}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;
