// src/components/Navbar.jsx
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

const navItems = [
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Work", href: "#work" },
  { name: "Education", href: "#education" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const borderRadius = 16;

  return (
    <div className="w-full fixed top-0 left-0 z-[999] flex justify-center p-4">
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-4xl px-4 py-3 mx-auto bg-neutral-900/60 backdrop-blur-lg rounded-3xl border border-white/10 shadow-md"
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
  href="#hero"
  className="text-gray-100 font-semibold text-2xl hover:text-primary transition-colors duration-200"
>
  Aryan Handa
</a>


          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6 text-lg font-medium text-gray-300">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="hover:text-white transition-colors duration-200 hover:text-glow px-1"
              >
                {item.name}
              </a>
            ))}

            {/* LET’S CONNECT Saber Border Button */}
            <a
              href="#contact"
              className="saber-border-button ml-6 text-lg font-medium"
            >
              <svg className="absolute inset-0 w-full h-full" aria-hidden="true">
                <rect
                  x="0"
                  y="0"
                  width="100%"
                  height="100%"
                  rx={borderRadius}
                  ry={borderRadius}
                ></rect>
              </svg>
              <span>LET’S CONNECT</span>
            </a>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-1 text-gray-300 hover:text-white hover:text-glow"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-4 bg-neutral-900/80 backdrop-blur-lg border border-white/10 rounded-2xl shadow-sm md:hidden"
          >
            <div className="flex flex-col gap-4 p-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-gray-300 hover:text-white text-center py-2 rounded-2xl text-lg font-medium transition-colors hover:text-glow"
                >
                  {item.name}
                </a>
              ))}

              {/* Mobile LET’S CONNECT Saber Button */}
              <a
  href="#contact"
  className="saber-border-button ml-6 text-lg font-medium"
>
  <svg className="absolute inset-0 w-full h-full" aria-hidden="true">
    <rect
      x="0"
      y="0"
      width="100%"
      height="100%"
      rx="16"
      ry="16"
    ></rect>
  </svg>
  <span>LET’S CONNECT</span>
</a>

            </div>
          </motion.div>
        )}
      </motion.nav>
    </div>
  );
};

export default Navbar;
