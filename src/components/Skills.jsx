import React from "react";
import { FaPython, FaJava, FaReact, FaHtml5, FaCss3Alt, FaGitAlt, FaJs, FaDatabase, FaCode, FaLaptopCode, FaServer } from "react-icons/fa";
import { SiCplusplus, SiDjango, SiTailwindcss, SiTensorflow, SiMongodb, SiDocker } from "react-icons/si";
import { BsStack } from "react-icons/bs";
import { GiGearHammer } from "react-icons/gi";

const skillGroups = [
  {
    label: "Programming Languages",
    icon: "💻",
    skills: [
      { icon: <FaCode />, name: "C", level: "Advanced" },
      { icon: <SiCplusplus />, name: "C++", level: "Advanced" },
      { icon: <FaPython />, name: "Python", level: "Expert" },
      { icon: <FaJava />, name: "Java", level: "Basic" },
      { icon: <FaJs />, name: "JavaScript", level: "Advanced" },
    ],
  },
  {
    label: "Web Development",
    icon: "🌐",
    skills: [
      { icon: <FaHtml5 />, name: "HTML", level: "Advanced" },
      { icon: <FaCss3Alt />, name: "CSS", level: "Advanced" },
      { icon: <FaJs />, name: "JavaScript", level: "Advanced" },
      { icon: <FaReact />, name: "React.js", level: "Beginner" },
      { icon: <SiDjango />, name: "Django", level: "Advanced" },
      { icon: <SiTailwindcss />, name: "Tailwind CSS", level: "Advanced" },
    ],
  },
  {
    label: "AI & Machine Learning",
    icon: "🤖",
    skills: [
      { icon: <FaPython />, name: "Data Analysis", level: "Advanced" },
      { icon: <FaPython />, name: "Data Science", level: "Advanced" },
      { icon: <FaDatabase />, name: "SQL", level: "Advanced" },
      { icon: <FaPython />, name: "AI/ML Algorithms", level: "Advanced" },
    ],
  },
  {
    label: "Tools & Frameworks",
    icon: "⚙️",
    skills: [
      { icon: <FaGitAlt />, name: "Git/GitHub", level: "Advanced" },
      { icon: <FaServer />, name: "Vite", level: "Advanced" },
      { icon: <GiGearHammer />, name: "OOP", level: "Advanced" },
      { icon: <FaCode />, name: "Problem Solving", level: "Advanced" },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white px-6 py-20 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(59,130,246,0.1),transparent_50%)]"></div>
      
      <div className="w-full max-w-7xl mx-auto z-10 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Technical Skills</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and proficiency levels across various technologies.
          </p>
        </div>
        
        <div className="space-y-16">
          {skillGroups.map((group, gidx) => (
            <div key={gidx} className="glass-card rounded-2xl p-8 lg:p-12">
              <div className="text-center mb-12">
                <div className="text-4xl mb-4">{group.icon}</div>
                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2">
                  {group.label}
                </h3>
                <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                {group.skills.map((skill, idx) => (
                  <div
                    key={idx}
                    className="group bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
                  >
                    <div className="flex flex-col items-center text-center">
                      <div className="w-16 h-16 mb-4 flex items-center justify-center text-3xl text-blue-400 group-hover:text-blue-300 transition-colors">
                        {skill.icon}
                      </div>
                      <h4 className="font-semibold text-white mb-2 text-sm lg:text-base">
                        {skill.name}
                      </h4>
                      <span className="text-xs text-gray-400 bg-white/10 px-2 py-1 rounded-full">
                        {skill.level}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        {/* Additional Skills Section */}
        <div className="mt-20 text-center">
          <div className="glass-card rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-6">Additional Competencies</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                "Problem Solving",
                "Data Structures",
                "Algorithms",
                "System Design",
                "API Development",
                "Responsive Design",
                "Performance Optimization",
                "Testing & Debugging"
              ].map((skill, idx) => (
                <div key={idx} className="bg-white/5 rounded-lg p-3 text-sm text-gray-300 hover:text-white transition-colors">
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
