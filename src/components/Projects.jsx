import React from "react";
import { FaGithub, FaExternalLinkAlt, FaCode, FaRobot, FaServer } from "react-icons/fa";

const projects = [
  {
    title: "RC Car with IoT Features",
    description: "Built a custom RC car with ESP8266 microcontroller, motor driver, and ultrasonic sensor. Features WAN, LAN, and IR control capabilities for remote operation.",
    tech: ["ESP8266", "IoT", "Arduino", "C++", "Hardware"],
    github: "https://github.com/rbanik1204/rc-car-iot",
    live: "",
    icon: <FaServer className="text-2xl text-blue-400" />,
    category: "IoT & Hardware"
  },
  {
    title: "AI-Based Help Bot for MOSDAC Portal",
    description: "Developed an intelligent help bot entirely in Python to assist users in navigating and accessing portal data efficiently. Built for MOSDAC portal assistance.",
    tech: ["Python", "AI/ML", "Data Analysis", "NLP", "Web Scraping"],
    github: "https://github.com/rbanik1204/mosdac-help-bot",
    live: "",
    icon: <FaRobot className="text-2xl text-purple-400" />,
    category: "AI/ML"
  },
  {
    title: "Peer-to-Peer File Sharing System",
    description: "Designed and implemented a P2P file sharing system that enables direct file sharing over large distances without cloud storage. Built for hackathon project.",
    tech: ["Python", "Networking", "Socket Programming", "P2P", "File Transfer"],
    github: "https://github.com/rbanik1204/p2p-file-sharing",
    live: "",
    icon: <FaCode className="text-2xl text-green-400" />,
    category: "Networking"
  },
  {
    title: "Web Development Portfolio",
    description: "Created responsive navigation bars, styled layouts with advanced CSS effects, and built pages using HTML/CSS/JavaScript. Showcases modern web development skills.",
    tech: ["HTML", "CSS", "JavaScript", "Responsive Design", "Advanced CSS"],
    github: "https://github.com/rbanik1204/web-portfolio",
    live: "",
    icon: <FaCode className="text-2xl text-yellow-400" />,
    category: "Web Development"
  },
  {
    title: "Technical Presentations & Reports",
    description: "Prepared and delivered multiple technical presentations on AI, Data Structures & Algorithms, Theory of Computation, Environmental Science, and Software Engineering.",
    tech: ["Technical Writing", "Presentations", "Research", "Documentation", "Analysis"],
    github: "",
    live: "",
    icon: <FaRobot className="text-2xl text-cyan-400" />,
    category: "Academic"
  },
  {
    title: "Competitive Programming",
    description: "Active participation in competitive programming with strong problem-solving skills. Focused on algorithms, data structures, and efficient coding practices.",
    tech: ["C++", "Algorithms", "Data Structures", "Problem Solving", "Competitive Programming"],
    github: "https://github.com/rbanik1204/competitive-programming",
    live: "",
    icon: <FaCode className="text-2xl text-pink-400" />,
    category: "Algorithms"
  }
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white px-6 py-20 relative overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(59,130,246,0.1),transparent_50%)]"></div>
      
      <div className="w-full max-w-7xl mx-auto z-10 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Featured Projects</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills in web development, AI/ML, and problem-solving.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-[1.02]"
            >
              {/* Project Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  {project.icon}
                  <span className="text-xs font-medium text-gray-400 bg-white/10 px-2 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>
              
              {/* Project Content */}
              <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors">
                {project.title}
              </h3>
              
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                {project.description}
              </p>
              
              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-blue-500/20 text-blue-300 text-xs px-3 py-1 rounded-full border border-blue-500/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              {/* Project Links */}
              <div className="flex items-center justify-between">
                <div className="flex gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      <FaGithub className="text-lg" />
                      Code
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      <FaExternalLinkAlt className="text-lg" />
                      Live Demo
                    </a>
                  )}
                </div>
                
                {!project.live && (
                  <span className="text-xs text-gray-500 bg-white/5 px-2 py-1 rounded-full">
                    Demo Coming Soon
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
        
        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 shadow-xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold text-white mb-4">Interested in Working Together?</h3>
            <p className="text-gray-300 mb-6">
              I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology and innovation.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-3 px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Let's Connect
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
