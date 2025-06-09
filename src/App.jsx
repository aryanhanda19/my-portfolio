// src/App.jsx
import React from "react";
import FullPageParticles from "./components/FullPageParticles";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WordTicker from "./components/WordTicker";
import ScrollIndicator from "./components/ScrollIndicator";
import SafeMount from "./components/SafeMount";
import Skills from "./components/Skills";
import DesignGallery from "./components/DesignGallery"; // ✅ already imported
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Education from "./components/Education"; 
import Contact from "./components/Contact";

// Placeholder component (still used for other sections)
const Placeholder = ({ id, title }) => (
  <section
    id={id}
    className="min-h-screen flex items-center justify-center text-3xl font-bold text-primary"
  >
    {title} Section (Coming Soon)
  </section>
);

function App() {
  return (
    <div className="relative">
      {/* Global background */}
      <FullPageParticles />

      {/* Content sections */}
      <div className="relative z-10">
        <SafeMount delay={10}>
          <Navbar />
        </SafeMount>

        <SafeMount delay={20}>
          <Hero />
        </SafeMount>

        <SafeMount delay={30}>
          <WordTicker />
        </SafeMount>

        <SafeMount delay={40}>
          <Skills />
        </SafeMount>

        {/* ✅ New Design Gallery section added here */}
        <SafeMount delay={45}>
          <DesignGallery />
        </SafeMount>

        <SafeMount delay={50}>
          <Projects />
        </SafeMount>
        <SafeMount delay={60}>
           <Experience />
        </SafeMount>
        <SafeMount delay={70}>
          <Education />
        </SafeMount>
        <SafeMount delay={80}>
          <Contact />
        </SafeMount>
      </div>

      {/* Scroll indicator */}
      <SafeMount delay={200}>
        <ScrollIndicator />
      </SafeMount>
    </div>
  );
}

export default App;
