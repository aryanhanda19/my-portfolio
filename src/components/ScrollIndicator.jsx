import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

const sections = [
  "skills",
  "design-gallery",
  "projects",
  "work",
  "education",
  "contact",
];

const ScrollIndicator = () => {
  const [atEnd, setAtEnd] = useState(false);

  // Detect if user is at (or very near) the last section
  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY;
      const vh = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;

      // How close to bottom? Adjust threshold if needed
      const threshold = 100;

      setAtEnd(docHeight - (scrollY + vh) < threshold);
    };

    window.addEventListener("scroll", onScroll);
    onScroll(); // run once on mount

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (e) => {
    e.preventDefault();

    if (atEnd) {
      // Scroll to top (hero)
      const hero = document.getElementById("hero");
      if (hero) {
        hero.scrollIntoView({ behavior: "smooth" });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    } else {
      const currentScroll = window.scrollY;

      // Get all section elements that exist on page
      const sectionElements = sections
        .map((id) => document.getElementById(id))
        .filter(Boolean);

      // Find the next section after current scroll position
      const nextSection = sectionElements.find(
        (section) => section.offsetTop > currentScroll + 10 // offset to avoid glitch
      );

      if (nextSection) {
        nextSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <a
      href="#"
      onClick={handleClick}
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 text-white opacity-80 hover:opacity-100 transition"
      aria-label={atEnd ? "Scroll to top" : "Scroll to next section"}
    >
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        className="flex items-center justify-center bg-white/10 hover:bg-white/20 backdrop-blur-lg w-10 h-10 rounded-full border border-white/10 shadow-md"
      >
        {atEnd ? (
          <ChevronUp size={20} strokeWidth={2} />
        ) : (
          <ChevronDown size={20} strokeWidth={2} />
        )}
      </motion.div>
    </a>
  );
};

export default ScrollIndicator;
