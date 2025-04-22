import { motion } from "framer-motion";

const words = [
  "Hardworking",
  "Creative",
  "Reliable",
  "Focused",
  "Versatile",
  "Detail-Oriented",
  "Innovative",
  "Problem Solver",
  "Team Player",
  "Passionate",
];

const WordTicker = () => {
  return (
    <div className="relative w-full overflow-hidden py-10 bg-dark z-20">
      {/* Fade masks */}
      <div className="absolute top-0 left-0 w-24 h-full bg-gradient-to-r from-dark via-dark/80 to-transparent z-10" />
      <div className="absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-dark via-dark/80 to-transparent z-10" />

      {/* Ticker track */}
      <motion.div
        className="flex whitespace-nowrap gap-[6rem] text-2xl sm:text-3xl font-bold tracking-widest text-white/10"
        animate={{ x: ["0%", "-100%"] }}
        transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
      >
        {[...words, ...words].map((word, i) => (
          <span key={i} className="uppercase text-light">
            {word}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export default WordTicker;
