// src/components/Skills.jsx
import React from "react";
import { motion } from "framer-motion";
import {
  FaReact, FaNodeJs, FaGithub, FaFigma, FaWordpress,
  FaPython, FaJava, FaRegFileVideo
} from "react-icons/fa";
import {
  SiTailwindcss, SiNextdotjs, SiFramer, SiMongodb, SiCanva,
  SiAdobepremierepro, SiAdobeaftereffects, SiAdobelightroom,
  SiAdobephotoshop, SiNotion, SiVite, SiFirebase, SiUnrealengine,
  SiKotlin, SiSwift, SiHtml5, SiCss3, SiJavascript
} from "react-icons/si";

// Ensure this path is correct relative to Skills.jsx
import capcutLogo from "../assets/icons/capcut.svg";
import AnimatedTitle from "./AnimatedTitle";
// Import the background component
import CosmicBackground from "./CosmicBackground";

// Framer Motion variants
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

// SkillCard component (no changes needed internally)
const SkillCard = ({ icon, label }) => (
  <motion.div
    variants={item}
    whileHover={{ y: -10, scale: 1.05 }}
    transition={{ type: "spring", stiffness: 150, damping: 15 }}
    // CSS class handles base style and hover (now primary purple)
    className="w-40 h-40 skill-card-inspired backdrop-blur-lg rounded-2xl flex flex-col items-center justify-center text-center p-4 cursor-pointer overflow-hidden" // Added overflow-hidden just in case
  >
    {/* Icon class handles default and hover style (now secondary blue) */}
    <div className="text-4xl mb-2 skill-card-icon">{icon}</div>
    <p className="text-sm text-light/80">{label}</p>
  </motion.div>
);

// SkillsGroup component now receives titleClassName
const SkillsGroup = ({ title, skills, titleClassName = "text-light/90" }) => ( // Default to light/90
  <div className="mb-16">
    {/* Pass the className to AnimatedTitle */}
    <AnimatedTitle text={title} className={titleClassName} />
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      className="flex flex-wrap gap-6 justify-center"
    >
      {skills.map((skill, idx) => (
        <SkillCard key={idx} {...skill} />
      ))}
    </motion.div>
  </div>
);

// Main Skills component
const Skills = () => {
  return (
    // MODIFIED: Added relative positioning and isolation context for z-index
    <section
      id="skills"
      className="relative isolate py-40 px-6 md:px-20 bg-dark/80 overflow-hidden" // Added slightly opaque dark background, ensure overflow hidden
    >
      {/* Render CosmicBackground INSIDE the section */}
      <CosmicBackground />

      {/* Content needs to be relatively positioned with a z-index above the background */}
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          // Title glow still uses primary purple via CSS class
          className="text-4xl md:text-5xl font-bold text-center mb-20 text-light text-glow-primary-refined"
        >
          {/* Text primary for the first word */}
          <span className="text-primary">My</span> Skills
        </motion.h2>

        {/* Pass text-accent to the titles */}
        <SkillsGroup
          title="Core Languages & Dev Tools"
          titleClassName="text-accent" // Using ACCENT color
          skills={[
            { icon: <SiHtml5 />, label: "HTML" },
            { icon: <SiCss3 />, label: "CSS" },
            { icon: <SiJavascript />, label: "JavaScript" },
            { icon: <FaPython />, label: "Python" },
            { icon: <FaJava />, label: "Java" },
            { icon: <SiSwift />, label: "Swift" },
            { icon: <SiKotlin />, label: "Kotlin" },
            { icon: <FaGithub />, label: "GitHub" },
            { icon: <SiVite />, label: "Vite" },
            { icon: <SiNextdotjs />, label: "Next.js" },
            { icon: <SiFramer />, label: "Framer Motion" },
          ]}
        />

        <SkillsGroup
          title="Design & Creative Tools"
          titleClassName="text-accent" // Using ACCENT color
          skills={[
            { icon: <FaFigma />, label: "Figma" },
            { icon: <SiCanva />, label: "Canva" },
            { icon: <SiAdobephotoshop />, label: "Photoshop" },
            { icon: <SiAdobeaftereffects />, label: "After Effects" },
            { icon: <SiAdobepremierepro />, label: "Premiere Pro" },
            { icon: <SiAdobelightroom />, label: "Lightroom" },
            {
              icon: <img src={capcutLogo} alt="CapCut" className="w-8 h-8" />,
              label: "CapCut",
            },
          ]}
        />

         <SkillsGroup
           title="Game & Visual Tools"
           titleClassName="text-accent" // Using ACCENT color
           skills={[
             { icon: <SiUnrealengine />, label: "Unreal Engine" },
             { icon: <FaRegFileVideo />, label: "DaVinci Resolve" },
           ]}
         />

         <SkillsGroup
           title="Infra & Misc Tools"
           titleClassName="text-accent" // Using ACCENT color
           skills={[
             { icon: <SiFirebase />, label: "Firebase" },
             { icon: <SiMongodb />, label: "MongoDB" },
             { icon: <FaNodeJs />, label: "Node.js" },
             { icon: <SiTailwindcss />, label: "Tailwind CSS" },
             { icon: <FaReact />, label: "React" },
             { icon: <FaWordpress />, label: "WordPress" },
             { icon: <SiNotion />, label: "Notion" },
           ]}
         />
      </div>
    </section>
  );
};

export default Skills;