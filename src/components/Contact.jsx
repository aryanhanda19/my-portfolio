"use client";

import { FaGithub, FaLinkedin, FaDiscord, FaEnvelope, FaInstagram } from "react-icons/fa";

const socials = [
  {
    name: "Discord",
    url: "https://discord.com/users/253564481475444738",
    icon: <FaDiscord />,
    label: "Aryan#6622",
  },
  {
    name: "GitHub",
    url: "https://github.com/aryanhanda19",
    icon: <FaGithub />,
    label: "aryanhanda19",
  },
   {
    name: "Instagram",
    url: "https://www.instagram.com/aryan_.handa/",
    icon: <FaInstagram />,
    label: "aryan_.handa",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/aryanhanda22/",
    icon: <FaLinkedin />,
    label: "aryanhanda22",
  },

];

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative isolate py-40 px-6 md:px-20 bg-gradient-to-b from-[#111111] via-[#1E1E1E] to-[#0d0d0d] text-white scroll-mt-28 overflow-hidden"
    >
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-20 text-glow-primary-refined">
        <span className="text-primary"></span>Contact Me
      </h2>

      <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-center">
        {socials.map(({ name, url, icon, label }) => (
          <a
            key={name}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center space-y-3 text-gray-300 hover:text-[#145C9E] transition-colors duration-300"
            aria-label={`Link to ${name}`}
          >
            <div className="text-5xl">{icon}</div>
            <p className="text-sm font-medium">{label}</p>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Contact;
