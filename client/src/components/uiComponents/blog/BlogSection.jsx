import React from "react";
import { blogs } from "../../../data/index"; // Adjust the import path as necessary
import { ExternalLink } from "lucide-react";

const BlogPage = () => {
  const featuredPost = blogs[0];
  const otherPosts = blogs.slice(1);

  return (
    <section className="bg-black text-white min-h-screen px-6 sm:px-10 md:px-16 py-20">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl font-bold text-pink-500 mb-4 text-center">
          My Blog
        </h1>
        <p className="text-gray-400 text-sm sm:text-base mb-12 text-center">
          Insights, tutorials, and projects updates from my dev journey
        </p>

        {/* Featured Blog */}
        {featuredPost && (
          <div className="relative mb-16 bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl shadow-lg p-6 sm:p-8 border border-gray-700 hover:border-pink-500 transition group">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 group-hover:text-pink-400 transition">
              {featuredPost.title}
            </h2>
            <p className="text-gray-400 mb-6 text-sm sm:text-base leading-relaxed">
              {featuredPost.description}
            </p>
            <div className="flex justify-between items-center flex-wrap gap-4">
              <span className="text-gray-500 text-xs sm:text-sm">{featuredPost.date}</span>
              <a
                href={featuredPost.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-pink-400 hover:text-white transition text-sm sm:text-base"
              >
                <ExternalLink size={16} />
                Read More
              </a>
            </div>
            <div className="absolute inset-0 rounded-2xl bg-pink-500 opacity-0 group-hover:opacity-10 blur-xl transition pointer-events-none"></div>
          </div>
        )}

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {otherPosts.map((blog, index) => (
            <div
              key={index}
              className="relative bg-gradient-to-br from-gray-900 to-gray-800 p-6 sm:p-8 rounded-2xl shadow-lg border border-gray-700 hover:border-pink-500 transition group"
            >
              <h3 className="text-xl sm:text-2xl font-semibold text-white mb-3 group-hover:text-pink-400 transition">
                {blog.title}
              </h3>
              <p className="text-gray-400 mb-4 text-sm sm:text-base leading-relaxed">
                {blog.description}
              </p>
              <div className="flex justify-between items-center flex-wrap gap-4">
                <span className="text-gray-500 text-xs sm:text-sm">{blog.date}</span>
                <a
                  href={blog.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-pink-400 hover:text-white transition text-sm sm:text-base"
                >
                  <ExternalLink size={16} />
                  Read More
                </a>
              </div>
              <div className="absolute inset-0 rounded-2xl bg-pink-500 opacity-0 group-hover:opacity-10 blur-xl transition pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPage;
