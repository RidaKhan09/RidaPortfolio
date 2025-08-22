import { FaEnvelope, FaBehance, FaLinkedin, FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-black text-gray-300 py-8 mt-10 border-t border-gray-800">
      <div className="max-w-6xl mx-auto text-center px-4">
        <h2 className="text-lg md:text-xl font-semibold mb-2 text-white">
          Let’s Connect!
        </h2>
        <p className="text-gray-400 mb-4 text-sm">
          © {new Date().getFullYear()} Rida Dev Portfolio. All Rights Reserved.
        </p>
        <div className="flex justify-center gap-4 pt-4 flex-wrap">
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
        <div className="h-[2px] w-28 bg-gradient-to-r from-pink-400 to-purple-400 mx-auto rounded-full animate-pulse mt-6"></div>
      </div>
    </footer>
  );
}

export default Footer;
