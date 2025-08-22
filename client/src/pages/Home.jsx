import React from "react";
import Hero from "../components/uiComponents/home/HeroSection";
import AboutMe from "../components/uiComponents/home/AboutMe";
import Features from "../components/uiComponents/home/FeaturesSection";
import Skills from "../components/uiComponents/home/SkillsSection";
import ProjectsSection from "../components/uiComponents/home/ProjectsSection";
import Contact from "../components/uiComponents/home/ContactSection";

function Home() {
  return (
    <div className="font-sans">
      <Hero />
      <AboutMe/>
      <Features/>
      <Skills />
      <ProjectsSection />
      <Contact />
      {/* Additional components can be added here */}
    </div>
   
  );
}

export default Home;
