import React from "react";
import { FaGithub, FaExternalLinkAlt, FaCode } from "react-icons/fa";

const projects = [
  {
    title: "Smart Waste Segregator",
    description: "An AI-powered system using sensors to segregate dry, wet, and metallic waste with live monitoring.",
    tech: ["Arduino", "TensorFlow", "React", "IoT"],
    github: "https://github.com/yourusername/waste-segregator",
    live: "",
  },
  {
    title: "Personal Portfolio",
    description: "A 3D animated, neon-themed portfolio built with React, Three.js and Tailwind CSS.",
    tech: ["React", "Three.js", "Tailwind"],
    github: "https://github.com/yourusername/portfolio",
    live: "https://ratulbanik.vercel.app",
  },
  {
    title: "AI Help Bot",
    description: "An AI chatbot that helps students with career guidance using OpenAI and Node.js backend.",
    tech: ["OpenAI", "React", "Node.js"],
    github: "https://github.com/yourusername/ai-help-bot",
    live: "",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen bg-black text-white px-6 py-20 relative overflow-hidden"
    >
      <h2 className="text-4xl font-bold text-neon-cyan text-center mb-10 z-10 relative">
        <FaCode className="inline-block mr-3 text-neon-pink animate-pulse" />
        Projects
      </h2>
      <div className="group w-full max-w-7xl mx-auto z-10 relative backdrop-blur-md bg-black/40 rounded-3xl border border-neon-cyan p-8 md:p-14 transition-all duration-300
        hover:shadow-[0_0_60px_10px_#00fff7,0_0_120px_30px_#00fff7]
        before:content-[''] before:absolute before:inset-0 before:rounded-3xl before:z-[-1] before:blur-2xl before:bg-neon-cyan/30 before:opacity-0 hover:before:opacity-100">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 z-10 relative">
          {projects.map((proj, index) => (
            <div
              key={index}
              className="bg-[#18181b] rounded-2xl p-8 shadow-lg hover:scale-105 transition-transform duration-300"
            >
              <h3 className="text-2xl font-semibold text-neon-green mb-2">
                {proj.title}
              </h3>
              <p className="text-sm text-gray-300 mb-4">{proj.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {proj.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-neon-green/20 text-neon-green text-xs px-2 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4 text-neon-cyan text-xl">
                {proj.github && (
                  <a
                    href={proj.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-neon-pink transition"
                  >
                    <FaGithub />
                  </a>
                )}
                {proj.live && (
                  <a
                    href={proj.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-neon-pink transition"
                  >
                    <FaExternalLinkAlt />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
