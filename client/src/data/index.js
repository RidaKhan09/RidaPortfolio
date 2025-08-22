
  // ---- SERVICES ----
  export const services = [
    {
      key: "graphic",
      title: "Graphic Designing",
      desc: "Creative designs for brands, posters & social media.",
      icon: "palette", // hint for icon selection in UI
    },
    {
      key: "basic-web",
      title: "Website Development (Basic)",
      desc: "Responsive sites with HTML, CSS, JS & Bootstrap.",
      icon: "laptop",
    },
    {
      key: "mern",
      title: "Website Development (MERN)",
      desc: "Full-stack apps with MongoDB, Express, React, Node.",
      icon: "code",
    },
  ];
  
  // ---- SKILLS ----
  // keep numbers (0–100). UI me % banayenge.
  export const technicalSkills = [
    { name: "HTML", level: 100 },
    { name: "CSS", level: 100 },
    { name: "JavaScript", level: 90 },
    { name: "Bootstrap", level: 100 },
    { name: "React", level: 85 },
    { name: "MongoDB", level: 75 },
  ];
  
  export const professionalSkills = [
    { name: "Team Work", level: 90 },
    { name: "Creativity", level: 80 },
    { name: "Communication", level: 80 },
    { name: "Project Management", level: 100 },
  ];
  
  // optional future:
  export const socials = {
    facebook: "#",
    instagram: "#",
    linkedin: "https://linkedin.com/in/rida-maham-908700278/",
    github: "#",
  };
  // data/index.js

export const projects = [
    {
      title: "Sentiment Vault",
      description:
        "A MERN stack app with Firebase for preserving digital memories of loved ones. Features digital profiles, QR codes, and AI-driven preservation.",
      tech: ["MongoDB", "Express", "React", "Node.js", "Firebase"],
      link: "https://your-link.com",
      github: "https://github.com/your-repo",
    },
    {
      title: "Dough Boys Restaurant",
      description:
        "Restaurant website with online ordering, menu display, and payment integration.",
      tech: ["Next.js", "Tailwind CSS", "Stripe"],
      link: "https://your-link.com",
      github: "https://github.com/your-repo",
    },
    {
      title: "Recipe Generator",
      description:
        "AI-powered recipe generation web app using OpenAI with coin-based system and Stripe integration.",
      tech: ["React", "Redux", "Node.js", "MongoDB", "OpenAI API"],
      link: "https://your-link.com",
      github: "https://github.com/your-repo",
    },
  ];

  // Sample blogs data
export const blogs = [
  {
    title: "Building a MERN Stack Portfolio",
    description:
      "Learn how I built my personal portfolio using MongoDB, Express, React, and Node.js with Tailwind CSS for styling and Redux for state management.",
    date: "August 2025",
    link: "https://your-blog-link.com/mern-portfolio", // Replace with your real blog link
  },
  {
    title: "Understanding React Hooks",
    description:
      "A deep dive into React hooks: useState, useEffect, and custom hooks to manage state and side-effects in modern React apps.",
    date: "July 2025",
    link: "https://your-blog-link.com/react-hooks",
  },
  {
    title: "Top 5 Tailwind CSS Tips",
    description:
      "Quick tips and tricks to make your Tailwind CSS workflow faster and your UI components look more polished.",
    date: "June 2025",
    link: "https://your-blog-link.com/tailwind-tips",
  },
  {
    title: "Getting Started with Node.js",
    description:
      "A beginner-friendly guide to setting up a Node.js server, connecting to MongoDB, and creating RESTful APIs.",
    date: "May 2025",
    link: "https://your-blog-link.com/nodejs-intro",
  },
  {
    title: "Deploying React Apps to Vercel",
    description:
      "Step-by-step guide to deploying your React applications to Vercel for free and optimizing performance.",
    date: "April 2025",
    link: "https://your-blog-link.com/vercel-deploy",
  },
];
