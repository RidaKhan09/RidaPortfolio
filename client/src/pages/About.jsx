import React from "react";
import AboutMe from "../components/uiComponents/home/AboutMe";
import Experience from "../components/uiComponents/about/ExperienceSection";
import Education from "../components/uiComponents/about/EducationSection";
import Skills from "../components/uiComponents/home/SkillsSection"; // reuse existing
import FunFacts from "../components/uiComponents/about/FunFacts";

function About() {
  return (
    <div className="font-sans bg-black text-white">
      <AboutMe />
      <Experience />
      <Education />
      <Skills />
      <FunFacts />
    </div>
  );
}

export default About;
