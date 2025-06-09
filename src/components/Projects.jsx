// src/components/Projects.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedTitle from "./AnimatedTitle"; // Optional

const projectData = [
  {
    title: "One Piece Tribute (Cinematic)",
    description:
      "Large-scale Unreal Engine 5 environment inspired by One Piece, featuring buoyant ships, island terrain, Niagara FX, and Chaos Physics. Includes dynamic camera sequences, lighting, and cinematic editing in Premiere Pro.",
    imageUrl: "/project_images/OnePiece.png",
    projectUrl:
      "https://www.linkedin.com/feed/update/urn:li:activity:7307418603811655680/",
    tags: [
      "Unreal Engine 5",
      "Blueprint",
      "Niagara FX",
      "Chaos Physics",
      "Sequencer",
      "Premiere Pro",
    ],
  },
  {
    title: "Beautiful Abandoned House",
    description:
      "Atmospheric 3D environment designed in Unreal Engine with modular assets, decals, and foliage. Enhanced with color grading and sound design in Adobe Premiere Pro.",
    imageUrl: "/project_images/HouseUnreal.png",
    projectUrl:
      "https://www.linkedin.com/feed/update/urn:li:activity:7282896607581249536/",
    tags: [
      "Unreal Engine",
      "Modular Design",
      "Environment Art",
      "Premiere Pro",
    ],
  },
  {
    title: "Book Review Web App",
    description:
      "React-based application leveraging Google Books API to browse, review, and manage personal libraries. Built with responsive design and smooth API integration.",
    imageUrl: "/project_images/BookReview.png",
    projectUrl:
      "https://github.com/aryanhanda19/Book-Review-React-App-main",
    tags: ["React", "Google Books API", "JavaScript", "CSS"],
  },
  {
    title: "Uber Replica (iOS)",
    description:
      "Prototype ride-booking app built in Swift with wallet functionality, map services, user profiles, and real-time booking simulation using Firebase.",
    imageUrl: "/project_images/Uber.JPG",
    projectUrl: "https://github.com/aryanhanda19/UberReplicate",
    tags: ["Swift", "iOS", "Firebase", "UI Design", "MapKit"],
  },
  {
    title: "True Personality App",
    description:
      "Web app with quiz logic and result-based feedback system. Built using React and dynamic conditional rendering to offer tailored user insights.",
    imageUrl: "/project_images/TruePersonality.png",
    projectUrl:
      "https://github.com/aryanhanda19/True_Personality_Project",
    tags: ["HTML", "JavaScript", "CSS", "UX Design"],
  },
  {
    title: "CampBuzz",
    description:
      "Led the concept and design of a campus collaboration platform. Built interactive wireframes, UI flows, and promotional demo video using Figma and Adobe tools.",
    imageUrl: "/project_images/Cambuzz.png",
    projectUrl:
      "https://github.com/aryanhanda19/scrum-and-agile-product-creation",
    tags: ["Product Design", "Figma", "UI/UX", "Team Leadership", "Premiere Pro"],
  },
  {
    title: "Syndicate 3D Plugin",
    description:
      "Custom WordPress plugin converting 2D images into 3D using Meshy AI and ImgBB APIs. Features clean admin UI, API handling, and responsive styling.",
    projectUrl: "https://github.com/aryanhanda19/2dImageTo3d",
    tags: ["WordPress", "PHP", "JavaScript", "Meshy AI", "Figma"],
  },
   {
    title: "Instagram Clone",
    description:
      "A Small Scale Instagram clone built with Kotlin in Android Studio. Features user authentication, post creation.",
    projectUrl: "https://github.com/aryanhanda19/InstagramClone",
    tags: ["Kotlin", "Android", "UI Design"],
  },
  {
    title: "Book Management Store",
    description:
      "Full .NET desktop app with MySQL backend for managing books, users, and lending operations. Includes admin panel and CRUD capabilities.",
    projectUrl: "https://github.com/aryanhanda19/Rental-Project",
    tags: ["C#", ".NET", "MySQL", "Desktop App"],
  },
  {
    title: "Mood Food App",
    description:
    "This Is a Full Stack Web Application built with React, Node.js, and MongoDB. It allows users to find recipes based on their mood and dietary preferences.",
    projectUrl: "https://github.com/aryanhanda19/Mood-Food",
    tags: ["C#", ".NET", "Forms", "UI Design"],
  },
  {
    title: "Student Management System",
    description:
      "ASP.NET Web Forms portal to manage student records, authentication, and dashboards. Backend powered by SQL Server and ADO.NET.",
    projectUrl: "https://github.com/aryanhanda19/Rental-Project",
    tags: ["ASP.NET", "C#", "SQL Server", "Web Forms", "ADO.NET"],
  },
  {
    title: "Online Quiz App",
    description:
      "C# WinForms desktop app with real-time question loading, scoring, and timer logic. Designed for speed, simplicity, and modular extension.",
    projectUrl: "https://github.com/aryanhanda19/Rental-Project",
    tags: ["C#", "WinForms", "OOP", "Desktop App"],
  },
  {
    title: "E-Commerce Platform",
    description:
      "Multi-channel e-commerce solution integrating payment gateways, inventory management, and user auth. Built with scalable backend-first architecture.",
    projectUrl: "https://github.com/aryanhanda19/Rental-Project",
    tags: ["Full Stack", "Node.js", "MongoDB", "Express", "Auth", "Stripe"],
  },
];

// Project card
const ProjectCard = ({ title, description, imageUrl, projectUrl, tags }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: 30 }}
    transition={{ duration: 0.4 }}
    className="project-card backdrop-blur-lg rounded-2xl overflow-hidden cursor-pointer flex flex-col"
  >
    <a href={projectUrl} target="_blank" rel="noopener noreferrer" className="block group">
      {/* Conditional Image Rendering */}
      {imageUrl && (
        <div className="w-full h-48 md:h-64 bg-dark/50 overflow-hidden">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover object-center transition-transform duration-300 ease-in-out group-hover:scale-105"
          />
        </div>
      )}
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold text-light mb-2">{title}</h3>
        <p className="text-light/70 text-sm mb-4 flex-grow">{description}</p>
        <div className="flex flex-wrap mb-4">
          {tags.map((tag, index) => (
            <span key={index} className="project-tag">{tag}</span>
          ))}
        </div>
        <div className="mt-auto pt-2 border-t border-white/10">
          <span className="text-sm text-accent hover:underline">
            View Project &rarr;
          </span>
        </div>
      </div>
    </a>
  </motion.div>
);

// Main component
const Projects = () => {
  const [showMore, setShowMore] = useState(false);
  const visibleProjects = showMore ? projectData : projectData.slice(0, 6);

  return (
    <section id="projects" className="relative py-32 px-6 md:px-20 bg-transparent">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-light text-glow-primary-refined"
        >
          Featured <span className="text-primary">Projects</span>
        </motion.h2>

        <motion.div
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
              },
            },
          }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10"
        >
          <AnimatePresence>
            {visibleProjects.map((project, index) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </AnimatePresence>
        </motion.div>
<div className="mt-10 text-center">
  <button
    onClick={() => setShowMore(!showMore)}
    className="saber-border-button text-sm font-medium relative px-6 py-2"
  >
    <svg className="absolute inset-0 w-full h-full" aria-hidden="true">
      <rect x="0" y="0" width="100%" height="100%" rx="16" ry="16"></rect>
    </svg>
    <span>{showMore ? "Show Less" : "Show More"}</span>
  </button>
</div>

      </div>
    </section>
  );
};

export default Projects;
