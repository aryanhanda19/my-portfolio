import { motion } from "framer-motion";
import CosmicBackground from "./CosmicBackground"; // Adjust path if needed

const experiences = [
  {
    title: "Full Stack Developer Intern",
    company: "Syndicate",
    date: "Oct 2023",
    points: [
      "Developed a WordPress plugin converting 2D images into 3D models using Meshy AI and ImgBB APIs.",
      "Integrated RESTful APIs and enhanced UI with Figma-driven design and advanced CSS techniques.",
      "Collaborated effectively with remote teams to optimize digital assets and improve performance."
    ]
  },
  {
    title: "Video Editor",
    company: "Goalcast",
    date: "Jun 2023 – Jul 2023",
    points: [
      "Produced compelling video content aligned with brand storytelling strategies.",
      "Partnered with content creators to develop engaging storyboards and narratives.",
      "Optimized video assets for diverse digital platforms to maximize audience reach."
    ]
  },
  {
    title: "E-commerce Manager",
    company: "Enn Pee Combines",
    date: "2020 – 2022",
    points: [
      "Managed Amazon and Flipkart store operations, raising customer rating to 98%.",
      "Reduced product return rate by 20% through improved customer communication and support.",
      "Led a team of 5, streamlining logistics and enhancing supply chain efficiency."
    ]
  },
  {
    title: "Pack Out Associate",
    company: "The Home Depot",
    date: "Feb 2023 – Present",
    points: [
      "Maintained tool documentation and managed internal request tracking systems.",
      "Collaborated cross-functionally to improve operational workflows and team productivity."
    ]
  }
];

const Experience = () => {
  return (
    <section
      id="work"
      className="relative isolate py-12 px-6 md:px-20 bg-dark/80 text-white scroll-mt-28 overflow-hidden"
    >
      <CosmicBackground />
      <div className="relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-5xl font-bold text-center mb-20 text-glow-primary-refined"
        >
          <span className="text-primary">Work</span> Experience
        </motion.h2>

        <div className="grid gap-8 md:grid-cols-2 max-w-7xl mx-auto">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05, y: -12 }}
              transition={{ type: "spring", stiffness: 250, damping: 20 }}
              className="rounded-2xl p-6 border border-transparent bg-white/5 backdrop-blur-xl shadow-md hover:border-[#145C9E] hover:shadow-[0_0_20px_#145C9E] transition-all duration-200"
            >
              <h3 className="text-xl font-semibold text-white mb-1">{exp.title}</h3>
              <p className="text-sm text-gray-300 mb-4">
                {exp.company} — <span className="italic">{exp.date}</span>
              </p>
              <ul className="text-sm text-gray-200 space-y-3">
                {exp.points.map((point, i) => (
                  <li key={i} className="flex items-start">
                    <span className="inline-block mt-[6px] mr-3 w-2 h-2 rounded-full bg-[#145C9E] animate-ping flex-shrink-0" />
                    <span className="leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
