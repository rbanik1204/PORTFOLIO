import React from "react";
import profileImg from "../assets/WhatsApp Image 2025-07-21 at 17.38.43_df50f27d.jpg";

const About = () => {
  return (
    <section id="about" className="min-h-[90vh] flex flex-col items-center justify-center bg-black text-white px-2 pt-0 pb-24 relative overflow-hidden">
      {/* Subtle blurred neon glow at the top for seamless transition */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120vw] h-40 bg-gradient-to-b from-[#0a0a0a] via-black/90 to-transparent blur-2xl opacity-80 z-0" />
      <h2 className="text-5xl font-extrabold mb-14 text-neon-cyan z-10 drop-shadow-lg mt-14">About Me</h2>
      <div className="group w-full max-w-7xl flex flex-col md:flex-row items-center md:items-start gap-20 p-16 z-10 relative backdrop-blur-md bg-black/40 rounded-3xl border border-neon-cyan transition-all duration-300
        hover:shadow-[0_0_60px_10px_#00fff7,0_0_120px_30px_#00fff7] 
        before:content-[''] before:absolute before:inset-0 before:rounded-3xl before:z-[-1] before:blur-2xl before:bg-neon-cyan/30 before:opacity-0 hover:before:opacity-100">
        {/* Left: Profile Image & Highlights */}
        <div className="flex flex-col items-center md:items-start md:w-1/3 w-full">
          <div className="mb-10 flex justify-center w-full">
            <img
              src={profileImg}
              alt="Profile"
              className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-[2.5rem] border-8 border-neon-pink shadow-[0_0_80px_30px_#ff3131] bg-black"
            />
          </div>
          <div className="space-y-6 w-full">
            <div className="bg-black bg-opacity-90 rounded-2xl p-5 border-l-8 border-neon-green text-neon-green font-bold text-center md:text-left text-xl md:text-2xl shadow-md">
              B.Tech CSE (YGPA: 8.94)
            </div>
            <div className="bg-black bg-opacity-90 rounded-2xl p-5 border-l-8 border-neon-cyan text-neon-cyan font-bold text-center md:text-left text-xl md:text-2xl shadow-md">
              Web & Software Developer
            </div>
            <div className="bg-black bg-opacity-90 rounded-2xl p-5 border-l-8 border-neon-pink text-neon-pink font-bold text-center md:text-left text-xl md:text-2xl shadow-md">
              AI/ML | Data Analysis | Python
            </div>
            <div className="bg-black bg-opacity-90 rounded-2xl p-5 border-l-8 border-neon-yellow text-neon-yellow font-bold text-center md:text-left text-xl md:text-2xl shadow-md">
              Competitive Programmer
            </div>
        </div>
        </div>
        {/* Right: About Text */}
        <div className="md:w-2/3 w-full text-2xl md:text-3xl text-gray-100 flex flex-col justify-center leading-relaxed">
          <p className="mb-8">
            <span className="font-bold text-neon-green">Hi, I'm Ratul Banik</span>, currently pursuing a <span className="text-neon-cyan">B.Tech in Computer Science and Engineering</span> (YGPA: 8.94). I thrive on building real-world projects and am actively seeking opportunities as a <span className="text-neon-pink">Web Developer, Software Developer, or Full Stack Intern</span>.
          </p>
          <p className="mb-8">
            <span className="font-bold text-neon-green">Technical Skills:</span> Web Development (HTML, CSS, JavaScript, React.js, Django), Programming Languages (Python, C, Java, C++), AI & Machine Learning, Data Analysis & SQL, and Version Control with Git & GitHub.
          </p>
          <p className="mb-8">
            <span className="font-bold text-neon-green">Passion:</span> I love solving real-world problems through code and exploring how intelligent systems work. Whether it's building an AI chatbot, a peer-to-peer file sharing system, or hardware projects like an RC car with sensors, I enjoy creating from scratch and pushing my boundaries.
          </p>
          <p className="mb-8">
            <span className="font-bold text-neon-green">Achievements:</span> Developed an AI Help Bot for the MOSDAC portal, built a custom RC Car with ESP8266 and sensors, participated in multiple hackathons, and spent 200+ hours solving coding problems to sharpen my logic and programming skills.
          </p>
          <p>
            <span className="font-bold text-neon-green">Unique Qualities:</span> I’m curious, self-driven, and always eager to learn. I focus on deep work, avoid distractions, and love combining hardware and software in innovative ways. Collaboration and continuous feedback are at the heart of my growth mindset.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
