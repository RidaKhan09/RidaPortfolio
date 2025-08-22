import React, { useState } from "react";
import { FaEnvelope, FaBehance, FaLinkedin, FaGithub } from "react-icons/fa";
import axios from "axios";

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  // Input change handler
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      await axios.post("http://localhost:5000/api/contact", formData);
      setStatus("✅ Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      console.error(err);
      setStatus("❌ Failed to send message.");
    }
  };

  return (
    <section
      id="contact"
      className="bg-black text-white min-h-screen px-6 sm:px-10 md:px-16 py-20"
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl font-bold text-pink-500 mb-4 text-center">
          Let’s Connect 💌
        </h1>
        <p className="text-gray-400 text-sm sm:text-base mb-12 text-center">
          Have a project in mind or just want to say hi? Reach out!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-12">
          {/* Left - Contact Info */}
          <div className="space-y-6 text-gray-300">
            <h2 className="text-2xl font-semibold text-white">Get In Touch</h2>
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
                <span className="text-gray-400">+92 312 4253083</span>
              </li>
              <li>
                <span className="font-bold text-pink-500">🌐 Socials:</span>
                <div className="flex gap-4 pt-2 flex-wrap">
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

          {/* Right - Contact Form */}
          <div className="bg-gray-900/70 backdrop-blur-md border border-gray-700 rounded-2xl shadow-2xl p-6 sm:p-8">
            <form onSubmit={handleSubmit} className="space-y-5">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:border-pink-500 focus:ring-2 focus:ring-pink-500 outline-none text-sm sm:text-base"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:border-pink-500 focus:ring-2 focus:ring-pink-500 outline-none text-sm sm:text-base"
              />
              <textarea
                rows="5"
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:border-pink-500 focus:ring-2 focus:ring-pink-500 outline-none text-sm sm:text-base"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-pink-500 hover:bg-pink-600 text-white py-3 rounded-lg font-semibold shadow-lg transition"
              >
                Send Message 🚀
              </button>
            </form>
            {status && (
              <p className="text-center mt-4 text-sm text-gray-300">{status}</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
