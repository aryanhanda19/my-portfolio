// src/components/Projects.jsx
import React from "react";
import { motion } from "framer-motion";
import AnimatedTitle from "./AnimatedTitle"; // Assuming AnimatedTitle is in the same directory

// Dummy project data - Replace with your actual projects
const projectData = [
  {
    title: "Social Media Growth Platform",
    description: "A platform designed to accelerate social media presence and engagement.",
    imageUrl: "/images/project-placeholder-1.jpg", // Replace with actual image path in /public/images/
    projectUrl: "#", // Replace with link to live project or repo
    tags: ["React", "Node.js", "Analytics", "API"],
  },
  {
    title: "Better Designer Portfolio",
    description: "Portfolio template focused on clean design and showcasing visual work.",
    imageUrl: "/images/project-placeholder-2.jpg", // Replace with actual image path
    projectUrl: "#",
    tags: ["Framer", "UI/UX", "Web Design"],
  },
  {
    title: "Concept Project Alpha",
    description: "Exploring futuristic UI concepts and interactive elements.",
    imageUrl: "/images/project-placeholder-3.jpg", // Replace with actual image path
    projectUrl: "#",
    tags: ["React", "Three.js", "WebSockets"],
  },
  {
    title: "E-Commerce Storefront",
    description: "A modern storefront with focus on performance and user experience.",
    imageUrl: "/images/project-placeholder-4.jpg", // Replace with actual image path
    projectUrl: "#",
    tags: ["Next.js", "Tailwind CSS", "Stripe"],
  },
];

// Framer Motion variants for animations
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Slightly slower stagger for cards
      delayChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 50 }, // Start further down
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 50 }, // Spring animation
  },
};

// Project Card Component
const ProjectCard = ({ title, description, imageUrl, projectUrl, tags }) => (
  <motion.div
    variants={item}
    whileHover={{ y: -8, scale: 1.03 }} // Slightly different hover animation
    transition={{ type: "spring", stiffness: 200, damping: 15 }}
    className="project-card backdrop-blur-lg rounded-2xl overflow-hidden cursor-pointer flex flex-col" // Ensure flex column
  >
    <a href={projectUrl} target="_blank" rel="noopener noreferrer" className="block group">
      {/* Image Container */}
      <div className="w-full h-48 md:h-64 bg-dark/50 overflow-hidden"> {/* Fixed height container */}
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover object-center transition-transform duration-300 ease-in-out group-hover:scale-105" // Image covers container and scales on hover
        />
      </div>

      {/* Content Area */}
      <div className="p-5 flex flex-col flex-grow"> {/* Padding and allow content to grow */}
        <h3 className="text-xl font-semibold text-light mb-2">{title}</h3>
        <p className="text-light/70 text-sm mb-4 flex-grow">{description}</p> {/* Allow description to take space */}
        {/* Tags Area */}
        <div className="flex flex-wrap mb-4">
          {tags.map((tag, index) => (
            <span key={index} className="project-tag">{tag}</span>
          ))}
        </div>
         {/* View Project Link/Button (Optional) */}
         {/* You can style this link as a button if preferred */}
         <div className="mt-auto pt-2 border-t border-white/10"> {/* Push to bottom */}
            <span className="text-sm text-accent hover:underline"> {/* Using ACCENT color */}
              View Project &rarr;
            </span>
         </div>
      </div>
    </a>
  </motion.div>
);

// Main Projects Component
const Projects = () => {
  return (
    <section id="projects" className="relative py-32 px-6 md:px-20 bg-transparent">
      {/* Background element if needed (e.g., subtle gradient, noise) */}
      {/* <div className="absolute inset-0 -z-10 bg-gradient-to-b from-dark to-neutral-900" /> */}

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-light text-glow-primary-refined" // Using primary glow like Skills title
        >
          Featured <span className="text-primary">Projects</span> {/* Using PRIMARY color */}
        </motion.h2>

        {/* Projects Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }} // Trigger animation when 10% is visible
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10" // Responsive grid layout
        >
          {projectData.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;