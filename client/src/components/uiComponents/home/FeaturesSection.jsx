/* eslint-disable no-unused-vars */
import { Palette, Laptop, Code } from "lucide-react";
import { services } from "../../../data/index";
import { motion } from "framer-motion";

const iconMap = {
  palette: Palette,
  laptop: Laptop,
  code: Code,
};

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const OurServices = () => (
  <section className="bg-black text-white py-20 px-6">
    <div className="max-w-6xl mx-auto text-center">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-3xl sm:text-4xl font-bold text-pink-500 mb-12"
      >
        My Services
      </motion.h2>

      {/* Service Cards */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid sm:grid-cols-2 md:grid-cols-3 gap-8"
      >
        {services.map((s) => {
          const Icon = iconMap[s.icon] ?? Code;
          return (
            <motion.div
              key={s.key}
              variants={cardVariants}
              whileHover={{ scale: 1.05, boxShadow: "0px 0px 25px rgba(236,72,153,0.5)" }}
              className="bg-gray-900 p-8 rounded-2xl shadow-lg transition cursor-pointer"
            >
              <div className="flex justify-center mb-5">
                <Icon className="w-12 h-12 text-pink-500" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-3">{s.title}</h3>
              <p className="text-sm sm:text-base text-gray-400">{s.desc}</p>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  </section>
);

export default OurServices;
