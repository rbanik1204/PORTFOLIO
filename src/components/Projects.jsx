import React from "react";
import { FaGithub, FaExternalLinkAlt, FaCode, FaRobot, FaServer } from "react-icons/fa";

const projects = [
  {
    title: "Smart Waste Segregator",
    description: "An intelligent IoT system that uses computer vision and sensors to automatically segregate dry, wet, and metallic waste. Features real-time monitoring dashboard and mobile app integration.",
    tech: ["Arduino", "TensorFlow", "React", "IoT", "Python"],
    github: "https://github.com/rbanik1204/smart-waste-segregator",
    live: "",
    icon: <FaServer className="text-2xl text-blue-400" />,
    category: "IoT & AI"
  },
  {
    title: "AI Career Guidance Bot",
    description: "An intelligent chatbot powered by OpenAI that provides personalized career guidance to students. Integrates with educational databases and offers tailored recommendations.",
    tech: ["OpenAI API", "React", "Node.js", "MongoDB", "NLP"],
    github: "https://github.com/rbanik1204/ai-career-bot",
    live: "",
    icon: <FaRobot className="text-2xl text-purple-400" />,
    category: "AI/ML"
  },
  {
    title: "Personal Portfolio",
    description: "A modern, responsive portfolio website built with React and Three.js. Features 3D animations, smooth scrolling, and professional design showcasing my skills and projects.",
    tech: ["React", "Three.js", "Tailwind CSS", "Vite", "Framer Motion"],
    github: "https://github.com/rbanik1204/portfolio",
    live: "https://ratulbanik.vercel.app",
    icon: <FaCode className="text-2xl text-green-400" />,
    category: "Web Development"
  },
  {
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with user authentication, payment integration, admin dashboard, and responsive design. Built with modern web technologies.",
    tech: ["React", "Django", "PostgreSQL", "Stripe", "Docker"],
    github: "https://github.com/rbanik1204/ecommerce-platform",
    live: "",
    icon: <FaCode className="text-2xl text-yellow-400" />,
    category: "Full Stack"
  },
  {
    title: "Data Analysis Dashboard",
    description: "Interactive dashboard for analyzing business metrics and KPIs. Features real-time data visualization, custom charts, and export functionality.",
    tech: ["Python", "Pandas", "Plotly", "Streamlit", "SQL"],
    github: "https://github.com/rbanik1204/data-dashboard",
    live: "",
    icon: <FaRobot className="text-2xl text-cyan-400" />,
    category: "Data Science"
  },
  {
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates, team collaboration features, and progress tracking. Built for productivity and team efficiency.",
    tech: ["React", "Node.js", "Socket.io", "MongoDB", "JWT"],
    github: "https://github.com/rbanik1204/task-manager",
    live: "",
    icon: <FaCode className="text-2xl text-pink-400" />,
    category: "Web App"
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
