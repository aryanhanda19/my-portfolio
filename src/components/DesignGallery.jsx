import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const images = [
  "1.png", "2.png", "3.png", "4.png",
  "5.png", "6.png", "7.png", "8.png",
  "9.png", "10.png", "11.png", "12.png",
  "13.png", "14.png", "15.png", "16.jpg"
];

export default function DesignGallery() {
  const scrollRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const scroll = () => {
      if (!isHovered && scrollRef.current) {
        scrollRef.current.scrollLeft += 1;
      }
    };
    const interval = setInterval(scroll, 16);
    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <section
      id="gallery"
      className="w-screen overflow-hidden bg-[#1E1E1E]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        ref={scrollRef}
        className="flex gap-0 px-0 overflow-x-auto no-scrollbar scroll-smooth w-full"
      >
        {images.map((img, index) => (
          <motion.div
            key={index}
            className="flex-shrink-0 overflow-hidden"
            whileHover={{ scale: 1.03 }}
          >
            <img
              src={`/project_images/${img}`}
              alt={`Design ${index + 1}`}
              className="h-[360px] w-auto object-contain -mx-[4px] select-none pointer-events-none"
              draggable={false}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
