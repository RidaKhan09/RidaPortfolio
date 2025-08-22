// Contact.jsx
import React from "react";
import { FaEnvelope, FaBehance, FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="py-16 sm:py-20 bg-black">
      <div className="max-w-6xl mx-auto px-6 sm:px-10">
        {/* Title */}
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 sm:mb-16 text-pink-500">
          Let’s Work Together 💌
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-12">
          {/* Left side - contact info */}
          <div className="text-gray-300 space-y-6">
            <h3 className="text-2xl font-semibold text-white">Get In Touch</h3>
            <p className="text-gray-400 leading-relaxed">
              Whether you want to discuss a project, collaborate, or just say hi
              — my inbox is always open.
            </p>

            <ul className="space-y-4">
              <li>
                <span className="font-bold text-pink-500">📧 Email:</span>{" "}
                <a
                  href="mailto:krida2686@gmail.com"
                  className="hover:underline hover:text-pink-400 transition"
                >
                  krida2686@gmail.com
                </a>
              </li>
              <li>
                <span className="font-bold text-pink-500">📱 Phone:</span>{" "}
                <span className="text-gray-400">+92 300 1234567</span>
              </li>
              <li>
                <span className="font-bold text-pink-500">🌐 Socials:</span>
                <div className="flex gap-4 pt-4 flex-wrap">
                  {[
                    {
                      icon: <FaEnvelope size={20} />,
                      link: "mailto:krida2686@gmail.com",
                    },
                    {
                      icon: <FaBehance size={20} />,
                      link: "https://www.behance.net/riakhan1",
                    },
                    {
                      icon: <FaLinkedin size={20} />,
                      link: "https://www.linkedin.com/in/rida-maham-908700278/",
                    },
                    {
                      icon: <FaGithub size={20} />,
                      link: "https://github.com/RidaKhan09",
                    },
                  ].map((s, i) => (
                    <a
                      key={i}
                      href={s.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 border-2 border-pink-500 rounded-lg hover:bg-pink-500 hover:text-white transition"
                    >
                      {s.icon}
                    </a>
                  ))}
                </div>
              </li>
            </ul>
          </div>

          {/* Right side - contact form */}
          <div className="bg-gray-900/70 backdrop-blur-md border border-gray-700 rounded-2xl shadow-2xl p-6 sm:p-8">
            <form className="space-y-5">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:border-pink-500 focus:ring-2 focus:ring-pink-500 outline-none text-sm sm:text-base"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:border-pink-500 focus:ring-2 focus:ring-pink-500 outline-none text-sm sm:text-base"
              />
              <textarea
                rows="5"
                placeholder="Your Message"
                className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:border-pink-500 focus:ring-2 focus:ring-pink-500 outline-none text-sm sm:text-base"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-pink-500 hover:bg-pink-600 text-white py-3 rounded-lg font-semibold shadow-lg transition"
              >
                Send Message 🚀
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
