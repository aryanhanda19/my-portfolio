import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const ScrollIndicator = () => {
  return (
    <a
      href="#skills"
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 text-white opacity-80 hover:opacity-100 transition"
    >
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        className="flex items-center justify-center bg-white/10 hover:bg-white/20 backdrop-blur-lg w-10 h-10 rounded-full border border-white/10 shadow-md"
      >
        <ChevronDown size={20} strokeWidth={2} />
      </motion.div>
    </a>
  );
};

export default ScrollIndicator;
