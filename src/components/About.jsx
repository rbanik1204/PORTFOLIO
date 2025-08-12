import React from "react";

const About = () => {
  return (
    <section id="about" className="min-h-[90vh] flex flex-col items-center justify-center bg-gradient-to-b from-black via-gray-900 to-black text-white px-4 pt-20 pb-24 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]"></div>
      
      <div className="w-full max-w-6xl mx-auto z-10 relative">
        <h2 className="text-4xl lg:text-5xl font-bold mb-16 text-center text-white">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">About Me</span>
        </h2>
        
        <div className="grid lg:grid-cols-3 gap-12 items-start">
          {/* Left: Professional Highlights */}
          <div className="lg:col-span-1 space-y-6">
            {/* Professional highlights */}
            <div className="space-y-4">
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  <span className="text-green-400 font-semibold text-lg">B.Tech CSE</span>
                </div>
                <p className="text-gray-300 text-sm mt-1">MAKAUT • YGPA: 8.94 • 5th Semester</p>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                  <span className="text-blue-400 font-semibold text-lg">MERN Stack Developer</span>
                </div>
                <p className="text-gray-300 text-sm mt-1">Web & Software Development</p>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
                  <span className="text-purple-400 font-semibold text-lg">Competitive Programmer</span>
                </div>
                <p className="text-gray-300 text-sm mt-1">Problem Solving & Algorithms</p>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <span className="text-yellow-400 font-semibold text-lg">AI/ML Enthusiast</span>
                </div>
                <p className="text-gray-300 text-sm mt-1">Data Analysis & Python</p>
              </div>
            </div>
          </div>
          
          {/* Right: About Text */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 lg:p-8 border border-white/10 shadow-xl">
              <h3 className="text-xl lg:text-2xl font-semibold text-white mb-4">Professional Background</h3>
              <p className="text-gray-300 leading-relaxed mb-6 text-sm lg:text-base">
                I'm <span className="text-green-400 font-semibold">Ratul Banik</span>, a passionate Computer Science student currently pursuing my <span className="text-blue-400 font-semibold">B.Tech in Computer Science and Engineering at MAKAUT</span> with a strong academic record (YGPA: 8.94, 5th Semester). I'm actively seeking opportunities as a <span className="text-purple-400 font-semibold">MERN Stack Developer, Software Developer, or AI/ML Intern</span> where I can contribute to meaningful projects.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Technical Expertise</h4>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li>• Languages: Python, C, C++, Java, JavaScript, HTML, CSS</li>
                    <li>• Frameworks: Django, React.js, Vite, Tailwind CSS</li>
                    <li>• AI/ML: Data Analysis, Data Science, SQL</li>
                    <li>• Tools: Git/GitHub</li>
                    <li>• Subjects: Software Engineering, Compiler Design, OS, OOP</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Key Projects</h4>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li>• RC Car with IoT Features (ESP8266)</li>
                    <li>• AI-Based Help Bot for MOSDAC Portal</li>
                    <li>• Peer-to-Peer File Sharing System</li>
                    <li>• Web Development with Advanced CSS</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 lg:p-8 border border-white/10 shadow-xl">
              <h3 className="text-xl lg:text-2xl font-semibold text-white mb-4">What Drives Me</h3>
              <p className="text-gray-300 leading-relaxed mb-4 text-sm lg:text-base">
                I thrive on <span className="text-green-400 font-semibold">solving real-world problems through innovative technology</span>. My passion lies in exploring intelligent systems and creating solutions that make a difference. Whether it's building AI-powered applications, developing IoT solutions, or crafting elegant web experiences, I approach each challenge with creativity and technical rigor.
              </p>
              <p className="text-gray-300 leading-relaxed text-sm lg:text-base">
                I believe in <span className="text-blue-400 font-semibold">continuous learning and collaboration</span>. My experience in hackathons, competitive programming, and hands-on projects has taught me the value of deep work, attention to detail, and the importance of user-centered design. I'm always excited to learn new technologies and contribute to innovative projects.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
