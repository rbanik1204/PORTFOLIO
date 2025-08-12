import React from "react";
// Remove WhatsApp image import
// import profileImg from "../assets/WhatsApp Image 2025-07-21 at 17.38.43_df50f27d.jpg";

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
          {/* Left: Profile & Highlights */}
          <div className="lg:col-span-1 space-y-8">
            {/* Professional profile image placeholder */}
            <div className="flex justify-center">
              <div className="relative group">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-xl opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
                <div className="relative w-64 h-64 rounded-2xl border-2 border-gray-300/30 shadow-2xl flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden backdrop-blur-sm">
                  <div className="w-full h-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white text-4xl font-bold">
                    RB
                  </div>
                  <div className="absolute inset-0 bg-black/20"></div>
                </div>
              </div>
            </div>
            
            {/* Professional highlights */}
            <div className="space-y-4">
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  <span className="text-green-400 font-semibold text-lg">B.Tech CSE</span>
                </div>
                <p className="text-gray-300 text-sm mt-1">YGPA: 8.94</p>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                  <span className="text-blue-400 font-semibold text-lg">Full Stack Developer</span>
                </div>
                <p className="text-gray-300 text-sm mt-1">Web & Software Development</p>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
                  <span className="text-purple-400 font-semibold text-lg">AI/ML Engineer</span>
                </div>
                <p className="text-gray-300 text-sm mt-1">Data Analysis & Python</p>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <span className="text-yellow-400 font-semibold text-lg">Problem Solver</span>
                </div>
                <p className="text-gray-300 text-sm mt-1">Competitive Programming</p>
              </div>
            </div>
          </div>
          
          {/* Right: About Text */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 shadow-xl">
              <h3 className="text-2xl font-semibold text-white mb-4">Professional Background</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                I'm <span className="text-green-400 font-semibold">Ratul Banik</span>, a passionate Computer Science student currently pursuing my <span className="text-blue-400 font-semibold">B.Tech in Computer Science and Engineering</span> with a strong academic record (YGPA: 8.94). I'm actively seeking opportunities as a <span className="text-purple-400 font-semibold">Full Stack Developer, Software Developer, or AI/ML Intern</span> where I can contribute to meaningful projects.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Technical Expertise</h4>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li>• Frontend: React.js, HTML5, CSS3, JavaScript</li>
                    <li>• Backend: Django, Node.js, Python</li>
                    <li>• Languages: Python, Java, C++, C</li>
                    <li>• AI/ML: TensorFlow, Data Analysis, SQL</li>
                    <li>• Tools: Git, GitHub, Docker</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Key Projects</h4>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li>• AI Help Bot for MOSDAC Portal</li>
                    <li>• Smart Waste Segregation System</li>
                    <li>• Custom RC Car with ESP8266</li>
                    <li>• 200+ Hours of Competitive Programming</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 shadow-xl">
              <h3 className="text-2xl font-semibold text-white mb-4">What Drives Me</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                I thrive on <span className="text-green-400 font-semibold">solving real-world problems through innovative technology</span>. My passion lies in exploring intelligent systems and creating solutions that make a difference. Whether it's building AI-powered applications, developing IoT solutions, or crafting elegant web experiences, I approach each challenge with creativity and technical rigor.
              </p>
              <p className="text-gray-300 leading-relaxed">
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
