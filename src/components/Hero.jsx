import React, { useRef } from "react";
import profileImg from "../assets/profile.jpg";
import { TypeAnimation } from "react-type-animation";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { FaLinkedin, FaGithub, FaYoutube, FaInstagram } from "react-icons/fa";

const Hero = () => {
  const cardRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const glowX = useTransform(mouseX, (val) => `${val}px`);
  const glowY = useTransform(mouseY, (val) => `${val}px`);

  const handleMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    mouseX.set(x);
    mouseY.set(y);
  };

  return (
    <section
      id="hero"
      className="w-full min-h-screen bg-gradient-to-b from-[#111111] via-[#1E1E1E] to-[#0d0d0d] text-white relative overflow-hidden flex items-center justify-center px-6 py-24"
    >
      {/* Ambient Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1E1E1E] via-transparent to-black opacity-40 -z-10" />

      {/* Soft Blobs */}
      <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-primary blur-[140px] opacity-30 rounded-full z-0" />
      <div className="absolute bottom-[-100px] right-[-100px] w-[400px] h-[400px] bg-accent blur-[140px] opacity-20 rounded-full z-0" />

      {/* Card */}
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="w-full max-w-6xl flex flex-col md:flex-row items-center justify-between gap-14 p-10 rounded-[2rem] relative overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_0_40px_#ffffff0b] z-10"
      >
        {/* Cursor Glow */}
        <motion.div
          className="absolute pointer-events-none w-64 h-64 bg-white/5 rounded-full blur-3xl z-0"
          style={{
            top: glowY,
            left: glowX,
            translateX: "-50%",
            translateY: "-50%",
          }}
        />

        {/* Image + Badge */}
        <motion.div
          className="flex-1 flex justify-center md:justify-start z-10 relative"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          whileHover={{ scale: 1.03 }}
        >
          <motion.div className="relative">
            <motion.img
              src={profileImg}
              alt="Aryan Handa"
              className="w-[280px] sm:w-[320px] md:w-[400px] object-cover grayscale hover:grayscale-0 hover:brightness-110 rounded-[2rem] shadow-2xl hover:shadow-[0_0_40px_#ffffff30] transition-all duration-500 ease-in-out"
              transition={{ type: "spring", stiffness: 150, damping: 15 }}
            />
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 px-3 py-1 rounded-full flex items-center gap-2 backdrop-blur-sm border border-white/10">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
              </span>
              <span className="text-xs text-white/90 drop-shadow-[0_0_6px_rgba(255,255,255,0.6)]">
                Available for work
              </span>
            </div>
          </motion.div>
        </motion.div>

        {/* Text */}
        <motion.div
          className="flex-1 text-light text-center md:text-left space-y-6 z-10"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight">
            Hey, I’M <span className="text-primary">Aryan Handa</span>
          </h1>

          <div className="min-h-[44px] sm:min-h-[52px]">
            <TypeAnimation
              sequence={[
                "Software Developer",
                2000,
                "UI/UX Designer",
                2000,
                "Video Editor",
                2000,
                "Graphics Designer",
                2000,
              ]}
              wrapper="span"
              speed={60}
              repeat={Infinity}
              className="block mt-2 text-2xl sm:text-3xl font-medium text-accent"
              cursor={true}
            />
          </div>

          <p className="text-base sm:text-lg italic text-white/60 leading-relaxed mt-2">
            "You'd either catch me editing videos <br />
            or torturing someone with my thousands of inner ideas."
          </p>

          {/* Socials */}
          <div className="flex justify-center md:justify-start items-center gap-4 pt-6 text-white">
            <a
              href="https://www.linkedin.com/in/aryanhanda22/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition hover:scale-110"
            >
              <FaLinkedin size={22} />
            </a>
            <div className="h-5 w-px bg-white/10" />
            <a
              href="https://github.com/aryanhanda19"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition hover:scale-110"
            >
              <FaGithub size={22} />
            </a>
            <div className="h-5 w-px bg-white/10" />
            <a
              href="https://www.youtube.com/@filmyaddicts19"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition hover:scale-110"
            >
              <FaYoutube size={22} />
            </a>
            <div className="h-5 w-px bg-white/10" />
            <a
              href="https://www.instagram.com/the_filmy.addict/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition hover:scale-110"
            >
              <FaInstagram size={22} />
            </a>
          </div>

          {/* Resume Button */}
          <motion.a
            href="/Aryan_Handa_Resume.pdf"
            download
            whileHover={{ scale: 1.05 }}
            className="group relative inline-flex items-center justify-center px-6 py-3 mt-6 border border-white/20 bg-white/5 backdrop-blur-md rounded-full shadow-[0_0_30px_rgba(255,255,255,0.07)] hover:shadow-[0_0_50px_rgba(255,255,255,0.15)] transition-all duration-300 overflow-hidden"
          >
            <span className="absolute inset-0 z-0 before:absolute before:inset-0 before:rounded-full before:border-t before:border-primary before:animate-glowLine" />
            <span className="relative z-10 text-sm sm:text-base font-semibold tracking-wide text-white group-hover:text-primary transition">
              Download Resume
            </span>
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
