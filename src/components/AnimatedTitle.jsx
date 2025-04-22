// src/components/AnimatedTitle.jsx
import React from "react";

const AnimatedTitle = ({ text, className = "" }) => {
  return (
    <h3
      className={`text-xl md:text-2xl font-semibold text-center mb-8 select-none transition-all duration-300 ease-in-out transform hover:-translate-y-1 group ${className}`}
    >
      <span className="group-hover:drop-shadow-colored transition-all duration-300">
        {text}
      </span>
    </h3>
  );
};

export default AnimatedTitle;
