import { motion } from "framer-motion";
import CosmicBackground from "./CosmicBackground"; // Adjust path if needed

const education = [
  {
    degree: "AEC – Information Technology and Programmer Analyst",
    year: "2023 – Present",
    school: "LaSalle College, Montreal, QC"
  },
  {
    degree: "Bachelor’s in Computer Applications",
    year: "2020 – 2022",
    school: "Panjab University, Punjab, India"
  },
  {
    degree: "High School – Non-Medical",
    year: "2018 – 2020",
    school: "Green Land Convent School, Punjab, India"
  }
];

const Education = () => {
  return (
    <section
      id="education"
      className="relative isolate py-12 px-6 md:px-20 bg-dark/80 text-white scroll-mt-28 overflow-hidden"
    >
      <CosmicBackground />
      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-5xl font-bold text-center mb-20 text-glow-primary-refined"
        >
          <span className="text-primary">Education</span>
        </motion.h2>

        <div className="space-y-10">
          {education.map((edu, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 150, damping: 20 }}
              className="bg-white/5 backdrop-blur-xl p-6 rounded-2xl shadow-md border border-transparent hover:border-[#145C9E] hover:shadow-[0_0_20px_#145C9E] transition-all duration-200"
            >
              <h3 className="text-xl font-semibold text-white mb-1">{edu.degree}</h3>
              <p className="text-sm text-gray-300 mb-1 italic">{edu.year}</p>
              <p className="text-sm text-gray-200">{edu.school}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
